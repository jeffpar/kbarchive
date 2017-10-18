---
layout: page
title: "Q132786: Known Issues with MS Print Agent for NetWare (MSPSRV)"
permalink: kb/132/Q132786/
---

## Q132786: Known Issues with MS Print Agent for NetWare (MSPSRV)

	Article: Q132786
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbprint 3rdpartynet win95 kbPrinting kb3rdPartyNetClientkbfixlist
	Last Modified: 28-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following problems with Microsoft Print
	Agent for NetWare Networks (MSPSRV):
	
	Wrong Font Size Used on Print Server Tab in Printer Properties
	--------------------------------------------------------------
	
	When you click the Print Server tab in the Printer Properties dialog box, the
	text extends beyond the border of the dialog box. The dialog box is still
	usable.
	
	Error Message: Could Not Enumerate Print Servers on this Server
	---------------------------------------------------------------
	
	When you click "Enable Microsoft Print Server for NetWare," you receive the
	following error message:
	
	  Could not enumerate print servers on this server.
	
	When you receive this error message, you are automatically logged off the NetWare
	server and your NetWare connections are lost. You must restart Windows 95 and
	log on again to restore your connections.
	
	
	Cannot Activate Print Server List Box
	-------------------------------------
	
	In order to activate the Print Server list box, you must click the NetWare Server
	list box and then click your NetWare server. You must do this even if the
	appropriate NetWare server appears in the box.
	
	Preferred Server Listed Twice in Network Neighborhood
	-----------------------------------------------------
	
	MSPSRV causes the server on which the print queue resides to appear in Network
	Neighborhood. If this is also your preferred server, you may see it listed in
	Network Neighborhood twice.
	
	You are Prompted for Password to NetWare Server
	-----------------------------------------------
	
	Each time you access a NetWare server, you are asked for the password. This
	occurs even when you are already logged on to the NetWare server.
	
	
	Lost Connection to NetWare Server When Printing
	-----------------------------------------------
	
	If MSPSRV is enabled and you send multiple print jobs to a NetWare print server,
	you lose the connection to the NetWare server.
	
	
	Wrong Form Printed
	------------------
	
	All print jobs sent to a NetWare server print queue revert to form zero, even if
	a different form number or name is used.
	
	For additional information about this problem, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q148904 NetWare Print Jobs Always Use Form Zero
	
	
	Must Restart Computer After Enabling or Disabling MSPSRV
	--------------------------------------------------------
	
	After you enable or disable MSPSRV, you must restart your computer.
	
	
	Not All NetWare Print Servers Enumerated
	----------------------------------------
	
	A Windows 95-based workstation with MSPSRV enabled may not enumerate all of the
	NetWare print servers on the list.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 and OEM
	Service Release 2 (OSR2). An update to address this problem is now available,
	but is not fully regression tested and should be applied only to computers
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft does not recommend implementing this update at this
	time. Contact Microsoft Technical Support for additional information about the
	availability of this update.
	
	Use of the Microsoft Print Agent for NetWare (MSPSRV) is not supported under
	Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, see the following Microsoft Web site:
	
	  http://www.microsoft.com/windows
	
	
	Additional query words: novell MSPSRV.exe
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbprint 3rdpartynet win95 kbPrinting kb3rdPartyNetClient kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
