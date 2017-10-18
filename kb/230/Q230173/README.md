---
layout: page
title: "Q230173: Windows 98/95 Year 2000 Update May Not Update Vdhcp.386 File"
permalink: kb/230/Q230173/
---

## Q230173: Windows 98/95 Year 2000 Update May Not Update Vdhcp.386 File

	Article: Q230173
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui win95
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Windows 98/95 Year 2000 update, the Vdhcp.386 file may not
	be updated. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q225050 Availability of the Windows 95 Year 2000 Update
	
	CAUSE
	=====
	
	This issue can occur if the version of the Vdhcp.386 file you want to update is
	newer than the version of this file included in the Windows 98/95 Year 2000
	update. This can occur for any of the following reasons:
	
	- Your computer has Windows Sockets 2.0 installed. For additional information
	  about Windows Sockets 2.0, click the article number below to view the article
	  in the Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	- Your computer has the Dial-Up Networking 1.3 Update installed.
	
	- Your computer has the update referenced in the following article in the
	  Microsoft Knowledge Base installed:
	
	  Q194790 Windows 95/98 DHCP Retry Compliance with RFC2131
	
	RESOLUTION
	==========
	
	The Microsoft Windows 95 Dial-Up Networking (DUN) 1.3/WS2 Update (Y2kvdhcp.exe),
	which will update Vdhcp.386, is now available. Note that this update
	functionality is also contained within the Microsoft Windows 95 Year 2000
	Corporate Update. For additional information, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q229862 Microsoft Windows 95 Year 2000 Corporate Update
	
	Y2kvdhcp.exe does the following:
	
	- Updates Vdhcp.386 as needed for the Dial-Up Networking (DUN1.3) or Windows
	  Sockets 2.0 updates.
	
	- Installs the QfeCheck tool. For additional information, click the article
	  number below to view the article in the Microsoft Knowledge Base:
	
	  Q145990 Windows 95 Update Information Tool (Qfecheck.exe)
	
	You can download the Microsoft Windows 95 DUN 1.3/WS2 Update (Y2kvdhcp.exe) from
	the following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads/contents/WURecommended/S_WUNetworking/dunwinsky2k/Default.asp
	
	MORE INFORMATION
	================
	
	If your Vdhcp.386 file is not updated, your computer may still exhibit the
	behavior described in the following section of the Y2kw95.txt file included with
	the W95y2k.exe program:
	
	DHCP Virtual Driver (vdhcp.386)
	Winipcfg /all - IP Leases obtained on or after 3/01/2000 are reported as being
	obtained the previous day. The system date is displayed properly but the DHCP
	client reports a date one day prior.
	
	The Microsoft Windows 95 DUN 1.3/WS2 Update (Y2kvdhcp.exe) places the following
	values in the registry:
	
	  Key:
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Setup\Updates\Y2K.W95.DUN
	
	Value(s):
	
	Value Name   Value Type   Value Data
	(Default)    REG_SZ       "Windows 95 Y2K DUN1.3/WS2 Update"
	
	For additional information to determine if your computer has the Windows 95 Year
	2000 update installed, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q231327 How to Determine If Windows 95 Year 2000 Upgrade Is Installed
	
	Additional query words: winsock winsock2
	
	======================================================================
	Keywords          : kbenv kbtool kbui win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
