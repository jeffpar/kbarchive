---
layout: page
title: "Q39089: Using _gettextposition and printf."
permalink: /kb/039/Q39089/
---

## Q39089: Using _gettextposition and printf.

{% raw %}

	Article: Q39089
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 12-DEC-1988
	
	When the C graphic routines are being used in a program, they should
	be used for all output to the screen, including text output. Other C
	run-time functions for output should not be used.
	
	If a C program uses the run-time function _gettextposition, the
	function _outtext should be used to output text to the screen. Using
	the function printf will cause overwritting of text or blank lines to
	be inserted on the video screen.
	
	The following program will result in unpredictable output:
	
	#include <stdio.h>
	#include <stdlib.h>
	#include <graph.h>
	
	main()
	{
	   struct rccoord rcoord;
	   system("cls");
	   printf("11\n");
	   printf("22222222\n");
	   printf("333333\n");
	   printf("fourth line\n");
	   printf("fifth line\n");
	
	   rcoord=_gettextposition();
	
	   printf("6666\n");
	   printf("77777777\n");
	}
	
	The work around is use _outtext instead of printf.

{% endraw %}
