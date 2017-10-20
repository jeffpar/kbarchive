---
layout: page
title: "Q138614: Description of Foxpro.int Table"
permalink: /kb/138/Q138614/
---

## Q138614: Description of Foxpro.int Table

{% raw %}

	Article: Q138614
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Foxpro.int table is used in international and in cross-platform
	applications. It holds code page and collate table information. This article
	describes the Foxpro.int file.
	
	MORE INFORMATION
	================
	
	
	The same Foxpro.int file is used by the MS-DOS, Windows, and Macintosh versions
	of FoxPro. It is a binary file that is read quickly by FoxPro on startup.
	
	This file is used for culturally-correct sorting. It also tells FoxPro what
	characters in the current code page are admissible in different situations
	(accented characters are in different positions in different code pages), and it
	provides a way to make the translation of data from one code page to another.
	
	This file is fundamental to FoxPro's operation, and the information it contains
	is read at startup, before an application is loaded. This file must reside in
	the Windows\System directory (the directory that holds the VFP3*.ESL file).
	
	A distributed international application or a cross-platform application must
	include the Foxpro.int file in addition to the library files (Foxpro.esl), and
	this file must be in the startup directory.
	
	For more information about international applications, please see the Developer's
	Guide, "Developing International Applications," Chapter 20.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
