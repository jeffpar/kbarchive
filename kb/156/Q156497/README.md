---
layout: page
title: "Q156497: Duplicate Print Output on PC-LAN Server from Windows 95 Client"
permalink: /kb/156/Q156497/
---

## Q156497: Duplicate Print Output on PC-LAN Server from Windows 95 Client

{% raw %}

	Article: Q156497
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy kbprint win95 kbPrintingkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from a Windows 95 workstation to a shared printer on an IBM
	PC-LAN (PCLP) peer print server, print jobs may randomly be printed twice.
	
	CAUSE
	=====
	
	When you print to SMB-based servers that use the Core SMB dialect, the Microsoft
	Client for Microsoft Networks (VRedir) does not correctly initialize the Spool
	Header Size and Spool Mode fields in the Open Spool File SMB command. Although
	other networking products (including Microsoft's) ignore these fields, the IBM
	PC-LAN peer print server uses the values in these fields as described in the SMB
	specifications. When these fields are not correctly initialized, the PC-LAN
	print server may randomly print the submitted job twice.
	
	This symptom does not occur when you print from Windows NT workstations, or when
	you are using the Windows 95 real-mode client (Net.exe) to connect to the PC-LAN
	peer print server.
	
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
	Keywords          : kbnetwork kbpolicy kbprint win95 kbPrinting kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
