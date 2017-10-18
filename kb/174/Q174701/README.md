---
layout: page
title: "Q174701: XCLN: Troubleshooting RPC Problems for Exchange Clients"
permalink: kb/174/Q174701/
---

## Q174701: XCLN: Troubleshooting RPC Problems for Exchange Clients

	Article: Q174701
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0,8.1; WINDOWS:2000,4.0,5.0,8.0,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Outlook or the Microsoft Exchange Client, the following
	error message may be displayed:
	
	  Could not connect to your Exchange server. There may be a network problem or
	  your server may be down.
	
	This error message can be caused by problems with the e-mail client RPC (remote
	procedure call) communication with the Exchange Server computer.
	
	When the Exchange Client is installed, it sets the default RPC protocol binding
	order of the network protocols that RPC attempts to bind over.
	
	Therefore, if the Exchange Client does not start or stops responding during
	startup, it may be the result of either a network connectivity problem or an RPC
	problem. You can use the following steps to troubleshoot this issue:
	
	1. First, determine whether there may be a network connectivity problem by
	  trying to connect to the Exchange Server computer with the NET USE command at
	  a command prompt. For example:
	
	  net use * \\address
	
	  The address directory is shared out by default. For more information on the
	  NET USE command, type NET USE/? at a command prompt or please see the
	  following article in Microsoft Knowledge Base
	
	  Q143351 : How to Check Network Connectivity Using Net Diagnostics
	
	  If a connection to the Exchange Server computer can be made at a command
	  prompt, try to map a network drive to the Exchange Server computer either in
	  File Manager for the Windows 3.1x client or Network Neighborhood in Windows
	  95 or Windows NT 4.0.
	
	  To map a network drive in Windows 3.1x:
	
	  1. Open File Manager in the Main Program Group.
	
	  2. Click Disk from the Menu options listed.
	
	  3. Under Disk, click Connect Network Drive.
	
	  4. From the Connect Network dialog box, go to the Path text box and type the
	     following:
	
	  \\<exchangeserver_name>\address
	
	  5. Click OK.
	
	  NOTE: Do not include the angle brackes <> when specifying the name of
	  the Exchange Server computer.
	
	  To map a network drive in Windows 95 or Windows NT:
	
	  1. Right-click or secondary-click on Network Neighborhood located on the
	     desktop.
	
	  2. From the secondary menu, click Map Network Drive.
	
	  3. From the Map Network Drive dialog box, go to the Path text box and type
	     the following:
	
	  \\<exchangeserver_name>\address
	
	  4. Click OK.
	
	  NOTE: Do not include the angle brackets <> when specifying the name of
	  the Exchange Server computer.
	
	  If successful at this point, basic network connectivity is working. Proceed to
	  step 2. If unsuccessful at this point, determine if the problem is
	  protocol-specific or hardware-specific (netcard, cabling, and so on). Be sure
	  to test each protocol individually to isolate the problem.
	
	  For more information on TCP/IP specific issues, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q155048 : XCLN: Troubleshooting Startup of Windows Client Using TCP/IP
	
	  For more information on IPX/SPX specific issues, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q161626 : XCLN: Troubleshooting IPX/SPX Connections
	
	  For additional information on troubleshooting connectivity problems, please
	  see the following articles(s) in the Microsoft Knowledge Base:
	
	  Q99859 : Windows for Workgroups: Avoiding Hardware Conflicts
	
	  Q104322 : How to Troubleshoot WFWG Network Connection Problems
	
	  Q141497 : How to Use Device Manager to Check the Status of a Resource
	
	  Q169790 : How to Troubleshoot Basic TCP/IP Problems in Windows NT 4.0
	
	  Q102908 : How to Troubleshoot TCP/IP Connectivity with Windows NT
	
	  Q152262 : Mismatched IPX/SPX Frame Types Prevent Connectivity
	
	  Q166321 : Configuring Maximum IPX Packet Size in Windows 95
	
	2. Next try connecting to the Exchange Server computer from multiple computers
	  using the problem mailbox to determine whether the problem may be workstation
	  or mailbox specific.
	
	3. Try taking networking completely out of the picture by installing the
	  Exchange Client on the Exchange Server computer. Set up a profile with the
	  Mailbox that is having the connection problem.
	
	4. Once it has been determined that basic network connectivity is working and
	  Exchange Server is the only application having problems when starting, try
	  the following:
	
	  a. Focus on troubleshooting the RPC_Binding_Order entries. Refer to the
	     following Microsoft Knowledge Base article to troubleshoot this issue:
	
	  Q163576 : XGEN: Changing the RPC Binding Order
	
	  b. If the client is still hanging upon startup after modifying the
	     RPC_Binding_Order, try the RPC Ping utility that is included on the
	     Exchange Server CD, located in the Support directory.
	
	     The server-side component of the RPC Ping utility, Rpings, is run from the
	     Exchange Server computer to determine over which protocols RPC can bind
	     and which protocols can be accepted from the client. Rpings should be run
	     before the client-side components of RPC Ping are run. Here is an example
	     of Rpings from an Exchange Server computer:
	
	         +endpoint \pipe\rping on protocol sequence ncacn_np is set for
	            use.
	         +endpoint 52 on protocol sequence ncacn_nb_nb is set for use.
	         +endpoint rping on protocol sequence ncalrpc is set for use.
	         +endpoint 2256 on protocol sequence ncacn_ip_tcp is set for use.
	         +endpoint 53 on protocol sequence ncacn_nb_tcp is set for use.
	         +endpoint 54 on protocol sequence ncacn_spx is set for use.
	         +endpoint 2256 on protocol sequence ncadg_ip_udp is set for use.
	         +endpoint 55 on protocol sequence ncadg_ipx is set for use.
	         *  protocol Sequence ncacn_vns_spp not supported on this host
	
	         Enter '@q' to exit rpings.
	 
	
	     The result of the Rpings example above indicates that a client can
	     communicate with the Exchange Server computer over NetBEUI, Local RPC,
	     TCP/IP, or IPX/SPX. As the last line above indicates, Support for Banyan
	     Vines was not installed on this server.
	
	     At this point, run the client-side component of RPC Ping, either Rpingc32
	     on a Windows NT Workstation or Windows 95 client, or Rpingc16, on a
	     Windows 3.1x client. Run Rpingdos on a DOS client.
	
	     For more information on running the RPC Ping utility, see the following
	     article in the Microsoft Knowledge Base:
	
	  Q167260 : XCLN: How to Use RPCPing to Test RPC Communication
	
	     From the client, test each protocol separately to determine which protocols
	     are able to bind. You will need the following information and settings:
	
	     1. Exchange Server computer name
	
	     2. Set the Protocol Sequence to one of the protocols that the server has
	        listed in use
	
	     3. Set Endpoint to Rping
	
	     4. Set Number of Pings to stop at 1
	
	     5. Set Mode to Endpoint Search
	
	     Try running RPC Ping with and without Security enabled.
	
	     If running RPing from the server is successful with a specific protocol,
	     place that protocol first in the RPC_Binding_Order and then try to start
	     the Exchange Client.
	
	  c. If RPing is unsuccessful over any protocols, there may be a corrupted RPC
	     support file. Rename all of the following files in the Windows\System or
	     Winnt\System32 directory and copy them either from a working client or
	     sharepoint. The nine RPC support files for the Windows NT client are:
	     Rpcss.exe, Rpcrt4.dll, Rpcns4.dll, Rpcltscm.dll, Rpclts8.dll, Rpclts1.dll,
	     Rpcltccm.dll, Rpcltc8.dll, Rpcltc1.dll.
	
	  NOTE: For the 16-bit and DOS clients, the RPC .dll files are included with the
	  Exchange Client. For the 32-bit clients, Windows 95 and Windows NT, they are
	  included with the operating system.
	
	5. If there is the possibility of a domain credentials problem, try clearing the
	  "Use Network Security during Logon" check box located on the Advanced tab of
	  Microsoft Exchange Server service page. The Advanced tab is located in both
	  Control Panel, Mail icon, or in Exchange Server or Outlook (click Tools,
	  Services. Select Microsoft Exchange Server service, click Properties, then
	  select the Advanced tab to access this check box).
	
	  This will force the user to provide his or her Windows NT Credentials:
	
	  Username, Password and Domain name.
	
	6. The last step is to run a network trace to try and pinpoint the problem using
	  Network Monitor. For more information on using Network Monitor to trace
	  network RPC problems, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q159298 : Analyzing Exchange RPC Traffic Over TCP/IP
	
	  For additional information, please see the following articles(s) in the
	  Microsoft Knowledge Base:
	
	  Q149045 : XCLN: RPC Files Installed w/ Windows 3.x & MS-DOS Clients
	
	  Q149819 : RPC Causes Exchange Server to Hang All Connected Clients
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : MACINTOSH:8.0,8.1; WINDOWS:2000,4.0,5.0,8.0,97,98
	Issue type        : kbhowto
	
	=============================================================================
	
