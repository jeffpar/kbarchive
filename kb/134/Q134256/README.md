---
layout: page
title: "Q134256: Creation Time for Files in Backup May Differ from Originals"
permalink: /kb/134/Q134256/
---

## Q134256: Creation Time for Files in Backup May Differ from Originals

	Article: Q134256
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you back up files using Microsoft Backup, the creation time for some of the
	files in the backup may not match the creation time for the original files. The
	creation time for some of the files in the backup may be one hour earlier or
	later than the creation time for the original files.
	
	CAUSE
	=====
	
	When you back up files, Backup uses the time returned by the file system, which
	is not adjusted for Daylight Savings Time. However, Windows Explorer, and other
	Windows 95 tools that display file properties, use times that are adjusted for
	Daylight Savings Time. These adjusted times may differ from the non-adjusted
	times by one hour at particular times during the year.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
