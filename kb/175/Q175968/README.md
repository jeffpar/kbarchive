---
layout: page
title: "Q175968: XCLN: Windows 3.x Client Fails to Send to SMTP Address"
permalink: kb/175/Q175968/
---

## Q175968: XCLN: Windows 3.x Client Fails to Send to SMTP Address

	Article: Q175968
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Windows 3.x client will not be able to send a message to
	an SMTP address. When you try to resolve the address, you will see the following
	error message:
	
	  The action could not be completed.
	
	When you try send the message, you will see the following error message:
	
	  The item could not be sent. The client operation failed.
	
	CAUSE
	=====
	
	The Microsoft Exchange Windows 3.x client is attempting to locate the name in
	the Global Address List (GAL) and is failing when passed a container type that
	is not expected. The problem occurs on Microsoft Exchange Servers that contain a
	large number of containers (approximately 200+ depending on size of the
	container's MAPI properties and their nesting level).
	
	WORKAROUND
	==========
	
	The resolution of the name is successful if you use the one-off syntax. For
	example:
	
	  [SMTP:User@Company.com]
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client, version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword3
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
