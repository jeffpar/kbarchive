---
layout: page
title: "Q235680: FIX: Msdev.exe Crash in Devshl.dll During Command-Line Build"
permalink: /kb/235/Q235680/
---

## Q235680: FIX: Msdev.exe Crash in Devshl.dll During Command-Line Build

{% raw %}

	Article: Q235680
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbide kbVC600bug kbDevStudio kbFAQ kbDSupport kbGrpDSTools kbvc600faq kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While performing a build using the command-line features of Msdev.exe, the
	following error appears:
	
	  DDE Server Window : MSDEV.EXE - Application Error : The instruction at
	  "0x50084b23" referenced memory at "0x00000014". The memory could not be
	  "read".
	
	If Visual C++ is the default debugger, clicking Cancel from the error message
	will launch Visual C++ to debug the crash. It will then display a message
	stating that the crash took place in Devshl.dll.
	
	CAUSE
	=====
	
	The WM_SYSCOLORCHANGE Windows message was sent to a hidden Developer Studio
	window during the build. Developer Studio does not properly handle the
	WM_SYSCOLORCHANGE message when building from the command-line.
	
	This problem can happen when using Symantec's PCAnywhere to build a project on a
	remote computer. When you quit PCAnywhere, the remote computer will receive the
	WM_SYSCOLORCHANGE message. Other applications that generate a WM_SYSCOLORCHANGE
	message would have the same problem.
	
	RESOLUTION
	==========
	
	Avoid changing the system's display settings while an Msdev.exe command-line
	build is in progress. This may be difficult if the source of the
	WM_SYSCOLORCHANGE message is unknown or if this message is unavoidable.
	
	Consider exporting make files (.mak) for the project and building the project
	using the NMake utility. To export a make file, select Export Make File from the
	Project menu in Developer Studio. You can also have make files exported
	automatically whenever the project changes by doing the following:
	
	1. On the Tools menu, click Options.
	
	2. On the Build tab, select the Export makefile when saving project file check
	  box.
	
	This guarantees that the make file is always synchronized with the project file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Msdev.exe command-line parameters to begin a long build from the command
	  line.
	
	2. During the build, right-click on the desktop and select Properties.
	
	3. On the Appearance tab, click Save As to save the current color scheme.
	
	4. Select a new color scheme from the Scheme list.
	
	5. Click Apply.
	
	If the build is still in process when the Apply button is clicked, the error
	message above will be displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC600bug kbDevStudio kbFAQ kbDSupport kbGrpDSTools kbvc600faq kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
