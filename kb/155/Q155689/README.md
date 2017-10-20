---
layout: page
title: "Q155689: Error Message: Mini.cab Is Missing or Corrupt"
permalink: /kb/155/Q155689/
---

## Q155689: Error Message: Mini.cab Is Missing or Corrupt

{% raw %}

	Article: Q155689
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
	
	When you are compressing a drive using DriveSpace or DriveSpace 3, you may
	receive one of the following error messages when the operation is 25 percent
	complete:
	
	  The MINI.CAB file is missing or damaged. Copy the file from your Windows (or
	  Plus!) Setup disk to your Windows\system directory, and then try again.
	
	  ID Number: DRVSPACE331
	
	  Windows cannot create the C:\FAILSAFE\FAILSAFE.DRV\W31SPACE.EXE file. There
	  might not be enough free space on drive C, the root directory of drive C may
	  be full, or the disk may be write-protected.
	
	  ID Number: DRVSPACE125
	
	Either of these error messages is followed by the following error message:
	
	  Windows might not be able to restart this task if it is interrupted. You may
	  need as much as 1.5 MB of free space to continue.
	
	  ID Number: DRVSPACE311
	
	CAUSE
	=====
	
	These error messages can occur if you are running IBM AntiVirus for Windows 95
	with certain virus protection features enabled.
	
	RESOLUTION
	==========
	
	Run the IBM AntiVirus program and disable the following options in System Shield
	(located under the Setup menu item):
	
	- Warn When Viral Activity Occurs
	
	- Check Files When Opened
	
	NOTE: Both options must be disabled in order to complete the compression
	operation.
	
	
	MORE INFORMATION
	================
	
	When the two options listed above are enabled, IBM AntiVirus also affects your
	ability to create a Startup disk from the Add/Remove Programs tool in Control
	Panel, and may cause problems with some self-extracting installation programs.
	When these problems occur, you may receive the following error message:
	
	  File Copying Problem
	  Setup had trouble copying a file. Click OK to try copying the file again. If
	  this message reappears, quit Setup and then try running Setup again."
	
	To resolve these problems, use the instructions in the "Resolution" section of
	this article.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: win95 doublespace
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
