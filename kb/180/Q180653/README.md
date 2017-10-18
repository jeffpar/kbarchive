---
layout: page
title: "Q180653: Microsoft Fax Status Icon Displays Incorrect Number of Faxes"
permalink: kb/180/Q180653/
---

## Q180653: Microsoft Fax Status Icon Displays Incorrect Number of Faxes

	Article: Q180653
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Fax, the Fax Status icon on the taskbar may display an
	incorrect number of faxes to be sent.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall Microsoft Fax, delete the Fax folders, and then
	reinstall Microsoft Fax. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs, click the Windows Setup tab, and then click
	  the Microsoft Fax check box to clear it.
	
	3. Click OK, and then restart the computer when you are prompted.
	
	4. Click Start, point to Programs, click Windows Explorer, and then double-click
	  the Windows folder.
	
	5. Double-click the Spool folder, click the Fax folder, and then click Delete on
	  the File menu. If the Fax folder does not exist, proceed to step 6.
	
	  NOTE: The Spool folder may be hidden. To view it, click Options (or Folder
	  Options) on the View menu, click the View tab, click Show All Files, and then
	  click OK.
	
	6. Double-click the Windows folder, double-click the Temp folder, and then click
	  the Fax folder. If the Fax folder does not exist, skip to step 8.
	
	7. On the File menu, click Delete.
	
	8. Close Windows Explorer.
	
	9. Reinstall Microsoft Fax. For information about installing Microsoft Fax,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q152196 How to Install and Use Microsoft Fax
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
