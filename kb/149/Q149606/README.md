---
layout: page
title: "Q149606: Fatal Exception 0E in VNETBIOS Using NetWare Login Script"
permalink: /kb/149/Q149606/
---

## Q149606: Fatal Exception 0E in VNETBIOS Using NetWare Login Script

{% raw %}

	Article: Q149606
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks, if your user name
	contains 13 or more characters and a capture statement is processed in your
	login script, you may receive the following error message:
	
	  An exception 0E has occurred at 00XX:XXXXXXXX in VxD VNETBIOS
	
	CAUSE
	=====
	
	The error occurs when Windows 95 tries to close the virtual machine created to
	process a program in the login script. The error occurs because Windows 95 uses
	an incorrect address for information needed to close the virtual machine.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words: novell gpf
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
