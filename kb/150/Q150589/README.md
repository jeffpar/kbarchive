---
layout: page
title: "Q150589: Windows 95 Logon Script Is Not Processed"
permalink: /kb/150/Q150589/
---

## Q150589: Windows 95 Logon Script Is Not Processed

{% raw %}

	Article: Q150589
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
	
	A Windows 95 workstation logging on to a Microsoft Windows NT domain controller
	may not process the centralized logon script batch file.
	
	CAUSE
	=====
	
	This problem can occur if multiple Windows 95 workstations try to run a logon
	script file (for example, the Winlogon.bat file) located on a single Windows NT
	domain controller at the same time. The first time a Windows 95 workstation
	access the logon script file, it does so in Read/Share/Exclusive mode. All
	subsequent accesses to the file are done in Read/Share/Deny None mode.
	
	The exclusive requests fail when another workstation has the file open in
	Read/Share/Deny None mode.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
