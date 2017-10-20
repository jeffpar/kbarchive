---
layout: page
title: "Q182281: Remote Access Service Callback Authentication Does Not Work"
permalink: /kb/182/Q182281/
---

## Q182281: Remote Access Service Callback Authentication Does Not Work

{% raw %}

	Article: Q182281
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Callback authentication may not work with Windows NT-based Remote Access Service
	(RAS) servers when you attempt to connect to a Shiva LanRover Access Switch
	version 4.5 or an IBM 8235 Remote Access Server.
	
	
	CAUSE
	=====
	
	This behavior can occur with remote access devices that do not support the
	Microsoft Call Back Challenge Protocol (CBCP) for callback authentication.
	
	MORE INFORMATION
	================
	
	The Shiva LanRover Access Switch version 4.5 and the IBM 8235 Remote Access
	Server use Shiva's proprietary Shiva Password Authentication Protocol (SPAP) for
	callback authentication and do not support CBCP. Contact the manufacturer for
	more information.
	
	For information about how to contact Shiva or IBM, query in the Knowledge Base
	for one of the following articles:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	  ARTICLE-ID: Q60781
	  TITLE : Hardware and Software Third-Party Vendor Contact List, L-P
	
	  ARTICLE-ID: Q60782
	  TITLE : Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
