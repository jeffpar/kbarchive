---
layout: page
title: "Q162553: FIX: ALEN() Function Causes Illegal Operation in Debug Window"
permalink: kb/162/Q162553/
---

## Q162553: FIX: ALEN() Function Causes Illegal Operation in Debug Window

	Article: Q162553
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the ALEN() function in the Debug window to reference an array that does
	not exist in a form causes Visual FoxPro 3.0 for Windows to shut down. The
	following error message appears in Windows 95 after the form closes:
	
	  This program has performed an illegal operation and will be shut down.
	
	Clicking Details reveals the following message:
	
	  VFP caused an invalid page fault in module <module name> at <memory
	  address>.
	
	In Windows NT 4.0, the following error appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  VFP.exe
	  Exception: access violation <error number>, Address: <memory
	  address>.
	
	The operating system then closes Visual FoxPro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual FoxPro 5.0 for
	Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called ztest.scx.
	
	2. Add a command button to the form. In the Click event of the button, place the
	  following code:
	
	        ThisForm.Release
	
	3. Save the form.
	
	4. Invoke the Debug window, type the following line, and press the Enter key:
	
	  " ALEN(ThisForm.atest) " (without the quotation marks)
	
	  This references a nonexistent array.
	
	5. Run the form and click the command button to close the form.
	
	6. The error occurs and Visual FoxPro shuts down.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
