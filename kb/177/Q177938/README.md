---
layout: page
title: "Q177938: XADM: Using AT Command for Command-Line Import/Export"
permalink: /kb/177/Q177938/
---

## Q177938: XADM: Using AT Command for Command-Line Import/Export

	Article: Q177938
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the AT command for command-line directory import or
	export with Admin.exe, the process may not complete.
	
	When the AT command fails to complete the import of a batch file, the following
	event is generated in the Event Viewer Application log:
	
	  Event ID 181
	  Description:
	  Could not bind to the Microsoft Exchange Server <name of server>.
	  You do not have the permissions required to complete the operation.
	
	CAUSE
	=====
	
	The Schedule service startup value is set to use a System account.
	
	WORKAROUND
	==========
	
	To fully utilize the AT command, modify the Schedule service Startup property in
	the Control Panel Services icon to use "This Account." Use an account that has
	at least the Permissions Admin role on the Exchange site you are attempting to
	manipulate.
	
	To ensure that you will have full functionality using command-line import and
	export with the AT command, specify the Exchange Service Account as the Log On
	As account for the Schedule service.
	
	MORE INFORMATION
	================
	
	Directory import/export can be run from the command-line using Admin.exe.
	Therefore, it can be run as part of a batch process using the AT command. For
	more information on running import/export from the command line, please refer to
	the Microsoft Exchange Administrator's Guide, pages 479-487.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words: export import GAL AT NT
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
