---
layout: page
title: "Q176338: PRB: Executing .Fetch of the VB5 MSMAPI32.OCX Can Hang VB"
permalink: /kb/176/Q176338/
---

## Q176338: PRB: Executing .Fetch of the VB5 MSMAPI32.OCX Can Hang VB

	Article: Q176338
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB kbVB500
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application using the MSMAPI32.OCX MAPIMessages Control (version 5.00.3721)
	may hang when the .Fetch method of the control is called.
	
	CAUSE
	=====
	
	The messaging subsystem of your Operating System may be too outdated to use this
	control successfully.
	
	The most common occurrence of this problem is where the customer has installed
	the Exchange 4 client from the original release media of Windows 95.
	
	RESOLUTION
	==========
	
	To resolve the problem, you can install the Windows Messaging System (WMS).
	
	If the problem is on Windows 95, WMS can be installed from
	ftp://ftp.microsoft.com/Softlib/MSLFILES. The target file is called
	EXUPDUSA.EXE. This will update the messaging subsystem (MAPI DLL files) on the
	problematic system.
	
	If the problem is on another platform, you can obtain the appropriate WMS from
	ftp://ftp.microsoft.com/developr/MAPI/WMS_RDST. The README.TXT file in that
	directory provides information on what file to download for operating system as
	well as installation instructions.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This article is not applicable if the problematic system has (or previously had)
	any version of Outlook or the Exchange client version 5 or higher installed.
	
	Additional query words: kbVBp500 kbVBp kbDSupport KBDSE kbVBp600 kbMAPI
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB kbVB500 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
