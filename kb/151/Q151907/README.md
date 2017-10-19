---
layout: page
title: "Q151907: PRB: DAO SDK Setup Error 104/105: Cannot Run Intermediate File"
permalink: /kb/151/Q151907/
---

## Q151907: PRB: DAO SDK Setup Error 104/105: Cannot Run Intermediate File

	Article: Q151907
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10 4.20
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbprb
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DAO SDK setup may fail during installation on some systems. After displaying
	the message:
	
	  "Setup is preparing the installshield Wizard.. "
	
	it may display an error:
	
	  "Setup initialization error..."
	
	  "Setup is unable to run an intermediate file needed to proceed with the
	  installation. Error # 105"
	
	In some cases, the error # may be 104.
	
	MORE INFORMATION
	================
	
	When this problem occurs on the Windows NT 3.51 system, it is followed by
	another message saying that the system was running low on virtual memory. The
	installation Wizard then comes up and installation proceeds.
	
	On a Windows 95 system, unlike Windows NT, the error is not followed by a message
	indicating low virtual memory. However, the setup program continues in most
	cases.
	
	RESOLUTION
	==========
	
	
	To resolve the problem, increase the virtual memory through Control Panel.
	
	On Windows NT version 3.51, do the following:
	
	- Run Control Panel.
	
	- Double-click the System icon.
	
	- Click the Virtual Memory button, and increase the Initial Size and Maximum
	  size.
	
	NOTE: You cannot go beyond the available space on the hard drive.
	On Windows 95, do the following:
	
	- Run Control Panel
	
	- Go to System, and select the Performance Tab
	
	- Click Virtual Memory, and then click the button reading "Let me specify my
	  own VM settings."
	
	- Increase the Min and Max.
	
	NOTE: You cannot go beyond the available space on the hard drive.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 4.00 4.10 4.20 3.51
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbprb 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : 4.00 4.10 4.20
	Issue type        : kbprb
	
	=============================================================================
	
