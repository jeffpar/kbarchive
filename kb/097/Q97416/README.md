---
layout: page
title: "Q97416: MS-DOS 6 Upgrade Setup May Delete CONFIG.SYS and AUTOEXEC.BAT"
permalink: kb/097/Q97416/
---

## Q97416: MS-DOS 6 Upgrade Setup May Delete CONFIG.SYS and AUTOEXEC.BAT

	Article: Q97416
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the /M parameter when you install MS-DOS 6 Upgrade onto a machine
	running Stacker (manufactured by STAC Electronics) or SuperStor (manufactured by
	AddStor, Inc.), your CONFIG.SYS and AUTOEXEC.BAT files may be deleted from the
	host and compressed drives. As a result, when you restart your computer, the
	disk-compression software does not load and compressed data is not available.
	
	
	If the files are deleted, the following error message appears twice during
	Setup:
	
	  Error reading file
	
	In addition, you may be left with AUTOEXEC.NEW and CONFIG.NEW files in the root
	directory of the boot drive.
	
	WORKAROUND
	==========
	
	To work around this problem, restore your original files with the following
	steps:
	
	1. Restart your computer with the MS-DOS 6 Upgrade Setup Disk 1 in drive A.
	
	2. When "Starting MS-DOS..." is displayed, press the F5 function key.
	
	3. Remove Setup Disk 1 from drive A and insert Setup Disk 3.
	
	4. Run Undelete by typing "undelete c:" (without the quotation marks) at the
	  MS-DOS command prompt and then pressing ENTER.
	
	5. When you are given the option to undelete your CONFIG.SYS and AUTOEXEC.BAT
	  files, press Y.
	
	6. Restart your computer.
	
	7. When Stacker loads and prompts you with the following message, press Y:
	
	  Would you like Stacker to update the file(s)?
	
	  If you have the AUTOEXEC.NEW and CONFIG.NEW files in the root directory of
	  your boot drive, you can rename these files as AUTOEXEC.BAT and CONFIG.SYS.
	  To do this, type the following at the MS-DOS command prompt, pressing ENTER
	  after each line:
	
	  " ren autoexec.new autoexec.bat
	  ren config.new config.sys" (without the quotation marks)
	
	
	Additional query words: 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
