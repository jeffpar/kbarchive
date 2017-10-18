---
layout: page
title: "Q296692: Troubleshooting TCP Ports in SYN_RECEIVED State for Long Periods"
permalink: kb/296/Q296692/
---

## Q296692: Troubleshooting TCP Ports in SYN_RECEIVED State for Long Periods

	Article: Q296692
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using Winsock TCP ports, you may experience performance problems,
	such as programs that stop responding (hang). You may also notice that some TCP
	ports stay in the SYN_RECEIVED state for long periods of time. This article
	describes how to proceed if you experience these problems.
	
	MORE INFORMATION
	================
	
	If you suspect that the behaviors that you are encountering are caused by
	network problems, type the following command at a command prompt to view
	connections that are in the SYN_RECEIVED state:
	
	  "netstat -n -p tcp" (without the quotation marks)
	
	Output that is similar to the following text appears after you run this command:
	
	  TCP 159.173.161.130:3600 159.173.150.227:1041 SYN_RECEIVED
	  TCP 159.173.161.130:3600 159.173.162.59:1040 SYN_RECEIVED
	  TCP 159.173.161.130:3600 159.173.162.60:1035 SYN_RECEIVED
	  TCP 159.173.161.130:3600 159.173.162.74:1039 SYN_RECEIVED
	  TCP 159.173.161.130:3600 159.173.162.96:1042 SYN_RECEIVED
	
	If you run the netstat command one hour later, the TCP ports are still in the
	SYN_RECEIVED state, which can occur if the registry keys that control the
	functionality of the TCP/IP protocol are in a non-functioning state. To resolve
	this problem, set the following registry keys back to their default values:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	  Value Name: TcpMaxDataRetransmissions
	  Data Type: REG_DWORD - Number
	  Valid Range: 0 - 0xFFFFFFFF
	  Default: 5
	
	  Value Name: InitialRtt
	  Data Type: REG_DWORD
	  Valid Range: 0-65535 (decimal)
	  Default: 0xBB8 (3000 decimal)
	
	If you find the SynAttackProtect key, and your computer is not under a SYN
	attack, delete this key. For additional information about how to know whether
	your system is under a TCP SYN attack, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q142641 Internet Server Unavailable Because of Malicious SYN Attacks
	
	In addition, verify that your network is operating properly without losing a
	large number of frames. To do this, create a network trace. An indication of
	packet loss is a high number of TCP retransmission frames. Many advanced network
	sniffer tools, such as Microsoft Network Monitor 2.0, are able to locate TCP
	retransmissions.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q170359 How to Modify the TCP/IP Maximum Retransmission Timeout
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Component         : TCP/IPServices
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbhowto
	Solution Type     : kbnofix
	
	=============================================================================
	
