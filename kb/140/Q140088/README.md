---
layout: page
title: "Q140088: FIX: Sample Application Dialog Box Is Disabled in InfoViewer"
permalink: kb/140/Q140088/
---

## Q140088: FIX: Sample Application Dialog Box Is Disabled in InfoViewer

	Article: Q140088
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC410fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 4.0 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the InfoViewer, when looking at the sample documentation, the button labeled
	"Click to open or copy the XXX project files" may be disabled. This button
	normally brings up the Sample Application dialog box to get the sample code.
	
	In some samples, the button is labeled STEP1, STEP2, STEP3, and so on.
	
	CAUSE
	=====
	
	If you press ALT+F4 or an equivalent key combination to close the dialog box the
	first time it comes up, it doesn't close correctly. Even though the dialog box
	is no longer visible, it isn't actually dismissed and can still be seen in
	Spy++. It will have a title similar to this one:
	
	  Window 004601D0 "Sample Application" #32770 (Dialog)
	
	Because the dialog box isn't actually gone, clicking the button can't restore it.
	
	RESOLUTION
	==========
	
	To work around the problem and gain access to the sample files, press the ESC
	key and try again, or exit and then restart the Developer Studio.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the InfoView in the Workspace window, open one of the samples such as:
	
	  CUSTOMWZ: A Custom AppWizard
	
	2. Click the button labeled "Click to open or copy the CUSTOMWZ project files."
	  This will bring up the Sample Application dialog box, which will allow you to
	  select and open any of the files for the sample.
	
	3. Dismiss the Sample Application dialog box by pressing ALT+F4, by
	  double-clicking the control-menu box in the upper-left corner, or by clicking
	  the X in the upper-right corner of the window in Windows 95.
	
	4. Click the button labeled "Click to open or copy the CUSTOMWZ project files"
	  again. This will do nothing.
	
	5. Start Spy++, and look for the Sample Application dialog window. It will be
	  there even though it should not (because it was 'closed').
	
	6. Back in InfoView, select a different sample. Bring up the Sample Application
	  dialog box, and close it by pressing the ESC key or by clicking the Close
	  button on the dialog box. This time the Sample Application dialog box will
	  close properly, so it can be re-opened.
	
	Additional query words: kbVC400bug kbvc410fix utilities kbnoupdate
	
	======================================================================
	Keywords          : kbide kbVC kbVC410fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbFORTRANPower32400NT kbVC32bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
