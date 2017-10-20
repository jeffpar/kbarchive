---
layout: page
title: "Q86845: Cannot Print ANSI Characters with Microtek TrueLaser"
permalink: /kb/086/Q86845/
---

## Q86845: Cannot Print ANSI Characters with Microtek TrueLaser

{% raw %}

	Article: Q86845
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microtek TrueLaser printer does not correctly print extended ANSI TrueType
	characters above 127 (ALT+127). This problem occurs when the characters are sent
	to the printer as native TrueType.
	
	WORKAROUND
	==========
	
	1. Run Control Panel.
	
	2. Choose the Printers icon.
	
	3. Select the Microtek TrueLaser driver.
	
	4. Choose the Setup button, then the Options button.
	
	5. Choose the Advanced button.
	
	6. In the Send To Printer As box, select Adobe Type 1.
	
	7. Choose the OK button twice.
	
	8. Choose the Close button.
	
	
	Additional query words: 3.10 microtech micro micotec true laser 3.11 type WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
