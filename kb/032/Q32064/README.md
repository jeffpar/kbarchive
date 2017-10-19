---
layout: page
title: "Q32064: Mouse, Windows, Desqview, and HP Drawing Gallery"
permalink: /kb/032/Q32064/
---

## Q32064: Mouse, Windows, Desqview, and HP Drawing Gallery

	Article: Q32064
	Product(s): See article
	Version(s): 6.00 6.10 6.14
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 25-JUL-1988
	
	If you run Hewlett-Packard Drawing Gallery from either Windows or
	Desqview and exit the program normally, the mouse still works
	correctly; however, there is no cursor.
	   To correct this problem, modify the PIF file included with the
	program. Under the Directly Modifies section, select Memory in
	addition to Screen.
