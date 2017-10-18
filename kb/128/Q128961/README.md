---
layout: page
title: "Q128961: XCLN: Err Msg: Windows Sockets Error: Failed in Connect"
permalink: kb/128/Q128961/
---

## Q128961: XCLN: Err Msg: Windows Sockets Error: Failed in Connect

	Article: Q128961
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you use the Microsoft Exchange Internet Mail
	service:
	
	  Windows Sockets error
	  Failed in Connect
	
	CAUSE
	=====
	
	One of the following two events has occurred:
	
	- The TCP/IP software on the local computer is not installed or configured
	  properly.
	
	- The other host is down.
	
	RESOLUTION
	==========
	
	1. To check for proper installation and configuration, follow the steps below:
	
	  a. In the Microsoft Windows 95 Control Panel, double-click the Network icon.
	
	  b. Click the network interface adapter and click the Properties button.
	
	  c. Click the Bindings tab and make sure TCP/IP is bound to the network
	     adapter (Microsoft TCP/IP should be checked; if it is not checked, it is
	     not bound to the network adapter.)
	
	  d. Click the Cancel button.
	
	  e. Click the TCP/IP line and click Properties.
	
	  f. Check the IP address tab for your IP address and subnet mask, or DHCP.
	
	  g. If you are not using DHCP, check the Gateway tab for a gateway IP address.
	
	  h. Check the Bindings tab to ensure Client For Microsoft Networks is checked.
	
	  i. On the Start menu, click Run.
	
	  j. In the Open list box, type "winipcfg" (without the quotation marks).
	
	  k. Click the Advanced button to verify the IP address, mask, and gateway.
	
	If you have not found the problem yet, simplify the configuration by removing any
	other protocols, additional network interface adapters, and server
	functionality.
	
	Restart and see if TCP/IP is working.
	
	2. To check the other host, perform the following steps:
	
	  a. Go to an MS-DOS prompt.
	
	  b. Type the following:
	
	  ping <ip address of other host>
	
	If this command is not successful, contact the administrator of the other host to
	find out the status of the host. If it is successful, the other host is
	running.
	
	  c. Go to a Telnet prompt.
	
	  d. Connect to the other host, specifying port "smtp" or "25." If this is not
	     successful, contact the administrator of the other host to find out the
	     status of the host. If it is successful, the other host is running SMTP
	     and is ready for messages.
	
	Additional query words: tcpip
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
