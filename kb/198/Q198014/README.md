---
layout: page
title: "Q198014: XFOR: Troubleshooting GroupWise 5.x Migration Problems"
permalink: /kb/198/Q198014/
---

## Q198014: XFOR: Troubleshooting GroupWise 5.x Migration Problems

{% raw %}

	Article: Q198014
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the GroupWise 5.x Migration wizard, administrators may get the
	following error message:
	
	  An error occurred logging on to GroupWise 5. Please check the user ID
	  and password. If the user ID and password are both correct, log on with
	  the GroupWise client and shut it down before proceeding.
	
	CAUSE
	=====
	
	This problem may be caused by insufficient access rights or incorrect user name
	or password.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. If you are typing your NDS log on ID or Windows NT log on ID and password at
	  this window, for "Account name:" type the Mailbox ID of the GroupWise account
	  that will be doing the migration. The "Password:" should be the password for
	  that mailbox.
	
	  NOTE: Most GroupWise users do not have a password on their mailbox because
	  GroupWise and NDS usually take care of properly authenticating users before
	  granting access to the mailbox.
	
	2. Make sure that the account used for the migration has Administrator- level
	  rights to both Exchange Server and GroupWise/NDS.
	
	3. Confirm that the account in NDS has been granted the GroupWise Administrator,
	  as well.
	
	4. Ensure that you are running the latest Novell intraNetWare Client for Windows
	  NT. Supported versions that have been tested are 4.1 and 4.11a. Microsoft
	  STRONGLY recommends customers use the latter version.
	
	5. Check to make sure that the client connection method on the post office agent
	  in GroupWise is configured for Direct as opposed to Client-Server.
	
	If particular GroupWise mailboxes take a long time to migrate or do not
	completely migrate, or produce errors, try the following:
	
	1. Map a drive from the Migration Wizard machine directly to the GroupWise PO on
	  the Netware Server.
	
	2. In the GroupWise Client on the Migration Wizard machine, use the full path to
	  the GroupWise post office, not the UNC path.
	
	3. Remove the TCP/IP address of the Netware server from the GroupWise client.
	
	4. In the Migration Wizard, browse to the mapped connection to the GroupWise PO
	  and try the migration of the problem mailboxes again.
	
	Additional query words: gwise
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
