---
layout: page
title: "Q110924: No Master Browse Server Available with TCP/IP"
permalink: /kb/110/Q110924/
---

## Q110924: No Master Browse Server Available with TCP/IP

{% raw %}

	Article: Q110924
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	3.11
	
	WINDOWS
	
	kbnetwork kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Browsing in Windows for Workgroups 3.11 may not work if TCP/IP is the only
	protocol installed.
	
	CAUSE
	=====
	
	When TCP/IP is the only protocol installed, there is no Browse Master election.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Increase NBSESSIONS in the [TCPIP] section of the PROTOCOL.INI file to 10.
	  Add a setting called NUMNAMES to the [TCPIP] section of the PROTOCOL.INI file
	  and set it to 11.
	
	  -or-
	
	- Add the line MaintainServerList=YES to the [NETWORK] section of the
	  SYSTEM.INI file.
	
	  -or-
	
	- Use NetBEUI in conjunction with TCP/IP.
	
	KBCategory: kbnetwork kbprb
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.11 tcp ip tc/pip browsing browser masterbrowser browsemaster browse master
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
