---
layout: page
title: "Q42981: Missing Semicolon in GRAPHIC.C"
permalink: /kb/042/Q42981/
---

## Q42981: Missing Semicolon in GRAPHIC.C

{% raw %}

	Article: Q42981
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 2-MAY-1989
	
	On Pages 209 and 210 of "Microsoft QuickC: C For Yourself" is a
	listing of the program GRAPHIC.C. In addition to the misspelling
	pointed out in README.DOC (i.e., _ERESNOCOLOR spelled incorrectly as
	_ERESNOLOR), this program is missing a semicolon after the definition
	of modes.
	
	This definition should read as follows:
	
	   int modes[12] =
	   {
	      _MRES4COLOR, _MRESNOCOLOR, _HRESBW,
	      _HERCMONO,
	      _MRES16COLOR, _HRES16COLOR, _ERESNOCOLOR, _ERESCOLOR,
	      _VRES2COLOR, _VRES16COLOR, _MRES256COLOR, _ORESCOLOR
	   };
	
	If this code is compiled without the trailing semicolon, it will
	produce the following error:
	
	   error C2062: type 'void' unexpected
	
	This error will occur on the prototype to print_menu as follows:
	
	   void print_menu( void );

{% endraw %}
