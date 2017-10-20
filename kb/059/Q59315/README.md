---
layout: page
title: "Q59315: CodeView Trace Skips Statement Following Switch Statement"
permalink: /kb/059/Q59315/
---

## Q59315: CodeView Trace Skips Statement Following Switch Statement

{% raw %}

	Article: Q59315
	Product(s): See article
	Version(s): 2.20 2.30 | 2.20 2.30
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist2.20 buglist2.30 | mspl13_basic
	Last Modified: 7-MAR-1990
	
	CodeView incorrectly maps assembly level instructions to source code
	in the first statement following a switch statement with seven or more
	cases.
	
	As shown in the code sample below, the statement following the switch
	is executed correctly, but CodeView steps over the statement while
	tracing in source mode. In mixed source and assembly mode, the
	statement following the switch may be traced into.
	
	Sample Code
	-----------
	
	# include<stdio.h>
	
	void main(void)
	{
	
	   short tag, marker;
	
	   marker = 0;
	   tag = 5;
	
	   switch(tag){
	      case 1:
	         break;
	      case 2:
	         break;
	      case 3:
	         break;
	      case 4:
	         break;
	      case 5:
	         break;
	      case 6:
	         break;
	      case 7:
	         break;
	      default:
	         break;
	   }
	
	      marker = 2;
	
	}

{% endraw %}
