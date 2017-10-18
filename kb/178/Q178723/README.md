---
layout: page
title: "Q178723: Problems with &quot;Run Only Allowed Windows Application&quot;"
permalink: kb/178/Q178723/
---

## Q178723: Problems with &quot;Run Only Allowed Windows Application&quot;

	Article: Q178723
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to start an application by opening an associated document, the
	application fails to start and you receive the following error message:
	
	  Restrictions: This operation has been cancelled due to restrictions in
	  effect on this computer. Please contact your system administrator.
	
	This error occurs when there is a System Policy in effect that enables the item
	marked "Run only allowed Windows applications."
	
	This error is expected behavior if your application's executable is not in the
	List of allowed applications dialog box. However, in this case, the application
	is restricted even though it is included in this list.
	
	CAUSE
	=====
	
	The shell restriction implemented by the "Run only allowed Windows applications"
	policy does not correctly parse file associations when the executable path
	contains a space.
	
	For instance, if a document of type TEST1 were opened by the application APP1
	with the path C:\Program Files\APP1\Binary Files\APP1.EXE %1, you would
	encounter this problem when double-clicking on a TEST1 document.
	
	RESOLUTION
	==========
	
	Use one or more of the following methods to resolve this problem:
	
	Method 1
	--------
	
	To resolve this problem on computers that have Internet Explorer 4.0 or earlier
	or that have Internet Explorer 4.01 or later installed but not the Desktop
	Update Component (Active Desktop), obtain the latest service pack for Windows NT
	version 4.0.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: Internet Explorer 4.0 with the Desktop Update Component, ships with its own
	version of Shell32.dll. Installing this fix may cause Internet Explorer not to
	function correctly.
	
	Method 2
	--------
	
	Install Internet Explorer 4.01 SP1 and select the Desktop Update Component.
	
	Method 3
	--------
	
	On systems running the earlier version of Internet Explorer 4.0 or not running
	Internet Explorer at all, you may be able to work around this problem by either
	surrounding the entire association executable path with quotes, or by altering
	the executable path into its equivalent 8.3 format. To do this:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_CLASSES_ROOT\<application>\shell\open\command
	
	  where <application> is the application name of the associated files you
	  are attempting to open.
	
	3. Modify the (Default) string value from its current path, for example,
	  C:\Program Files\APP1\Binary Files\APP1.EXE %1, to one of the following:
	
	  "C:\Program Files\APP1\Binary Files\APP1.EXE %1" (notice the quotes)
	
	  -or-
	
	  C:\PROGRA~1\APP1\BINARY~1\APP1.EXE %1 (no quotes needed)
	
	  NOTE: Use dir /x to determine 8.3 equivalents of long file names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
