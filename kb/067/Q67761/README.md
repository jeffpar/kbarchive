---
layout: page
title: "Q67761: GRAPHICS.LIB Cannot Be Used with Tiny Model"
permalink: /kb/067/Q67761/
---

## Q67761: GRAPHICS.LIB Cannot Be Used with Tiny Model

{% raw %}

	Article: Q67761
	Product(s): See article
	Version(s): 6.00 6.00a
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc s_quickasm | mspl13_c
	Last Modified: 6-FEB-1991
	
	Programs written in the tiny model cannot use the graphics library
	supplied with Microsoft C versions 6.00 and 6.00a. The graphics
	routines are meant to be model-independent, so they are labeled as far
	procedures. The linker does not allow far references in a tiny model
	program and does not resolve the references to the graphics routines.
	
	The sample source code below demonstrates this problem. The program
	should be compiled with:
	
	   cl /AT foo.c graphics.lib
	
	For more information on building .COM files, query on the article
	titled "Use of _far Keyword in Tiny Programs."
	
	Sample Code
	-----------
	
	#include <graph.h>
	
	void main(void);
	
	void main()
	{
	   _setvideomode(_DEFAULTMODE);
	}

{% endraw %}
