---
layout: page
title: "Q90468: Garbled Characters and Beeping in WFWG When Starting NetBEUI"
permalink: kb/090/Q90468/
---

## Q90468: Garbled Characters and Beeping in WFWG When Starting NetBEUI

	Article: Q90468
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you load SMARTDrive high and start NetBEUI from MS-DOS by typing "net start
	netbeui" (without the quotation marks), garbled characters may scroll on the
	screen and the system may start beeping.
	
	You can press the CTRL+BREAK keys to get back the MS-DOS command prompt. If you
	type "net start netbeui" (without the quotation marks) again, NetBEUI should
	load correctly.
	
	CAUSE
	=====
	
	This problem occurs when NetBEUI tries to increase (grow) its data segment size
	and fails. NetBEUI tries to increase its data segment when the PROTOCOL.INI file
	has high values (around 90) for the NCBS= and SESSIONS= statements.
	
	WORKAROUND
	==========
	
	To work around this problem, load SMARTDrive low or lower the NCBS= and
	SESSIONS= statements to 12 and 32, respectively.
	
	Additional query words: 3.10 smart drive smartdrv.exe scrambled garbage
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
