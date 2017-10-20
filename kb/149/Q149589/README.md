---
layout: page
title: "Q149589: How to Ensure that Custom Icons Show Up in Windows 95 Explorer"
permalink: /kb/149/Q149589/
---

## Q149589: How to Ensure that Custom Icons Show Up in Windows 95 Explorer

{% raw %}

	Article: Q149589
	Product(s): Microsoft FoxPro
	Version(s): 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps necessary to ensure Windows 95 Explorer
	displays the correct custom icon (not the Fox head icon) in Large Icon View or
	Small Icon View for a Visual FoxPro for Windows created .exe file.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	Windows 95 can display large and small icons for the same file under different
	circumstances. To ensure that the custom custom icon is displayed in a Visual
	FoxPro version 3.0b executable, follow these steps:
	
	1. Set up ImagEdit to make a 16x16 icon. To the Imagedit.ini file in the Windows
	  directory, add:
	
	  
	
	     [ImagEdit.Icon]
	     Win95=16,16,16
	
	  For more information about using ImagEdit to create a 16x16 icon, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q136044 How to Make ImagEdit Create 16X16 Icons
	
	2. Create a 32x32 image icon in ImagEdit. Then create a 16x16 image as follows:
	
	  a. Start Imagedit from the Visual FoxPro program group. On the ImagEdit File
	     menu, choose New. In the Resource Type dialog box, choose Icon, and then
	     click OK.
	
	  b. In the New Icon dialog box, choose Target Device and EGA/VGA 16-color
	     32x32. Then click OK. Selecting Screen as the background color in the
	     ImagEdit Color Palette makes the background transparent. Draw the 32x32
	     icon.
	
	  c. Complete the 32x32 image. On the ImagEdit Edit menu, choose New Image. In
	     the New Icon Image dialog box, choose Win95 16-Color 16x16 as the Target
	     Device. Then click OK. Draw the 16x16 image and save the file with an .ico
	     extension .
	
	3. Add the icon file to the project as follows:
	
	  In Project Manager, click the Other tab. Choose Other Files and then choose
	  Add. Under Files of Type, choose All Files, select the .ico file, and then
	  click OK.
	
	4. To add the icon to the .exe file, right-click Project Manager, and choose
	  Project Info. On the Project tab, select the Attach Icon to check box. In the
	  Open dialog box, choose the .ico file, and then click OK.
	
	5. In the Main program of the application, set the icon by adding the following
	  code:
	
	  
	
	     _screen.icon="<iconfilename>.ICO"
	
	6. Build the .exe file.
	
	NOTE: Windows 95 uses the 32x32 icon image for Large Icon view and the 16x16 icon
	image for Small Icon view. The first icon added to the file within ImagEdit
	becomes the icon in the upper left corner of the application window in Windows
	95 and on the Windows 95 Taskbar. In this example, the 32x32 image is used in
	both places. If the 16x16 image is added to the .ico file first, the icon
	appears distorted in the Taskbar, especially if the background is transparent.
	When created as described, the icon is also displayed under Windows NT and
	Windows 3.1x.
	
	The previous steps must be followed in the order given to avoid the error:
	
	  The file named <path and icon file name> is already in the project
	
	Additional query words: VFoxWin imageedit
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP600
	Version           : 3.00b
	
	=============================================================================
	

{% endraw %}
