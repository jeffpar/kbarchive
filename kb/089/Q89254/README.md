---
layout: page
title: "Q89254: TrueType Fonts Default to Courier When Printing"
permalink: /kb/089/Q89254/
---

## Q89254: TrueType Fonts Default to Courier When Printing

	Article: Q89254
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you clear the Use Substitution Table check box and select the Clear Memory
	Per Page check box in the Control Panel Printers dialog box, some TrueType fonts
	may print as the default font (Courier). Any TrueType font that is not preceded
	by a PostScript font on the second or later pages printsas Courier. If you use
	multiple fonts per page, the problem occurs only with the first TrueType font
	not preceded by a PostScript font on the second or later pages.
	
	This information applies to the Windows 3.1 PostScript driver versions 3.5, 3.51,
	3.52 and 3.53.
	
	WORKAROUND
	==========
	
	To correct this problem, either select the Use Substitution Table check box or
	clear the Clear Memory Per Page check box in the PostScript Advanced Options
	dialog box, as follows:
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Choose the Setup button, then the Options button.
	
	3. Choose the Advanced button.
	
	4. Either select the Use Substitution Table check box or clear the Clear Memory
	  Per Page check box.
	
	5. Choose the next three OK buttons to save your changes.
	
	
	Additional query words: 3.10 win31 pscript.drv true type
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
