---
layout: page
title: "Q224832: Error Message: Unable to Display Find Tab (177)"
permalink: /kb/224/Q224832/
---

## Q224832: Error Message: Unable to Display Find Tab (177)

	Article: Q224832
	Product(s): Microsoft Windows NT
	Version(s): 2,2.1,2.5,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1, 2.5 
	- the operating system: Microsoft Windows NT 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Start, click Help, click the Find tab, and then click Next, you
	may receive the following error message:
	
	  Unable to display Find tab (177)
	
	CAUSE
	=====
	
	This issue can occur if the Update.cnt file contains a reference to the
	Mstask.hlp file.
	
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Rename the Update.cnt file in the %SystemRoot%\Help (for Windows NT) or
	  Windows\Help (for Windows 95) folder. When you specify a new file name, it
	  should not contain the .cnt file extension (for example, use Update.xxx).
	
	  For information about how to rename a file, click Start, click Help, click the
	  Index tab, type "renaming" (without the quotation marks), and then
	  double-click the "Renaming files" topic.
	
	2. Delete the Windows.gid index file. This file is re-created the next time you
	  search for a Help topic.
	
	  For information about how to delete a file, click Start, click Help, click the
	  Index tab, type "deleting" (without the quotation marks), and then
	  double-click the "Deleting files or folders" topic. Also, Windows.gid is a
	  hidden file, so you must be sure you can view hidden files:
	
	  a. Double-click My Computer, and then click Folder Options on the View menu.
	
	  b. Click the View tab, click "Show all files", and then click OK.
	
	3. Try searching for the Help topic again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Explorer 5.
	
	MORE INFORMATION
	================
	
	The Update.cnt and Mstask.hlp files are included with Microsoft Internet
	Explorer 4.x and Microsoft Windows 98, and are not compatible with the Internet
	Explorer 5 Hypertext Markup Language (HTML)-based Help system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg osr2 win95 
	Technology        : kbOSWinSearch kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR25 kbWin95OPKOSR210 kbOSWinNTSearch kbOSWinNT400SP4
	Version           : :2,2.1,2.5,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
