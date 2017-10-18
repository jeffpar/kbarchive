---
layout: page
title: "Q137857: Errorlevel Paradigm Behaves Differently in Windows NT 3.51"
permalink: kb/137/Q137857/
---

## Q137857: Errorlevel Paradigm Behaves Differently in Windows NT 3.51

	Article: Q137857
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The value returned to the operating system by a 16-bit application when it
	closes is called an error level. The values that Windows NT 3.51 returns is
	different than those returned by OS/2 1.3 and Windows NT 3.5. For example,
	create a TEST.CMD file with the following text:
	
	  @echo off
	
	  return 3
	  if errorlevel 3 set x=3
	  if errorlevel 2 set x=2
	  if errorlevel 1 set x=1
	  echo Return is: %X%
	
	  return 3
	  if errorlevel 1 set x=1
	  if errorlevel 2 set x=2
	  if errorlevel 3 set x=3
	  echo Return is: %X%
	
	NOTE: RETURN.EXE is just a simple program which performs exit(atoi(argv[1])).
	
	If you run TEST.CMD in OS/2 1.3 and Windows NT 3.5, the following results
	appear:
	
	  Return is: 3
	  Return is: 1
	
	If you run TEST.CMD in Windows NT 3.51, the following results appear:
	
	  Return is: 1
	  Return is: 3
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt dos cmd bat
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
