---
layout: page
title: "Q191223: INFO: Files Required to View HTML Help"
permalink: /kb/191/Q191223/
---

## Q191223: INFO: Files Required to View HTML Help

{% raw %}

	Article: Q191223
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.3,6.0
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbvfp600 kbHTMLHelp130
	Last Modified: 20-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft HTML Help 1.3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following components are required in order to view an HTML help file (*.chm)
	from the operating system level:
	
	  HH.EXE         (Windows or WinNT directory)
	  HHCTRL.OCX     (System or System32 directory)
	  ITSS.DLL       (System or System32 directory)
	  ITIRCL.DLL    (System or System32 directory)
	
	NOTE: These files may not be required in order to view the Help file from within
	Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Installing the Microsoft Developer Network and any Visual Studio Help files
	automatically installs and register these files.
	
	For developers who create HTML Help files for distribution with their
	applications, the Visual FoxPro Setup Wizard handles the installation and
	registration of the necessary Help engine files when you check the HTML help
	engine checkbox in step 2.
	
	Additional query words: kbVFp600 pgfest
	
	======================================================================
	Keywords          : kbHTMLHelp kbvfp600 kbHTMLHelp130 
	Technology        : kbVFPsearch kbHTMLHelpSearch kbAudDeveloper kbHTMLHelp130 kbVFP600
	Version           : WINDOWS:1.3,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
