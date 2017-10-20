---
layout: page
title: "Q166080: XFOR: Access Violation During Internet Mail Wizard"
permalink: /kb/166/Q166080/
---

## Q166080: XFOR: Access Violation During Internet Mail Wizard

{% raw %}

	Article: Q166080
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc5 exc55
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you (the administrator) set up the Microsoft Exchange Server Internet Mail
	Service (IMS) with the Internet Mail Wizard, you may get an access violation
	upon starting services. Subsequently, the IMS is not created. When you look at
	the Drwtsn32.log, it should show an entry similar to the following:
	
	  Application exception occurred:
	  App: MSEXCIMC.dbg (pidA9)
	  When: D/MM/YYYY @ hh:mm: s.sss
	  Exception number: c0000005 (access violation)
	
	The Event Viewer Application log should reveal the following event:
	
	  Event ID: 4097
	  Source: DrWatson
	  Category: None
	  Description: The application; MSEXCIMC.dbg; generated an application
	  error The error occurred on D/MM/YYYY @ hh:mm: s.sss The exception
	  generated was c0000005 at address 0042db78 ().
	
	CAUSE
	=====
	
	The IMS Administrator mailbox selected during the IMS Setup Wizard process is
	missing its X.400 address space.
	
	RESOLUTION
	==========
	
	To resolve this problem, choose one the of the following options:
	
	1. Select a different mailbox or distribution list as the IMS administrator
	  mailbox using the Internet Mail Wizard.
	
	2. Select the Create/Use the Mailbox Called Administrator option as the IMS
	  administrator mailbox using the Internet Mail Wizard.
	
	3. Recreate the X.400 E-mail address space for the IMS Administrator mailbox and
	  run through the Internet Mail Wizard again.
	
	MORE INFORMATION
	================
	
	For more information on the IMS, please refer to Books Online included with
	Microsoft Exchange Server.
	
	
	Additional query words: 0x00446d8f Msexcimc.exe
	
	======================================================================
	Keywords          : kbsetup kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
