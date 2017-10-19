---
layout: page
title: "Q168107: Windows NT Briefcase Appears and Acts Like a Normal Folder."
permalink: /kb/168/Q168107/
---

## Q168107: Windows NT Briefcase Appears and Acts Like a Normal Folder.

	Article: Q168107
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Briefcase icon appears as a normal folder on the desktop.
	
	All functionality and properties of the icon are that of a folder, as well.
	
	CAUSE
	=====
	
	The cause of this problem is usually associated with a missing or corrupted
	registry key. The registry key in question is:
	
	  HKEY_LOCAL_MACHINE/Software/Classes/Briefcase
	
	RESOLUTION
	==========
	
	There are two possible work arounds for this problem:
	
	To restore the Briefcase registry entries to their default values perform the
	following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	     HKEY_LOCAL_MACHINE/Software/Classes/Briefcase/Clsid
	
	2. Add the following:
	
	     {85BBD920-42A0-1069-A2E4-08002B30309D}
	
	3. Then go to the Briefcase/DefalutIcon subkey and add the following:
	
	     %SystemRoot%\System32\Syncui.dll,0
	
	4. Quit Registry Editor and restart your computer.
	
	-OR-
	
	To change the Briefcase icon from a folder to a briefcase manually, follow these
	steps:
	
	1. Right-click the desktop, point to New, and then click Briefcase. A new
	  Briefcase is created on the desktop.
	
	2. Once the new Briefcase icon has been created, you may delete the old
	  Briefcase folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
