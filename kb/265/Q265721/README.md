---
layout: page
title: "Q265721: DOC: /CEConfig Switch Builds Incorrect Platform"
permalink: /kb/265/Q265721/
---

## Q265721: DOC: /CEConfig Switch Builds Incorrect Platform

{% raw %}

	Article: Q265721
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbdocerr kbDSupport kbGrpDSETK
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual C++ version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the products listed above to build a project from the command line,
	the /CEConfig= switch is used to select the target platform. This switch is case
	sensitive and is followed by an equal sign (=). The online documentation
	incorrectly implies that the switch is case insensitive and does not contain an
	equal sign (CEConfig).
	
	MORE INFORMATION
	================
	
	When you build a project from the command line, the build defaults the target
	device to the WCE Configuration that was last used when the respective workspace
	was closed. You can observe the platform that is being targeted in the build
	steps. For example, if you disable banner suppression (remove/nologo) for the
	compiler in a C++ project that was last built for Pocket PC, you see several
	variables, including the following:
	
	  /D _WIN32_WCE=300 /D "WIN32_PLATFORM_PSPC"
	
	If you then build the project and specify the H/PC Pro 2.11 Windows CE
	configuration as illustrated in the documentation, these build parameters do not
	change and a Pocket PC executable is produced.
	
	If you implement the solution in this article, the desired platform is correctly
	selected. For example, to rebuild all configurations for project "TEST"
	targeting the Handheld PC Professional 3.0 platform, use the following command
	line:
	
	  "EVC test.vcp /MAKE "ALL" /CEConfig="H/PC Pro 2.11" /REBUILD" (without the
	  quotation marks)
	
	The previously mentioned build variables should reflect the proper platform:
	
	  /D _WIN32_WCE=211 /D "WIN32_PLATFORM_HPCPRO"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbDSupport kbGrpDSETK 
	Technology        : kbVCsearch kbAudDeveloper kbVCeMb
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
