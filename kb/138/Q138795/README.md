---
layout: page
title: "Q138795: Damaged Monotype Sorts Font Causes Display Problems"
permalink: /kb/138/Q138795/
---

## Q138795: Damaged Monotype Sorts Font Causes Display Problems

{% raw %}

	Article: Q138795
	Product(s): Microsoft Windows Printing Issues
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 01-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run some Windows-based programs in Windows 95, or print from these
	programs, some fonts may be displayed or printed incorrectly. When this occurs,
	the fonts may appear as snowflakes or other similar objects. This problem is
	known to occur with the following fonts:
	
	- Courier
	
	- MS Sans Serif
	
	- MS Serif
	
	- Small Fonts
	
	- Symbol
	
	CAUSE
	=====
	
	This problem can occur if the Monotype Sorts TrueType font has been installed
	and is damaged. This font is not included with Windows 95, and is not necessary
	for the fonts listed above to work correctly. However, if this font is installed
	and is damaged, the fonts listed above may be affected.
	
	
	RESOLUTION
	==========
	
	Remove the Monotype Sorts font from the Fonts folder, and then restart your
	computer. To remove the Monotype Sorts font, double-click the Fonts icon in
	Control Panel, use the right mouse button to click the Monotype Sorts icon, and
	then click Delete on the menu that appears.
	
	To restore the Monotype Sorts font, reinstall the program that originally
	installed the font. Depending on the program, you may also be able to copy,
	expand, or extract the font files directly from the program's CD-ROM or disks.
	For information about how to do so, refer to the program's documentation or
	manufacturer.
	
	
	Additional query words: corrupt garbage scrambled dingbats win95x
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
