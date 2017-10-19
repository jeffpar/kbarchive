---
layout: page
title: "Q128742: PC MAPI: Custom Messages Do Not Work with IPC Messages"
permalink: /kb/128/Q128742/
---

## Q128742: PC MAPI: Custom Messages Do Not Work with IPC Messages

	Article: Q128742
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail for PC Networks has a Custom Messages section located in the
	MSMAIL.INI file used to initialize Microsoft Mail for Windows. Custom messages
	allow the Windows client to pass message information to a Dynamic Link Library
	(DLL) file. One DLL example is APPEXEC.DLL that is provided with the Simple MAPI
	SDK.
	
	MORE INFORMATION
	================
	
	The operation map parameter found in the custom message declaration determines
	when the DLL file will be called. Currently, with the Windows client, there are
	eight possible events that can occur that will start the DLL when a specific
	custom message is received. The eight possible operations are: compose, open,
	reply, reply all, forward, print, save, and, upon delivery to the Windows client
	Inbox.
	
	IPC message types are special messages that the mail spooler does not place in
	the Windows client Inbox. Of the eight possible operations, all require that the
	message at least be placed in the Inbox. Due to this functionality, messages of
	the IPC type do not work with custom messages.
	
	To work with IPC type messages, it is necessary to use MAPI and the MAPIFindNext
	function to read them, because they are not visible in the Inbox. For more
	information on MAPI, consult the Microsoft Mail Technical Reference manual.
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2,3.2a
	
	=============================================================================
	
