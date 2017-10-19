---
layout: page
title: "Q189732: XADM: Required Privilege Not Held By Client"
permalink: /kb/189/Q189732/
---

## Q189732: XADM: Required Privilege Not Held By Client

	Article: Q189732
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you telnet to the Exchange Server computer on port 110 (as a POP3 user),
	you may receive the following error message:
	
	  A required privilege is not held by the client
	
	CAUSE
	=====
	
	This error occurs when the Exchange Server service account does not have Act as
	a part of the Operating System right.
	
	WORKAROUND
	==========
	
	To work around this problem, add the advanced right "Act as a part of the
	Operating System" to the Exchange Server service account by performing the
	following steps.
	
	1. In the Administrative tools, click User Manager for Domains.
	
	  NOTE: If the computer is a member server, you must set the focus of User
	  Manager for Domains to the local computer and not to the domain. To do this,
	  click User, and then click Domain. In the Domain box, type the name of the
	  local computer.
	
	2. Click the Exchange Server service account, and then click User Rights from
	  the Policies menu.
	
	3. Click "Show Advanced User Rights" in the lower left corner.
	
	4. From the Rights list, click the "Act as part of the operating system"
	  advanced right.
	
	5. Confirm that the Exchange Server account is in the lower list (Grant To).
	
	6. Click OK.
	
	7. Reboot.
	
	MORE INFORMATION
	================
	
	This error message will be displayed after the PASS command has been given in
	the telnet session. Sample session follows:
	
	  Telnet Host  110
	  +OK Microsoft Exchange POP3 server version 5.0.1457.10     ready
	  User <Domain\Username\Mailbox>
	  +OK
	  Pass <password>
	  -Err A required privilege is not held by the client
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
