---
layout: page
title: "Q168081: FIX: Wrong Column Jumped to for Macro Syntax Error"
permalink: /kb/168/Q168081/
---

## Q168081: FIX: Wrong Column Jumped to for Macro Syntax Error

	Article: Q168081
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbVC500bug kbVC600bug kbVS kbGrpDSTools kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to load a macro that contains a syntax error in Developer
	Studio, an error message similar to the following appears:
	
	  c:\program files\devstudio\sharedide\macros\mymacro.dsm This macro file
	  contained the following error and will be unloaded Line 6: Expected ')' if
	  (ActiveDocument.selection.FindText"CWnd") then Would you like to edit the
	  file?
	
	If you choose to edit the file, the cursor is not placed in the column where the
	error occurred. However, the cursor is placed on the correct row.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Tools menu, select Macro
	
	2. Enter "finder" as the Macro Name (excluding the quotes).
	
	3. Click Edit.
	
	4. In the Add Macro dialog box, click OK.
	
	5. Insert the following code into the body of the finder() subroutine:
	
	     if (ActiveDocument.selection.FindText "CWnd") then
	        msgbox "Found!"
	     end if
	
	  The finder() subroutine should look like this:
	
	     Sub finder()
	     'DESCRIPTION: A description was not provided.
	        if (ActiveDocument.selection.FindText "CWnd") then
	           msgbox "Found!"
	        end if
	        'TODO: Put macro code here
	     End Sub
	
	6. From the macro editor's context menu, select Reload Macro File to reproduce
	  the error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbVC500bug kbVC600bug kbVS kbGrpDSTools kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
