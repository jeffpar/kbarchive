---
layout: page
title: "Q154268: XCLN: Troubleshooting RPC Problems with Windows 3.x Client"
permalink: /kb/154/Q154268/
---

## Q154268: XCLN: Troubleshooting RPC Problems with Windows 3.x Client

	Article: Q154268
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists steps to help you troubleshoot problems when you attempt to
	use the Microsoft Exchange Windows 3.x client to connect to a Microsoft Exchange
	Server computer using remote procedure call (RPC). The following problems are
	discussed:
	
	- The client cannot connect to the server on a Microsoft network.
	
	- The client cannot connect to the server on a Novell NetWare network.
	
	- The server cannot connect to the client.
	
	- The client cannot open a public folder on the server.
	
	- The client cannot connect to the server when you are using shared
	  installations of Windows and Microsoft Exchange.
	
	MORE INFORMATION
	================
	
	The Client Cannot Connect to the Server on a Microsoft Network
	--------------------------------------------------------------
	
	If you are unable to connect to a Microsoft Exchange Server computer on a
	Microsoft network, the problem may be caused by any of the following
	situations:
	
	- The server is not available.
	
	- The client or server is connected to a private network.
	
	- The client and server are not using the same network protocols.
	
	- There is a version mismatch between the client and server.
	
	- The client is not configured properly.
	
	- There is not enough free memory.
	
	To work around this problem, use the appropriate method:
	
	- Verify that the server is currently available, and then use the Services tool
	  in Control Panel to verify that the appropriate services are running on the
	  server.
	
	- Verify that the client and server are not connected to a private network.
	
	- Use the NET USE command to verify that the client is able to connect to the
	  server from a command prompt. If the client is unable to connect, use the
	  Network tool in Control Panel to verify that at least one common protocol is
	  running on the client and the server. If you are using Microsoft LAN Manager,
	  use the Lmsetup.exe program instead of the Network tool in Control Panel.
	
	- Verify that you are running the appropriate version of the client.
	
	- View the [Exchange Provider] section in the Exchng.ini file on the client and
	  verify that the RPC_Binding_Order line contains an entry for the protocol
	  that is running on both the client and the server. The following table lists
	  the appropriate entry for each protocol:
	
	     Protocol      Entry
	     --------------------------
	     Named Pipes   ncacn_np
	     IPX/SPX       ncacn_spx
	     TCP/IP        ncacn_ip_tcp
	
	  In addition, if Microsoft Windows for Workgroups is running on the client and
	  the IPX/SPX protocol is the protocol that is running on both the client and
	  the server, verify that the [Network] section in the System.ini file contains
	  the following line:
	
	     DirectHost=OFF
	
	- If you receive error messages indicating that there is not enough free
	  memory, increase the amount of free memory on the computer.
	
	The Client Cannot Connect to the Server on a Novell Netware Network
	-------------------------------------------------------------------
	
	If you are unable to connect to a Microsoft Exchange Server computer on a Novell
	NetWare network, the problem may be caused by any of the following situations:
	
	- The server is not configured to support NetWare clients.
	
	- The Nwipxspx.dll or Nwcalls.dll file does not exist on the client or is not
	  located in a folder that is included in the PATH environment variable.
	
	- There is a version mismatch between the client and server.
	
	- There is a frame type mismatch between the client and server.
	
	- There is not enough free conventional memory on the client.
	
	- The client or server is unable to log on to a Service Advertising Protocol
	  (SAP) computer.
	
	To work around this problem, use the appropriate method:
	
	- Use the Network tool in Control Panel to verify that the Gateway Services for
	  NetWare service is installed on the server and that the NWLink IPX/SPX
	  Compatible Transport protocol is installed and configured properly.
	
	- Verify that the Nwipxspx.dll and Nwcalls.dll files exist on the client and
	  are located in a folder that is included in the PATH environment variable. If
	  the files are missing, contact Novell for information about how to obtain the
	  files.
	
	
	
	- Verify that you are running the appropriate version of the client and server.
	
	- Verify that the client and server are configured to use the same frame type.
	  To determine which frame type the client is configured to use, view the
	  contents of the Net.cfg file. To determine which frame type the server is
	  configured to use, view the properties for the NWLink IPX/SPX Compatible
	  Transport protocol.
	
	  In addition, if the server supports more than one frame type, verify that that
	  the internal network number is unique and that the Auto Frame Type Detection
	  check box is not selected.
	
	- Increase the amount of free conventional memory on the client. Note that you
	  may be able to do so by reducing the IPX packet size. To reduce the IPX
	  packet size, add the following line to the Protocol IPX section in the
	  Net.cfg file:
	
	     IPX PACKET SIZE LIMIT 1496
	
	- Verify that the client and server are able to log on to a SAP computer. SAP
	  computers are NetWare servers or Microsoft Windows NT servers on which the
	  SAP Agent service is installed. In addition, if the client and server are not
	  on the same network segment, verify that the router between the two segments
	  is configured to transport SAP type 0x640 messages.
	
	The Server Cannot Connect to the Client
	---------------------------------------
	
	If the client is able to connect to the server, but the server is unable to
	connect to the client, the client may not be configured for enough IPX sockets
	or SPX connections.
	
	To work around this problem, increase the IPX Sockets and SPX Connections
	settings in the Protocol IPXODI section of the Net.cfg file. Both settings
	should be at least 50.
	
	The Client Cannot Open a Public Folder on the Server
	----------------------------------------------------
	
	If the client is able to connect to the server, but it cannot open a public
	folder on the server, the problem may be caused by either of the following
	situations:
	
	- The client is not configured for enough IPX sockets or SPX connections.
	
	- One or more necessary services are not running on the server.
	
	To work around the problem, use the appropriate method:
	
	- Increase the IPX Sockets and SPX Connections settings in the Protocol IPXODI
	  section of the Net.cfg file. Both settings should be at least 50.
	
	- Verify that all the necessary services are running on the server.
	
	The Client Cannot Connect to the Server When You Are Using Shared
	Installations of Windows and Microsoft Exchange
	-----------------------------------------------------------------------------------------------------------------
	
	If the client cannot connect to the server and you are using shared installations
	of Windows and Microsoft Exchange, the RPC_REG_DATA_FILE setting in the [RPC
	Runtime Preferences] section in the Win.ini file is invalid.
	
	To work around this problem, modify the RPC_REG_DATA_FILE setting so that it
	includes the full path to a valid Rpcreg.dat file that is not read- only. In
	addition, verify that the root folder on the drive on which the Rpcreg.dat file
	is located is not read-only.
	
	NetWare is manufactured by Novell, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0
	
	=============================================================================
	
