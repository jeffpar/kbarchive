---
layout: page
title: "Q172216: How to Force Routing and Remote Access to Use PAP"
permalink: kb/172/Q172216/
---

## Q172216: How to Force Routing and Remote Access to Use PAP

	Article: Q172216
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the method for forcing a Routing and Remote Access (RRAS)
	server for Windows NT 4.0 to authenticate RAS clients using PAP instead of CHAP,
	SPAP, or MS-CHAP. This may be necessary, depending on your RAS clients or some
	third-party authentication solutions.
	
	MORE INFORMATION
	================
	
	If your RRAS server is configured to "Allow any authentication including clear
	text," a RAS client is able to connect with PAP, SPAP, CHAP, or MS- CHAP
	depending, on what the client supports. Normally, a Microsoft RAS client will
	attempt to connect with CHAP or MS-CHAP, if that is valid for the RAS server to
	which it is connecting.
	
	To force a RAS client to use PAP, you must delete the SPAP and CHAP registry keys
	from your RAS Server using the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following subkey:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\PPP
	
	3. Click SPAP, click Edit, and click Delete.
	
	4. Click Yes to confirm the deletion.
	
	5. Click CHAP, click Edit, and click Delete.
	
	6. Click Yes to confirm the deletion.
	
	7. Close Registry Editor and stop and restart the Routing and Remote Access
	  Service.
	
	
	NOTE: This will not work on normal Windows NT RAS servers, only Windows NT 4.0
	RAS servers that have Routing and Remote Access installed. If you delete these
	registry keys on a normal RAS server, the RAS services will fail to start after
	you restart.
	
	The following two scenarios require the above steps to force RAS clients to use
	PAP authentication:
	
	- You are using a PPP client that can only use PAP, but does not notify the RAS
	  server that it needs to use PAP during the LCP negotiation.
	
	  -or-
	
	- You are using the new Radius client included in the Routing and Remote Access
	  Service Update. Many Radius servers do not accept the attribute 60 CHAP
	  Challenge that the Radius Client sends to the Radius server when
	  authenticating a RAS client using CHAP. This is a valid attribute according
	  to RFC 2058: "Remote Authentication Dial In User Service (RADIUS)"; however,
	  many older Radius servers cannot handle this newer attribute.
	
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q136634 Remote Access Services Authentication Summary
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
