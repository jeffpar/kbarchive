---
layout: page
title: "Q146866: PRB: Type Indexes in .PDB Files Are Limited"
permalink: /kb/146/Q146866/
---

## Q146866: PRB: Type Indexes in .PDB Files Are Limited

{% raw %}

	Article: Q146866
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When linking a debug version of your application, you may get the following
	warning message:
	
	  LINK : warning LNK4018: too many type indexes in PDB "filename", discarding
	  subsequent type information
	
	NOTE: You will not be able to see the subsequent types in the debugger.
	
	CAUSE
	=====
	
	The number of type indexes in the Program Database File (.pdb file) for your
	project exceeded 64K for Visual C++ 4.x and 16M for later versions. This is a
	limitation of the debugging format in a .pdb file. The format uses a 16-bit
	field to store the number of types. This field was increased to 24 bits in
	Visual C++ 5.0.
	
	RESOLUTION
	==========
	
	To avoid this warning, use one or more of the following methods to decrease the
	number of type indexes in your .pdb file:
	
	- Compile modules that you do not need to debug, without debugging information.
	
	- Break your project into multiple Dynamic Link Libraries (DLLs). You can use
	  subprojects in Developer Studio to build the new libraries.
	
	- Use the compile time option /Yd. It will cause the type information for only
	  those symbols that are referenced to be generated. This slows down builds
	  somewhat but may lower the total number of symbols below the 64K limit.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can review each object module to determine how many symbols it contains by
	using dumpbin /headers <file>.obj. The first section in the output tells
	how many symbols the object module contains.
	
	With the introduction of Visual C++ 4.0, the size of the MFC libraries increased
	significantly and debugging information for the C run-time (CRT) libraries is
	now included in debug builds. These changes will increase the total number of
	type indexes in your project's .pdb file from earlier versions of Visual C++.
	
	Additional query words: symbol missing cannot debug
	
	======================================================================
	Keywords          : kbusage kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
