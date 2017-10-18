---
layout: page
title: "Q92716: WFWG 3.10: 3Com EtherLink Supported Only with Sharing Disabled"
permalink: kb/092/Q92716/
---

## Q92716: WFWG 3.10: 3Com EtherLink Supported Only with Sharing Disabled

	Article: Q92716
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The 3Com EtherLink network interface card (Model 3C501) is supported with
	Microsoft Windows for Workgroups (WFWG) only when sharing is disabled. However,
	Workgroup Connections 1.0 does support the adapter and ships with an appropriate
	driver.
	
	To disable sharing with Windows for Workgroups, follow either of the following
	steps:
	
	- Start Windows for Workgroups in standard mode by typing the following at the
	  MS-DOS command prompt:
	
	  win /s
	
	  -or-
	
	- Start Windows for Workgroups in 386 enhanced mode and disable sharing. To
	  disable sharing, open Control Panel, choose the Network icon, and clear the
	  Enable Sharing check box.
	
	  NOTE: You can also disable the Enable Sharing check box by adding the
	  following line to the [network] section of the SYSTEM.INI file:
	
	  NoSharingControl=1
	
	  When this value is set to 1, the Enable Sharing section is unavailable and you
	  cannot enable or disable sharing with the check box. If the value for this
	  entry is 0, the Enable Sharing section is available and you can use the check
	  box to turn sharing on or off. The default is 0 (Enable Sharing section is
	  available).
	
	Using the 3C501 card on a Windows for Workgroups server in 386 enhanced mode may
	cause data corruption on certain machines and is not recommended or supported.
	The 3C501 is fully supported with Workgroup Connections.
	
	MORE INFORMATION
	================
	
	The 3Com EtherLink (3C501) driver is available on the Internet The filename is
	3COM.EXE. It is NOT shipped with the retail version of Windows for Workgroups
	version 3.1.
	
	The following 3Com card is supported with Windows for Workgroups with sharing
	disabled and with Workgroup Connections:
	
	  3Com Model    NDIS Driver  WFW/WC Name
	  ----------    -----------  -----------
	
	  3C501         ELNK.DOS     3Com EtherLink
	
	The following 3Com cards are supported with Windows for Workgroups in any mode
	and with Workgroup Connections:
	
	  3Com Model    NDIS Driver  WFW/WC Name
	  ----------    -----------  -----------
	
	  3C503         ELNKII.DOS   3Com EtherLink II (8-bit or 16-bit)
	  3C505         ELNKPL.DOS   3Com EtherLink Plus
	  3C507         ELNK16.DOS   3Com EtherLink 16
	  3C523         ELNKMC.DOS   3Com EtherLink/MC
	  3C509         ELNK3.DOS    3Com EtherLink III
	
	Additional query words: 1.0 1.00 3.1 3.10 LAN Manager LANman elink elnk three com 3-com
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
