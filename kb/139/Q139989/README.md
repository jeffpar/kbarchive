---
layout: page
title: "Q139989: MS Backup Status Bar Is Too Small to Display Errors Found"
permalink: /kb/139/Q139989/
---

## Q139989: MS Backup Status Bar Is Too Small to Display Errors Found

	Article: Q139989
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Backup to perform a backup or restore operation, the
	status bar at the bottom of the window may be too small to display the number of
	errors found (if there are any). The text in the status bar reads only "Errors
	encountered" with no numeric value.
	
	You cannot resize the window or status bar to display the missing values.
	
	CAUSE
	=====
	
	The font being used in the status bar is too large. By default, the Nature and
	60's USA desktop themes use a font that is too large. If you are using either of
	these desktop themes, you may experience the problem described in this article.
	
	RESOLUTION
	==========
	
	Change the ToolTip font or font size so you can see the text in the status bar
	in Backup. To do so, follow these steps:
	
	1. In Control Panel, double-click the Display icon.
	
	2. Click the Appearance tab.
	
	3. In the Item box, click ToolTip.
	
	4. Select a different font or smaller font size in the Font and Size boxes.
	
	5. Click OK.
	
	6. If the problem persists, repeat these steps and try a smaller font.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Backup creates an error log file called Error.log in the Program Files\
	Accessories\Log folder. This log file may list the errors that occurred during
	the backup or restore operation.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
