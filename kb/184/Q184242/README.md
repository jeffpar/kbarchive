---
layout: page
title: "Q184242: WinSock 2.0 Installer for Windows 95 (Ws2setup.exe) Update"
permalink: /kb/184/Q184242/
---

## Q184242: WinSock 2.0 Installer for Windows 95 (Ws2setup.exe) Update

	Article: Q184242
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WinSock 2.0 installer program (Ws2setup.exe version 4.71.0030.1) posted on
	the Microsoft Web site was updated on April 13, 1998, to fix two problems. Note
	that the version number of this file has not changed; the simplest way to verify
	that you have the latest copy is to check the version of the Vnbt.386 file in
	your Windows\System folder against the information shown below.
	
	MORE INFORMATION
	================
	
	File Information
	----------------
	
	This is the file information for the earlier Vnbt.386 file:
	
	  Vnbt.386 version 4.10.1656  dated 02/06/98 1:00pm  87,745 bytes
	
	If this version is located in the Windows\System folder, you should obtain and
	run the current version of the WinSock 2.0 installer.
	
	This is the file information for the current Vnbt.386 file:
	
	  Vnbt.386 version 4.10.1658  dated 03/20/98 6:00pm  87,765 bytes
	
	If this version is located in the Windows\System folder, the current version of
	WinSock 2.0 has already been installed.
	
	Problems Resolved by Current Release
	------------------------------------
	
	- Version checking was not performed on the Msvcrt.dll file (located in the
	  Windows\System folder); this file was automatically overwritten with version
	  5.00.7022. Programs that require newer versions of this dynamic-link library
	  (DLL) may not work.
	
	- The Vnbt.386 file installed into the Windows\System folder had an internal
	  problem: any attempt at NetBIOS name resolution on a name of 15 characters
	  containing at least two periods (.) resulted in internal memory problems. The
	  name resolution could be by any method (such as a NET USE command,
	  double-clicking a Network Neighborhood resource, or programmatically by a
	  program). Enabling or disabling DNS made no difference, the problem occurred
	  if any of the forms listed above was passed to Vnbt.386.
	
	  This problem could cause Windows to stop responding (hang) without warning.
	  Note that the Vnbt.386 file is TCP/IP-specific; NetBIOS name resolution on
	  NetBEUI and IPX/SPX were not affected.
	
	- Data corruption of large buffers passed into recv as described in the
	  following article in the Microsoft Knowledge Base:
	
	  Q168187 BUG: recv() Causes Data Corruption of Large Buffer
	
	
	Installing WinSock 2.0 for Windows 95
	-------------------------------------
	
	For additional information about obtaining the current Windows Sockets 2.0 for
	Windows 95 update, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWin95search kbOPKSearch kbWin95 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
