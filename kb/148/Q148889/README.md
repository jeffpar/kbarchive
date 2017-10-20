---
layout: page
title: "Q148889: Desktop Appearance Changes After Installing Corel Draw 6.0"
permalink: /kb/148/Q148889/
---

## Q148889: Desktop Appearance Changes After Installing Corel Draw 6.0

{% raw %}

	Article: Q148889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Corel Draw 6.0 and restart your computer, you may see several
	different font styles on the desktop.
	
	CAUSE
	=====
	
	When you install Corel Draw 6.0, you can choose to install up to 1029 fonts to
	the Windows\Fonts folder. This is approximately the limit for the number of
	fonts you can install in Windows 95. If you had fonts installed before you
	installed Corel Draw 6.0, the resulting number of installed fonts may exceed the
	limit.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131943 TrueType Font Limits in Windows 95.
	
	RESOLUTION
	==========
	
	To remove the excess fonts and restore the Windows 95 fonts, follow these
	steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	2. Type the following lines, pressing ENTER after each line:
	
	  " cd <windows>
	  smartdrv.exe
	  deltree ttfcache
	  md fonttemp
	  attrib -r -s -h c:\<windows>\fonts\*.ttf
	  move c:\<windows>\fonts\*.ttf c:\<windows>\fonttemp " (without the
	  quotation marks)
	
	  where <windows> is your Windows folder.
	
	3. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F5 key.
	
	4. Rebuild the Font registry key. For information about doing so, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q133732 Missing TrueType Fonts in Fonts Folder
	
	  NOTE: You need to follow only the first two steps in this article, and then
	  quit Registry Editor.
	
	5. Restart your computer normally.
	
	6. In Windows Explorer or My Computer, sort the fonts in the Fonttemp folder by
	  date. Move all non-Corel fonts from the Fonttemp folder to the Windows\Fonts
	  folder. Windows 95 fonts have a date of 7/11/95 and a time of 9:50 A.M.
	
	7. Selectively copy the Corel fonts to the Windows\Fonts folder, making sure not
	  to exceed 1000 installed fonts in the Windows\Fonts folder. You may want to
	  copy only those fonts you expect to use.
	
	8. Delete the Fonttemp folder, or keep it as a storage place for extra fonts.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	For additional information about this behavior, please contact Corel Corporation.
	
	Additional query words: distorted graphics marlett.ttf
	
	======================================================================
	Keywords          : kb3rdparty kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
