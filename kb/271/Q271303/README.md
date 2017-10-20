---
layout: page
title: "Q271303: Reader Err Msg: Microsoft Reader Encountered an Internal Error"
permalink: /kb/271/Q271303/
---

## Q271303: Reader Err Msg: Microsoft Reader Encountered an Internal Error

{% raw %}

	Article: Q271303
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Reader software on a desktop or a laptop computer,
	you may receive the following error message:
	
	  Microsoft Reader encountered an internal error. ID Number: 010
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- The fonts used by Microsoft Reader are not installed correctly.
	
	- More than 700 fonts are installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, restart your computer, and then start Microsoft Reader
	again.
	
	If the issue continues to occur, make sure that less then 700 fonts are installed
	on your computer. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Fonts.
	
	3. If the number of fonts that is displayed on the status bar is greater than
	  700, remove infrequently used fonts until less than 700 fonts remain
	  installed on your computer.
	
	  For instructions about how to remove fonts, please see the "More Information"
	  section of this article.
	
	MORE INFORMATION
	================
	
	To completely remove fonts from your hard disk:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Fonts.
	
	3. Click the font that you want to remove. To select more than one font at a
	  time, press and hold down the CTRL key while you click each font.
	
	4. On the File menu, click Delete, and then click Yes.
	
	To prevent a font from loading without removing the font from your hard disk,
	move the font from the Fonts folder into another folder. This does not
	completely remove the font, because the font registry information is not
	deleted. However, it does prevent Microsoft Windows from loading the font.
	
	You can use Windows Explorer to drag fonts from the Fonts folder into another
	folder.
	
	For more information about how to move files, click Start, click Help, type
	"moving files, folders" (without the quotation marks) on the Index tab, and then
	click Display.
	
	REFERENCES
	==========
	
	For additional information about how to install or remove fonts in Windows,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q130233 How to Install or Remove a Font in Windows 95/98
	
	For additional information on how to download the Microsoft Reader software,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q271251 How to Download Microsoft Reader for Desktop or Laptop Computers
	
	Additional query words: reader msreader e-book ebook lit fonts too many
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu 
	Technology        : kbReaderSearch kbReader150
	Version           : :1.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
