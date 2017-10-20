---
layout: page
title: "Q157216: PPT: PowerPoint Slide Shows Look Bad in 16 Colors"
permalink: /kb/157/Q157216/
---

## Q157216: PPT: PowerPoint Slide Shows Look Bad in 16 Colors

{% raw %}

	Article: Q157216
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbenv kbgraphic kbuikbfaq
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you run a PowerPoint slide show on a computer that is using a 16- color
	Windows display driver, practically everything except text appears very grainy.
	Most colors and all gradients appear as though they are crosshatched. Text does
	not appear dithered, but it is available in only a limited range of colors.
	
	To adequately display a PowerPoint slide show, your Windows display settings
	should be 256 colors (or more.)
	
	MORE INFORMATION
	================
	
	When you run Windows in 16 colors, every pixel (dot) on your screen is one of
	only 16 possible different colors. Any color that is not one of those 16
	different colors is simulated by dithering, or mixed by placing dots of
	different colors next to each other.
	
	This dithering is more noticeable in PowerPoint than it is in Windows Explorer or
	Program Manager because those programs are specially designed to look good in 16
	colors.
	
	If you can change your display settings to 256 colors, PowerPoint slide shows
	look much better. A 256-color display setting essentially means that Windows can
	choose up to 256 different colors at a time. These 256 colors are chosen from
	16,777,216 possibilities. This means that when you view Slide One, PowerPoint
	can choose the 256 colors that display that particular slide the best. When you
	go to Slide Two, PowerPoint can choose the 256 colors that display that slide
	the best, and so on.
	
	If you can change your display settings to 15-bit or 16-bit High Color (32,768 or
	65,536 colors respectively) it means that Windows can use up to 32,768 (15-bit)
	or 65,536 (16-bit) colors simultaneously out of 32,768 or 65,536 possibilities.
	This means that PowerPoint slides sometimes look better under 256 color display
	settings than in High Color.
	
	If you can change your display settings to 24-bit True Color, it means that
	Windows can use up to 16,777,216 colors simultaneously out of 16,777,216
	possible colors.
	
	For more information about changing your Windows video settings, please see your
	Windows documentation and Help.
	
	Additional query words: 4.00a 4.00c 97 powerpt dotted ppt95 patterned Genigraphics palette video driver VGA 8514 640x480 1024x768 800x600
	
	======================================================================
	Keywords          : kbenv kbgraphic kbui kbfaq
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
