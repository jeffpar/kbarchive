---
layout: page
title: "Q190736: FIX: Typing SYS Function Into Hidden Property Causes Crash"
permalink: /kb/190/Q190736/
---

## Q190736: FIX: Typing SYS Function Into Hidden Property Causes Crash

	Article: Q190736
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a hidden property to a class and then adding a SYS function to that
	property, Visual FoxPro 5.0 causes an Invalid Page Fault.
	
	RESOLUTION
	==========
	
	This has been fixed in Visual FoxPro 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create any type of class in Visual FoxPro 5.0.
	
	2. From the Class menu, choose New Property, which opens the New Property dialog
	  box. Type "Hidden1" (without the quotation marks) in the Name text box.
	
	3. Change the Visibility drop-down box to Hidden.
	
	4. Click the Add button and close the New Property dialog box.
	
	5. Open the properties sheet and type "=SYS(3)" (without the quotation marks)
	  into the Hidden1 property. After you press the ENTER key, Vfp.exe causes an
	  Invalid Page Fault.
	
	Additional query words: kbOOP kbVFp500abug kbvfp500
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
