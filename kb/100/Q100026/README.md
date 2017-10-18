---
layout: page
title: "Q100026: 3COM: DocErr: 3ComGateDomain Incorrectly Listed as PO1:NET1"
permalink: kb/100/Q100026/
---

## Q100026: 3COM: DocErr: 3ComGateDomain Incorrectly Listed as PO1:NET1

	Article: Q100026
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for version 1.00 of the Microsoft Mail Gateway to 3Com 3+Mail
	contains an error that can disrupt gateway installation.
	
	Page 22 of the "Administrator's Guide" states that the 3ComGateDomain entry is
	PO1:NET1, when it would more commonly be entered as MSMAIL:MS, as follows:
	
	  3ComGateDomain=MSMAIL:MS
	
	Although PO1:NET1 is a legal 3+ name and may work, it is an unlikely name for a
	new 3+Mail domain.
	
	In keeping with the example on page 19, the new domain for the example on page 22
	is MSMAIL and the original organization is MS, so the entry should be MSMAIL:MS.
	This would log the computer on to the 3Com XNS Name/Mail service as:
	
	  _GATEWAY:MSMAIL:MS.
	
	
	Additional query words: 1.00 err
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	
