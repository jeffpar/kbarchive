---
layout: page
title: "Q50583: PRB: L1092: Cannot Open Module-Definition File"
permalink: /kb/050/Q50583/
---

## Q50583: PRB: L1092: Cannot Open Module-Definition File

{% raw %}

	Article: Q50583
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:5.03,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.03, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK generates the
	following message:
	
	  Link: fatal error L1092: cannot open module-definition file
	
	CAUSE
	=====
	
	Incorrect or unintentional input is given on the Definitions File prompt during
	linking, or a response file incorrectly feeds input to the Definitions File
	prompt.
	
	RESOLUTION
	==========
	
	Specify the correct name for a module-definition (DEF) file on the linker
	command line or accept the default, NUL.DEF.
	
	MORE INFORMATION
	================
	
	A module-definition file is a text file that describes the name, attributes,
	exports, imports, system requirements and other characteristics of an
	application or dynamic-link library (DLL) for the Microsoft Windows or OS/2
	operating system. This file is required to build a dynamic-link library (DLL)
	and is optional (but desirable) for an application. By default, LINK assumes
	that no definition file is required. To link an application for MS-DOS, use a
	semicolon character to terminate the command line before the definition file
	field or accept NUL.DEF at the Definitions File prompt.
	
	When you use commas to separate the names of libraries in a response file, LINK
	assumes that the first comma separates the list of libraries from the
	module-definition file field. The L1092 error occurs because LINK assumes that
	the plus sign (+) is the name of the DEF file.
	
	When you use semicolons to separate the names of libraries in a response file,
	LINK does not read any data after the first semicolon. LINK ignores all
	specified options when a semicolon is the first character encountered in the
	libraries field.
	
	Additional query words: def file
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK503DOS kbLINK515DOS
	Version           : MS-DOS:5.03,5.15
	
	=============================================================================
	

{% endraw %}
