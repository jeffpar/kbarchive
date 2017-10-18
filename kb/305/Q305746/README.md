---
layout: page
title: "Q305746: BUG: &quot;Access Denied&quot; Err Msg w/DCOM Activation for ATL Servers"
permalink: kb/305/Q305746/
---

## Q305746: BUG: &quot;Access Denied&quot; Err Msg w/DCOM Activation for ATL Servers

	Article: Q305746
	Product(s): Microsoft Programming Utilities
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCOMPlus kbCOMt kbDCOM
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows Millennium Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DCOM activation for Active Template Library (ATL)-built COM servers may fail
	with the following error message:
	
	  0x80070005 (E_ACCESSDENIED)
	
	CAUSE
	=====
	
	This behavior can occur if there is a short-file-name versus long-file-name
	conflict in the registry.
	
	COM servers are registered under the HKEY_CLASSES_ROOT\AppID key in a named value
	that indicates the module name (such as OUROLEAPP.EXE). This type of named value
	is REG_SZ, and it contains the string representation of the AppID associated
	with the executable. This mapping is used to obtain the default access
	permissions and authentication level. An ATL server with a long file name is
	registered under the CLSID\LocalServer32 key with a short file name
	(OUROLE~1.EXE). However, when the Dcomcnfg utility creates the mapped executable
	name for the server in the registry that points to the actual AppID key of the
	server, it uses the long file name (OUROLEAPP.EXE).
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	- Add an additional key, HKEY_CLASSES_ROOT\AppID\OUROLE~1.EXE, that maps to the
	  same AppID as HKEY_CLASSES_ROOT\AppID\OUROLEAPP.EXE.
	
	  This is the preferred method.
	
	  -or-
	
	- Rename the HKEY_CLASSES_ROOT\AppID\OUROLEAPP.EXE as
	  "HKEY_CLASSES_ROOT\AppID\OUROLE~1.EXE" (without the quotation marks).
	
	NOTE: Use project names that are eight characters or less when you create
	ATL-built COM servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q201318 Registering ATL Server with Long Name Causes 0x80070002
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCOMPlus kbCOMt kbDCOM 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServSearch kbWinMEsearch kbAudDeveloper kbWin95search kbWin98search kbCOM kbCOMPlusSearch kbZNotKeyword3 kbWin98 kbWinME
	Version           : :2000,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
