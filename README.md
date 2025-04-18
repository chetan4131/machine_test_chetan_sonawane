# Frontend and Problem Solving Test

## Part 1: HTML and CSS Test

### Task:
Create a responsive layout based on the design.

### Requirements:
- Use **Flexbox**, **Grid**, **Media Queries**, and **Bootstrap**.
- Ensure the layout is **fully responsive** across different screen sizes.

---

## Part 2: Problem Solving Test

### Problem:
Roy wants to change his profile picture on Facebook. Now Facebook has some restriction over the dimension of picture that we can upload.  
Minimum dimension of the picture can be L x L, where L is the length of the side of square.  
Now Roy has N photos of various dimensions.  
Dimension of a photo is denoted as W x H  
where W - width of the photo and H - Height of the photo

When any photo is uploaded following events may occur:
1. If any of the width or height is less than L, user is prompted to upload another one. Print "UPLOAD ANOTHER" in this case.  
2. If width and height, both are large enough and  
   a) if the photo is already square then it is accepted. Print "ACCEPTED" in this case.  
   b) else user is prompted to crop it. Print "CROP IT" in this case.  
("quotes are only for clarification")

### Input:  
First line contains L.  
Second line contains N, number of photos.  
Following N lines each contains two space separated integers W and H.

### Output:  
Print appropriate text for each photo in a new line.  

### Sample Input:
    L=180
    N=3
    Photo=[
    {W:640,H:480}
    {W:120,H:300}
    {W:180,H:180}
    ]

### Sample Output:
    CROP IT
    UPLOAD ANOTHER
    ACCEPTED