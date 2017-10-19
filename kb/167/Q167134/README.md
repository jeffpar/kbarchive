---
layout: page
title: "Q167134: HOWTO: Open Visual SourceSafe to a Specific Project"
permalink: /kb/167/Q167134/
---

## Q167134: HOWTO: Open Visual SourceSafe to a Specific Project

	Article: Q167134
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe500
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe contains the ability to open the Visual SourceSafe Explorer to
	a specific project.
	
	MORE INFORMATION
	================
	
	To open Visual SourceSafe at a specific project you use -P switch. For example:
	
	  C:\app\ss50\win32\SSEXP.EXE -p$/Juniper/Specs
	
	NOTE: If a project name contains spaces you need to put quotation marks around
	the entire path to the project:
	
	  C:\app\ss50\win32\SSEXP.EXE -p"$/Juniper/Specs Revision"
	
	This can also be combined with the -S switch to open a specific database to a
	specific project. For example:
	
	  C:\app\ss50\win32\SSEXP.EXE -s\\fs1\scc\sslib -p$/Juniper/Specs
	
	You can also create a Shortcut in Windows 95 or Windows NT to automatically bring
	up a specific project when you double-click it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Issue type        : kbhowto
	
	=============================================================================
	
