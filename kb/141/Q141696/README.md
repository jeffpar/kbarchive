---
layout: page
title: "Q141696: Cannot Open Fax: &quot;A Problem Occurred While Working with...&quot;"
permalink: /kb/141/Q141696/
---

## Q141696: Cannot Open Fax: &quot;A Problem Occurred While Working with...&quot;

	Article: Q141696
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a received fax, you may receive the following error message:
	
	  A problem occurred while working with, or connecting to, a linked or an
	  embedded object or its source application.
	
	CAUSE
	=====
	
	This error can occur if one or more of the following files is missing or
	damaged:
	
	- Awview32.dll
	
	- Mfc30.dll
	
	- Mfcans32.dll
	
	- Mfco30.dll
	
	- Mfcuia32.dll
	
	RESOLUTION
	==========
	
	Check the size and date of the files, and extract new copies of the files from
	your original Windows 95 disks or CD-ROM. For information about using the
	Extract tool, please see the following article in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	MORE INFORMATION
	================
	
	The files listed above are necessary for Fax Viewer to load. These files (except
	for Awview32.dll) are used by many programs and are not removed or reinstalled
	if you remove or reinstall Microsoft Exchange, Microsoft Fax, or Fax Viewer.
	
	Additional query words: corrupted
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
