---
layout: page
title: "Q120790: How to Create a Modal Screen Effect Programmatically"
permalink: /kb/120/Q120790/
---

## Q120790: How to Create a Modal Screen Effect Programmatically

{% raw %}

	Article: Q120790
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You (the developer) can require a person using your application to use design
	controls to exit a FoxPro screen by making the screen MODAL. To do this, use a
	MODAL clause on the READ command when you design the screen.
	
	However, if you design the screen as non-MODAL, you can still give the screen a
	MODAL feel by adding a few lines of code as demonstrated in this article.
	
	MORE INFORMATION
	================
	
	FoxPro 2.x Steps to Create MODAL-Like Screens by Using Code
	-----------------------------------------------------------
	
	1. Enter USE <database name> in the Command window to open the table.
	
	2. Enter CREATE SCREEN PMODAL in the Command window.
	
	3. From the Screen menu pad, choose Quick Screen.
	
	4. Choose the default setting in the Quick Screen dialog box, and click OK to
	  return to the screen design layout window.
	
	5. From the Screen menu pad, choose Layout.
	
	6. In the Name entry field, type: smodal.
	
	7. Choose Code from the Layout dialog box.
	
	8. Choose the On Window Deactivate button.
	
	9. In the Code Snippet dialog box, type the following lines of code:
	
	     *** Begin 'On Window Deactivate Code' ***
	     IF .t.
	        ACTIVATE WINDOW smodal
	        RETURN .f.
	     ENDIF
	     *** End 'On Window Deactivate' Code ***
	
	10. Click OK to return to the screen layout window.
	
	11. Choose Generate from the Program menu pad to generate the screen.
	
	12. From Help, choose Calculator to observe the effects of this MODAL-like
	  window.
	
	13. Run the screen generated in steps 1 through 11 above. Note that FoxPro does
	  not allow the Calculator screen to become active when you attempt to switch
	  to it.
	
	Visual FoxPro Steps to Create MODAL-Like Screens by Using Code
	--------------------------------------------------------------
	
	1. Type "ACTIVATE WINDOW CALCULATOR" (without the quotation marks) in the
	  Command window to start the FoxPro calculator accessory.
	
	2. Create a Form containing with a Command button, and add the following code to
	  the Click event of the Command button:
	
	        THISFORM.RELEASE
	
	3. Set the Form Name Properties to Form1.
	
	4. Add the following code to the Deactivate method of Form1:
	
	        Activate Window Form1
	
	Note that you cannot switch to the Calculator window.
	
	Additional query words: FoxDos FoxWin VFoxWin 2.50 2.50a 2.50b 2.60 2.60a make on fly
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
