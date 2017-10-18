---
layout: page
title: "Q142318: HOWTO: Remove OLE Controls &amp; Gallery Components from a Project"
permalink: kb/142/Q142318/
---

## Q142318: HOWTO: Remove OLE Controls &amp; Gallery Components from a Project

	Article: Q142318
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are occasions when you may need to remove a Toolbox component, an OLE
	Control, or a Visual C++ 6.0 Component Gallery component from your project.
	Because all components are different, the steps in this article are general
	guidelines only.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. If you are attempting to remove a Toolbox component from your project, you
	  may delete the component from the Visual Studio .NET designers. Any event
	  handlers that you have added, such as the Click event handler for a button,
	  must be manually deleted from your code (both the .cpp and .h files) because
	  the designer does not delete the event handlers automatically.
	
	2. In Visual C++ 6.0, if you are attempting to remove a Component Gallery
	  component from your project, read the Results section of the component's Help
	  file to find out what the component inserts into your application. If you are
	  attempting to remove an OLE Control from your project, locate the wrapper
	  classes for the OLE Control that have been inserted into your project.
	
	3. Remove the source code files that were inserted into your project. Generally,
	  these are source files that define the class and relevant code for the OLE
	  Control or Component. For example, the Password Dialog Component creates and
	  adds the PWDLG1.CPP and PWDLG1.H files to your project.
	
	4. If you are attempting to remove a Component Gallery component, remove any
	  code that is inserted into existing code files. For example, several
	  Components insert code into a project's InitInstance() function. To find all
	  occurrences of inserted code, search for "// CG:" in your .cpp files. This
	  comment precedes each code insertion that was made to your application. Also,
	  be sure to remove any added member declarations in the .h files, and make
	  sure your remove all appropriate header files from these same source files.
	  For example, to remove the Password Dialog Component from your project,
	  remove the following from all files in your project:
	
	        #include "pwdlg1.h"
	
	  When you remove code, be sure to remove any associated message map entries.
	  For example, the Clipboard Assistant Component adds a number of message map
	  entries to a project.
	
	5. Remove any added resources. For example, the Password Dialog Component
	  inserts a dialog resource into the project's resource file (.rc).
	
	In addition to the previous steps, some OLE Controls and Component Gallery
	components insert data at the end of your project's .mak file for Visual C++,
	versions 4.x. This data does not affect your project but might prevent you from
	reinserting the Control or Component later. Developer Studio uses this data to
	determine which controls to display in its Controls toolbar.
	
	In Visual C++, versions 5.0 and 6.0, this information is stored in the .dsp file,
	and the following instructions do not apply. Similar troubleshooting methods can
	remove this information from the .dsp file, but directly modifying the project
	file is unsupported.
	
	In Visual C++, versions 4.x, you can identify this data by the Section keyword.
	For example, inserting the Splash Screen Component adds the following text to
	your project's .mak or file:
	
	     #####################################################################
	     # Section SplashIt : {21FFBCBF-33A6-11CF-9420-00AA00C14AF9}
	     #   0:8:Splash.h:C:\SplashIt\Splash.h
	     #   0:10:Splash.cpp:C:\SpashIt\Splash.cpp
	     #   1:10:IDB_SPLASH:102
	     #   2:10:ResHdrName:resource.h
	     #   2:11:ProjHdrName:stdafx.h
	     #   2:10:WrapperDef:_SPLASH_SCRN_
	     #   2:12:SplClassName:CSplashWnd
	     #   2:21:SplashScreenInsertKey:4.0
	     #   2:10:HeaderName:Splash.h
	     #   2:10:ImplemName:Splash.cpp
	     #   2:7:BmpID16:IDB_SPLASH
	     # End Section
	     #####################################################################
	
	To allow for re-inserting the Splash Screen Component, this section of text must
	first be removed from the project's .mak or file.
	
	WARNING: Remove only the entries for the component you want to delete. Do not
	delete another component's entry that you may still need to keep.
	
	To determine which Section entries belong to a particular component, you should
	create a new MFC project, insert the component in question, and examine this new
	project's .mak file. Then you can remove the identical Section entries from the
	original project.
	
	Additional query words: VwbIss
	
	======================================================================
	Keywords          : kbide kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
