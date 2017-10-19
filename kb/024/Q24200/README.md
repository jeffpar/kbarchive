---
layout: page
title: "Q24200: 3270 ERMA Emulator"
permalink: /kb/024/Q24200/
---

## Q24200: 3270 ERMA Emulator

	Article: Q24200
	Product(s): See article
	Version(s): 1.00 1.10 2.00 2.10 2.20 2.30
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 9-AUG-1989
	
	Question:
	   Does CodeView support the 3270 ERMA emulator?
	
	Response:
	   CodeView does not directly support any other program. In this case,
	the 3270 ERMA emulator would have to accommodate CodeView. CodeView
	performs some hardware specific routines (e.g. checking to see if an
	EGA is present) and makes some assumptions on the state of the
	machine. If another program changes the state of the machine, it may
	not work with CodeView. It has been reported that CodeView will hang
	if the 3270 ERMA emulator is enabled; we recommend you disable the
	emulator before running CodeView.
