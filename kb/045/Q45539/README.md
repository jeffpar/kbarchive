---
layout: page
title: "Q45539: Incorrect Prototypes for 'Window' Functions in QC Advisor"
permalink: /kb/045/Q45539/
---

## Q45539: Incorrect Prototypes for 'Window' Functions in QC Advisor

{% raw %}

	Article: Q45539
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 26-JUN-1989
	
	A number of window functions that take the structure _wxycoord as a
	parameter are incorrectly prototyped in the QuickC Version 2.00
	Advisor. The Advisor states that the structure is to be passed; doing
	so generates the following error:
	
	   test.c(11) : error C2115: 'argument' : incompatible types
	
	The functions actually take a pointer to the structure rather than the
	structure itself.
	
	The following are functions documented incorrectly in the Advisor as
	accepting structures rather than pointers to structures as parameters:
	
	   _pie_wxy
	   _rectangle_wxy
	   _arc_wxy
	   _ellipse_wxy
	   _getimage_wxy
	   _getviewcoord_wxy
	   _imagesize_wxy

{% endraw %}
