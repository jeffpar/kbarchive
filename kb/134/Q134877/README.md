---
layout: page
title: "Q134877: PPT: Using Transitions to Achieve Smoother Branching"
permalink: /kb/134/Q134877/
---

## Q134877: PPT: Using Transitions to Achieve Smoother Branching

{% raw %}

	Article: Q134877
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use Play Settings in PowerPoint 4.0 to display a branched
	slide show before the slide in which the branch is inserted. This has two
	advantages:
	
	- It helps to ensure a smoother-looking transition when the branch is
	  activated.
	
	- It ensures that the host slide (the one the branch is inserted on) displays
	  only once, rather than twice.
	
	While the same Play Settings are not available in PowerPoint for Windows 95,
	version 7.0, it is possible to simulate the same behavior. This article lists a
	number of steps to help ensure a smooth transition to branches.
	
	MORE INFORMATION
	================
	
	The following steps assume you have not yet inserted the presentation to which
	you want to branch.
	
	1. Add a new slide to your host presentation. (You will insert the branch on
	  this slide.)
	
	2. On the Insert menu, click Object. Click "Create From File and Display As
	  Icon."
	
	3. Click Browse to find the presentation you want to branch to, select it, and
	  then click OK.
	
	4. Click OK again.
	
	  You should see the icon for the branch on your new slide.
	
	5. On the Tools menu, click Animation Settings and set the play options to Show.
	
	6. Click More and select the "Automatically after 0 seconds" and "Hide while not
	  Playing" options. Click OK two times.
	
	7. On the Format menu, click Custom Background. Choose Black as the background
	  color and select the "Omit Background Graphics from Master" option. Click
	  Apply (not Apply To All).
	
	PowerPoint Version 4.0
	----------------------
	
	To branch to an embedded presentation when the transition to the host slide
	starts in PowerPoint 4.0, follow these steps:
	
	1. Select the embedded presentation.
	
	2. On the Tools menu, click Play Settings.
	
	3. Under Start Play, select both Hide While Not Playing and When Transition
	  Starts.
	
	4. Click OK.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 winppt ppt95 ppt7 branch jump
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	
	=============================================================================
	

{% endraw %}
