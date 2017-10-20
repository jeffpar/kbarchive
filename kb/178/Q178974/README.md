---
layout: page
title: "Q178974: Encarta: Images Lose Quality when Copied and Pasted"
permalink: /kb/178/Q178974/
---

## Q178974: Encarta: Images Lose Quality when Copied and Pasted

{% raw %}

	Article: Q178974
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbinterop kbimu
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Copy Image command to copy an image from Microsoft Encarta
	Encyclopedia for Windows, you may see a loss of image quality when you paste the
	image into another Windows program.
	
	CAUSE
	=====
	
	This behavior can occur if your display color palette is set to High Color
	(16-bit) or True Color (24-bit or 32-bit). No loss of image quality occurs if
	your display color palette is set to 256 colors (8-bit).
	
	RESOLUTION
	==========
	
	To work around this issue, use one of the following methods:
	
	Set Display Color Palette to 256 Colors
	---------------------------------------
	
	To set your display color palette to 256 colors, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display, and then click the Settings tab.
	
	3. In the Color Palette box, click 256 Color, and then click OK.
	
	4. If you are prompted to restart your computer, click Yes.
	
	Use Paste Special Command in Microsoft PowerPoint
	-------------------------------------------------
	
	If Microsoft PowerPoint 97 is installed on your computer, you can use the Paste
	Special command in PowerPoint to paste an image from Encarta without losing
	image quality, and then copy the image from PowerPoint into another program. To
	do so, use the following steps:
	
	1. Use the Copy Image command in Encarta to copy an image to the Clipboard.
	
	2. Click Start, point to Programs, and then click Microsoft PowerPoint.
	
	3. Click Blank Presentation, and then click OK.
	
	4. In the Choose An Autolayout box, click the blank slide, and then click OK.
	
	5. On the Edit menu, click Paste Special.
	
	6. Click Bitmap, and then click OK.
	
	7. On the Edit menu, click Copy.
	
	8. Quit PowerPoint. When you are prompted to save changes, click No. If you are
	  prompted to keep information on the clipboard, click Yes.
	
	9. Start the program into which you want to paste the image from Encarta.
	
	10. On the Edit menu, click Paste.
	
	
	MORE INFORMATION
	================
	
	
	Additional query words: 1997 98 multi media multimedia multi-media mmtitles blotchy patchy
	
	======================================================================
	Keywords          : kbdisplay kbenv kbinterop kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
