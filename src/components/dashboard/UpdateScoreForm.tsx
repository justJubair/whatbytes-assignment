"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const UpdateScoreForm = ({
  rank,
  percentile,
  score,
  setRank,
  setPercentile,
  setScore,
}: {
  rank: number;
  percentile: number;
  score: number;
  setRank: (param: number) => void;
  setPercentile: (param: number) => void;
  setScore: (param: number) => void;
}) => {
  const [open, setOpen] = useState(false); // Controls modal visibility

  // Local state to store temporary form input
  const [formData, setFormData] = useState({
    rank,
    percentile,
    score,
  });

  // Validation errors
  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  });

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { rank: "", percentile: "", score: "" };
    let isValid = true;

    if (!formData.rank) {
      newErrors.rank = "Rank is required!";
      isValid = false;
    }
    if (
      !formData.percentile ||
      isNaN(Number(formData.percentile)) ||
      Number(formData.percentile) < 0 ||
      Number(formData.percentile) > 100
    ) {
      newErrors.percentile = "Enter a valid percentile (0-100)!";
      isValid = false;
    }
    if (
      !formData.score ||
      isNaN(Number(formData.score)) ||
      Number(formData.score) < 0 ||
      Number(formData.score) > 15
    ) {
      newErrors.score = "Enter a valid score (0-15)!";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Update parent state only on successful submit
      setRank(formData.rank);
      setPercentile(formData.percentile);
      setScore(formData.score);

      console.log("Updated Data:", {
        rank: formData.rank,
        percentile: Number(formData.percentile),
        score: Number(formData.score),
      });

      setOpen(false); // Close modal on successful submit
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile details and save changes.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
            {/* Rank Input */}
            <div className="flex justify-between items-center gap-4">
              <Label htmlFor="rank" className="text-right">
                Rank
              </Label>
              <Input
                id="rank"
                type="number"
                value={formData.rank}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, rank: e.target.value }))
                }
                className="w-[40%]"
                placeholder="Enter your rank"
              />
            </div>
            {errors.rank && (
              <p className="text-red-500 text-sm">{errors.rank}</p>
            )}

            {/* Percentile Input */}
            <div className="flex justify-between items-center gap-4">
              <Label htmlFor="percentile" className="text-right">
                Percentile (%)
              </Label>
              <Input
                id="percentile"
                type="number"
                value={formData.percentile}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    percentile: e.target.value,
                  }))
                }
                className="w-[40%]"
                placeholder="Enter percentile (0-100)"
                min="0"
                max="100"
              />
            </div>
            {errors.percentile && (
              <p className="text-red-500 text-sm">{errors.percentile}</p>
            )}

            {/* Score Input */}
            <div className="flex justify-between items-center gap-4">
              <Label htmlFor="score" className="text-right">
                Score (out of 15)
              </Label>
              <Input
                id="score"
                type="number"
                value={formData.score}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, score: e.target.value }))
                }
                className="w-[40%]"
                placeholder="Enter score (0-15)"
                min="0"
                max="15"
              />
            </div>
            {errors.score && (
              <p className="text-red-500 text-sm">{errors.score}</p>
            )}

            <DialogFooter className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateScoreForm;
