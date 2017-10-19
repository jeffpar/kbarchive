---
layout: page
title: "Q187508: FTP Server Fails to Respond If First Binding Does Not Work"
permalink: /kb/187/Q187508/
---

## Q187508: FTP Server Fails to Respond If First Binding Does Not Work

	Article: Q187508
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multihomed FTP server fails to respond to simple commands like DIR or GET.
	
	CAUSE
	=====
	
	If an Internet Information Server FTP server is running on a computer with two
	network interface cards and the first interface is not available (connection
	broken, for example). You will only get the normal status line from the FTP
	server.
	
	RESOLUTION
	==========
	
	Outgoing FTP traffic goes out the first entry in the route table to that
	network. On a multihomed computer on the same IP network, all outbound traffic
	will exit on the card that has the first entry in the route table. If you change
	the IP address of that card, it will change the location in the route table.
	
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
	
	
	MORE INFORMATION
	================
	
	With this fix, FTP makes back connections using the source IP address that the
	client connected to. This fixes problems with firewalls and any device that is
	expecting this behavior.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400 kbiis300
	Version           : WinNT:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
