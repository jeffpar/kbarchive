---
layout: page
title: "Q171649: DNS Err Msg: The Handle is Invalid"
permalink: /kb/171/Q171649/
---

## Q171649: DNS Err Msg: The Handle is Invalid

{% raw %}

	Article: Q171649
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0. 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Domain Name Service (DNS) server fails to start when Windows NT
	starts. When you attempt to start the Microsoft DNS Service through the Control
	Panel Services tool, you may receive an error similar to the following:
	
	  The handle is invalid.
	
	
	
	CAUSE
	=====
	
	The symptom above may be caused by another manufacturer's DNS service running on
	your computer running Windows NT Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, stop any third-party DNS services using one of the
	following methods:
	
	- Stop the specific service using the Control Panel Services tool.
	
	  -or-
	
	- Open a command prompt and carry out the "net stop <servicename>"
	  (without the quotes) where <servicename> is the third-party DNS
	  service.
	
	
	MORE INFORMATION
	================
	
	It may also be necessary to remove the third-party DNS service completely to get
	the Microsoft DNS Service working properly. Please consult the manufacturer of
	the third-party DNS service for removal instructions.
	
	Additional query words: BIND tcpip
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
