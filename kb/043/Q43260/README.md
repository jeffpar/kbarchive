---
layout: page
title: "Q43260: Vertical Scroll Inactive with MODE CO40 and Dual Monitors"
permalink: /kb/043/Q43260/
---

## Q43260: Vertical Scroll Inactive with MODE CO40 and Dual Monitors

{% raw %}

	Article: Q43260
	Product(s): See article
	Version(s): 2.x
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | S_C buglist2.20 | mspl13_basic
	Last Modified: 18-APR-1989
	
	While debugging a program using Microsoft CodeView and dual monitors,
	the vertical scroll bar is disabled when the video mode is set to
	40-line color text. This occurs if the mode is set either at the
	command line
	
	   MODE CO40
	
	or from within a program as follows:
	
	   _setvideomode(_TEXTC40);
	
	The scroll bar remains inactive until the mode is changed. This
	problem does not occur on a single monitor system or in any other
	video modes.
	
	Microsoft has confirmed this to be a problem in Version 2.20. We are
	researching the problem and will post new information as it becomes
	available.
	
	The following program demonstrates the problem:
	
	#include <graph.h>
	
	void main (void)
	{
	  _setvideomode(_TEXTC40);
	  _setvideomode(DEFAULTMODE);
	}

{% endraw %}
