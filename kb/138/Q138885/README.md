---
layout: page
title: "Q138885: Magic School Bus: Slow Performance During Videos, Transitions"
permalink: /kb/138/Q138885/
---

## Q138885: Magic School Bus: Slow Performance During Videos, Transitions

{% raw %}

	Article: Q138885
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbtlckbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Rainforest for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run one of programs listed at the top of this article, you may
	experience a general slowdown during video sequences and transitions.
	
	CAUSE
	=====
	
	This occurs if your video display is set to a color depth of more than 256
	colors.
	
	RESOLUTION
	==========
	
	To resolve this issue, change your display to 256 colors. Use the appropriate
	steps below for your version of Windows.
	
	Windows 95/98
	-------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display, and then click the Settings tab.
	
	3. In the Color Palette or Colors box, click 256 Color, and then click OK.
	
	4. Click Yes to restart the computer.
	
	Windows 3.x
	-----------
	
	1. Make a copy of the System.ini file, located in your Windows directory. For
	  more information about how to accomplish this task in Windows, see your
	  Windows printed documentation or online help.
	
	2. Run Windows Setup, located in the Main group, and make a note of which video
	  driver appears on the Display line.
	
	3. On the Options menu, click Change System Settings. There should be a few
	  drivers listed whose names are similar to the one you just made a note of.
	  Select the driver that specifies 256 colors. Click OK.
	
	4. Restart Windows.
	
	NOTE: Some display drivers change the resolution and color depth from a separate
	control panel rather than by the methods described above. If this is the case,
	see the documentation that should have been included with the video card for
	instructions on how to perform the actions described above.
	
	Additional query words: 1.00 msbhb msbss frizz liz frizzle magicbus display video slow delay movies animation winmsbhuman msbhuman msboceans rain forest msbrain
	
	======================================================================
	Keywords          : kbtlc kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbZNotKeyword kbKidsSearch kbScholasticOcean kbScholasticEarth kbScholasticRainForest kbMSBSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
