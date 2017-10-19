---
layout: page
title: "Q278652: Games: Reduced Graphics Performance After Installing DirectX 8.0"
permalink: /kb/278/Q278652/
---

## Q278652: Games: Reduced Graphics Performance After Installing DirectX 8.0

	Article: Q278652
	Product(s): Microsoft Home Games
	Version(s): 2000,95
	Operating System(s): 
	Keyword(s): kbimu msgame
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows Millennium Edition 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain games and benchmarking programs that rely heavily on video hardware
	vertex buffer callbacks may run more slowly after you install Microsoft DirectX
	8.0.
	
	CAUSE
	=====
	
	Some advanced 3-D video acceleration techniques that are collectively known as
	"Hardware Texture and Light" have been reworked and enhanced for DirectX 8.0.
	
	Because video drivers that are written for earlier versions of Microsoft DirectX
	cannot properly leverage these changes, you may notice a reduced video frame
	rate or other graphics performance issues in certain games.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer to inquire about how
	to obtain a video driver that is compliant with DirectX 8.0.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If your computer is running Microsoft Windows 2000, you can also download the
	latest Windows 2000 Service Pack. For additional information about DirectX
	performance in Windows 2000, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q263116 Slow DirectX Performance in Windows 2000
	
	Additional query words: msgame direct-x dx8 performs slow choppy
	
	======================================================================
	Keywords          : kbimu msgame 
	Technology        : kbOSWin2000 kbOSWin98 kbOSWin95 kbOSWinME kbOSWin98SE kbOSWinSearch
	Version           : :2000,95
	Issue type        : kbprb
	
	=============================================================================
	
