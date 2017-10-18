---
layout: page
title: "Q112716: Err Msg with CorelDRAW: Not Enough Disk Space to Save..."
permalink: kb/112/Q112716/
---

## Q112716: Err Msg with CorelDRAW: Not Enough Disk Space to Save...

	Article: Q112716
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a file in CorelDRAW, one of the following error messages may
	appear
	
	  Not enough disk space to save file x:\< filename >
	
	  -OR-
	
	  Error writing x:\< filename >
	
	where x is a drive location.
	
	CAUSE
	=====
	
	CorelDRAW saves files with an image header. The image header can be 8K, 4K, 2K,
	1K, or zero in size. The image header provides preview functionality to the file
	and different sizes give higher or lower resolutions to the bitmap image that is
	used for the preview. The problem is that with trying to save the file with an
	8K or 4K color image header, CorelDRAW attempts to write the header file
	information directly to the video adapter first. Windows NT does not allow
	programs to directly access hardware. The file cannot be saved and one of the
	above error messages appears.
	
	WORKAROUND
	==========
	
	To work around this problem, save the file with an image header of None, 1K, or
	2K in size.
	
	CorelDRAW is manufactured by Corel Corporation, a vendor independent of
	Microsoft. We make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt coreldraw
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
