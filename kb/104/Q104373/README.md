---
layout: page
title: "Q104373: 3COM: Installation Stops If There Is a Space in Server Name"
permalink: /kb/104/Q104373/
---

## Q104373: 3COM: Installation Stops If There Is a Space in Server Name

	Article: Q104373
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 1.0 of the Microsoft Mail Gateway to 3Com installation process prompts
	you for the three-part 3Com XNS name for the mail server used on your network.
	If you have added a legal space in the name portion of the three-part name, the
	installation process stops.
	
	NOTE: The installation may not provide an error message; it may simply stop
	installing the gateway.
	
	CAUSE
	=====
	
	A space is a legal character in a 3Com XNS name, but the installation program
	does not handle the space correctly.
	
	RESOLUTION
	==========
	
	Add an alias to the three-part 3Com XNS name for a server that does NOT contain
	a space in its name, then reinstall the gateway.
	
	After installing the gateway, you can remove the 3Com alias and edit the
	GATEWAY.INI file with the correct name.
	
	NOTE: To add an alias, use the 3Com 3N.EXE utility and use the ADD ALIAS option.
	Make sure the alias you add does NOT contain any spaces in its name.
	
	Additional query words: 1.00 Error Err Msg ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	
