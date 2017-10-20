---
layout: page
title: "Q174474: Installing RRAS Disables 128-bit RAS Encryption"
permalink: /kb/174/Q174474/
---

## Q174474: Installing RRAS Disables 128-bit RAS Encryption

{% raw %}

	Article: Q174474
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0,95
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbnetwork win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you dial into your Microsoft Windows NT Routing and Remote Access Service
	(RRAS) Server, you may receive one of the following error messages depending on
	the Remote Access Service (RAS) client that you are using:
	
	Windows 95 using Dial-Up Networking 1.2
	---------------------------------------
	
	  Error 720: Dial-Up Networking could not negotiate a compatible set of network
	  protocols you specified in the Server Type settings. Check your network
	  configuration in the Control Panel then try the connection again.
	
	Windows NT Server or Workstation (Service Pack 1 or 2, or no Service Pack)
	--------------------------------------------------------------------------
	
	If Require Data Encryption is Enabled:
	
	  Error 742: The remote computer does not support the required encryption type.
	
	If Any Other RAS Security Setting is Enabled:
	
	  TCP/IP CP reported error 733: The PPP control protocol for this network
	  protocol is not available on the server.
	
	Windows NT Server or Workstation (Service Pack 3)
	-------------------------------------------------
	
	If Any RAS Security Setting is Enabled:
	
	  TCP/IP CP reported error 733: The PPP control protocol for this network
	  protocol is not available on the server.
	
	Windows NT Server with RRAS Update
	----------------------------------
	
	If Require Strong Data Encryption is Enabled:
	
	  Error 741: The local computer does not support the required encryption type.
	
	If Any Other RAS Security Setting is Enabled:
	
	  TCP/IP CP reported error 733: The PPP control protocol for this network
	  protocol is not available on the server.
	
	In addition to one of the above RAS client errors, your RRAS server will log the
	following event log error in Event Viewer:
	
	  Event ID : 20073
	  Source : Router
	  Description: The following error occurred in the %protocol_name% module on
	  port %port_name%. The local computer does not support the required encryption
	  type.
	
	CAUSE
	=====
	
	Your RRAS server has been configured for 128-bit RAS Encryption, however
	Ndiswan.sys has been replaced with the 40-bit version of the file.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow the steps in the following article in the
	Microsoft Knowledge Base:
	
	  Q169895 Enabling 128-bit Encryption for Routing and Remote Access
	
	MORE INFORMATION
	================
	
	When you install Routing and Remote Access Service on top of Service Pack 3
	(40-bit or 128-bit), it, by default, replaces Ndiswan.sys with a 40-bit
	version.
	
	If a RAS or PPTP connection is successful using 128-bit encryption, the following
	event will be logged in Event Viewer on your RRAS Server:
	
	  Event ID : 20142
	  Source : Router
	  Description: The user <username> has been connected and has been
	  successfully authenticated on port <port_name>. Data sent and received
	  over the link is strongly encrypted.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q104292 Identifying 128-bit Windows 95 DUN Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbWin95search kbZNotKeyword3 kbRRASNTSearch kbRRASNT400
	Version           : :4.0,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
