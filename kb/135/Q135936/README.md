---
layout: page
title: "Q135936: Not Enough Memory to Run MS Plus! Setup"
permalink: /kb/135/Q135936/
---

## Q135936: Not Enough Memory to Run MS Plus! Setup

	Article: Q135936
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Plus! for Windows 95 Setup, you may receive any of the
	following error messages:
	
	  There is not enough memory to start ACMSETUP.EXE
	
	  There is insufficient memory to run Setup
	
	  Not enough storage is available to process this command
	
	  Out of Memory
	
	Or, you may see a dialog box with the following text:
	
	  Custom Action Error
	  -------------------
	  <no text appears>
	
	CAUSE
	=====
	
	This problem can occur for either of the following reasons:
	
	- The Windows 95 swap file is located on a drive with limited free space.
	
	- The Setup.stf file in the Program Files\Plus!\Setup folder is damaged.
	
	RESOLUTION
	==========
	
	To correct this problem, use the appropriate method:
	
	- Create additional free space on the drive containing the swap file, or change
	  the swap file to a drive with more room.
	
	- Rename or remove the Setup.stf file in the Program Files\Plus!\Setup folder
	  and then run Setup again.
	
	REFERENCES
	==========
	
	For information about swap file settings, view the "To reserve disk space for
	extra memory" topic in Windows 95 Help.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
