---
layout: page
title: "Q180731: How to Print to an HP JetDirect Printer by Means of LPR"
permalink: /kb/180/Q180731/
---

## Q180731: How to Print to an HP JetDirect Printer by Means of LPR

	Article: Q180731
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Windows NT 4.0 to print to a
	Hewlett-Packard (HP) JetDirect print server device by means of LPR (line printer
	remote).
	
	MORE INFORMATION
	================
	
	Install the TCP/IP Printing Service
	-----------------------------------
	
	NOTE: If the TCP/IP Printing service is already installed, you may skip this
	section.
	
	Perform the following steps to install the TCP/IP Printing service:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Services tab, and then click Add.
	
	3. Click Microsoft TCP/IP Printing, click OK, and then click Close.
	
	4. When prompted, shut down and restart your computer.
	
	5. Reapply the latest Service Pack.
	
	Set the LPR Port
	----------------
	
	If you do not have a printer installed, perform the following steps to install
	the printer and set the LPR port:
	
	1. Click the Start button, point to Settings, click Printers, and then
	  double-click Add Printer.
	
	2. Click My Computer and then click Next. When prompted for the port, click Add
	  Port.
	
	3. Click LPR Port and then click New Port.
	
	4. In the "Name or address of server providing lpd" field, enter the IP address
	  of the HP JetDirect external printer server device or the internal HP
	  JetDirect adapter.
	
	5. In the "Name of printer or print queue on that server" enter raw for an
	  internal HP JetDirect adapter or raw1, raw2, or raw3 for an external HP
	  JetDirect print server device (depending on whether the HP JetDirect port
	  that the printer is connected to is port1, port2, or port3).
	
	6. Click OK, click Close, and then click Next to complete the installation of
	  the printer.
	
	If you already have a printer installed, perform the following steps to set the
	LPR port:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Right-click your printer and then click Properties.
	
	3. Click the Ports tab and then click Add Port.
	
	4. Click LPR Port and then click New Port.
	
	5. In the "Name or address of server providing lpd" field, enter the IP address
	  of the HP JetDirect external printer server device or the internal HP
	  JetDirect adapter.
	
	6. In the "Name of printer or print queue on that server" enter raw for an
	  internal HP JetDirect adapter or raw1, raw2, or raw3 for an external HP
	  JetDirect print server device (depending on whether the HP JetDirect port
	  that the printer is connected to is port1, port2, or port3).
	
	7. Click OK, click Close, and then click OK.
	
	TCP/IP Settings
	---------------
	
	Before printing, make certain TCP/IP is enabled and configured correctly on the
	HP JetDirect print device. To do this, attempt to ping the HP JetDirect device's
	IP address by typing "ping <IP address>" (without the quotation marks) at
	a command prompt, where <IP address> is the HP JetDirect device's IP
	address.
	
	For more information on troubleshooting TCP/IP problems, please see the following
	article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q169790
	  TITLE : How to Troubleshoot Basic TCP/IP Problems in Windows NT 4.0
	
	Additional query words: lpd line printer daemon
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
