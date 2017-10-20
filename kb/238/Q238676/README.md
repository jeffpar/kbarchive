---
layout: page
title: "Q238676: PRB: Shared DLL Removal in SQL Makes VB Add-ins Unloadable"
permalink: /kb/238/Q238676/
---

## Q238676: PRB: Shared DLL Removal in SQL Makes VB Add-ins Unloadable

{% raw %}

	Article: Q238676
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0; winnt:7.0
	Operating System(s): 
	Keyword(s): kbAddIn kbSQLServ kbVBp600 kbSQLServ700 kbGrpDSVBDB kbDSupport
	Last Modified: 25-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you load Visual Basic 6.0 after uninstalling SQL Server, the following
	error occurs:
	
	  #2050 cannot be loaded
	  Remove it from the list of available add-ins?
	
	Also, if you choose to load add-ins from Add-in Manager, you will see an error
	message saying that the selected add-ins cannot be loaded.
	
	CAUSE
	=====
	
	When you uninstall SQL Server or SQL Desktop, it may remove the shared DLL
	msaddndr.dll.
	
	RESOLUTION
	==========
	
	Do not remove msaddndr.dll when uninstalling. When Setup asks permission to
	remove this file, choose not to remove it.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install version 6.0 of Visual Basic Professional, Enterprise, or Enterprise
	  or Professional (client applications only) edition on a workstation or server
	  running Microsoft Windows NT 4 or Windows 2000.
	
	2. Install Visual Studio Service Pack 3.
	
	3. Install SQL Server Desktop Edition using the default install settings.
	
	4. Uninstall SQL Server. Setup will prompt you whether to keep the shared file
	  msaddndr.dll. Choose to remove the shared file.
	
	5. Launch Visual Basic 6.0 and note that a warning message similar to the
	  following appears:
	
	  #2050 cannot be loaded
	  Remove it from the list of available add-ins?
	
	6. Select no and then create a new project.
	
	7. From the File menu select Add-ins, and from the Add-ins menu select Add-in
	  Manager.
	
	8. Double-click any of the available add-ins to load them.
	
	9. Select ok in the add-ins window. You will see a warning that the add-ins you
	  selected cannot be loaded
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAddIn kbSQLServ kbVBp600 kbSQLServ700 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ700 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0; winnt:7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
