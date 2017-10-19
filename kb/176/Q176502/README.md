---
layout: page
title: "Q176502: RAS Authentication Rechallenge Resets Compression Flag"
permalink: /kb/176/Q176502/
---

## Q176502: RAS Authentication Rechallenge Resets Compression Flag

	Article: Q176502
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are connected to a Remote Access Service (RAS) server with either a
	Windows NT RAS Client or a Windows NT Routing and Remote Access Service (RRAS)
	Client that is using software compression, the compression flag may get reset.
	This will cause the RAS server to discard any packets from your RAS or RRAS
	Client.
	
	CAUSE
	=====
	
	The RAS server rechallenged the client's authentication by issuing an
	LCPConfigRequest after the connection has been established. During this
	reauthentication, the compression flag is reset so that the server thinks the
	client is not using compression; however, the client is still sending compressed
	data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
