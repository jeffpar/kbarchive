---
layout: page
title: "Q198516: WLBS Uses Port 2504 for Remote Control"
permalink: /kb/198/Q198516/
---

## Q198516: WLBS Uses Port 2504 for Remote Control

	Article: Q198516
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Window NT Load Balancing Service cluster control program (WLBS.exe) allows you
	start, stop, and query the cluster from any networked Windows NT system. You can
	control all cluster hosts with one command, or you can control them
	individually. Certain actions, such as modifying parameters, can only be
	performed on the cluster hosts. Because it is a console-based application, this
	program can be incorporated into scripts used for system management. The command
	line for WLBS.exe has the following form:
	
	  WLBS <command> [<cluster>[:<host>]
	  [<remote_options>]]
	
	The control program has full password protection to prevent unauthorized access.
	By default, WLBS.exe will send remote control requests to UDP port 2504.
	
	MORE INFORMATION
	================
	
	WLBS uses UDP port number 2504 for receiving remote control requests, while
	Convoy used port 1717. By default, WLBS.exe will send remote control requests to
	port 2504 and will not be able to control mixed Convoy/WLBS clusters. Please
	note that, for backward compatibility, WLBS hosts will still respond to remote
	control requests on port 1717 in addition to the new port 2504 if Convoy hosts
	are detected as part of the cluster.
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
