---
layout: page
title: "Q136177: PPT7: Shared Files Installed to &#92;Msapps Folder on WinNT 3.51"
permalink: /kb/136/Q136177/
---

## Q136177: PPT7: Shared Files Installed to &#92;Msapps Folder on WinNT 3.51

{% raw %}

	Article: Q136177
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0; Win95:7.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install PowerPoint on Windows NT Workstation version 3.51, the shared
	components (the OLE programs, the spell checker, and the graphics and text
	converters) are installed to the \Windows\Msapps folder. If you install
	PowerPoint on Windows 95, the shared components are installed to the Program
	Files\Common Files\Microsoft Shared folder.
	
	
	CAUSE
	=====
	
	Windows NT 3.51 does not use shared applications from the same location as
	Windows 95 (Program Files\Common Files\Microsoft Shared). Shared components such
	as those that ship with PowerPoint are installed to the \Windows\Msapps folder.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbOfficeSearch kbOSWinSearch kbPowerPtSearch kbSQLServ700 kbZNotKeyword2 kbOffice95Search kbZNotKeyword3 kbPowerPt700Search kbSDKDAO351 kbOSWinNTSearch
	Version           : WINDOWS:7.0; Win95:7.0; winnt:3.51
	
	=============================================================================
	

{% endraw %}
