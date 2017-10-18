---
layout: page
title: "Q183064: XCON: MTA Does Not Correctly Handle DDA Values With Equal Signs"
permalink: kb/183/Q183064/
---

## Q183064: XCON: MTA Does Not Correctly Handle DDA Values With Equal Signs

	Article: Q183064
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an X.400 address has Domain Defined Attribute (DDA) values set, and the DDA
	value string includes an equal sign (=), the message transfer agent (MTA) will
	not handle the DDA value correctly.
	
	CAUSE
	=====
	
	The MTA treats the equal sign as a field delimiter. If the DDA value is as
	follows:
	
	  XMROUTE: SN(u)U=X00Z(a)SN(u)L=KB00(a)MSR(a)D3000
	
	then the MTA will truncate the DDA value to:
	
	  XMROUTE: SN(u)U
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: MTA DDA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
