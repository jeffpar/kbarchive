---
layout: page
title: "Q134594: Cannot Back Up to NetWare Tape Drive with Network Archivist"
permalink: kb/134/Q134594/
---

## Q134594: Cannot Back Up to NetWare Tape Drive with Network Archivist

	Article: Q134594
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Palindrome Network Archivist backup tool version 3.x does not work with the
	Microsoft Client for NetWare Networks to back up files to a tape drive on a
	NetWare server.
	
	CAUSE
	=====
	
	Network Archivist requires Novell's Tsasms.com terminate-and-stay-resident
	program (TSR) to function in Windows 95. The Tsasms.com TSR must be loaded in
	the Autoexec.bat file after Lsl.com and Ipxodi.com.
	
	This backup tool works with either the NETX or the VLM NetWare client as long as
	IPXODI and an ODI driver are already loaded when the Tsasms.com TSR is loaded
	into memory.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any one of the following methods:
	
	- Contact Palindrome for additional information.
	
	- Use the Microsoft Client for NetWare Networks with an ODI network adapter
	  driver. Refer to the Microsoft Windows 95 "Resource Kit," chapter 9, "Windows
	  95 on NetWare Networks," for additional information.
	
	- Use a real-mode NetWare client from Novell (VLM or NETX) with IPXODI.
	
	MORE INFORMATION
	================
	
	Network Archivist is currently implemented as a TSR to be loaded at the MS-DOS
	level. Because of this, it is not aware of the Windows 95 registry or of long
	filenames.
	
	Palindrome is reported to be working on a version of Network Archivist that will
	support long filenames and be aware of the registry. Windows 95 support should
	be included in Network Archivist 4.0 for Windows NT when it is released.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
