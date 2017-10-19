---
layout: page
title: "Q186907: HOWTO: Set Up Visual C++ to Use the HTML Help API"
permalink: /kb/186/Q186907/
---

## Q186907: HOWTO: Set Up Visual C++ to Use the HTML Help API

	Article: Q186907
	Product(s): Microsoft C Compiler
	Version(s): 1.21,1.3,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC420 kbVC500 kbVC600 kbFAQ kbDSupport kbGrpDSTools kbHTMLHelp121 kbHTMLHelp130
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft HTML Help, versions 1.3, 1.21 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps that must be performed in order to use the HTML
	Help API with Visual C++.
	
	MORE INFORMATION
	================
	
	1. Include Htmlhelp.h in any source file that uses the HTML Help API. Add
	  Htmlhelp.h to the .cpp file where the HTML Help API is invoked or in the
	  include file for that .cpp file.
	
	2. Show Visual C++ where to find Htmlhelp.h; it is installed with the HTML Help
	  Workshop in the <HTML Help Workshop Path>\Include directory. Specify
	  this location for Visual C++ as follows:
	
	  a. On the Tools menu, click Options.
	
	  b. In the Options dialog box, click the Directories tab.
	
	  c. In the Show Directories For list, click Include Files.
	
	  d. Type the location of the HTML Help Workshop's include directory in the
	     Directories box.
	
	3. Make sure you use Htmlhelp.lib when linking.
	
	4. Show Visual C++ where to find the HTML Help library, located in the <HTML
	  Help Workshop Path>\lib. Specify this location in Visual C++ by returning
	  to the Directories tab described in step 2:
	
	  a. In the Show Directories For list, click Library Files.
	
	  b. Type the location of the HTML Help Workshop's library directory in the
	     Directories box.
	
	5. Next, add the chosen library to the Visual C++ project settings, as follows:
	
	  a. On the Project menu, click Settings.
	
	  b. After the Settings dialog box appears, click the Link tab.
	
	  c. Select General in the Category list, and then type the name of the Html
	     Help library in the Object/Library Modules box.
	
	6. When building the project, the following warning message may appear:
	
	  ..default lib LIBCMT conflicts with use of other libs; use
	  /NODEFAULTLIB:library.
	
	  Follow the procedure in step 5 to return to the Link tab in the Settings
	  dialog box:
	
	  a. In the Category list, click Input.
	
	  b. Then type LIBCMT in the Ignore Libraries box.
	
	  This method disables the default library search, so if any of the default
	  libraries are being used, they must now be explicitly listed.
	
	The Visual C++ project can now call the HTML Help API successfully.
	
	REFERENCES
	==========
	
	HTML Help Workshop: Online Help HTML Help Web Site:
	
	  hhttp://msdn.microsoft.com/workshop/Author/htmlhelp/
	
	"Official Microsoft HTML Help Authoring Kit" by Steve Wexler, Microsoft Press
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC420 kbVC500 kbVC600 kbFAQ kbDSupport kbGrpDSTools kbHTMLHelp121 kbHTMLHelp130 kbvc600faq 
	Technology        : kbVCsearch kbHTMLHelpSearch kbAudDeveloper kbHTMLHelp121 kbHTMLHelp130 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : :1.21,1.3,4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
