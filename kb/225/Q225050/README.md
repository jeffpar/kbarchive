---
layout: page
title: "Q225050: Availability of the Windows 95 Year 2000 Update"
permalink: kb/225/Q225050/
---

## Q225050: Availability of the Windows 95 Year 2000 Update

	Article: Q225050
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbYear2000 win95
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about the availability of the Microsoft
	Windows 95 Year 2000 Update.
	
	MORE INFORMATION
	================
	
	The Windows 95 Year 2000 Update provides replacement files to correct known year
	2000 (Y2K) issues with the Windows 95 and Windows 95 OEM Service Release (OSR)
	versions 1, 2, 2.1, and 2.5 operating systems.
	
	The update can also upgrade the currently installed version of Microsoft Internet
	Explorer to address known year 2000 issues.
	
	The following areas of Windows 95 are updated when you install the Microsoft
	Windows 95 Year 2000 Update:
	
	- Find "File or Folders"
	
	- Windows File Manager
	
	- Command Interpreter
	
	- Date/Time Picker
	
	- Phone Dialer applet
	
	- Time and Date Control Panel applet
	
	- DHCP Virtual Driver
	
	- Microsoft Foundation Class Library
	
	- DOS Xcopy
	
	- Microsoft Runtime Library file
	
	- Ole Automation
	
	The following areas of Internet Explorer are updated when you install Internet
	Explorer version 4.01 Service Pack 2:
	
	- Microsoft Virtual Machine
	
	- Microsoft Wallet
	
	- Microsoft Data Access
	
	In Internet Explorer 3.x, there are fixes for 2-digit cookies, off-line browsing
	of pages with 2-digit years, and file dates on browsed file transfer protocol
	(FTP) servers.
	
	The following values are placed in the registry by the Microsoft Windows 95 Year
	2000 Update (w95y2k.exe). Any future releases of the update that may be
	necessary will have a different version number, and will show up under a new key
	(different GUID beneath Installed Components):
	
	Key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Active Setup\Installed
	  Components\{6c5f5810-c55e-11d2-9213-006008b3ae99}
	
	Values:
	
	  Value Name   Value Type  Value Data
	  (Default)    REG_SZ      "Windows 95 Year 2000 Update"
	  IsInstalled  REG_DWORD   1
	  Locale       REG_SZ      "EN"
	  Version      REG_SZ      "4.00.0.2000"
	
	Key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Setup\Updates
	
	Value:
	
	  Value Name   Value Type  Value Data
	  Updates      REG_SZ      "Year 2000 Update for Windows 95"
	
	For detailed information about the issues addressed in this update and the
	installation options, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q225053 Microsoft Windows 95 Year 2000 Update Readme File
	
	To obtain this update, use the appropriate method:
	
	Updating a Computer with Internet Connectivity
	----------------------------------------------
	
	You can download the update from the following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads/contents/wurecommended/s_wufeatured/win95y2k/default.asp
	
	Updating a Computer Without Internet Connectivity
	-------------------------------------------------
	
	If you need to update a computer without Internet connectivity, you can order the
	Windows 95 Year 2000 Update on CD-ROM by calling 1-888-MSFT-Y2K. The CD-ROM is
	supplied at no charge.
	
	Additional query words: Y2K
	
	======================================================================
	Keywords          : kbYear2000 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
