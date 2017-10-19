---
layout: page
title: "Q66561: 386MAX.SYS with MOUSE.COM 7.0 Can Hang Sprite Video Cards"
permalink: /kb/066/Q66561/
---

## Q66561: 386MAX.SYS with MOUSE.COM 7.0 Can Hang Sprite Video Cards

	Article: Q66561
	Product(s): See article
	Version(s): 7.00 7.03 7.04
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | SR# S901024-6 B_BasicCom | mspl13_basic
	Last Modified: 15-NOV-1990
	
	When used with 386MAX.SYS version 4.05 (an expanded memory driver by
	Qualitas Software), Microsoft Mouse driver versions 7.00, 7.03, and
	7.04 can hang computers equipped with video cards that have sprite
	capabilities (the ability to have a graphic cursor in text mode).
	
	This problem only occurs with the above mentioned versions. Earlier
	versions of the Microsoft Mouse driver will not cause this problem.
	
	Using Mouse driver version 7.04 with the "/y" line option will fix
	this problem.
	e.g.
	    in DOS:
	
	      mouse /y
	
	 or in the AUTOEXEC.BAT:
	
	      C:\MOUSE1\MOUSE /Y
