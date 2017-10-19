---
layout: page
title: "Q162368: PRB: Error Message &quot;&lt;library&gt;.vcx Is Not an Object File&quot;"
permalink: /kb/162/Q162368/
---

## Q162368: PRB: Error Message &quot;&lt;library&gt;.vcx Is Not an Object File&quot;

	Article: Q162368
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add an existing Visual FoxPro for Windows 3.0 .vcx class library file
	into a Visual FoxPro for Windows 5.0 project and attempt to modify an element of
	the library, you may get the following error message:
	
	  <path\library>.vcx is not an object file.
	
	RESOLUTION
	==========
	
	Create a copy of the Visual FoxPro for Windows 3.0 class library .vcx file, and
	then type the following in the command window:
	
	  COMPILE CLASSLIB <path\library>.vcx
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Compile Classlib compiles source code contained in a memo field named Methods,
	and becomes compiled into object code that is stored in a memo field named
	OBJCODE.
	
	Source code for class libraries, stored procedures, and forms are stored in memo
	fields either in the .vcx file table, the .dbc file table, or the .scx file
	table. When each is compiled, the object code is placed into a separate memo
	field. This object code is specific to the FoxPro version.
	
	NOTE: Forms are automatically compiled when they are saved from the Form
	Designer. If you open a Visual FoxPro for Windows 5.0 form in Visual FoxPro for
	Windows 3.0, you will receive the following error message:
	
	  Error loading file - Methods - record number 2. Object file from
	  <path\form>.scx was compiled in a previous version of FoxPro.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q162076 INF: Conversion of VFP Files From Version 3.0 to 5.0 and Back
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbHWMAC kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
