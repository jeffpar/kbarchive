---
layout: page
title: "Q130344: Adding Additional Target Device Types to Imagedit"
permalink: kb/130/Q130344/
---

## Q130344: Adding Additional Target Device Types to Imagedit

	Article: Q130344
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro includes a resource editor, Imagedit, that you can use to create
	cursor and icon files. These files should contain multiple images. When the
	application is installed, the operating system will choose an image capable of
	being displayed on the hardware and software installed on the runtime system.
	
	MORE INFORMATION
	================
	
	Imagedit allows icons and cursors to be created for VGA 16 Color and VGA
	Monochrome devices. It is possible to create images appropriate for other
	devices, by making changes to the IMAGEDIT.INI file located in the \WINDOWS
	directory.
	
	1. Use the Visual FoxPro modify command, or another text editor, to open the
	  \WINDOWS\IMAGEDIT.INI file.
	
	2. Add in the following sections, if they do not already exist. Add an entry in
	  each section as demonstrated below:
	
	     [Imagedit.Icon]
	     SuperVGA=16,64,64
	
	     [Imagedit.Cursor]
	     SuperVGA=16,32,32
	
	3. Save and close the file. Launch Imagedit through the program group icon, or
	  by typing the following command in Visual FoxPro:
	
	     RUN /n \VFP\IMAGEDIT\IMAGEDIT
	
	4. Choose New Image from the File menu, and select Cursor. Note that SuperVGA is
	  one of the devices listed.
	
	There are four arguments to each device type entry:
	
	  Device Name      - Can contain up to 12 characters
	  Number of Colors - 2 for Monochrome or 16 colors
	  Maximum Height   - Maximum of 64 for icons, 32 for cursors
	  Maximum Width    - Maximum of 64 for icons, 32 for cursors
	
	In the example in this article, an icon can be created specifically for SuperVGA
	resolution. The icon can have up to 16 colors, and be a maximum of 64 x 64
	pixels in size. A cursor can also be created for SuperVGA resolution, but it
	would be limited to 32 x 32 pixels in size.
	
	REFERENCES
	==========
	
	For more information on Imagedit device types, refer to DEVICE TYPES in the
	Imagedit Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
