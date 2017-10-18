---
layout: page
title: "Q140124: NetWare Search Mapping Works Only in Current MS-DOS Session"
permalink: kb/140/Q140124/
---

## Q140124: NetWare Search Mapping Works Only in Current MS-DOS Session

	Article: Q140124
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the NetWare MAP command in an MS-DOS session to set a search path,
	the search path is retained only for the current MS-DOS session.
	
	CAUSE
	=====
	
	Using MAP to add a Search Drive mapping sets an environment variable. Such
	settings created inside an MS-DOS session are used for that MS-DOS session only.
	
	RESOLUTION
	==========
	
	Place the command to map a search drive in your login script.
	
	MORE INFORMATION
	================
	
	This behavior occurs using the Microsoft Client for NetWare Networks. This
	behavior does not apply to the MAP command if used simply to associate a drive
	letter with a NetWare resource; it applies only to the MAP command when used to
	associate a drive letter with a NetWare resource and add that drive to the
	search path (equivalent to the MS-DOS path).
	
	The following are examples of mapping a "normal", non-search drive:
	
	  MAP Q:=CLARICE/DATA:WIN95
	  MAP ROOT R:=CLARICE/DATA:WIN95
	
	The following are examples of mapping a search drive:
	
	  MAP S16:=CLARICE/SYS:PUBLIC
	  MAP INS S4:=CLARICE/SYS:PUBLIC\NLS
	  MAP ROOT INS S1:=CLARICE/SYS:APPS\WORKS
	
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
