---
layout: page
title: "Q181007: HOWTO: Troubleshoot WinCE Application Installations"
permalink: /kb/181/Q181007/
---

## Q181007: HOWTO: Troubleshoot WinCE Application Installations

{% raw %}

	Article: Q181007
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbtshoot
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows CE, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows CE SDK provides tools for installing applications to a Windows CE
	device. This process involves writing a setup INF file (.inf), which will be
	used by the Application Installation tools to create cabinet (CAB) files
	containing the files need for the application. An Application Manager INI (.ini)
	file must also be created to register the CAB files with the desktop Windows CE
	Application Manager. The following addresses common problems encountered with
	the Application Installation mechanism.
	
	MORE INFORMATION
	================
	
	CAB Wizard
	----------
	
	- To use a percent (%) character in an INF file, use %%, as specified in the
	  Win32 SDK documentation. However, this method will not work under the
	  [Strings] section.
	
	- INF files created for Windows CE cannot be used for installing to Windows 95
	  or Windows NT.
	
	- CAB files created for Windows CE cannot be used for installing to Windows 95
	  or Windows NT.
	
	- The Windows CE SDK-included files Makecab.exe and Cabwiz.ddf must be in the
	  same directory as Cabwiz.exe.
	
	- Cabwiz.exe must be called with the full path.
	
	- Creating a CAB file using the Windows CE SDK-included file Makecab.exe
	  doesn't work with Windows CE. You must use Cabwiz.exe (which uses
	  Makecab.exe) to generate the CAB files for Windows CE.
	
	- CAB files cannot have the read-only file attribute.
	
	- Verify in the INF file that string lists do not have trailing commas or
	  unnecessary/extra spaces.
	
	     Invalid:  CopyFiles=Files.Common,  Files.Cpu,
	     Valid:    CopyFiles=Files.Common,Files.Cpu
	
	Application Manager (AppMgr)
	----------------------------
	
	- When calling Ceappmgr.exe to register an application, use the full path for
	  the location of the AppMgr INI file(s).
	
	- Use the "/report" parameter in debug versions to verify that AppMgr is using
	  the correct information for the CAB files.
	
	Errors When Registering Applications with Application Manager
	-------------------------------------------------------------
	
	- Verify in the AppMgr INI file that the string list in the "CabFiles" key
	  matches the actual CAB file name and relative path.
	
	- Verify in the AppMgr INI file that the string value in the "Component" key
	  exists elsewhere in the INI file.
	
	- Verify that the desktop setup program is calling the correct AppMgr INI file,
	  using a full path.
	
	- Verify in the AppMgr INI file that the string list in the "CabFiles" key
	  contains no unnecessary spaces.
	
	     Invalid:   CabFiles=app.sh3.cab,  app.mips.cab
	     Valid:   CabFiles=app.sh3.cab,app.mips.cab
	
	Miscellaneous
	-------------
	
	There are various third-party desktop setup programs that do not correctly update
	the actual file sizes when overwriting existing files. Because the Application
	Manager verifies the actual file size with the embedded file size of the CAB
	file, make sure that the installed CAB file sizes are correct. To ensure this
	happens for future upgrade scenarios, you can delete the known, existing CAB
	files on a reinstallation scenario.
	
	Additional query words: kbwince200
	
	======================================================================
	Keywords          : kbtshoot 
	Technology        : kbVCsearch kbAudDeveloper kbZNotKeyword3 kbVC200WinCE
	Version           : WINDOWS:2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
