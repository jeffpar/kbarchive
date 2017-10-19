---
layout: page
title: "Q216869: FIX: Crash When Editing Code with Parameter Information Visible"
permalink: /kb/216/Q216869/
---

## Q216869: FIX: Crash When Editing Code with Parameter Information Visible

	Article: Q216869
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbEditor kbide kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When editing source code while the Parameter Info is visible, the following
	error may occur:
	
	  MSDEV.EXE - Application Error : The instruction at [address] referenced
	  memory at [address]. The memory could not be "read".
	
	This message is immediately followed by another error message:
	
	  MSDEV.EXE - Application Error: The instruction at "0x5030ae5f" referenced
	  memory at "0x0000000c". The memory could not be "read".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a source file and type the following line of code:
	
	  printf(
	
	2. If the IntelliSense options are enabled, a pop-up window with Parameter Info
	  for this function will appear. If a pop-up window does not appear, press
	  CTRL+SHIFT+SPACE to invoke Parameter Info after the parenthesis.
	
	3. Press SHIFT+HOME.
	
	4. Press SHIFT+DELETE.
	
	5. Press the down arrow.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbEditor kbide kbVC600bug kbVC600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
