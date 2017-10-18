---
layout: page
title: "Q314651: FIX: &quot;File Is Not Open&quot; Err Msg May Cause Infinite Loop"
permalink: kb/314/Q314651/
---

## Q314651: FIX: &quot;File Is Not Open&quot; Err Msg May Cause Infinite Loop

	Article: Q314651
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the following error message appears when you try to save a form that has a
	breakpoint set, Visual FoxPro may go into a infinite loop:
	
	  "File is not open."
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Save the following code in a program (.prg) file and then run the program:
	
	  IF TYPE('gltest') = "U"
	     PUBLIC glTest
	     gltest = .t.
	     CLEAR DEBUG
	     * The following line opens the Breakpoint dialog box,
	     * sets a breakpoint, and closes the dialog box. 
	     KEYBOARD '{ctrl+b}click{enter}{enter}'
	     DOEVENTS 
	  ENDIF 
	
	  SET RESOURCE OFF 
	  LOCAL aobj[1], xx
	  DELETE FILE testxx.sc?
	
	  CREATE FORM testxx NOWAIT
	  =ASELOBJ(aobj,1)
	  xx = aobj[1]
	  xx.caption = xx.caption
	  KEYBOARD 'Y' CLEAR
	  RELEASE WINDOW 'Form Designer - testxx.scx'
	  MODIFY FORM testxx NOWAIT METHOD load 
	
	  * Type a comment.
	  KEYBOARD '*'
	  DOEVENTS 
	  * Select designer and close it.
	  ACTIVATE WINDOW 'form designer - testxx.scx'
	  KEYBOARD '{ctrl+w}'
	  RETURN
	
	2. Run the program again. Click OK to close the "File is not open" message box.
	
	3. In the Properties dialog box, click the Methods tab and then locate the Load
	  event.
	
	4. Double-click the Load event.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
