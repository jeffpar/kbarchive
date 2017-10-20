---
layout: page
title: "Q137174: DOCERR: A2041 Error When Macro Parameter Length &gt; 255 bytes"
permalink: /kb/137/Q137174/
---

## Q137174: DOCERR: A2041 Error When Macro Parameter Length &gt; 255 bytes

{% raw %}

	Article: Q137174
	Product(s): Microsoft Macro Assembler
	Version(s): 6.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MASM returns an A2041 error (String or Text literal too long) when passing to a
	MACRO a set of parameters whose total length is greater than 255 bytes. The
	inidvidual parameters may be shorter than the stated 255 byte maximum, but the
	MACRO expansion treats the entire parameter list as a single string (text
	literal).
	
	MORE INFORMATION
	================
	
	This behavior is by design, though it is not currently documented as such. The
	following code demonstrates this behavior:
	
	     .486
	     .486
	     .MODEL FLAT
	     .CODE
	
	     menu_list    macro   item1,item2,item3,item4,item5,item6,item7
	                  endm
	
	          menu_list       <'ACTION1','ACTION1','ACTION1','ACTION1'>,\ 
	                          <'ACTION2','ACTION2','ACTION2','ACTION2'>,\ 
	                          <'ACTION3','ACTION3','ACTION3','ACTION3'>,\ 
	                          <'ACTION4','ACTION4','ACTION4','ACTION4'>,\ 
	                          <'ACTION5','ACTION5','ACTION5','ACTION5'>,\ 
	                          <'ACTION6','ACTION6','ACTION6','ACTION6'>,\ 
	                          <'ACTION7','ACTION7','ACTION7','ACTION7'>
	          end
	
	This is the message MASM returns upon compiling this sample:
	
	  Microsoft (R) Macro Assembler Version 6.11 Copyright (C) Microsoft Corp
	  1981-1994. All rights reserved.
	
	  Assembling: test.asm test.asm(9) : error A2041: string or text literal too
	  long
	
	Additional query words: 6.11
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM611
	Version           : :6.11
	
	=============================================================================
	

{% endraw %}
