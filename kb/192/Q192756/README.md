---
layout: page
title: "Q192756: Modem Does Not Disconnect When Connection Is Inactive"
permalink: kb/192/Q192756/
---

## Q192756: Modem Does Not Disconnect When Connection Is Inactive

	Article: Q192756
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): dun msnets win95 kbDialUp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Dial-Up Networking connection from your Windows 95- based
	computer to another computer that is configured to disconnect after a connection
	is inactive for a specific period of time, your computer may not disconnect
	automatically. Note that this behavior may occur even if you use the "Disconnect
	a call if idle for more than <number> minutes" option in the Modems tool
	in Control Panel to limit the amount of time a connection may be inactive before
	it is automatically disconnected.
	
	CAUSE
	=====
	
	This behavior can occur if the File and Printer Sharing for Microsoft Networks
	service is installed and your computer has the Browse Master feature enabled, or
	Windows Internet Naming Service (WINS) is enabled on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Disable the Browse Master feature. To do so, use the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Configuration tab, click the "File and printer sharing for
	  Microsoft Networks" entry, and then click Properties.
	
	3. In the Properties box, click Browse Master. In the Value box, click Disabled,
	  and then click OK.
	
	NOTE: At least one computer in a workgroup must have the ability to become the
	master browse server. If browse server capability is disabled on all computers
	in a workgroup, browse functionality is also disabled.
	
	Method 2
	--------
	
	Disable the bindings for the File and Printer Sharing for Microsoft Networks
	service on the Dial-Up adapter. To do so, use the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Configuration tab, click TCP/IP-->Dial-Up Adapter, and then
	  click Properties.
	
	3. In the Properties box, click the Bindings tab.
	
	4. Click to clear the "File and Printer Sharing for Microsoft Networks" check
	  box, and then click OK.
	
	5. Repeat steps 2-3 for each protocol bound to the Dial-Up adapter.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For information about Default gateways on multihomed computers, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q157025 Default Gateway Configuration for Multi-Homed Computers
	
	For more information about automatically disconnecting, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q137535 Auto Disconnect Feature Does Not Acknowledge FTP Downloads
	
	Additional query words:
	
	======================================================================
	Keywords          : dun msnets win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
