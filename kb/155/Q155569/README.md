---
layout: page
title: "Q155569: MS Mail 3.5 Mail Service Manager Setup Does Not Work"
permalink: kb/155/Q155569/
---

## Q155569: MS Mail 3.5 Mail Service Manager Setup Does Not Work

	Article: Q155569
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:4.0; :3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the setup of the Mail Service Manager from Microsoft Mail 3.5 Server, you
	may receive the following error message:
	
	  Setup has encountered a problem.
	  Please report file = 'COMMON/INFO1.C',Line='253' to Microsoft Product
	  Support Services.
	
	CAUSE
	=====
	
	This error is caused by the Setup program for Mail Service Manager not correctly
	checking the versions of files present on the computer.
	
	RESOLUTION
	==========
	
	Copy the Setnt351.cmd and Imagecfg.exe files to the same folder as the Setup
	program for Mail Service Manager. These files can be located on the Windows NT
	4.0 CD-ROM in the Support\Debug\i386 folder (or other machine type folder). Run
	the following command line from the command prompt:
	
	  " setnt351.cmd setup.exe " (without the quotation marks)
	
	For additional information, see the following Microsoft Knowledge Base article:
	
	  Q156521 PC NTMMTA: Err Msg: Setup Has Encountered a Problem
	
	
	Additional query words: prodnt winnt MMTA
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : winnt:4.0; :3.5
	
	=============================================================================
	
