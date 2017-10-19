---
layout: page
title: "Q216476: FFAPI: Messages Get Duplicated when Sending Across FFAPI Gateway"
permalink: /kb/216/Q216476/
---

## Q216476: FFAPI: Messages Get Duplicated when Sending Across FFAPI Gateway

	Article: Q216476
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If User A on Exchange Server A has an alternate recipient specified on the
	Delivery Option tab to point to User B, who is a user on a foreign mail system
	(and the "deliver messages to both recipient and alternate recipient" option is
	selected), User B receives a duplicate message when a user on Exchange Server A
	sends a message to UserA and UserB.
	
	       Exchange Server A
	            |
	   MS Mail Connector
	            |
	     Net / PO1
	            |
	     Net / PO2 
	            |
	       FFAPI
	            |
	       Foreign mail system
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/support/supportnet/default.asp
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-----------------------------------------------+
	| File name    | Date   | Time  | Size          | 
	+-----------------------------------------------+
	| Gate_get.exe | 3/2/98 | 1:23p | 107,715 bytes | 
	+-----------------------------------------------+
	| Gate_put.exe | 3/2/98 | 4:07p | 100,789 bytes | 
	+-----------------------------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Software
	Development Kit: FFAPI for Gateways and Applications version 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
