---
layout: page
title: "Q203116: XFOR: TCP/IP Listener Socket Error Message When Starting IMS"
permalink: /kb/203/Q203116/
---

## Q203116: XFOR: TCP/IP Listener Socket Error Message When Starting IMS

	Article: Q203116
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Internet Mail Service, you may receive the following event in the
	Application Log of the Microsoft Windows NT Event Viewer:
	
	  Event ID: 4007
	  Description: The following error occurred while trying to bind the TCP/IP
	  listener socket (10050)
	
	CAUSE
	=====
	
	This error message can occur if Microsoft Proxy Client is installed and enabled
	on Microsoft Exchange Server but Exchange Server is not connecting to the
	Internet through Microsoft Proxy Server.
	
	WORKAROUND
	==========
	
	If you are using Microsoft Proxy Server on your Exchange Server computer, you
	must also use Microsoft Proxy Client. Conversely, if you are using a proxy
	server other than Microsoft Proxy Server, you must disable Microsoft Proxy
	Client.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
