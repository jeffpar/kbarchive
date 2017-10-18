---
layout: page
title: "Q145764: Windows Explorer Starts Each Time Windows 95 Is Started"
permalink: kb/145/Q145764/
---

## Q145764: Windows Explorer Starts Each Time Windows 95 Is Started

	Article: Q145764
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
	
	Each time you start Windows 95, one or more instance of Windows Explorer starts,
	displaying the root folder of drive C.
	
	This may occur even though there are no instances of Windows Explorer open when
	you shut down Windows 95.
	
	CAUSE
	=====
	
	This behavior can occur if two or more spaces separate commands on the "Load="
	or "Run=" line in the Win.ini file, or if there is a comma at the end of the
	"Load=" or "Run=" line.
	
	RESOLUTION
	==========
	
	To resolve this issue, use any text editor (such as Notepad) to open the Win.ini
	file in the Windows folder. Check the "Load=" and "Run=" lines and remove any
	extra spaces between commands, and remove any comma from the end of either line.
	When you are done, save the Win.ini file, quit the editor, and restart Windows
	95.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
