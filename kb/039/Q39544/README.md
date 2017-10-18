---
layout: page
title: "Q39544: INFO: Limit to the Number of Characters Stored in a List Box"
permalink: kb/039/Q39544/
---

## Q39544: INFO: Limit to the Number of Characters Stored in a List Box

	Article: Q39544
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbListBox kbSDKPlatform kbGrpDSUser
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The memory limit for a Windows list box depends strictly on the number of
	characters, not on the number of items in the list box. The memory for the
	strings is allocated from global memory, but the internal code assumes that the
	total amount of memory required by the strings in the list box will not exceed
	32K (in Windows versions 2.x). If the total memory required by the strings is
	more than 32K, the list box will not function correctly.
	
	Under Windows version 3.0, the limit is 64K of text.
	
	Additional query words: listbox
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbListBox kbSDKPlatform kbGrpDSUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
