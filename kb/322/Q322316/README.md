---
layout: page
title: "Q322316: XADM: Event ID 181 Recurs in the Application Event Log"
permalink: kb/322/Q322316/
---

## Q322316: XADM: Event ID 181 Recurs in the Application Event Log

	Article: Q322316
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice the following recurring event in the application event log of the
	Windows NT Event Viewer:
	
	  Event ID: 181
	  Source: MSExchangeDSEXP
	
	  Description: Could not bind to the Microsoft Exchange Directory server
	  <ServerName>. You do not have the permissions required to complete the
	  operation.
	
	NOTE: This event may be logged in approximately 30-second intervals.
	
	CAUSE
	=====
	
	This behavior may occur if the Computer Associates (CA) Unicenter TNG program is
	installed on the Exchange Server computer.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Computer Associates to obtain an update for the
	Unicenter TNG Exchange Server agent.
	
	For information about how to contact Computer Associates, click the appropriate
	article number in the following list to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	WORKAROUND
	==========
	
	To work around this issue, turn off (disable) Unicenter TNG-related services.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
