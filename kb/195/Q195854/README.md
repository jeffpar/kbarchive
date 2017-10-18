---
layout: page
title: "Q195854: SMS: Poor Mouse Control Using Cirrus-Logic 5436/34 w/ WUSER32"
permalink: kb/195/Q195854/
---

## Q195854: SMS: Poor Mouse Control Using Cirrus-Logic 5436/34 w/ WUSER32

	Article: Q195854
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3,1.2 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP3, 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to take Remote Control of a Compaq Deskpro 2000 computer with
	the Cirrus Logic 5436/5434 chipset, you will see mouse hesitations. The severity
	of this problem increases with the increase in the amount of colors being
	displayed. For example, the mouse hesitation is a problem with 256 colors, but
	the mouse is virtually unusable when you are showing 65536 colors. This problem
	occurs regardless of the driver version loaded on the computer.
	
	CAUSE
	=====
	
	Capturing the screen image using BitBlt can take a substantial amount of time,
	and no mouse movement can be processed while the capture is happening. The jerky
	mouse movement increases with the screen resolution because Systems Management
	Server captures a 256 color image of the screen, so screen resolutions other
	than 256 colors must go through a color translation step that can take a
	considerable amount of time.
	
	WORKAROUND
	==========
	
	To work around this problem, use a faster video card or a faster processor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 3 and Service Pack 4.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsms sp sp3 sp4 jerkiness
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120SP3 kbSMS120SP4
	Version           : :1.2 SP3,1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
