---
layout: page
title: "Q174110: Error Message: CCAPI.DLL Error"
permalink: /kb/174/Q174110/
---

## Q174110: Error Message: CCAPI.DLL Error

	Article: Q174110
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  CCAPI.DLL Error
	
	CAUSE
	=====
	
	This error message can occur if the Ccapi.dll file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this error message, replace the Ccapi.dll file. To do this, follow
	these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "ccapi.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. If it is found, right-click the Ccapi.dll file, and then click Rename. Rename
	  the file to Ccapi.xxx.
	
	4. Extract a new copy of the Ccapi.dll file from your original Windows 95 CD-ROM
	  or disks into the Windows\System folder. To do so, use the appropriate method
	  below.
	
	Extracting the Ccapi.dll File from the Windows 95 CD-ROM
	--------------------------------------------------------
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. Type "cd\" (without the quotation marks), and then press ENTER.
	
	3. Insert the Windows 95 CD-ROM into the CD-ROM drive, and then close the
	  Windows 95 screen if it appears.
	
	4. Type the following line at the command prompt, and then press ENTER
	
	  "extract /a <drive>:\win95\win95_02.cab ccapi.dll /l
	  c:\<windows>\system" (without the quotation marks)
	
	  where <drive> is the drive letter assigned to your CD-ROM drive, and
	  <windows> is the name of the folder in which Windows is installed.
	
	5. Type "exit" (without the quotation marks), and then press ENTER to return to
	  Windows 95.
	
	Extracting the CCapi.dll File from the Windows 95 Disks
	-------------------------------------------------------
	
	1. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	2. Type "cd\" (without the quotation marks), and then press ENTER.
	
	3. Insert disk 7 of the Windows 95 disks into the floppy disk drive.
	
	4. Type the following line at the command prompt, and then press ENTER
	
	  "extract /a <drive>:\Win95_07.cab ccapi.dll /l
	  c:\<windows>\system" (without the quotation marks)
	
	  where <drive> is the drive letter assigned to the floppy disk drive in
	  which the Windows 95 floppy disk is located, and <windows> is the name
	  of the folder in which Windows is installed.
	
	5. Type "exit" (without the quotation marks), and then press ENTER to return to
	  Windows 95.
	
	For more information about using the Extract tool, see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbMSNSearch kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3
	
	=============================================================================
	
