---
layout: page
title: "Q173493: Loss of Performance or Functionality in Microsoft Exchange"
permalink: kb/173/Q173493/
---

## Q173493: Loss of Performance or Functionality in Microsoft Exchange

	Article: Q173493
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience loss of performance or functionality in Microsoft Exchange.
	These symptoms may occur because of file damage or after you install a new
	program.
	
	Note that in this article the term "Microsoft Exchange" applies to both Microsoft
	Exchange and Microsoft Windows Messaging.
	
	CAUSE
	=====
	
	This behavior can occur if a Microsoft Exchange file has been replaced or
	damaged.
	
	MORE INFORMATION
	================
	
	Move all .pst and .pab files into another folder then uninstall Microsoft
	Exchange. To uninstall Microsoft Exchange, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Windows Setup tab.
	
	4. Click the Microsoft Exchange check box to clear it.
	
	5. Click OK.
	
	6. Reinstall Microsoft Exchange. To reinstall Microsoft Exchange, repeat the
	  above steps, but select the Microsoft Exchange check box in step 4.
	
	If you still experience a loss of performance or functionality, follow these
	steps:
	
	1. Uninstall Microsoft Exchange using the above steps.
	
	2. Double-click the My Computer icon on the desktop.
	
	3. Double-click drive C.
	
	4. Double-click the Program Files folder.
	
	5. Double-click the Microsoft Exchange folder.
	
	6. On the Edit menu, click Select All.
	
	7. On the File menu, click Delete.
	
	8. If there is a Windows Messaging folder, repeat steps 1-7, but double- click
	  the Windows Messaging folder in step 5.
	
	9. Reinstall Microsoft Exchange, creating new .PST and .PAB files. To reinstall
	  Microsoft Exchange, follow these steps:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Add/Remove Programs.
	
	  c. Click the Windows Setup tab.
	
	  d. Click the Microsoft Exchange check box to select it.
	
	  e. Click OK.
	
	10. Test for functionality and performance. If it is acceptable, create a new
	  profile with the original .pst and .pab files.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
