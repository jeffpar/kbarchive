---
layout: page
title: "Q122896: MSB Human: How to Change Installation Directory"
permalink: /kb/122/Q122896/
---

## Q122896: MSB Human: How to Change Installation Directory

	Article: Q122896
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup mskids msbhb kbimu
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Human Body for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Scholastic's The Magic School Bus Explores the Human Body (MSB
	Human Body), you do not have an opportunity to specify the folder in which you
	want to install the program. This article describes how to move MSB Human Body
	to a different location after you install the program.
	
	MORE INFORMATION
	================
	
	By default, MSB Human Body is installed in the following location:
	
	  <drive>:\Mskids\Msbhuman
	
	To move MSB Human Body to a different location, use the appropriate method for
	your version of Microsoft Windows.
	
	NOTE: When you move the Mskids folder, you may need to modify the program item
	properties and configuration files for any other Microsoft Kids programs
	installed in the Mskids folder.
	
	Windows 95/98
	-------------
	
	1. Move the Mskids folder. For information about how to move a folder in
	  Microsoft Windows, see your Windows printed documentation or online Help.
	
	2. Use a text editor such as Notepad to change the following lines in the
	  Band.ini file located in the Msbhuman folder
	
	        [init]
	        main=!<cdrom>:\msbhuman\ 
	        second=!<drive>:\<folder>\mskids\msbhuman\ 
	        user=&<drive>:\<folder>\mskids\msbhuman\ 
	
	  where <cdrom> is the letter of the CD-ROM drive, <drive> is the
	  letter of the hard disk, and <folder> is the new location of the Mskids
	  folder.
	
	3. Click Start, point to Programs, point to Microsoft Kids, and then click Magic
	  School Bus - Human Body. Windows 95/98 automatically updates the shortcut
	  properties.
	
	Windows 3.1x
	------------
	
	1. Move the Mskids folder. For information about how to move a folder in
	  Microsoft Windows, see your Windows printed documentation or online Help.
	
	2. Use a text editor such as Notepad to change the following lines in the
	  Band.ini file located in the Msbhuman folder
	
	        [init]
	        main=!<cdrom>:\msbhuman\ 
	        second=!<drive>:\<folder>\mskids\msbhuman\ 
	        user=&<drive>:\<folder>\mskids\msbhuman\ 
	
	  where <cdrom> is the letter of the CD-ROM drive, <drive> is the
	  letter of the hard disk, and <folder> is the new location of the Mskids
	  folder.
	
	3. In the Microsoft Kids group in Program Manager, modify the program item
	  properties for the Magic School Bus - Human Body icon. To do so, follow these
	  steps:
	  a. Click the Magic School Bus - Human Body icon to select it.
	
	  b. Press "ALT+ENTER" (without the quotation marks).
	
	  c. In the Command Line box, type the following line
	
	  "<drive>:\<folder>\mskids\msbhuman\msbhuman.exe" (without the
	  quotation marks)
	
	     where <drive> is the letter of the drive on which MSB Human Body is
	     installed, and <folder> is the folder to which you moved the Mskids
	     folder.
	
	  d. In the Start In box, type the following line
	
	  "<drive>:\<folder>\mskids\msbhuman" (without the quotation marks)
	
	     where <drive> is the letter of the drive on which MSB Human Body is
	     installed, and <folder> is the folder to which you moved the Mskids
	     folder.
	
	  e. Click OK.
	
	
	Additional query words: 1.00 mskids kids win liz frizz frizzle magicbus msb msb-hb msbhb schoolbus magic_bus winmsbhuman msbhuman directory
	
	======================================================================
	Keywords          : kbenv kbsetup mskids msbhb kbimu 
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticHuman kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
