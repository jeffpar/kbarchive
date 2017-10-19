---
layout: page
title: "Q186368: FIX: GPF Issuing QUIT from a Form Run in the Form Designer"
permalink: /kb/186/Q186368/
---

## Q186368: FIX: GPF Issuing QUIT from a Form Run in the Form Designer

	Article: Q186368
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bug
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A General Protection Fault occurs when you run a form from the form designer.
	Under Windows 95, the following message appears:
	
	  This program has performed an illegal operation and will be shut down.
	
	If the problem persists, contact the program vendor.
	
	Under Windows NT 4.0, the following message appears:
	
	  The instruction at "0xnnnnnnnn" referenced memory at "0xnnnnnnnn." The memory
	  could not be "read."
	
	Click on OK to terminate the application.
	Click on Cancel to debug the application.
	
	CAUSE
	=====
	
	This behavior occurs because a QUIT command executed while the form designer was
	open. The problem is not limited to form methods or events.
	
	RESOLUTION
	==========
	
	Do not issue a QUIT command in a form's events or methods while in the Form
	Designer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Before attempting to reproduce this behavior, it is strongly recommended
	that you close any open tables.
	
	1. Using Visual FoxPro 5.0, create a new form.
	
	2. In the form's Destroy event, add the following code:
	
	        QUIT
	
	3. Close the Code window.
	
	4. Select Form, Run Form from the Menu bar.
	
	5. Click the form's Close button AND NOTE THAT a General Protection Fault
	  occurs.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE vfoxwin kbVFp500 vfp50abug vfp50bug kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
