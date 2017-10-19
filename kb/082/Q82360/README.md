---
layout: page
title: "Q82360: &quot;SatisFAXtion Board Is Busy&quot; Message With FAX.EXE"
permalink: /kb/082/Q82360/
---

## Q82360: &quot;SatisFAXtion Board Is Busy&quot; Message With FAX.EXE

	Article: Q82360
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending or receiving fax transmissions with an Intel SatisFAXtion board
	running Intel's FAX.EXE version 1.2 and 1.3 in a MS-DOS virtual machine (VM),
	the following message may appear:
	
	  SatisFAXtion board is busy
	
	The fax, however, is successfully received or sent.
	
	WORKAROUND
	==========
	
	To prevent this message from appearing, edit the SYSTEM.INI file's [386Enh]
	section and add the following line:
	
	     [386Enh]
	     OVERLAPPEDIO=FALSE
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
