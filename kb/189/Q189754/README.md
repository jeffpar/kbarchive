---
layout: page
title: "Q189754: XCON: Remote X.400 MTA May Abort the Connection to Exchange"
permalink: kb/189/Q189754/
---

## Q189754: XCON: Remote X.400 MTA May Abort the Connection to Exchange

	Article: Q189754
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A third-party X.400 message transfer agent (MTA) may abort the connection to
	Microsoft Exchange Server after receiving an RTSE Open Accept frame.
	
	CAUSE
	=====
	
	The third-party MTA may try to open a connection to Microsoft Exchange Server
	via an X.400 link without specifying the parameter "Window Size." This parameter
	is optional in the RTSE Open Request frame. Microsoft Exchange Server answers
	with an RTSE Open Accept frame asking for a "Window Size" of 5. According to the
	X.228 specification, a "Window Size" of 3 has to be assumed if nothing else was
	specified in the RTSE Open Request.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
