---
layout: page
title: "Q188639: XADM: Dr. Watson When Installing 5.0 into 5.5 Site w/INS"
permalink: kb/188/Q188639/
---

## Q188639: XADM: Dr. Watson When Installing 5.0 into 5.5 Site w/INS

	Article: Q188639
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to install Exchange Server version 5.0 into an existing Exchange
	5.5 site that is running Internet News Service (INS), you may receive a Dr.
	Watson error exception c0000005 in Srvrmax.exe.
	
	CAUSE
	=====
	
	When the Network News Transfer Protocol (NNTP) object is being created under the
	new server, the Site NNTP object is copied first. As a result, version 5.5
	attributes are being passed to the new 5.0 server that Setup does not
	understand.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Contact Microsoft Technical Support for more information.
	
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
