---
layout: page
title: "Q44469: _clearscreen Does Not Clear the Entire Screen in _ERESCOLOR"
permalink: /kb/044/Q44469/
---

## Q44469: _clearscreen Does Not Clear the Entire Screen in _ERESCOLOR

{% raw %}

	Article: Q44469
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.00 | mspl13_c
	Last Modified: 25-MAY-1989
	
	Consider the following program:
	
	   #include <graph.h>
	
	   void main (void)
	   {
	           _setvideomoderows (_ERESCOLOR, 43);
	           _rectangle (_GBORDER, 0, 0, 639, 349);
	           _clearscreen (_GCLEARSCREEN);  /* not entirely successful */
	   }
	
	When this program is executed on a computer that supports the
	_ERESCOLOR video mode with 43 lines of text, the largest rectangle
	possible is drawn on the screen. Next, the entire screen should be
	cleared by the _clearscreen function. But its not -- the bottom six
	lines of pixels are not cleared. This is incorrect behavior.
	
	To work around this problem, add the following two lines of code to
	the above program:
	
	   _setcolor (0);
	   _rectangle (_GFILLINTERIOR, 0, 344, 639, 349);
	
	This code will clear the bottom six lines of pixels.
	
	Microsoft has confirmed this to be a problem in Version 2.00. We are
	researching this problem and will post new information as it becomes
	available.

{% endraw %}
