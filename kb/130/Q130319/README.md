---
layout: page
title: "Q130319: PC DOS Win: Convert.exe Doesn't Work on Windows NT 3.5 Computers"
permalink: kb/130/Q130319/
---

## Q130319: PC DOS Win: Convert.exe Doesn't Work on Windows NT 3.5 Computers

	Article: Q130319
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.2 of Microsoft Mail for Windows, and you attempt to run
	the CONVERT.EXE utility that converts the MS-DOS workstation private folders to
	folders in your Windows client's Mail Message File (MMF), you will receive a
	screen flash or a MS-DOS box if your Windows client is running on Microsoft
	Windows NT version 3.5.
	
	CAUSE
	=====
	
	The CONVERT.EXE utility will not run on Windows NT version 3.5. This is a
	MS-DOS-based compiled application. There is a CONVERT.EXE that comes with
	Windows NT 3.5 that allows you to convert your hard drive partition from FAT or
	HPFS to NTFS partitions.
	
	RESOLUTION
	==========
	
	If your MMF file is on the postoffice:
	
	1. Log into the postoffice from a Windows for Workgroups machine.
	
	2. Run the CONVERT.EXE from the Windows for Workgroups machine.
	
	If your MMF file is local, you will have to place the your MMF on the
	postoffice.
	
	1. From the Mail menu, choose Options.
	
	2. Select the Server button.
	
	3. Select Postoffice for the storage. Select OK.
	
	4. Log into the postoffice from a Windows for Workgroups machine.
	
	5. Run the CONVERT.EXE from the Windows for Workgroups machine.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
