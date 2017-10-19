---
layout: page
title: "Q168057: WD97: Maximum Number of Printers Visible in Word"
permalink: /kb/168/Q168057/
---

## Q168057: WD97: Maximum Number of Printers Visible in Word

	Article: Q168057
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbenv kbprint word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Word, the maximum number of printers that will be available in the Print
	dialog box is approximately 26.
	
	CAUSE
	=====
	
	The variable in Word that contains the string for all of the printers is limited
	to 512 characters.
	
	WORKAROUND
	==========
	
	If you shorten the printer names, more printers will be available in the Print
	dialog box in Word.
	
	To shorten the length of a printer name:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Right-click a printer shortcut, and click Rename.
	
	3. Type the new name, and press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For more information about changing printer settings, see your Windows printed
	documentation or online Help.
	
	Additional query words: 8.0 word97 limit limitation
	
	======================================================================
	Keywords          : kbenv kbprint word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbWord95 kbWord95a
	Version           : WINDOWS:7.0,7.0a,97
	Issue type        : kbbug
	
	=============================================================================
	
