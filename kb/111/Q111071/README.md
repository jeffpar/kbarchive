---
layout: page
title: "Q111071: GP Fault in Module EQNEDIT.EXE on Object Insert"
permalink: kb/111/Q111071/
---

## Q111071: GP Fault in Module EQNEDIT.EXE on Object Insert

	Article: Q111071
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to insert a Microsoft Equation Editor (version 2.0) object into a
	16-bit Windows-based application under Windows NT when the default printer is
	set to a Postscript printer, the following error message appears:
	
	  EQNEDIT caused a General Protection Fault in module EQNEDIT.EXE at 0020:0063
	
	WORKAROUND
	==========
	
	Currently the only workaround is to change the default printer to a non-
	Postscript printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt word winword
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
