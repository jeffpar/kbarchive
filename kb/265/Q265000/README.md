---
layout: page
title: "Q265000: StarLancer Error Message: Debug Assertion Error"
permalink: /kb/265/Q265000/
---

## Q265000: StarLancer Error Message: Debug Assertion Error

{% raw %}

	Article: Q265000
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you finish Mission 3 in Microsoft StarLancer, you may receive the following
	error message:
	
	  Debug assertion in module C:\Lancer\Game\Aigeneric.cpp line 356 failed:
	  Expression [0] evaluates to false. Cannot set AI find new target on ship song
	  escort 3 still in fixed gate jump-in.
	
	When you click OK, the game quits.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- The video driver for your video adapter is outdated.
	
	- The CD-ROM or DVD-ROM drive cannot read the StarLancer CD-ROM.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Update the Video Driver
	-----------------------
	
	Contact your hardware manufacturer to inquire about how to obtain and install the
	latest version of the video driver for your video adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, proceed to the next method.
	
	Use Basic CD-ROM Troubleshooting Methods
	----------------------------------------
	
	Use basic CD-ROM troubleshooting steps to resolve the issue. For additional
	information about how to troubleshoot CD-ROM read errors, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q218617 How to Troubleshoot CD-ROM Read Issues
	
	If the issue continues to occur, proceed to the next method.
	
	Uninstall and Reinstall StarLancer
	----------------------------------
	
	If you selected the Full Install option when you installed StarLancer, uninstall
	and then reinstall the game. When you are prompted to select an installation
	option, click Typical Install instead of Full Install.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, you may be able to work around the issue by
	reducing the graphics hardware acceleration setting in Microsoft Windows.
	
	NOTE: When you reduce the graphics hardware acceleration setting, you reduce the
	overall graphical performance of your computer.
	
	To reduce the graphics hardware acceleration setting:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	If the issue continues to occur, restore the original graphics hardware
	acceleration setting. To do this, repeat the preceding steps to move the
	Hardware Acceleration slider all the way to the right (the Full acceleration
	setting).
	
	Additional query words: 1.00 msgame star lancer
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbStarlancerSearch kbStarlancer
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
