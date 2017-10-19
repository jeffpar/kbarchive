---
layout: page
title: "Q99557: PRB: FoxPro Corruption Problems Fixed by Novell 3.11 Patches"
permalink: /kb/099/Q99557/
---

## Q99557: PRB: FoxPro Corruption Problems Fixed by Novell 3.11 Patches

	Article: Q99557
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 10-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for MS-DOS, versions 1.02, 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A number of known problems with data corruption and file integrity in FoxPro
	when it is running with Novell NetWare version 3.11 are resolved by patches
	available from Novell.
	
	RESOLUTION
	==========
	
	Novell is aware of several problems that occur under varying circumstances and
	has issued a series of patches to correct these individual anomalies. Two
	patches that address problems known to affect FoxPro are:
	
	- FATFIX - Corrects file allocation table (FAT) writes for files larger than 2
	  MB
	- HOTFIX - Corrects caching problem when cache buffer is greater than 4K
	
	Other individual patches in the series must be applied as required, which can be
	determined by examining each patch description. To obtain these patches, obtain
	311PTD.EXE from Novell, or contact your local Novell distributor.
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: VFoxWin FoxDos FoxWin 'Not a database file' 'Memo file is missing or invalid' garbage corrupt table/dbf' novel
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500
	Version           : MS-DOS:1.02,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
