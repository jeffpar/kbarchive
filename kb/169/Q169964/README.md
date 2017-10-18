---
layout: page
title: "Q169964: PPT7: Animation Effect Doesn't Work with Auto Advance"
permalink: kb/169/Q169964/
---

## Q169964: PPT7: Animation Effect Doesn't Work with Auto Advance

	Article: Q169964
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you apply an animation effect, such as Hide After Animation, and set the
	timing to start automatically, the animation effect does not work on the last
	object on the slide. (To locate the Hide After Animation effect, select the
	object, click Custom Animation on the Tools menu, click the Effects tab, and
	then click the After Animation drop-down list.)
	
	CAUSE
	=====
	
	Animation effects that control actions occurring after the animation for a
	selected object, occur with the next build step, such as a mouse click. They do
	not occur between automatic builds.
	
	WORKAROUND
	==========
	
	To work around this problem, set the timing option to On Mouse Click. To do
	this, follow these steps:
	
	1. Select the object.
	
	2. On the Tools menu, click Custom Animation.
	
	3. Click the Timing tab.
	
	4. In the Start Animation section, click On Mouse Click.
	
	5. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
