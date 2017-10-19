---
layout: page
title: "Q80123: Why Error L2044 Suggests Using /NOE&#91;XTDICTIONARY&#93; Option"
permalink: /kb/080/Q80123/
---

## Q80123: Why Error L2044 Suggests Using /NOE&#91;XTDICTIONARY&#93; Option

	Article: Q80123
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 3.x, 4.x, 5.0x, 5.1x, 5.2, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft LINK command line does not include the /NOE option and the
	object modules contain more than one definition of a symbol, LINK generates the
	following message:
	
	  L2044 : 'symbol' : symbol multiply defined, use /NOE
	
	The following additional information about this error appears in the
	documentation:
	
	  LINK found what it interprets as a public-symbol redefinition, probably
	  because a symbol defined in a library was redefined.
	
	  Relink with the /NOE option. If error L2025 results for the same symbol, then
	  this is a genuine symbol-redefinition error.
	
	LINK generates the L2044 error because it cannot determine if the redefinition
	occurred through the use of the extended dictionary or if the symbol was
	actually redefined. When the command line includes the /NOE option switch and
	the symbol is redefined, a genuine redefinition error occurred and an L2025
	error results.
	
	MORE INFORMATION
	================
	
	The Microsoft Library utility (LIB) creates an extended dictionary when it
	builds a library, unless the LIB command line includes the /NOE option switch.
	The extended dictionary contains cross-references between the modules. For
	example, if Mod1 and Mod2 are modules in a library and function A() in Mod1
	calls function B() in Mod2. In this relationship, Mod1 is termed the "primary"
	module and Mod2 is termed the "secondary" module.
	
	  Mod1: Primary Module    Mod2: Secondary Module
	
	    ______________          ______________
	   |              |        |              |
	   |   A( )       |        |   B( )       |
	   |   {          |        |   {          |
	   |      B( )    |        |              |
	   |   }          |        |   }          |
	   |______________|        |______________|
	
	When an application required Mod1, most likely it will also require Mod2, because
	a function in Mod1 relies on a function in Mod2.
	
	LINK can use this information to speed the linking process. First, LINK finds all
	symbols in the specified object modules and uses them to resolve any external
	references. If any symbols remain unresolved, LINK searches the specified
	libraries for these symbols and loads the modules that resolve the symbols.
	
	For example, consider the process of linking a program that calls function A()
	but does not include the code for A() with a library that contains Mod1 and Mod2
	above. After searching in the object module, A() remains unresolved. When it
	searches the library, LINK finds A() defined in Mod1 and loads that module. If
	it uses the extended dictionary, LINK also loads Mod2, to automatically resolve
	the call to B(). If LINK does not use the extended dictionary, LINK finds that
	B() is an unresolved symbol and it must search the libraries once again.
	
	In general, if an application requires many libraries, the process of resolving
	the symbols in primary modules proceeds much faster when the secondary modules
	are loaded with their corresponding primary modules.
	
	The following example demonstrates how using the extended dictionary can cause a
	symbol redefinition.
	
	               Primary Modules       Secondary Modules
	                ______________         ______________
	               |              |       |              |
	               |   X( )       |       |   Z( )       |
	   Library1:   |   {          |       |   {          |
	               |      Z( )    |       |              |
	               |   }          |       |   }          |
	               |______________|       |______________|
	
	                ______________         ______________
	               |              |       |              |
	               |   Y( )       |       |   Z( )       |
	   Library2:   |   {          |       |   {          |
	               |      Z( )    |       |              |
	               |   }          |       |   }          |
	               |______________|       |______________|
	
	Consider the process of linking an application that calls X() and Y() but does
	not define Z() with Library1 and Library2. If LINK uses the extended dictionary,
	LINK loads both secondary modules and causes a redefinition for Z(). However, if
	LINK does not use the extended dictionary, LINK resolves Z() from the first
	definition of Z() in its library search (LINK searches libraries in the order in
	which they are specified on the command line). Therefore, specifying the /NOE
	option eliminates this error.
	
	Also, consider the process of linking an application that both calls and defines
	Z() with Library1. If LINK uses the extended dictionary, it loads the secondary
	module, which causes a redefinition of Z(). If LINK does not use the extended
	dictionary, the Z() call in function X() is resolved with the version of Z()
	defined in the application. Therefore, specifying the /NOE option eliminates
	this error.
	
	Additional query words: kbinf 3.00 3.60 4.10 5.10 5.20 5.30 5.50 5.60
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK3xDOSSearch kbLINK4xDOSSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : MS-DOS:3.x,4.x,5.0x,5.1x,5.2,5.3x,5.5,5.6; OS/2:5.0x,5.1,5.11,5.13,5.15
	
	=============================================================================
	
