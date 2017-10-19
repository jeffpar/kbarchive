---
layout: page
title: "Q287056: XFOR: Event ID 1027 During cc:Mail to Exchange Server 5.5 Migr."
permalink: /kb/287/Q287056/
---

## Q287056: XFOR: Event ID 1027 During cc:Mail to Exchange Server 5.5 Migr.

	Article: Q287056
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate users from Lotus cc:Mail to Exchange Server 5.5, the following
	error messages are logged:
	
	  
	
	  Date            11/24/01                Event ID        1027
	  Time            12:14:44 PM             Source          MSExchangeMig
	  User            N/A                     Type            Error		
	  Computer        XXXXX03                 Category        None
	
	  -and-
	
	  cc:Mail - Export program returned an invalid Message size of '0'. Account
	  'One, User' did not migrate successfully.
	
	CAUSE
	=====
	
	This problem can occur if the cc:Mail Export program incorrectly writes spaces
	to some messages where size should be written.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Migration
	
	+-----------------------+
	| File name   | Version | 
	+-----------------------+
	| Mlmig32.dll | 2654.89 | 
	+-----------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The logic in the Microsoft Migration tool has been modified to resolve this
	problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
