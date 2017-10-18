---
layout: page
title: "Q112659: BootExecute Incorrectly Documented in Resource Kit"
permalink: kb/112/Q112659/
---

## Q112659: BootExecute Incorrectly Documented in Resource Kit

	Article: Q112659
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	Page 386 of the Windows NT Resource Guide (Volume 1 of the Microsoft
	Windows NT Resource Kit) references the BootExecute parameter. The
	following example is given for converting the file system on a hard disk
	drive:
	
	  BootExecute = autocheck autoconv \Dos\Devices\x: /FS:NTFS
	
	This information is incorrect. The statement should read:
	
	  BootExecute = autocheck autoconv \DosDevices\x: /FS:NTFS
	
	This reference is also incorrect in the Registry Help file.
	
	Additional query words: prodnt reskit
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
