---
layout: page
title: "Q131653: Removing Duplicate ODBC Icons from Control Panel"
permalink: /kb/131/Q131653/
---

## Q131653: Removing Duplicate ODBC Icons from Control Panel

{% raw %}

	Article: Q131653
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open Control Panel, you may see two ODBC icons.
	
	CAUSE
	=====
	
	You see two ODBC icons if the ODBCCP32.CPL file is in the System folder under
	the Windows folder.
	
	RESOLUTION
	==========
	
	Remove or rename the ODBCCP32.CPL file in the System folder under the Windows
	folder.
	
	MORE INFORMATION
	================
	
	There are two ways to display the ODBC icon in Control Panel. The default method
	is for the ODBCCP32.DLL file to be in the System folder under the Windows
	folder, with the following entry in [MMCPL] section of the CONTROL.INI file:
	
	  ODBC32=C:\WINDOWS\SYSTEM\ODBCCP32.DLL
	
	The second method is to place the ODBCCP32.CPL file in the System folder under
	the Windows folder. Control Panel automatically loads all *.CPL files in the
	System folder.
	
	Applications that use the default method may not detect or remove *.CPL files in
	the System folder, causing duplicate icons.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	
	=============================================================================
	

{% endraw %}
