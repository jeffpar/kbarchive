---
layout: page
title: "Q126924: PC Win: Err Msg: ...Has Occurred While Loading the Spelling..."
permalink: /kb/126/Q126924/
---

## Q126924: PC Win: Err Msg: ...Has Occurred While Loading the Spelling...

	Article: Q126924
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	- Microsoft Word for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Word for Windows version 6.0, and you try to send a
	document via version 3.2 of Microsoft Mail for PC Networks (in Word: from the
	File menu, choose Send...), the following error may occur:
	
	  An error has occurred while loading the spelling dictionary.
	
	As a result, the message will not be sent.
	
	CAUSE
	=====
	
	The spelling lines in the WIN.INI and WINWORD6.INI files do not match. The lines
	that must match exactly are the Spelling 1033,0= line in the [Microsoft Word]
	section of the WINWORD6.INI and the Spelling (Mail) 1033,0= line in the [MS
	Proofing Tools] section of the WIN.INI.
	
	NOTE: This only occurs when a previous version of Microsoft Word has been
	installed on your computer; then you upgrade this version to version 6.0.
	
	RESOLUTION
	==========
	
	Copy the correct setting from the [Microsoft Word] section of the WINWORD6.INI
	to the [MS Proofing Tools] section of the WIN.INI.
	
	Example of how to modify the WIN.INI:
	
	Old:
	
	[MS Proofing Tools]
	Spelling (Mail) 1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPELL.DLL,
	C:\WINDOWS\MSAPPS\PROOF\MSSP_AM.LEX
	
	New:
	
	[MS Proofing Tools]
	Spelling (Mail)
	1033,0=C:\WINDOWS\MSAPPS\PROOF\MSSPEL2.DLL,
	C:\WINDOWS\MSAPPS\PROOF\MSSP2_EN.LEX
	
	NOTE: The above Spelling lines are one continuous line. They have been wrapped in
	this article for display.
	
	Also, you need to make sure the above entries match the ones in the MSMAIL.INI
	file. The MSMAIL.INI file should look like the following:
	
	[MS Proofing Tools]
	Spelling=Spelling (Mail) 1033,0
	
	Additional query words: 3.20 winword word6 spell
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbWord600 kbMailPCN320
	Version           : WINDOWS:3.2,6.0
	
	=============================================================================
	
