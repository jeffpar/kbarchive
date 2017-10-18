---
layout: page
title: "Q154839: Err Msg: Windows Has Detected a Compressed Drive Access Error"
permalink: kb/154/Q154839/
---

## Q154839: Err Msg: Windows Has Detected a Compressed Drive Access Error

	Article: Q154839
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  Windows has detected a compressed drive access error
	
	CAUSE
	=====
	
	This error occurs when Windows 95 cannot mount the compressed drive used during
	startup because the names of the .bin and the .ini files used for compression do
	not match.
	
	RESOLUTION
	==========
	
	Verify that the versions of the .bin files match the compression version in use.
	DriveSpace in Windows 95 has file dates of 7/11/95. DriveSpace 3 (included with
	Microsoft Plus!) has file dates of 7/14/95. If the .bin files do not have the
	correct date, update the files on the hard disk and the Startup disk (if you
	have one).
	
	For additional information about updating the Startup disk, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q136900 Manually Updating the Startup Disk After Installing Microsoft Plus!
	
	If the Drvspace.bin file is present and the Dblspace.bin file is not, and there
	is a Dblspace.ini file, try the following steps. If one step does not resolve
	the problem, try the next step.
	
	1. Create a Dblspace.bin file. To do so, follow these steps:
	
	  a. Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key, and then choose Safe Mode Command Prompt Only from the
	     Startup menu.
	
	  b. At the command prompt, type the following lines. Press ENTER after each
	     line.
	
	  " attrib -s -h -r c:\drvspace.bin
	  copy a:\drvspace.bin c:\dblspace.bin
	  attrib +s +h +r c:\d??space.bin " (without the quotation marks)
	
	  c. Restart your computer normally.
	
	2. Rename the Dblspace.ini file to Drvspace.ini. To do so, follow these steps:
	
	  a. Restart your computer. When you see the "Starting Windows 95" message,
	     press the F8 key, and then choose Safe Mode Command Prompt Only from the
	     Startup menu.
	
	  b. At the command prompt, type the following lines. Press ENTER after each
	     line:
	
	  " attrib -s -h -r c:\ dblspace.ini
	  ren dblspace.ini drvspace.ini
	  attrib +s +h +r c:\drvspace.ini " (without the quotation marks)
	
	  c. Restart your computer normally.
	
	3. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode Command Prompt Only from the Startup
	  menu. At the command prompt, type the following line
	
	  " scandisk /mount=<yyy> <x>: " (without the quotation marks)
	
	  where <yyy> is the file name extension of the compressed volume file
	  (CVF), and <x> is the drive containing the CVF. ScanDisk creates a
	  Dblspace.bin file and mounts the CFV. For example, to mount a CVF named
	  D<xx>space.000 on drive C, type the following line:
	
	  " scandisk /mount=000 c: " (without the quotation marks)
	
	======================================================================
	Keywords          : kberrmsg kbtool win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
