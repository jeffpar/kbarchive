---
layout: page
title: "Q45692: Getting an Application Ready for Retail Release"
permalink: /kb/045/Q45692/
---

## Q45692: Getting an Application Ready for Retail Release

{% raw %}

	Article: Q45692
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbcode kb16bitonly
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps you should take when moving your application
	from DEBUG to RELEASE mode. This article contains a section for Windows hosted
	tools, and a section for non-Windows hosted tools.
	
	MORE INFORMATION
	================
	
	USING WINDOWS HOSTED TOOLS
	--------------------------
	
	Visual C++:
	
	Change the Build Mode to Release by choosing Project from the Options menu. The
	IDE (Integrated Development Environment) modifies the proper switches and will
	use the custom options selected by the user.
	
	QuickC for Windows:
	
	QuickC for Windows has a procedure similar to Visual C++.
	
	USING NON-WINDOWS HOSTED TOOLS
	------------------------------
	
	Code File Changes:
	
	1. Change the MAKE file compile line from something such as the following
	
	  cl -W2 -Od -FPi -Zpei myapp.c
	
	  to the following:
	
	  cl -W2 -Os -Fpi myapp.c
	
	  NOTE: The -Zi switch will not put in line information for CodeView for Windows
	  (CVW), and the -FPi switch will use the floating-point coprocessor if it is
	  present.
	
	2. Remove the /co switch from the linker command line options.
	
	3. Remove any debugging code, and/or flip any debugging switches present in the
	  application to off.
	
	Checking The User Interface:
	
	1. Verify that the application will work without the mouse, making sure that the
	  keyboard interface is all set up, especially in dialog boxes.
	
	2. Check all fonts used for spacing. NOTE: This step is not necessary if you are
	  using TrueType fonts.
	
	Preparing Documentation:
	
	Starting with Windows version 3.0, the internal screen capture command can be
	used to take screen shots of the application. Press PRINT SCREEN or SHIFT+PRINT
	SCREEN on older systems, and Windows will copy the screen as a bitmap into the
	clipboard. The bitmap can then be pasted into the a word processing application
	to create the written documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
