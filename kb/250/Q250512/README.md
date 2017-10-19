---
layout: page
title: "Q250512: OS() Function May Not Return &quot;NT&quot; Under Windows 2000"
permalink: /kb/250/Q250512/
---

## Q250512: OS() Function May Not Return &quot;NT&quot; Under Windows 2000

	Article: Q250512
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbVS600sp3bug kbGrpDSFox kbDSupport
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, used with:
	   - Microsoft Visual Studio 6.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Code that tests the return value for the string "NT" of the OS() function in
	Microsoft Visual FoxPro 6.0 Build 8492 or later operates incorrectly under
	Microsoft Windows 2000.
	
	CAUSE
	=====
	
	Because Windows 2000 is not designated as "Windows NT," but is referred to as
	"built on NT Technology," the OS() function should no longer refer to it as
	"Windows NT 5.0."
	
	RESOLUTION
	==========
	
	There are two workarounds for this issue:
	
	- Use the GetVersionEx Win32API call to return extended version information
	  about Microsoft Windows, including the platform type. See the "References"
	  section for more information on this function.
	
	- Use the following code to test all possible return values from OS() in a DO
	  CASE block to see which version you are running. However, this might require
	  that the code be rewritten with each major Windows release.
	
	  Clear
	  Do Case
	     * Tests for Windows 2000
	     Case "5.00" $ OS()
	     ? "Windows NT 5.0"
	
	     Case "NT 4.00" $ OS()
	     ? "Windows NT 4.0"
	
	     * Tests for Windows 95
	     Case "4.00" $ OS()
	     ? "Windows 95"
	     
	     * Tests for Windows 98   
	     Case "4.10" $ OS()
	     ? "Windows 98"
	  EndCase
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following code is typically written in programs that use API calls specific
	to a given operating system:
	
	  IF "NT" $ OS()
	    *!* do NT-specific stuff
	  ELSE
	    *!* do Win 9x-specific stuff
	  ENDIF
	
	However, when testing for the presence of a particular feature, it is better to
	use the GetProcAddress API call. See the "References" section for more
	information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual FoxPro 6.0 Service Pack 3 under Windows NT 4.0. Type "? OS()"
	  (without the quotation marks) in the Command window, and note that it prints
	  "Windows NT 4.0."
	
	2. Run Visual FoxPro 6.0 (no service pack) under Windows 2000. Type "? OS() "
	  (without the quotation marks) in the Command window, and note that it prints
	  "Windows NT 5.0."
	
	3. Run Visual FoxPro 6.0 Service Pack 3 under Windows 2000. Type "? OS()"
	  (without the quotation marks) in the Command window, and note that it prints
	  "Windows 5.0."
	
	REFERENCES
	==========
	
	For additional information about the GetVersionEx API call, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q188987 HOWTO: Determine the Operating System Build Number
	
	For additional information about calling the GetProcAddress function, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q193573 HOWTO: Determine the Version of a DLL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbVS600sp3bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:6.0,6.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
