---
layout: page
title: "Q134426: File Attributes Removed Attempting to Delete Open File"
permalink: kb/134/Q134426/
---

## Q134426: File Attributes Removed Attempting to Delete Open File

	Article: Q134426
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to delete a hidden, system, read-only or multiple attributes
	file in File Manager and the file is currently open by an application, the
	following error message appears:
	
	  File Manager cannot delete <drive>:\<path>\<file name>: The
	  process cannot access the file because it is being used by another process.
	
	When you choose OK, the file attribute is removed.
	
	
	Additional query words: prodnt 3.10 3.50 3.51 winfile disappear
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	
	=============================================================================
	
