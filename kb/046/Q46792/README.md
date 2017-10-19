---
layout: page
title: "Q46792: _setvideomode Resets the Palette"
permalink: /kb/046/Q46792/
---

## Q46792: _setvideomode Resets the Palette

	Article: Q46792
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_QuickC _remapallpalette _remappalette | mspl13_c
	Last Modified: 25-JUL-1989
	
	The Microsoft C function _setvideomode resets the palette to the
	default palette colors each time it is called. Therefore, remapping
	the color palette in C lasts only as long as the video mode remains
	active.
