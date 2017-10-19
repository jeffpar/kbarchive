---
layout: page
title: "Q251311: BUG: Collection Tool Not Being Removed from the Start Menu"
permalink: /kb/251/Q251311/
---

## Q251311: BUG: Collection Tool Not Being Removed from the Start Menu

	Article: Q251311
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbMSDN kbDSupport
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove the MSDN Library, the Collection Settings tool remains on the
	Start menu. If you try to access this tool, a message will appear stating,
	"There is no MSDN installed on this machine." The message is accurate; however,
	removing the MSDN Library as outlined in the "Resolution" section of this
	article will also remove the Collection Settings tool so the message will no
	longer appear.
	
	CAUSE
	=====
	
	Shared files are not removed during the uninstall process if the version of the
	file is newer than the version that the application's Setup installed.
	
	RESOLUTION
	==========
	
	Uninstall MSDN Library versions in chronological order. For example, if you have
	the MSDN Library July 1999 and the October 1999 version on your computer and
	wish to remove these, uninstall July 1999 first and then remove October 1999.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	With the October 1999 version of the MSDN Library, a new Collection Settings
	tool was added that allows you to set the active MSDN Library collection. To
	view this tool, click Start, point to Programs, then point to Microsoft
	Developer Network and click MSDN Library - Collection Settings.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install MSDN Library July 1999.
	
	2. Install MSDN Library October 1999.
	
	3. Remove MSDN Library October 1999.
	
	4. Remove MSDN Library July 1999.
	
	5. Click Start, point to Programs, then point to Microsoft Developer Network and
	  click MSDN Library - Collection Settings.
	
	A message will appear saying, "There is no MSDN installed on this machine."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMSDN kbDSupport 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
