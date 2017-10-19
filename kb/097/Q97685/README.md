---
layout: page
title: "Q97685: Installing AutoSketch 3.0 on a DoubleSpace-Compressed Drive"
permalink: /kb/097/Q97685/
---

## Q97685: Installing AutoSketch 3.0 on a DoubleSpace-Compressed Drive

	Article: Q97685
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	The AutoSketch 3.0 installation program provides incorrect default settings if
	you install AutoSketch on a DoubleSpace-compressed drive. Even if you correct
	the settings, the installation may fail. You may receive an error message
	indicating that a math coprocessor could not be found.
	
	WORKAROUND
	==========
	
	To work around this problem, disable the mounting of the compressed volume file
	(CVF), install AutoSketch on the host drive, remount the CVF, and then copy the
	program to the compressed drive. Detailed steps for this procedure are listed
	below for both MS-DOS 6.0 and MS-DOS 6.2.
	
	NOTE: These procedures assume drive H is your host drive; if it is not, replace H
	with the actual host drive letter.
	
	MS-DOS 6.0
	----------
	
	1. Make sure there is enough space on the host drive to install AutoSketch. If
	  not, use DoubleSpace to increase the size of your host drive. (For more
	  information, refer to the "Using DoubleSpace to Manage Compressed Drives"
	  section of Chapter 5 in the Microsoft MS-DOS 6 "User's Guide." This section
	  includes information on the Change Size command.)
	
	2. At the MS-DOS command prompt, type the following commands, pressing ENTER
	  after each line:
	
	  " copy c:\command.com h:\
	  copy c:\dos\attrib.exe h:\
	  attrib -s -h -r h:\dblspace.bin
	  ren h:\dblspace.bin temp.bin " (without the quotation marks)
	
	3. Reboot the computer by pressing CTRL+ALT+DEL.
	
	4. Install AutoSketch on drive C (the uncompressed host drive, which was
	  previously drive H).
	
	5. At the MS-DOS command prompt, type the following commands, pressing ENTER
	  after each line:
	
	  " ren h:\temp.bin dblspace.bin
	  attrib +s +h +r h:\dblspace.bin " (without the quotation marks)
	
	6. Reboot the computer by pressing CTRL+ALT+DEL.
	
	7. Type the following command and press ENTER:
	
	  " xcopy h:\sketch3\*.* c:\sketch3 /s " (without the quotation marks)
	
	  (When prompted, indicate that this is a directory.)
	
	8. Type the following command and press ENTER:
	
	  " copy h:\sketch3.bat c:\ " (without the quotation marks)
	
	9. Run the AutoSketch program to see if the installation on drive C was
	  successful.
	
	10. Quit AutoSketch.
	
	11. At the MS-DOS command prompt, type the following commands, pressing ENTER
	  after each line:
	
	  " deltree h:\sketch3
	  del h:\sketch3.bat " (without the quotation marks)
	
	MS-DOS 6.2
	----------
	
	1. Make sure there is enough space on the host drive to install AutoSketch. If
	  not, use DoubleSpace to increase the size of your host drive. (For more
	  information, refer to the "Using DoubleSpace to Manage Compressed Drives"
	  section of Chapter 5 in the Microsoft MS-DOS 6 "User's Guide." This section
	  includes information about the Change Size command.)
	
	2. Reboot the computer by pressing CTRL+ALT+DEL.
	
	3. When the "Starting MS-DOS..." prompt is displayed, press CTRL+F5.
	
	4. Install AutoSketch on drive C (the uncompressed host drive, which was
	  previously drive H).
	
	5. Reboot the computer by pressing CTRL+ALT+DEL.
	
	MORE INFORMATION
	================
	
	For more information about AutoSketch 3.0, contact Autodesk Retail Products.
	
	AutoSketch 3.0 is manufactured by Autodesk, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 6.00 3rdparty double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
