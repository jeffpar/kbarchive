---
layout: page
title: "Q172290: Routing and Remote Access &quot;Out of Buffers&quot; Event Logs"
permalink: /kb/172/Q172290/
---

## Q172290: Routing and Remote Access &quot;Out of Buffers&quot; Event Logs

	Article: Q172290
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Windows NT Routing and Remote Access (RRAS) server may start dropping calls
	randomly. The event log on the RRAS server may contain one or more of the
	following event log messages:
	
	  Event ID: 20073
	  Source: Router
	  Description: The following error occurred in the Point to Point Protocol
	  module on port COM1. Out of Buffers.
	
	-or-
	
	  Event ID: 20095
	  Source: Router
	  Description: Cannot receive initial data on port COM1 because of the following
	  error: Out of Buffers.
	
	-or-
	
	  Event ID: 20111
	  Source: Router
	  Description: A Demand Dial connection to the remote interface <name> on
	  port COM1 was successfully initiated but failed to complete successfully
	  because of the following error: Out of buffers.
	
	Your Remote Access Service (RAS) or Dial-Up Networking (DUN) clients may receive
	one or more of the following errors:
	
	  Error 629: The port was disconnected by the remote machine.
	
	-or-
	
	  Error 731: Dial-Up Networking could not negotiate a compatible set of network
	  protocols you specified in the Server Type settings. Check your network
	  configuration in the Control Panel then try the connection again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access Update
	for Windows NT Server version 4.0. This problem was corrected in the latest
	Routing & Remote Access Service Hotfix Update. You can obtain this update
	from Microsoft's World Wide Web Site on the Internet at the following location:
	
	  http://www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
