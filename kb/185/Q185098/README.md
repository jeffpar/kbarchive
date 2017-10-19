---
layout: page
title: "Q185098: XADM: AV in Dsamain.exe When Expanding or Scrolling Objects"
permalink: /kb/185/Q185098/
---

## Q185098: XADM: AV in Dsamain.exe When Expanding or Scrolling Objects

	Article: Q185098
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are expanding or scrolling through objects in the Exchange
	Administrator program, the Microsoft Exchange Directory Service generates an
	access violation (AV) and the service terminates.
	
	CAUSE
	=====
	
	One of the objects that is to be displayed to the screen in the Administrator
	user interface has a time attribute (When-Changed or When- Created) set to an
	invalid time (anytime before midnight, 1/1/1970).
	
	
	RESOLUTION
	==========
	
	To resolve this problem for versions 4.0 and 5.0, obtain the following version
	4.0 post-SP5 hotfix.
	
	To resolve this problem for version 5.5, obtain the latest service pack for
	Exchange Server version 5.5. For more information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Exchange Server 4.0 and 5.0
	---------------------------
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 4.0 and
	5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5. This
	problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
