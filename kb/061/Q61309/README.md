---
layout: page
title: "Q61309: Steps Needed to Make Source Browser Usable"
permalink: /kb/061/Q61309/
---

## Q61309: Steps Needed to Make Source Browser Usable

{% raw %}

	Article: Q61309
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
	
	SUMMARY
	=======
	
	Before using the Browse menu options in the Programmer's WorkBench (PWB), you
	must first define and build the database the Source Browser will use. If this
	database is not already built, all options on the Browse menu will be
	unavailable (gray).
	
	MORE INFORMATION
	================
	
	The following steps must be taken to define a database that is usable by the
	Source Browser menu options:
	
	1. Generate a program list using the Set Program List command in the Make menu.
	  The PWB creates one internally if you do not specify one, and the program
	  only uses one source file. If a program is larger than one source file and a
	  program list is not set, it is impossible to generate a Source Browser
	  database.
	
	2. Choose Browse Options from the Options menu. You must select the Generate
	  Browse Information field in the dialog box to create the Source Browser
	  database.
	
	3. Build your program using the Make Menu option. You MUST have a successful
	  build (compile AND link) of the program for a Source Browser database to be
	  generated.
	
	The Browse Menu options should now be available for use.
	
	If, after taking the steps outlined above, the Browse Menu options are still
	unavailable for use, query on the following words:
	
	  browse and options and unavailable and strange and circumstances
	
	
	For printed documentation explaining the set up and use of the Source Browser,
	see pages 50-52 of "Installing and Using the Professional Development System."
	You can also find information about the Source Browser in the online help under
	Programmer's WorkBench, Using the PWB Source Browser.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
