---
layout: page
title: "Q141189: BUG: Wrong Error Code on NetBIOS Call When Using NWNBLNK"
permalink: /kb/141/Q141189/
---

## Q141189: BUG: Wrong Error Code on NetBIOS Call When Using NWNBLNK

{% raw %}

	Article: Q141189
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbNetBIOS kbSDKPlatform kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using an application that communicates using NetBIOS and uses
	NWLink as a protocol, the application may report incorrect error messages. The
	errors indicate that the server application is not running although you can
	confirm the server is running.
	
	CAUSE
	=====
	
	When a client application uses NCBCALL to connect to a remote server application
	there are several possible error conditions. One is when the server application
	does not currently accept new connections (error code NRC_REMTFUL, 0x12) and
	another error is when the application name the client looks for is not
	registered on the remote computer (error code NRC_NOCALL, 0x14).
	
	NWLink returns NRC_NOCALL for both cases so the client assumes the remote
	computer does not have the server application running, whereas NRC_REMTFUL
	indicates that a new connection attempt can be made later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in the latest
	Microsoft Windows NT 4.0 U.S. Service Pack. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbNetBIOS kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
