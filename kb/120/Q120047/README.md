---
layout: page
title: "Q120047: Access 2.0 Does Not Create ODBC Group or Icon Under Windows NT"
permalink: /kb/120/Q120047/
---

## Q120047: Access 2.0 Does Not Create ODBC Group or Icon Under Windows NT

{% raw %}

	Article: Q120047
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Notes in the Access 2.0 Help section on "Installing ODBC Drivers and Setting up
	Data Sources," incorrectly state that an ODBC group and ODBC Admin icon are
	created when you install ODBC. No group or icon is created under Windows NT.
	
	The ODBC Admin file (ODBCADM.EXE) is located in the \SYSTEM subdirectory of your
	Windows NT directory. Use the path <winnt>\SYSTEM to create an ODBC group
	or icon manually.
	
	Additional query words: prodnt 3.10 MSACCESS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
