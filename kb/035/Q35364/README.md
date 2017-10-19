---
layout: page
title: "Q35364: Bus Mouse with InPort Not Supported in IBM PC-DOS 4.00"
permalink: /kb/035/Q35364/
---

## Q35364: Bus Mouse with InPort Not Supported in IBM PC-DOS 4.00

	Article: Q35364
	Product(s): See article
	Version(s): 6.x 1.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 19-SEP-1988
	
	IBM PC-DOS Version 4.00 has three special mouse drivers that only work
	with the DOS Shell: PS/2, serial, and bus mouse (non-InPort).
	
	For bus mice with InPort, we recommend that you load the mouse driver
	that was included with your mouse (MOUSE.COM) and delete the following
	command line in the DOSSHELL.BAT that loads the IBM DOS shell mouse
	driver:
	
	/MOS:PCMSPDRV.MOS
