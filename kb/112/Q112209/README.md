---
layout: page
title: "Q112209: PC Win: SHARE.EXE Not Added to Floppy Boot Disk"
permalink: /kb/112/Q112209/
---

## Q112209: PC Win: SHARE.EXE Not Added to Floppy Boot Disk

	Article: Q112209
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A diskless workstation (running both Microsoft Windows and Microsoft Mail for
	Windows from the network) boots from a floppy disk containing the AUTOEXEC.BAT.
	The Mail for Windows setup program will attempt to modify the AUTOEXEC.BAT on
	drive C (even if no drive C is available) instead of the AUTOEXEC.BAT on drive A
	(the boot drive).
	
	NOTE: Multiple installations will result in the SHARE.EXE line being added to the
	C:\AUTOEXEC.BAT file multiple times.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for Windows. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
