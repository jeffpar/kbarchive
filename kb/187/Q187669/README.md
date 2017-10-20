---
layout: page
title: "Q187669: Unable to Use NetBIOS Resources over SLIP"
permalink: /kb/187/Q187669/
---

## Q187669: Unable to Use NetBIOS Resources over SLIP

{% raw %}

	Article: Q187669
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Windows NT version 4.0 SLIP connection, you are able to use
	Winsock-type traffic such as telnet, ftp, and ping, but you are not able to do
	any NBT traffic such as a domain logon (checking logon using DUN box), net use,
	or net view. In the SLIP entry, the proper entries for DNS, WINS, and even
	LMHOSTS are provided. You are not able to do a net use using the IP address of
	the server or the name. NBT traffic does not work over a Windows NT SLIP
	connection if you capture the network traffic.
	
	CAUSE
	=====
	
	This is a known issue in the Rasiphlp.dll file.
	
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
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
