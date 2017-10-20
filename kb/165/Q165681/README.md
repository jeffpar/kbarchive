---
layout: page
title: "Q165681: INFO: Visual C++ 5.0 Readme, Build Issues"
permalink: /kb/165/Q165681/
---

## Q165681: INFO: Visual C++ 5.0 Readme, Build Issues

{% raw %}

	Article: Q165681
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Build Issues
	------------
	
	Reducing the Size of Header Files for Faster Builds Several Project System and
	Debugger Methods are Disabled When the BuildFinish Event is Fired Building ATL
	Projects from the Command Line Can Generate NMAKE Error Help File Names With
	European Characters Do Not Copy Correctly On Windows 95
	
	MORE INFORMATION
	================
	
	Reducing the Size of Header Files for Faster Builds
	---------------------------------------------------
	
	To speed the build process, Visual C++ 5.0 provides the following new defines.
	Use them to reduce the size of the Win32 header files.
	
	- VC_EXTRALEAN
	
	- WIN32_LEAN_AND_MEAN
	
	Newly generated Visual C++ AppWizard applications automatically benefit from
	VC_EXTRALEAN. You can also manually define VC_EXTRALEAN to speed the build
	process of many legacy MFC applications.
	
	Non-MFC C++ and C applications can define WIN32_EXTRA_LEAN and any applicable
	NOservice defines, such as NOSOUND (see DevStudio\Vc\include\Windows.h), to
	reduce their build times.
	
	To add these defines, from the Project menu, choose Settings. The Projects
	settings dialog box appears. Click the C/C++ tab. In the Category list, select
	Preprocessor. Add the desired definitions to the Preprocessor Definitions box.
	
	Several Project System and Debugger Methods are Disabled when the
	
	BuildFinish Event is Fired
	--------------------------
	
	Consider the following VBScript event handler:
	
	     Sub Application_BuildFinish(nNumErrors, nNumWarnings)
	
	     if nNumErrors+nNumWarnings = 0 then
	         ExecuteCommand "ToggleOutputWindow"
	         ExecuteConfiguration
	     end if
	
	     End Sub
	
	ExecuteConfiguration fails because the BuildFinish event is fired before several
	project system and debugger commands have been re-enabled. The methods that
	invoke these commands, like ExecuteConfiguration, will remain disabled between
	the time that the event is fired and the time the event handler returns. After
	the Application_BuildFinish event handler returns, these methods will be
	re-enabled.
	
	Workaround
	
	1. Create a new macro, for example, MyBuild, with the following code:
	
	        Sub MyBuild
	            Build
	            ' Add other method calls here that can't appear in the
	            ' BuildFinish event handler, such as "ExecuteConfiguration"
	        End Sub
	
	2. Always invoke a build by using this new macro instead of using the default
	  Build menu command or toolbar. Note that you can create a custom menu command
	  or toolbar button for your new MyBuild macro by going to the Tools menu,
	  clicking Customize, and using the Commands tab of the dialog box.
	
	The Application_BuildFinish VBScript event handler now becomes:
	
	     Sub Application_BuildFinish(nNumErrors, nNumWarnings)
	
	         if nNumErrors+nNumWarnings = 0 then
	             ExecuteCommand "ToggleOutputWindow"
	         end if
	     End Sub
	
	In this case Build will fire the BuildFinish event and return control to the
	MyBuild subroutine at which time the ExecuteConfiguration will be enabled. You
	can see what other methods are disabled simply by looking at the disabled menu
	items when a build is in progress.
	
	Building ATL Projects from the Command Line Can Generate NMAKE Error
	--------------------------------------------------------------------
	
	Building an ATL program from the command line can generate NMAKE error U1073.
	(This problem does not occur when building ATL samples from within the
	integrated development environment.)
	
	For example, the following command line:
	
	  NMAKE /f beeper.mak CFG="beeper - Win32 Release"
	
	will generate this error:
	
	  NMAKE : fatal error U1073: don't know how to make '".\beeper.h"'
	
	From the command line, ATL projects require two passes to build. The first pass
	directs MIDL to create a header file that is required for the second pass.
	
	WORKAROUND
	==========
	
	Use the following commands to work around this problem:
	
	  nmake /f beeper.mak CFG="beeper - Win32 Release" beeper.h
	  nmake /f beeper.mak CFG="beeper - Win32 Release"
	
	Help File Names with European Characters Do Not Copy Correctly on
	Windows 95
	----------------------------------------------------------------------------
	
	The Help compiler converts the name of the Help file into upper case characters.
	On Windows 95, this causes problems when the Visual Studio Build System tries to
	copy a name that contains European characters (such as umlauted characters) to
	the output directory for the rest of the project build. This is not a problem on
	Windows NT.
	
	Add a copy step with the name of the Help file, in upper case, to the custom
	build rule on the .hpj file in the project.
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
