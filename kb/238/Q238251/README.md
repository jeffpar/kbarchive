---
layout: page
title: "Q238251: How to Install Windows Messaging After Removing Outlook 2000"
permalink: kb/238/Q238251/
---

## Q238251: How to Install Windows Messaging After Removing Outlook 2000

	Article: Q238251
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 03-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Office 2000 (Setup) 
	- Microsoft Outlook 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install or remove Microsoft Outlook 2000 or Office 2000, Microsoft
	Windows Messaging is no longer stored in the same location.
	
	CAUSE
	=====
	
	When you install Outlook 2000 or Office 2000, Windows Messaging is relocated.
	
	If you remove Outlook 2000 or Office 2000, the original Windows Messaging
	locations and configurations are not restored.
	
	RESOLUTION
	==========
	
	To resolve this problem, reinstall Windows Messaging:
	
	1. Use Windows Explorer to copy the Msmail.inf file from the \Windows\Inf folder
	  to your desktop.
	
	  For information about how to copy a file, click Start, click Help, click the
	  Index tab, type "copying" (without the quotation marks), and then
	  double-click the "Copying Files, Folders" topic.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs, and then click the Windows Setup tab.
	
	4. Click Have Disk, and then click Browse.
	
	5. Browse through the folder list to the Msmail.inf file that you saved on your
	  desktop.
	
	6. Click OK, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: fax
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbOutlookSearch kbOfficeSearch kbWin95search kbZNotKeyword6 kbZNotKeyword4 kbOffice2000Search kbOutlook2000Search kbZNotKeyword3 kbZNotKeyword5 kbOffice2000SetupSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
