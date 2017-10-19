---
layout: page
title: "Q165052: Err Msg: The Computer You're Dialing into Does Not Respond..."
permalink: /kb/165/Q165052/
---

## Q165052: Err Msg: The Computer You're Dialing into Does Not Respond...

	Article: Q165052
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 to dial into a Windows 95 Dial-Up Networking
	server, you may receive the following error message:
	
	  The computer you're dialing into does not respond to a network request. Check
	  your server type setting in the properties of the connection.
	
	CAUSE
	=====
	
	This error can be caused by one or more of the following conditions:
	
	- The network protocols in the connectoid have not been configured correctly.
	
	- The network protocols in the connectoid do not match the protocols on the
	  server.
	
	- The protocol configured in the connectoid is either not installed in Network
	  properties or is damaged.
	
	- A terminal logon is required after negotiation.
	
	- Dial-Up Networking Server has not been installed or enabled on the server.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the appropriate method(s):
	
	- Check Network properties for the client and the server, and the connectoid
	  properties to ensure that a matching protocol has been installed on both
	  computers. If the protocol is already present, remove the Dial-Up adapter and
	  all protocols and reinstall Dial-up Networking.
	
	  To check the connectoid properties, click the Start button, point to Programs,
	  point to Accessories, and then click Dial-up Networking. Use the right mouse
	  button to click the connectoid, and then click Properties.
	
	- If the IPX protocol is being used, ensure that the frame type on the server
	  and the client match. To do this, click IPX/SPX in Network properties. Click
	  Properties, click the Advanced tab, and then click Frame Type.
	
	- Verify that the line protocol on the client is the same as the server. To do
	  this, use the right mouse button to click the connectoid in Dial- Up
	  Networking, click Properties, and then click the Server Types tab. Check the
	  type of Dial-Up Server.
	
	- If TCP/IP is being used, check to see if the server is using DHCP or static
	  IP addresses. If static IP addresses are being used, make sure you enter the
	  IP address in the connectoid's properties. To set the IP address, use the
	  right mouse button to click the connectoid in Dial-Up Networking, click
	  Properties, click the Server Types tab, and then click TCP/IP Settings. Click
	  Specify An IP Address and enter the address assigned by your network
	  administrator or Internet service provider (ISP).
	
	- Enable the "Bring up terminal window after dialing" option on the Options tab
	  in the connectoid's properties. This should be necessary only if the server
	  does not support CHAP, PAP, or SPAP authentication for PPP line protocol
	  connection. This is not necessary if the server is a Windows 95-based or
	  Windows NT-based computer.
	
	- Make sure that Dial-Up Networking Server has been installed on the Windows
	  95-based server. Dial-Up Networking Server is available with Microsoft Plus!
	  for Windows 95. If Dial-Up Networking Server is installed, verify that the
	  Server option is enabled. To do so, follow these steps:
	
	  1. Click Dial-Up Server on the Connection menu in Dial-Up Networking
	
	  2. Click the Allow Caller Access option.
	
	  3. If you are using share-level security, click Change Password and set the
	     password. If you are using user-level security, click Add and add the
	     users you want to be able to dial in.
	
	  4. If necessary, click Server Type and select either "PPP: Windows 95,
	     Windows NT, Internet" or "Windows for Workgroups and Windows NT 3.1." The
	     default is PPP. "Windows for Workgroups and Windows NT 3.1" should be used
	     only if Windows for Workgroups 3.11-based computers with RAS installed
	     will dial in.
	
	  NOTE: TCP/IP is not recommended because Windows 95 Dial-Up Networking Server
	  is point-to-point, not point-to-LAN. If you want to use TCP/IP, you need to
	  dial into a Microsoft Windows NT Workstation- or Server- based computer with
	  RAS enabled to be a server.
	
	Additional query words: dun
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
