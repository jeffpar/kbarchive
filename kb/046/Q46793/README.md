---
layout: page
title: "Q46793: Bus Mouse and Cipher Tape Drive Card"
permalink: /kb/046/Q46793/
---

## Q46793: Bus Mouse and Cipher Tape Drive Card

{% raw %}

	Article: Q46793
	Product(s): See article
	Version(s): 1.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 31-AUG-1989
	
	Problem:
	
	When using the Microsoft Bus Mouse in an AST Premium 386/25, I got the
	following error message after I installed a Cipher Tape drive card:
	
	   Bad or missing interrupt jumper
	
	Response:
	
	This problem occurred because the interrupt and primary/secondary
	jumper settings were wrong. To correct this problem, change J4 to
	interrupt 2, and J3 to secondary inport.

{% endraw %}
