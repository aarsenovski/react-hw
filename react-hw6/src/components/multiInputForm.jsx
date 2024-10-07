import { useState } from "react";

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    interests: [],
    country: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        let updatedInterests;
        if (checked) {
          updatedInterests = [...prev.interests, value];
        } else {
          updatedInterests = prev.interests.filter(
            (interest) => interest !== value
          );
        }
        return { ...prev, interests: updatedInterests };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 3)
      newErrors.name = "Name must be a minimum of 3 characters long";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (formData.interests.length === 0)
      newErrors.interests = "At least one interest must be chosen.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
      setErrors({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div>
          <span>Gender:</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
          {errors.gender && (
            <span style={{ color: "red" }}>{errors.gender}</span>
          )}
        </div>

        <div>
          <span>Interests:</span>
          <label>
            <input
              type="checkbox"
              value="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              value="music"
              checked={formData.interests.includes("music")}
              onChange={handleChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              value="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleChange}
            />
            Reading
          </label>
          {errors.interests && (
            <div style={{ color: "red" }}>{errors.interests}</div>
          )}
        </div>

        <div>
          <label>
            Country:
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </label>
          {errors.country && (
            <div style={{ color: "red" }}>{errors.country}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Interests: {submittedData.interests.join(", ")}</p>
          <p>Country: {submittedData.country}</p>
        </div>
      )}
    </div>
  );
};

export default MultiInputForm;
