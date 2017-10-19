---
layout: page
title: "Q152443: PKZIP Corrupts Files with Long File Names"
permalink: /kb/152/Q152443/
---

## Q152443: PKZIP Corrupts Files with Long File Names

	Article: Q152443
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the PKZIP program from PKWARE, files with long file names can
	become corrupted.
	
	Files appear to compress correctly, but when they are de-compressed, those with
	long file names may not decompress correctly and the following error is
	displayed by PKUNZIP:
	
	  Pkunzip (W26) Warning! Filename.zip has errors!
	
	Where Filename.zip is the name of the archived or compressed file.
	
	WORKAROUND
	==========
	
	If you plan to use PKZIP to either archive or compress files, file names in the
	archive should be limited to the standard MS-DOS eight plus three convention.
	(Eight characters, period, and an optional three-character extension.)
	
	MORE INFORMATION
	================
	
	PKZIP is manufactured by a PKWARE, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: Pkware Pkzip Pkunzip archive long file name.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
