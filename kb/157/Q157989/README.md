---
layout: page
title: "Q157989: FIX: Deleting Object in Watch Window Causes Application Error"
permalink: kb/157/Q157989/
---

## Q157989: FIX: Deleting Object in Watch Window Causes Application Error

	Article: Q157989
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Debugger Watch window, deleting the text in the Name column causes an
	Application error following which Visual FoxPro is down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run Visual FoxPro and create an object as in the following:
	
	        MyForm = CREATEOBJECT("Form")
	
	2. Open the Debugger in Debugger Frame mode.
	
	3. Add MyForm as a Watch expression in the Watch window.
	
	4. Click on the "MyForm" string under the Names column twice, or select the
	  entry and then click on the MyForm string so that it goes into edit mode.
	  Edit mode means that there is a blinking cursor within the MyForm entry of
	  the Names column. The Mouse Cursor changes to an I-Beam when it is over the
	  MyForm entry.
	
	5. Delete the "MyForm" entry using the Backspace or Delete key
	
	6. Press Enter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
