---
layout: page
title: "Q232490: Quick View Cannot Open File Names with Euro Currency Symbol"
permalink: /kb/232/Q232490/
---

## Q232490: Quick View Cannot Open File Names with Euro Currency Symbol

	Article: Q232490
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use Quick View to open a file with the euro symbol in its
	file name, you may receive the following error message:
	
	  The file <filename> can not be opened for Quick View. It may be open or
	  locked by another application or you may not have access to it.
	
	CAUSE
	=====
	
	This behavior occurs because Quick View cannot use high ANSI characters.
	
	RESOLUTION
	==========
	
	To work around this issue, rename the file if you want to be able to open it
	with Quick View.
	
	STATUS
	======
	
	This issue is fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Quick View is included in the CD-ROM version of Windows 95, but not in the
	floppy disk version. If you are using the floppy disk version of Windows 95 and
	want to use Quick View, please see the following article in the Microsoft
	Knowledge Base for information about the availability of Quick View:
	
	  Q135315 CD-ROM Extras for Microsoft Windows 95 Upgrade
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
