---
layout: page
title: "Q106068: PC MAPI: Compose Requires Compose and Read Values Set to 1"
permalink: /kb/106/Q106068/
---

## Q106068: PC MAPI: Compose Requires Compose and Read Values Set to 1

	Article: Q106068
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use using version 3.0 of Messaging Application Program Interface
	(MAPI), the Compose operation is a combination of creating a message and opening
	it. You can only subclass a message's Compose function when you subclass the
	message's Open function. Therefore, in order for a dynamic- link library (DLL)
	to be called when you select the Compose button, both the Compose and Read
	operation flags must be 1. In addition, the Compose button is only tied to the
	IPM.Microsoft Mail.Note type.
	
	Example
	-------
	
	Below is an example of the MSMAIL.INI [Custom Messages] section. This example
	starts the Notepad program when you select the Compose button. NOTE: The Read
	operation is set to 1 in the working example.
	
	The following example works:
	
	  IPM.Microsoft
	  Mail.Note=3.0;;;;appexec.dll;notepad.exe;1100000000000000;;;;;
	
	The following example does not work:
	
	  IPM.Microsoft
	  Mail.Note=3.0;;;;appexec.dll;notepad.exe;1000000000000000;;;;;
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
