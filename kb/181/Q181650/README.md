---
layout: page
title: "Q181650: Context_rundown Called in RPC Server When RPC Client Idles"
permalink: kb/181/Q181650/
---

## Q181650: Context_rundown Called in RPC Server When RPC Client Idles

	Article: Q181650
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	Your Remote Procedure Call (RPC) server's context_rundown() function is called
	when your RPC client is inactive for more 5 minutes and uses either ncadg_ip_udp
	or ncadg_ipx as the communication protocol sequence.
	
	CAUSE
	=====
	
	This behavior is by design. When this timeout is reached, your RPC server
	assumes that the client is no longer available.
	
	RESOLUTION
	==========
	
	To avoid your RPC server from invoking your context_rundown() function, your RPC
	client needs to issue remoted function calls to your server periodically so that
	it does not go idle for more than 5 minutes.
	
	The context handle time-out described in the following Microsoft Knowledge Base
	article concerns RPC communication using ncacn_ip_tcp not ncadg_ip_udp.
	
	  ARTICLE-ID: Q151714
	  TITLE : WinNT RPC Client May Fail Against DCE Server
	
	Additional query words: context, rundown, ncadg_ip_udg, ncadg_ipx
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
