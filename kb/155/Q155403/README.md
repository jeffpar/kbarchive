---
layout: page
title: "Q155403: HOWTO: Modify a Shortcut Menu at Run Time"
permalink: /kb/155/Q155403/
---

## Q155403: HOWTO: Modify a Shortcut Menu at Run Time

	Article: Q155403
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro menu generator, Genmenu.prg, now contains a new generator
	directive to accommodate support for the new shortcut menus. The generator
	directive is called #PREPOP. Normally, GENMENU adds the contents of the Cleanup
	snippet at the end of the menu definition. With shortcut menus, the ACTIVATE
	POPUP command is inserted prior to the contents of the Cleanup snippet.
	Therefore, none of the Cleanup code executes until after the menu is
	deactivated. The #PREPOP generator directive places the Cleanup code (not
	including Procedures or functions) prior to the ACTIVATE POPUP command. This new
	functionality allows you to disable, enable, mark, or unmark menu items at run
	time.
	
	MORE INFORMATION
	================
	
	This example demonstrates the use of the #PREPOP generator directive. In the
	example, a command button toggles the form's AlwaysOnTop property between true
	(.T.) and false (.F.). Based on the value of this property, a check mark appears
	next to a menu bar within the shortcut menu. The following steps create the
	example:
	
	1. Create a shortcut menu named NewShort.
	
	2. Use the layout below to add three menu prompts to the shortcut menu:
	
	     Prompt            Result
	     --------------------------
	
	     \&;Date           Command
	     \&Test           Command
	     \&AlwaysOnTop    Procedure
	
	3. In the procedure of AlwaysOnTop prompt, type the following code:
	
	        IF TYPE("oRef") = "O"
	           oRef.command1.Click
	        ENDIF
	
	4. Click the View menu and click General Option to access the Setup and CleanUp
	  snippets. In the Setup snippet, type the following code:
	
	        PARAMETER oRef
	        #PREPOP
	
	  Close the Setup snippet box.
	
	5. Open the CleanUp snippet and type the following code:
	
	         SET MARK OF BAR 3 OF SHORTCUT TO oRef.AlwaysOnTop
	
	  Close the CleanUp snippet box.
	
	6. Generate the menu.
	
	7. Create a form named ShortCut.
	
	8. In the RightClick method of the form, add the following code:
	
	        DO NewShort.mpr WITH THIS
	
	9. Place a command button on the form and change the following properties:
	
	        Caption = NotAlwaysOnTop
	        Name = Command1
	
	10. In the Click method of the command button, type the following code:
	
	       IF THIS.Caption = "NotAlwaysOnTop"
	          THISFORM.AlwaysOnTop = .T.
	          THIS.Caption = "AlwaysOnTop"
	       ELSE
	          THIS.Caption = "NotAlwaysOnTop"
	          THISFORM.AlwaysOnTop = .F.
	       ENDIF
	
	Run the form and click the command button to set the AlwaysOnTop property to
	true. Then right-click the form to bring up the shortcut menu, NewShort. A check
	mark now appears next to the AlwaysOnTop menu bar. Press the command button
	again to set the form's AlwaysOnTop property to false. Right-click again to
	invoke the shortcut menu. The check mark disappears from the menu.
	
	Additional query words: #preprop short cut clean up right click
	
	======================================================================
	Keywords          : kbBuilder kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
