---
layout: page
title: "Q63319: PRB: Unknown Function psrch with Brief Emulation in PWB"
permalink: /kb/063/Q63319/
---

## Q63319: PRB: Unknown Function psrch with Brief Emulation in PWB

{% raw %}

	Article: Q63319
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Brief emulation feature of the Programmer's WorkBench (PWB)
	versions 1.0 and 1.1, reinitialization of the TOOLS.INI file will cause a number
	of unknown functions to appear when you try to use them. In short, most of the
	unknown functions that may be reported are related to search features such as
	the psearch switch. The error message associated with this search feature is
	commonly "Unknown function psrch."
	
	CAUSE
	=====
	
	This error occurs only after you use the Initialize function.
	
	The Initialize function discards current macro definitions and rereads the
	appropriate section of TOOLS.INI. This is not exactly the same as restarting
	PWB; the Autostart macro is not executed after Initialize. The BRIEF emulation
	depends on the Autostart macro to define the search functions.
	
	RESOLUTION
	==========
	
	To recover the definition of the missing macros, execute the toggle_re BRIEF
	emulation macro (CTRL+F6). To avoid having to remember to execute this macro,
	you can add this to the main section of TOOLS.INI:
	
	     reinit:=Initialize Autostart
	     reinit:Shift+F8
	
	Or you can define the macros as follows:
	
	       psrch:=arg arg "String to Search for" prompt ->can
	                                             psearch => :>can cancel
	     msrch:=arg arg "String to Search for" prompt ->can
	                                             msearch => :>can cancel
	     qrepl:=arg arg qreplace
	     srchname:="REoff"
	
	Additional query words: 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
