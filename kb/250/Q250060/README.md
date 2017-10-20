---
layout: page
title: "Q250060: BUG: VC++ May Stop Responding When Importing a Type Library"
permalink: /kb/250/Q250060/
---

## Q250060: BUG: VC++ May Stop Responding When Importing a Type Library

{% raw %}

	Article: Q250060
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC600bug kbVS600bug kbDSupport kbGrpDSTools
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the #import compile time directive, the Visual C++ Integrated
	Development Environment (IDE) stops responding.
	
	CAUSE
	=====
	
	The thread that updates the ClassView information has become blocked.
	
	RESOLUTION
	==========
	
	To solve this problem, follow these steps to ensure that the #import directive
	is not preprocessed for ClassView information:
	
	1. Remove the #import directive from the source file.
	
	2. Create a new header file and place the #import directive in this file. Do not
	  add this header file to the project.
	
	3. Include the newly created header file in the source file from step 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	ClassView information is updated dynamically each time a file is saved. If the
	resulting .tlh and .tli files are out-of-date with respect to the type library
	being imported, LoadTypeLib is called on the type library and the type
	information is stored in the ncb file.
	
	There are three kinds of type libraries:
	
	- A stand-alone type library implemented by Typelib.dll.
	
	- A DLL or an executable that contains a TYPELIBRARY resource.
	
	- If the file is none of the above, the file name is parsed into a moniker and
	  then bound to the moniker.
	
	The symptoms described in this article can be caused by importing libraries that
	must be parsed into a moniker.
	
	NOTE: This is a problem with ClassView. The compiler will still generate the
	correct type information from the type library.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC600bug kbVS600bug kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
