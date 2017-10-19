---
layout: page
title: "Q177471: EBCDIC Characters Not Properly Converted to ANSI Characters"
permalink: /kb/177/Q177471/
---

## Q177471: EBCDIC Characters Not Properly Converted to ANSI Characters

	Article: Q177471
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbWinNT400sp4fix kbRPC kbSDKPlatform kbGrpDSNet
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT client or server that receives EBCDIC characters from an IBM-
	compatible computer does not convert properly from EBCDIC character codes to
	ANSI character codes. For example, a received string may be garbled.
	
	CAUSE
	=====
	
	This problem occurs because the default conversion table does not map some
	characters as needed. Also, according to DCE (Distributed Computing Environment)
	specifications, the RPC (remote procedure calls) NDR (network data
	representation) does not provide information about code pages to the RPC layer.
	In other words, incoming data does not supply to the RPC receiver (client or
	server) any information about the code set or code page of the sender (client or
	server). This means that 1) the IBM-compatible computer can have a symmetrical
	problem when converting from a specific ANSI code page that is valid for a
	particular locale; and 2) the RPC layer cannot convert properly based on the
	information from the received data.
	
	RESOLUTION
	==========
	
	The default conversion table has been changed to default to mapping from 1047
	IBM EBCDIC code set to 1252 ANSI code page. This hotfix works properly for IBM
	and Microsoft systems that use the indicated default code set/code page.
	
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	ftp://ftp.microsoft.com
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbnetwork kbprint kbWinNT400sp4fix kbRPC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
