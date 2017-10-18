---
layout: page
title: "Q182203: XADM: Browse Does Not Locate Exchange Servers Across Windows NT"
permalink: kb/182/Q182203/
---

## Q182203: XADM: Browse Does Not Locate Exchange Servers Across Windows NT

	Article: Q182203
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Exchange Administrator program and choose File, Connect to
	Server, and then click the Browse button to locate all available Microsoft
	Exchange Server computers, you may receive the following error message:
	
	  The list of Microsoft Exchange Server Computers is not available,
	  because no Microsoft Exchange Server Computer could be located.
	
	CAUSE
	=====
	
	When you click the Browse button without any server name typed in, Microsoft
	Exchange Server uses the Windows NT RPC locator service to find a Microsoft
	Exchange Server computer. This service looks only in the current domain and if
	no Microsoft Exchange Server computers are found in this domain, the above error
	message is reported.
	
	This is by design. This problem occurs only when there are no Exchange Server
	computers available in the domain and only the Microsoft Exchange Administrator
	program is installed in the domain.
	
	WORKAROUND
	==========
	
	Type in the name of one of the Microsoft Exchange Server computers, and then
	click the Browse button. This will locate and connect to the Microsoft Exchange
	Server computer in a different domain.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
