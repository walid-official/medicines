import { IMedicine, MedicineModel } from "./medicine.model";

interface PaginationOptions {
  page?: number;
  limit?: number;
  search?: string;
}

export const createMedicine = async (data: Partial<IMedicine>) => {
  const medicine = new MedicineModel(data);
  return medicine.save();
};

// export const getMedicines = async (options: PaginationOptions) => {
//   const { page = 1, limit = 10, search = "" } = options;

//   const query = search
//     ? {
//         $or: [
//           { name: { $regex: search, $options: "i" } },
//           { genericName: { $regex: search, $options: "i" } },
//           { manufacturer: { $regex: search, $options: "i" } },
//         ],
//       }
//     : {};

//   const medicines = await MedicineModel.find(query)
//     .skip((page - 1) * limit)
//     .limit(limit);

//   const total = await MedicineModel.countDocuments(query);

//   return { medicines, total, page, limit };
// };

// export const getMedicines = async () => {
//   const medicines = await MedicineModel.find();
//   return medicines;
// };

// export const getMedicines = async (search?: string) => {
//   const query = search
//     ? {
//         $or: [
//           { name: { $regex: search, $options: "i" } },
//           { genericName: { $regex: search, $options: "i" } },
//           { manufacturer: { $regex: search, $options: "i" } },
//         ],
//       }
//     : {};

//   const medicines = await MedicineModel.find(query);
//   return medicines;
// };

// Service
export const getMedicines = async (
  search?: string,
  page: number = 1,
  limit: number = 10
) => {
  const query = search
    ? {
        $or: [
          { name: { $regex: search, $options: "i" } },
          { genericName: { $regex: search, $options: "i" } },
          { manufacturer: { $regex: search, $options: "i" } },
        ],
      }
    : {};

  const medicines = await MedicineModel.find(query)
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await MedicineModel.countDocuments(query);

  return { medicines, total, page, limit };
};


export const getMedicineById = async (id: string) => {
  return MedicineModel.findById(id);
};

export const updateMedicine = async (id: string, data: Partial<IMedicine>) => {
  return MedicineModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteMedicine = async (id: string) => {
  return MedicineModel.findByIdAndDelete(id);
};
