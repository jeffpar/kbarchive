---
layout: page
title: "Q120751: CopyDoubler's Fast Replace Fails on SFM Volumes with Error -48"
permalink: /kb/120/Q120751/
---

## Q120751: CopyDoubler's Fast Replace Fails on SFM Volumes with Error -48

	Article: Q120751
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use CopyDoubler to copy a folder from a SuperDoubler Macintosh computer
	to a Services for Macintosh (SFM) volume on a Windows NT Server, then try to
	re-copy the folder to the same volume by choosing Fast Replace when prompted,
	you get this error:
	
	  Error -48 (dupFNErr) Duplicate filename (rename)
	
	CAUSE
	=====
	
	For a Fast Replace of an existing folder (which means that no changes have been
	made to the folder) CopyDoubler requires directory enumerations to return
	entries in alphabetical order. If they are not returned this way, CopyDoubler
	tries to create the first directory (alphabetically) on the server. This causes
	an Object Exists error on the server, so CopyDoubler issues error -48
	(DuplicateFileName).
	
	WORKAROUND
	==========
	
	Instead of the Fast Replace option, use Normal Replace with CopyDoubler.
	
	STATUS
	======
	
	This is a design incompatibility. Services for Macintosh and the AFP spec do not
	require that filenames be returned in alphabetical order from a directory
	enumerate.
	
	NOTE: CopyDoubler is part of a package called SuperDoubler which is sold by
	Symantec Corporation but was written by Fifth Generation Systems, Inc. You can
	reach Fifth Generation at:
	
	  Fifth Generation Systems, Inc.
	  10049 N. Reiger Road
	  Baton Rouge, LA 70809
	  (504) 291-7221
	  (800) 766-7283 Tech Support
	
	SuperDoubler is manufactured by Symantec Corporation and Fifth Generation
	Systems, Inc.; Microsoft makes no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
