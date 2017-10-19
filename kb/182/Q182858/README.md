---
layout: page
title: "Q182858: PRB: Cannot Register MSMAPI.OCX on Windows 95 or Windows NT 4.0"
permalink: /kb/182/Q182858/
---

## Q182858: PRB: Cannot Register MSMAPI.OCX on Windows 95 or Windows NT 4.0

	Article: Q182858
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB SMapiCMC kbSMAPICMC
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to register MSMAPI16.OCX or MSMAPI32.OCX on a Windows 95 or Windows NT
	machine fails.
	
	CAUSE
	=====
	
	This is most likely due to not having the Windows Messaging subsystem installed
	on the machine.
	
	RESOLUTION
	==========
	
	Take the following steps to correct this problem:
	
	1. From the Start menu, click Settings.
	
	2. Choose Control Panel, and double-click the Add/Remove Programs icon.
	
	3. Click on the Windows 95 or Windows NT Setup page.
	
	4. Find the Windows Messaging check box and make sure it has a check in it. If
	  the Windows Messaging subsystem is not installed, the check box will be
	  empty.
	
	5. If the check box is not checked, check it and click Apply.
	
	NOTE: You will be prompted to insert the Windows 95 or Windows NT setup disk.
	After installation is complete, try to register the MSMAPI16.OCX or MSMAPI32.OCX
	file.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbVBp400 kbVBp kbDSupport kbdse kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB SMapiCMC kbSMAPICMC 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
