---
layout: page
title: "Q112820: PRIVATE Memory Variables and Memory Allocation"
permalink: /kb/112/Q112820/
---

## Q112820: PRIVATE Memory Variables and Memory Allocation

{% raw %}

	Article: Q112820
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 3.00| 2.50 2.50
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	In FoxPro, variables are allocated out of a general pool of FoxPro memory
	that is defined statically at startup. You can set the size of this pool in
	FoxPro for Windows by using the MEMLIMIT setting in the CONFIG.FP(W) file.
	The number of variables and their values will not change the size of the
	general memory pool defined at startup.
	
	NOTE: In Visual FoxPro, memory is dynamically allocated, and the MEMLIMIT
	statement is not used.
	
	Despite the common phraseology, "declaring a variable private," the PRIVATE
	command does not declare anything. It simply hides any higher-level
	variables of the same name as lower-level variables. The only way to
	declare or define a PRIVATE variable is to assign it a value.
	
	FoxPro does not generate native code. It is an interpreter and uses the
	"stack" itself. According to the glossary in the Microsoft C++ version 7.0
	"Environment and Tools" manual, the stack is "a dynamically expanding and
	shrinking area of memory in which data items are stored in consecutive
	order and removed on a last-in, first-out basis. The stack is most commonly
	used to store information for function and procedure calls and for local
	variables." Therefore, variables defined in a FoxPro application cannot be
	stored "on the stack" and are not static.
	
	REFERENCES
	==========
	
	MSDN CD 6, Microsoft C++ "Environment and Tools," version 7.0, Glossary (S)
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50 2.50a 2.50b 3.00| 2.50 2.50
	
	=============================================================================
	

{% endraw %}
