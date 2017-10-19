---
layout: page
title: "Q193960: DOC: Visual Basic 6.0 Applications Cannot Be Run on NT 3.51"
permalink: /kb/193/Q193960/
---

## Q193960: DOC: Visual Basic 6.0 Applications Cannot Be Run on NT 3.51

	Article: Q193960
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbOSWinNT kbVBp600 kbGrpDSVB
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 3.51 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 3.51 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 6.0 applications cannot run on the Windows NT 3.51 platform. The
	Visual Basic 6.0 run-time libraries check for the version of the running
	operating system; if the Windows NT 3.51 operating system is recognized, the
	application will not be allowed to start.
	
	The documentation under Section "System Requirements for Visual Basic
	Applications" in Appendix A "Visual Basic Specifications, Limitations and File
	Formats" of "Visual Basic 6.0 Programmer's Guide", states that Visual Basic 6.0
	applications can run on Microsoft Windows NT 3.51, this is incorrect.
	
	Please refer to the correct system requirements at the back of the Visual Basic
	6.0 software package.
	
	MORE INFORMATION
	================
	
	Attempting to run an application created with Visual Basic 6.0 on a machine with
	Windows NT 3.51 installed, results in the following error:
	
	  Wrong version of operating system, Requires Windows NT 4.0 (build 1381
	  with Service Pack 3 or above), or Windows 95 (build 708 or above)
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189834 : INFO: Visual Studio 6.0 Does Not Install on Windows NT 3.51
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbOSWinNT kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : WINDOWS:6.0
	Solution Type     : kbfix
	
	=============================================================================
	
