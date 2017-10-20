---
layout: page
title: "Q132424: How to Remove TrueType Fonts and Keep a Copy on the Hard Disk"
permalink: /kb/132/Q132424/
---

## Q132424: How to Remove TrueType Fonts and Keep a Copy on the Hard Disk

{% raw %}

	Article: Q132424
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In previous versions of Microsoft Windows you can remove TrueType fonts without
	deleting the font files. When you remove a TrueType font in Windows 95, the font
	file is deleted from the hard disk. This article describes how to remove a
	TrueType font in Windows 95 without deleting the font file.
	
	MORE INFORMATION
	================
	
	To remove TrueType fonts without deleting the font files you must maintain two
	copies of each font file on the hard disk. The fonts in the \Fonts folder are
	the installed fonts, while the fonts in the other folder are available for
	installation but may not be active.
	
	Follow these steps to remove a font without deleting the font file:
	
	1. Use Windows Explorer to create a folder to store a copy of the TrueType font
	  files.
	
	2. Copy the fonts you want to remove from the Windows\Fonts folder to the folder
	  you created in step 1.
	
	3. Use the Fonts tool in Control Panel to remove the TrueType fonts.
	
	If you decide to re-install a font that you have removed, you can install the
	font from the folder containing the font file copies. Make sure to select the
	"Copy fonts to the Fonts folder" option so that the font file is copied. If you
	do not select this option, the font file is located in only one folder and is
	deleted the next time you remove the font.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
