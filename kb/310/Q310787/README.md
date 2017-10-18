---
layout: page
title: "Q310787: Visual C++ Debugger Hangs on Windows 2000"
permalink: kb/310/Q310787/
---

## Q310787: Visual C++ Debugger Hangs on Windows 2000

	Article: Q310787
	Product(s): Microsoft C Compiler
	Version(s): 6.0,SP2
	Operating System(s): 
	Keyword(s): kbDebug kbide kbOSWinNT kbOSWin2000
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Visual C++ 6.0 debugger on a multi-processor computer that has
	Microsoft Windows 2000 and Windows 2000 Service Pack 2 installed, the Visual C++
	development environment may stop responding.
	
	CAUSE
	=====
	
	The Visual C++ 6.0 debugger stops responding because of a bug in the debugger
	logic. This problem occurs when the debugger responds to debugging events that
	are sent from Windows 2000.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	
	  Date          Time      Version       Size            File name 
	  ----------------------------------------------------------------
	  22-Oct-2001   19:14     6.0.9388.0    106,566 bytes   Dm.dll             
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: hang multiprocessor win2k
	
	======================================================================
	Keywords          : kbDebug kbide kbOSWinNT kbOSWin2000 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0,SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
