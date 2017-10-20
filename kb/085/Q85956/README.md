---
layout: page
title: "Q85956: DOC: Visual Editors Do Not Use INCLUDE Environment Variable"
permalink: /kb/085/Q85956/
---

## Q85956: DOC: Visual Editors Do Not Use INCLUDE Environment Variable

{% raw %}

	Article: Q85956
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbClassView kbide kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online help provides the following information about the #include
	preprocessor directive:
	
	  If the file is still not found or if the path-spec is enclosed in angle
	  brackets, the next directories searched are the ones specified using the /I
	  custom compiler option. After those have been searched, the compiler searches
	  the directories specified in the INCLUDE environment variable.
	
	This documentation is correct if the compiler is invoked from the command line.
	However, from within the Visual WorkBench, the INCLUDE environment variable is
	ignored. Instead, the directories searched are those set by choosing Directories
	from the Options menu in Visual C++ for Windows and in Visual C++ 32-bit edition
	versions 1.0 and 2.x, or by choosing the Directories Tab from the Options dialog
	box in Visual C++ version 4.x. This information also applies to the LIB
	environment variable.
	
	To set the directories searched for include files in Visual C++ version 4.x, use
	the following steps:
	
	1. Select Options... from the Tools menu.
	
	2. Select the Directories tab in the Options dialog box.
	
	3. Select the appropriate platform (e.g., Win32) in the Platform drop-down list
	  box. The directories to be searched will be specific to this platform.
	
	4. Select "Include files" in the Show directories for drop-down list box.
	
	5. Enter the full paths of the directories to be searched in the Directories
	  editable list box, one directory per line. The directories will be searched
	  in the order listed.
	
	6. Press OK to confirm the selections.
	
	For more information on setting directories in Visual C++ version 4.x, search for
	"Setting Directories" in the Books Online. For more information on the #include
	preprocessor directive, search the online documentation for "#include".
	
	Additional query words: on-line
	
	======================================================================
	Keywords          : kbdocerr kbClassView kbide kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
