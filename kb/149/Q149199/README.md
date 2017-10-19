---
layout: page
title: "Q149199: Err Msg in XCOPY &quot;Access Denied&quot;"
permalink: /kb/149/Q149199/
---

## Q149199: Err Msg in XCOPY &quot;Access Denied&quot;

	Article: Q149199
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
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
	
	When you use XCOPY with the update option (U) to copy files that already exist
	in the destination directory, the following error may occur. If any of the
	destinations files are marked read-only, an "access denied" error will appear.
	
	RESOLUTION
	==========
	
	Use the read-only option (R) to allow XCOPY to overwrite the read-only files.
	
	Additional query words: 3.10 XCOPY
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
