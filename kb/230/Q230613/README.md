---
layout: page
title: "Q230613: How to Uninstall DCOM 95 Version 1.2"
permalink: kb/230/Q230613/
---

## Q230613: How to Uninstall DCOM 95 Version 1.2

	Article: Q230613
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool osr1 osr2 win95
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to uninstall Distributed Component Object Model
	(DCOM) 95 version 1.2.
	
	MORE INFORMATION
	================
	
	DCOM 95 does not include an option to uninstall using the Add/Remove Programs
	tool in Control Panel. To uninstall DCOM 95:
	
	1. Uninstall Internet Explorer 4.x if you installed it after the DCOM 1.2
	  Update. For information about uninstalling Internet Explorer 4.x, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q174265 How to Uninstall Internet Explorer 4.0
	
	2. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	3. Type "cd system\dcom95\oldole" (without the quotation marks), and then press
	  ENTER.
	
	4. Type "uninstal.exe" (without the quotation marks), and then press ENTER.
	
	5. Restart your computer when you are prompted.
	
	When you follow these steps, the original DCOM files are restored to the
	Windows\System folder. The updated files are not removed automatically, but can
	be safely deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool osr1 osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
