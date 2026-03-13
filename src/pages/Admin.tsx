import React, { useState } from 'react';
import { useWedding, WeddingData } from '@/context/WeddingContext';
import { toast } from 'sonner';
import { ArrowLeft, Save, RotateCcw, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const { data, updateData, resetData } = useWedding();
  const [formData, setFormData] = useState<WeddingData>(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof WeddingData] as any),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoChange = (index: number, value: string) => {
    const newPhotos = [...formData.photos];
    newPhotos[index] = value;
    setFormData(prev => ({ ...prev, photos: newPhotos }));
  };

  const addPhoto = () => {
    setFormData(prev => ({ ...prev, photos: [...prev.photos, ''] }));
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({ ...prev, photos: prev.photos.filter((_, i) => i !== index) }));
  };

  const handleSave = () => {
    updateData(formData);
    toast.success('Wedding details updated successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset to default values?')) {
      resetData();
      setFormData(data);
      toast.info('Data reset to defaults');
    }
  };

  const inputClasses = "w-full p-2 border border-wedding-gold/20 rounded focus:outline-none focus:border-wedding-gold transition-colors bg-white";
  const labelClasses = "block text-xs uppercase tracking-widest text-wedding-carbon/60 mb-1 mt-4";

  return (
    <div className="min-h-screen bg-wedding-ivory p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <button className="p-2 hover:bg-wedding-gold/10 rounded-full transition-colors">
                <ArrowLeft className="w-5 h-5 text-wedding-gold" />
              </button>
            </Link>
            <h1 className="font-display text-3xl text-wedding-gold">Admin Dashboard</h1>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={handleReset} 
              className="px-4 py-2 border border-wedding-gold/30 rounded flex items-center space-x-2 hover:bg-wedding-gold/5 transition-colors text-wedding-gold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
            <button 
              onClick={handleSave} 
              className="px-4 py-2 bg-wedding-gold text-white rounded flex items-center space-x-2 hover:bg-wedding-gold/90 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Details */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-wedding-gold/10 space-y-2">
            <h2 className="font-body text-xl font-semibold text-wedding-gold border-b pb-2 mb-4">Core Details</h2>
            
            <div>
              <label className={labelClasses}>Bride Name</label>
              <input className={inputClasses} name="brideName" value={formData.brideName} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClasses}>Groom Name</label>
              <input className={inputClasses} name="groomName" value={formData.groomName} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClasses}>Wedding Date</label>
              <input className={inputClasses} type="date" name="weddingDate" value={formData.weddingDate} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClasses}>Hero Subtitle</label>
              <input className={inputClasses} name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} />
            </div>
          </div>

          {/* Venue & Welcome */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-wedding-gold/10 space-y-2">
            <h2 className="font-body text-xl font-semibold text-wedding-gold border-b pb-2 mb-4">Venue & Welcome</h2>
            
            <div>
              <label className={labelClasses}>Venue Name</label>
              <input className={inputClasses} name="venueName" value={formData.venueName} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClasses}>Venue Address</label>
              <input className={inputClasses} name="venueAddress" value={formData.venueAddress} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClasses}>Welcome Message</label>
              <textarea className={inputClasses} name="welcomeText" value={formData.welcomeText} onChange={handleChange} rows={4} />
            </div>
          </div>

          {/* Event Timeline */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-wedding-gold/10 space-y-2">
            <h2 className="font-body text-xl font-semibold text-wedding-gold border-b pb-2 mb-4">Event Timeline</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Arrival</label>
                <input className={inputClasses} name="eventDetails.arrival" value={formData.eventDetails.arrival} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Ceremony</label>
                <input className={inputClasses} name="eventDetails.ceremony" value={formData.eventDetails.ceremony} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Cocktails</label>
                <input className={inputClasses} name="eventDetails.cocktails" value={formData.eventDetails.cocktails} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClasses}>Dinner</label>
                <input className={inputClasses} name="eventDetails.dinner" value={formData.eventDetails.dinner} onChange={handleChange} />
              </div>
              <div className="col-span-2">
                <label className={labelClasses}>Cake Cutting</label>
                <input className={inputClasses} name="eventDetails.cake" value={formData.eventDetails.cake} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Photo Management */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-wedding-gold/10 space-y-4">
            <div className="flex items-center justify-between border-b pb-2 mb-2">
              <h2 className="font-body text-xl font-semibold text-wedding-gold">Photos (URLs)</h2>
              <button onClick={addPhoto} className="text-wedding-gold hover:underline flex items-center text-sm">
                <Plus className="w-4 h-4 mr-1" /> Add
              </button>
            </div>
            
            <div className="space-y-4">
              {formData.photos.map((photo, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wedding-gold/40" />
                    <input 
                      className={`${inputClasses} pl-10`}
                      value={photo} 
                      onChange={(e) => handlePhotoChange(index, e.target.value)} 
                      placeholder="Image URL"
                    />
                  </div>
                  <button onClick={() => removePhoto(index)} className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {formData.photos.length === 0 && (
                <p className="text-center text-sm text-wedding-carbon/40 italic">No photos added yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
