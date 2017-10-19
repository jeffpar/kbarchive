---
layout: page
title: "Q182318: XCON: Mad.exe Reaches 100% After You Recalculate Routing"
permalink: /kb/182/Q182318/
---

## Q182318: XCON: Mad.exe Reaches 100% After You Recalculate Routing

	Article: Q182318
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the Recalculate Routing button on the Routing tab of the Site
	Addressing property page in the Microsoft Exchange Administrator program to
	recalculate the routing on Exchange Server 5.0, the Mad.exe process may use 100
	percent of the CPU.
	
	In the Windows NT Performance Monitor, you will see that the % Processor Time for
	the MAD process goes to 100 percent and does not drop from this figure even when
	left for 24 hours.
	
	CAUSE
	=====
	
	The message transfer agent (MTA) has hit a loop in the routing recalculation
	code.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
