---
layout: page
title: "Q93591: DOC: strstream Constructor Documented Incorrectly"
permalink: /kb/093/Q93591/
---

## Q93591: DOC: strstream Constructor Documented Incorrectly

{% raw %}

	Article: Q93591
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:; WINDOWS:1.0,1.5,1.51,1.52; winnt:1.0,2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbLangC kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	-------
	
	The online help for all versions of Microsoft Visual C++ contains the
	following, incorrect statement in the strstream class constructor
	description:
	
	  The second constructor makes an strstream object out of the first nLength
	  characters of the psc buffer.
	
	The reference to the "psc" buffer should be to the "pch" buffer, which is
	listed as the first parameter to the second strstream constructor (shown
	below).
	
	  strstream( char* pch, int nLength, int nMode );
	
	The incorrect statement also appears in the Microsoft C/C++ "Class
	Libraries Reference" manual for version 7.0 and in the the Microsoft Visual
	C++ "Reference Volume III" manual for Visual C++ version 1.0.
	
	
	MORE INFORMATION
	----------------
	
	The strstream object is defined with two constructors. The first
	constructor creates a strstream object that uses an internal, dynamic
	buffer which is initially empty. This is the default. The second
	constructor accepts three parameters: pch, nLength, and nMode. Based on the
	stream creation mode, nMode, it creates a strstream object from the first
	"nLength" characters of the "pch" buffer.
	
	For more information on the strstream object, consult the "iostream
	Reference" in the Visual C++ version 4.0 Books Online.
	
	Additional query words: constructer
	
	======================================================================
	Keywords          : kbdocerr kbLangC kbLangCPP kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 kbOLDocs 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : MS-DOS:; WINDOWS:1.0,1.5,1.51,1.52; winnt:1.0,2.0,2.1,4.0,4.1,5.0,6.0
	
	=============================================================================
	

{% endraw %}
