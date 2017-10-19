---
layout: page
title: "Q31330: Mouse Driver Conflict with Fixed-Disk Organizer"
permalink: /kb/031/Q31330/
---

## Q31330: Mouse Driver Conflict with Fixed-Disk Organizer

	Article: Q31330
	Product(s): See article
	Version(s): 6.x
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 25-JUL-1988
	
	The mouse driver may not install due to a possible conflict between
	the Microsoft Mouse driver and the IBM fixed-disk organizer (FDO).
	   This problem can be avoided by altering the load order of the two
	programs. If the mouse driver is loading first and being destroyed by
	the FDO, edit your AUTOEXEC.BAT file so the FDO loads first. If the
	FDO is loading first, load it after the mouse driver.
	   Please note that this workaround is not guaranteed to avert all
	conflicts, but it has yielded positive results in many instances.
