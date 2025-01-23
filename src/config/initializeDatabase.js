import { index } from '../models/index.js';
import User from '../models/user.model.js';
import Bootcamp from '../models/bootcamp.model.js';
import db_bootcamp from './db.Config.js';
import bcrypt from 'bcryptjs';
import { users, bootcamps, userBootcamps } from './DataBD.js';

const createBootcamp = async (bootcamp) => {
  const { title, cue, description } = bootcamp;
  const transaccion = await db_bootcamp.transaction();
  try {
    const newBootcamp = await Bootcamp.create({
      title: title,
      cue: cue,
      description: description
    }, { transaction: transaccion });
    await transaccion.commit();
    return newBootcamp;
  } catch (error) {
    console.error(error.stack);
    await transaccion.rollback();
  }
};

const addUser = async (userBootcamp) => {
  const { idUser, idBootcamp } = userBootcamp;
  const transaction = await db_bootcamp.transaction({ logging: false });
  try {
    const usuario = await User.findByPk(idUser, { transaction, logging: false });
    const bootcamp = await Bootcamp.findByPk(idBootcamp, { transaction, logging: false });
    if (!usuario || !bootcamp) {
      throw new Error('Usuario o Bootcamp no encontrado');
    }
    await usuario.addBootcamp(bootcamp, { transaction, logging: false });
    await transaction.commit();
    console.log(`*********************************`);
    console.log(`Agregado el usuario id=${idUser} al bootcamp con id=${idBootcamp}.`);
    console.log(`*********************************`);
  } catch (error) {
    await transaction.rollback();
    console.error(`*********************************`);
    console.error('Error al agregar usuario al bootcamp:', error.message);
    console.error(`*********************************`);
  }
};

const createUser = async (user) => {
  const transaction = await db_bootcamp.transaction({ logging: false });
  try {
    const newUser = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: await bcrypt.hash(user.password, 10)
    }, { transaction });
    await transaction.commit();
    return newUser;
  } catch (error) {
    console.error(error.stack);
    await transaction.rollback();
  }
};

export const initializeDatabase = async () => {
  try {
    await index();

    // Crear usuarios
    const createdUsers = [];
    for (const user of users) {
      const newUser = await createUser(user);
      createdUsers.push(newUser);
    }
    console.log("Usuarios creados:");
    console.log(JSON.stringify(createdUsers, null, 2));

    // Crear bootcamps
    const createdBootcamps = [];
    for (const bootcamp of bootcamps) {
      const newBootcamp = await createBootcamp(bootcamp);
      createdBootcamps.push(newBootcamp);
    }
    console.log("Bootcamps creados:");
    console.log(JSON.stringify(createdBootcamps, null, 2));

    // Asignar usuarios a bootcamps
    for (const userBootcamp of userBootcamps) {
      await addUser(userBootcamp);
    }
    console.log("Usuarios asignados a bootcamps.");
  } catch (error) {
    console.error("Error inicializando la base de datos:", error);
  }
};

initializeDatabase();
