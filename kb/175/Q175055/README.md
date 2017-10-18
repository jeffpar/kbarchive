---
layout: page
title: "Q175055: Cannot Use IPX/SPX with NetBIOS Support with Dial-Up Networking"
permalink: kb/175/Q175055/
---

## Q175055: Cannot Use IPX/SPX with NetBIOS Support with Dial-Up Networking

	Article: Q175055
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool osr1 osr2 win95kbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows 95 is configured to use the IPX/SPX-compatible protocol with
	NetBIOS support enabled to communicate over a Dial-Up Networking connection, you
	may receive an error message indicating that the NetBIOS name is already in use
	if you use a program that uses NetBIOS over IPX/SPX. A Dial-Up Networking
	connection that uses a different protocol (such as TCP/IP or NetBEUI) may work
	correctly.
	
	CAUSE
	=====
	
	This problem may occur if the Dial-Up Networking point-to-point (PPP) server is
	configured to forward Type 20 IPX packets.
	
	
	RESOLUTION
	==========
	
	A supported fix for Windows 95 and OEM Service Release 2 that corrects this
	problem is now available from Microsoft, but has not been fully regression
	tested and should be applied only to computers experiencing this specific
	problem. To resolve this problem immediately, contact Microsoft Technical upport
	to obtain the fix.
	
	For a complete list of Microsoft Technical Support phone numbers and information
	on support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This fix for Windows 95 and OEM Service Release 2 should have the following file
	attributes (or later):
	
	  File name     Version    Date      Time     Size
	  ---------------------------------------------------------
	  Nwnblink.vxd  4.00.952   9/4/96    9:52am   46,677 bytes
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95, OEM
	Service Release 2 (OSR2), and Windows 98.
	
	MORE INFORMATION
	================
	
	If the PPP server forwards Type 20 (NetBIOS) IPX packets, it returns the
	client's NetBIOS AddName packet back to the client who sent it. The Windows 95
	IPX NetBIOS protocol (NWNBLink) does not recognize the packet as having
	originated from itself, and interprets the response as indicating that the name
	is already is use.
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q140256 "Listen" for NetBIOS Group Name Fails
	
	For additional information about Windows 95 updates, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool osr1 osr2 win95 kbfixlist
	Technology        : kbWin95search kbWin98search kbOPKSearch kbZNotKeyword3 kbWin98 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	
