---
layout: page
title: "Q185154: XCON: Cannot Start Exchange MTA Service With Error 2140"
permalink: /kb/185/Q185154/
---

## Q185154: XCON: Cannot Start Exchange MTA Service With Error 2140

{% raw %}

	Article: Q185154
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Server Message Transfer Agent
	(MTA) service in Control Panel, you may receive the following error message:
	
	  Could not start the Microsoft Exchange Message Transfer Agent service on
	  \\<computername>
	  Error 2140: An internal Windows NT error occurred.
	
	The Application Log in Event Viewer may display the following errors:
	
	  Event ID: 6613
	  Source: MSExchangeMTA
	  Category: Configuration
	  Description:
	  A fatal internal MTA error occurred. The registration of the conversion
	  routines has failed. Contact Microsoft Product Support Services. (16)
	
	  Event ID: 9406
	  Source: MSExchangeMTA
	  Category: Resource
	  Description:
	  There is not enough Performance Monitor memory to display the MTA
	  Connections information. Stop attached Performance Monitors and re-start
	  the MTA. [BASE MAIN BASE 1] (14)
	
	CAUSE
	=====
	
	The System Account or Local System Account is specified as the service account
	in Control Panel Startup for the Message Transfer Agent service.
	
	WORKAROUND
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Highlight the Microsoft Exchange Server Message Transfer Agent service in
	  Control Panel and click Startup.
	
	2. Verify the service account is correct.
	
	3. Re-type the password and password confirmation.
	
	4. Go to User Manager for Domains.
	
	5. Click Policies from the title bar menu and select User Rights.
	
	6. Check the option for Advanced User Rights.
	
	7. In the drop-down list, verify the following rights have been granted to the
	  service account:
	
	  Act as part of the operating system
	  Back up files and directories
	  Log on as a service
	  Restore files and directories
	
	The Microsoft Exchange Message Transfer Agent service should now start without
	error.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
