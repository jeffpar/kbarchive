---
layout: page
title: "Q168403: BUG: Setup Doesn't Ask to Register Environment Variables"
permalink: kb/168/Q168403/
---

## Q168403: BUG: Setup Doesn't Ask to Register Environment Variables

	Article: Q168403
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbVC500bug
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup does not ask to register environment variables while doing a CD-ROM
	installation. While installing Visual C++ in Windows NT, setup should ask if you
	want the environment variables registered through a check box in a setup screen,
	irrespective of the type of installation selected. During the CD-ROM
	installation, this check box is not displayed and you do not get the opportunity
	to register the environment variables.
	
	NOTE: This check box is not displayed in any type of installation in Windows 95.
	
	NOTE: CD-ROM installation option is not available for Visual C++ 6.0, and
	therefore, this bug doesn't apply to Visual C++ 6.0.
	
	RESOLUTION
	==========
	
	Run the Vcvars32.bat file in the ..\BIN directory found in the installed
	directory under ..\MSDEV or ..\DevStudio\VC. This file contains the environment
	variables required to run build tools from a command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	During setup, a screen with the following message appears:
	
	  For your convenience, the environment variables required to run build tools
	  from a command prompt are saved in VCVARS32.BAT in your BIN directory.
	
	This message is followed by a check box for "Register Environment Variables."
	
	The following message appears after you select the check box:
	
	  Turn on this option to register environment variables for running Microsoft
	  Visual C++ tools from the command line.
	
	NOTE: In Visual C++ 5.0, the Profiler may not run from Developer Studio if the
	environment variables are not registered. For additional information about the
	Source Profiler in C++ 5.0, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q167804 BUG: Source Profiler in Visual C++ 5.0 Does Not Execute
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVC500bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
