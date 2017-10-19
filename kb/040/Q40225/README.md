---
layout: page
title: "Q40225: The Assemble Command with ADD Instructions"
permalink: /kb/040/Q40225/
---

## Q40225: The Assemble Command with ADD Instructions

	Article: Q40225
	Product(s): See article
	Version(s): 2.20 2.30  | 2.20 2.30
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist2.20 buglist2.30 | mspl13_basic
	Last Modified: 9-AUG-1989
	
	Problem:
	
	In CodeView, I'm using the assemble command to change my ADD
	instruction, and it changes all the code from that point on.
	
	Response:
	
	If you had the instruction ADD AL,44, for example, and you wanted to
	change the 44 to 45 (or any other number), you could use the Assemble
	command to do it. The Microsoft Macro Assembler generates a 04 44 for
	that instruction; however, when changing the 44 to 45, CodeView
	generates an 80 C0 45, which is still the correct instruction of ADD
	AL,45. However, it's a 3-byte instruction. Inserting one extra byte
	into your code will cause each op code from that point on to be off by
	one.
	
	Microsoft has confirmed this to be a problem in Versions 2.20
	and 2.30 of CodeView. We are researching this problem and will
	post new information as it becomes available.
