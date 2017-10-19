---
layout: page
title: "Q218612: FIX: Remote Debugging on Alpha Does Not Work"
permalink: /kb/218/Q218612/
---

## Q218612: FIX: Remote Debugging on Alpha Does Not Work

	Article: Q218612
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0, on platform(s):
	   - the hardware: DEC Alpha 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Alpha platform when trying to launch a remote debugging session, the
	following error message appears:
	
	  Cannot initialize the debugging system
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	----------------------------
	
	1. Build a debug executable file.
	
	2. Select Build then Debugger Remote Connection and set the connection type to
	  Network(TCP/IP).
	
	3. Select Settings and type the Target Machine Name or Address.
	
	4. Select OK to exit.
	
	5. Finally, choose Build then Start Debug.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
