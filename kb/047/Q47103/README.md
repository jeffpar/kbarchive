---
layout: page
title: "Q47103: DEF File Entry of EXECUTEONLY Causes Problems with CVP"
permalink: /kb/047/Q47103/
---

## Q47103: DEF File Entry of EXECUTEONLY Causes Problems with CVP

	Article: Q47103
	Product(s): See article
	Version(s): 2.20 2.30
	Operating System(s): OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 30-AUG-1989
	
	Question:
	
	When I step into my DLL, I can see and step through the source code
	correctly. I also can look at local variables. However, I cannot set
	breakpoints in the DLL. Also, when I try to look at the disassembled
	code I see the following:
	
	   ??? No Code ???
	
	I am using the correct Compile and Link options. Why is CodeView
	acting strangely?
	
	Response:
	
	In the .DEF file for the DLL, you had the EXECUTEONLY attribute as
	opposed to the default EXECUTEREAD. When you choose EXECUTEONLY,
	CodeView cannot read the code segment as it must to work correctly.
	Removing the EXECUTEONLY attribute corrects the problem.
