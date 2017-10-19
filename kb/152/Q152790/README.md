---
layout: page
title: "Q152790: Clicking Tools Menu Hangs Microsoft Exchange"
permalink: /kb/152/Q152790/
---

## Q152790: Clicking Tools Menu Hangs Microsoft Exchange

	Article: Q152790
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Exchange and you click the Tools menu, one or more
	of the following symptoms may occur:
	
	- Nothing may happen
	
	- The Deliver Now command may be unavailable
	
	- The Tools menu may take a long time to respond
	
	- Windows 95/98 may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if there is a mismatch between Microsoft Exchange and
	the Mapi.dll and Mapi32.dll files.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Windows 95
	----------
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "mapi*.dll" (without the quotation marks).
	
	3. In the Look In box, click the drive containing the Windows\System folder.
	
	4. Click Find Now.
	
	5. Rename any files that meet the following criteria:
	
	  The file name is Mapi.dll or Mapi32.dll.
	  The file date is not 7/11/95.
	
	6. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs..
	
	7. On the Windows Setup tab, click the the Microsoft Exchange check box to clear
	  it.
	
	8. Click OK. When you are prompted to restart the computer, do so.
	
	9. After the computer restarts, reinstall Microsoft Exchange by repeating steps
	  6-8. Click the Microsoft Exchange check box to select it in step 7.
	
	10. After you reinstall Microsoft Exchange, reinstall the Microsoft Exchange
	  Update. Make sure to install the update from an empty folder on the hard
	  disk.
	
	Windows 98
	----------
	
	Reinstall Windows Messaging. For information about how to do so, please select
	Wms-fax.txt from the following Microsoft Web site:
	
	http://support.microsoft.com/support/windows/readme/98/Windows_98.asp
	
	MORE INFORMATION
	================
	
	One cause for this behavior is running the Microsoft Exchange Update
	(Exupdusa.exe) in either the Windows or Windows\Desktop folder. Doing so causes
	a newer version of the Mapi.dll and Mapi32.dll files to be extracted, creating
	the version conflict.
	
	
	Additional query words: deliver now remote grayed greyed out hangs
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Hardware          : x86
	
	=============================================================================
	
