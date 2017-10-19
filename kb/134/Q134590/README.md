---
layout: page
title: "Q134590: NETAPI32 APIs Are Not Supported in Windows 95"
permalink: /kb/134/Q134590/
---

## Q134590: NETAPI32 APIs Are Not Supported in Windows 95

	Article: Q134590
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run a program designed for Microsoft Windows NT in Windows 95,
	you may receive the following error message:
	
	  Error Starting Program
	  The <filename>.EXE file is linked to missing export
	  NETAPI32.DLL:NetServerEnum
	
	CAUSE
	=====
	
	Windows 95 does not support the network APIs exported by Netapi32.dll.
	
	RESOLUTION
	==========
	
	The program is incompatible with Windows 95. Contact the program's manufacturer
	to inquire about obtaining a version that is compatible with Windows 95.
	
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
