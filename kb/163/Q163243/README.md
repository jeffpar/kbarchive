---
layout: page
title: "Q163243: XFOR: Causes for Event ID 4018 When Starting the IMC"
permalink: kb/163/Q163243/
---

## Q163243: XFOR: Causes for Event ID 4018 When Starting the IMC

	Article: Q163243
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 31-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Internet Mail Connector (IMC), you may receive the following
	error message:
	
	  Error 2140: An internal Windows NT error occurred.
	
	The following event is logged in the application event log:
	
	  Event ID: 4018
	  Type: Error
	  Source: MSExchangeIMC
	  Category: Initialization/Termination
	  Description:
	
	  Unable to start the Internet Mail Connector service because
	  MAPI could not be initialized.
	
	CAUSE
	=====
	
	If you receive this error, check the following:
	
	- Verify that Mapisvc.inf is located in the proper folder. It should be in the
	  %System Root%\System32 folder.
	
	- Verify that the Exchange Service Account has at least change rights on the
	  Mapisvc.inf file in the <systemroot>\System32 folder.
	
	- Verify that you have a private information store on that server. For more
	  information, see the following article in the Microsoft Knowledge Base:
	
	  Q157042 Event ID 4018 if IMC Started Without Private IS
	
	- Verify that the CommonName and HomeDSA registry entries are present and
	  valid. They will be listed under:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	  \Parameters
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q147935 XFOR: Behavior of IMC With Invalid Registry Information
	
	  Q186739 Events 4018 and 4116 Starting the Internet Mail Service
	
	
	
	Additional query words: mapi32
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
