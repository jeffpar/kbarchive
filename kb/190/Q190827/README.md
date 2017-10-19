---
layout: page
title: "Q190827: Unable to View Windows 95/98 Server from Windows NT"
permalink: /kb/190/Q190827/
---

## Q190827: Unable to View Windows 95/98 Server from Windows NT

	Article: Q190827
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork win98
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a Windows 95-based or Windows 98-based computer, you
	may be unable to do so. When you try to map a drive, you may receive the
	following error message:
	
	  Error 53 - Network name not found
	
	Other Windows 95 and Windows 98 clients may be able to view and connect to the
	share.
	
	CAUSE
	=====
	
	The behavior can be caused by any of the following conditions:
	
	- You are using the File And Printer sharing for NetWare service on the Windows
	  95-based or Windows 98-based computer, and SAP Advertising is not enabled.
	
	- You are using the Internetworking Packet Exchange/Session Packet Exchange
	  (IPX/SPX) protocol and do not have the Network Basic Input/Output System
	  (NetBIOS) layer enabled on the Windows 95-based or Windows 98-based computer.
	
	RESOLUTION
	==========
	
	Enable SAP Advertising
	----------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Networks.
	
	2. Click the "File and printer sharing for NetWare Networks" service, and then
	  click Properties.
	
	3. In the Property box, click SAP Advertising. In the Value box, click Enabled.
	
	4. Click OK, and then click OK.
	
	Enable NetBIOS Over IPX/SPX
	---------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Networks.
	
	2. Click IPX/SPX-compatible Protocol, and then click Properties.
	
	3. Click NetBIOS, and then click to select the "I want to enable NetBIOS over
	  IPX/SPX" check box.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	Windows NT requires that SAP Advertising be enabled to view a NetWare server
	share, and requires that NetBIOS over IPX/SPX to be enabled to view a Microsoft
	Network server share.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork win98 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
