---
layout: page
title: "Q163395: BUG: SaveAs Method Fails to Create SCX File from Runtime Form"
permalink: /kb/163/Q163395/
---

## Q163395: BUG: SaveAs Method Fails to Create SCX File from Runtime Form

	Article: Q163395
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Visual FoxPro executable program launched from the Windows Explorer or the
	Macintosh Finder runs a form that contains code to execute the SaveAs method of
	the form, the executable will not create the new form and no error message will
	be displayed. If the executable is launched in the Visual FoxPro environment,
	the SaveAs method works correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project. Add a new form to the project.
	
	2. Change the WindowType property of the form to 1-Modal.
	
	3. On the form, add two Command Buttons. In the Click event of the first Command
	  Button, add the following code:
	
	       RELEASE Thisform
	
	4. In the Click event of the second Command Button, enter this code:
	
	       Thisform.SaveAs ('myform')
	
	5. Save the form.
	
	6. Build the project into an executable.
	
	7. Run the executable in the development environment. Click the Command Button
	  that has the SaveAs method in it. It will create a new form named Myform.SCX.
	
	8. Run the same EXE from the Explorer. Click the button and note that Visual
	  FoxPro acts busy for a brief moment, but does not create the form and does
	  not display an error message.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
