---
layout: page
title: "Q193783: HOWTO: Use the _ShortCutMenu Foundation Class"
permalink: kb/193/Q193783/
---

## Q193783: HOWTO: Use the _ShortCutMenu Foundation Class

	Article: Q193783
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a shortcut menu using the _ShortCutMenu
	Foundation Class in the _menu.vcx class library.
	
	MORE INFORMATION
	================
	
	The _ShortCutMenu Foundation Class allows you to bold, disable, and place a
	check mark next to the menu prompt.
	
	The following example shows how to use the _ShortCutMenu Foundation Class:
	
	1. Create a form named Myshortmenu.
	
	2. Add the _ShortCutMenu class, located in the _menu.vcx, to the form. The
	  _menu.vcx file resides in the Home()\FFC folder.
	
	3. Create two custom properties for the form, lcheck, and lbold. Next, create a
	  custom method, called Myproc, for the form.
	
	4. In the RightClick event of the form, place the following code:
	
	        PRIVATE oTHISForm
	        oTHISFORM = Thisform
	        Thisform._shortcutmenu1.ClearMenu
	
	        WITH Thisform._shortcutmenu1
	           .AddMenuBar("AAA",[wait window "AAA"])
	           .AddMenuSeparator()
	           .AddMenuBar("Check/UnCheck CCC",[oTHISFORM.myproc(prompt())])
	           .AddMenuBar("BBB",[wait window "BBB"])
	           .AddMenuBar("CCC",[wait window "CCC"],,,oTHISFORM.lcheck)
	           .AddMenuBar("DDD",[wait window "DDD"],,,,.T.)
	          .AddMenuBar("EEE",[oTHISFORM.myproc(prompt())],,,,,oTHISFORM.lbold)
	        ENDWITH
	
	        Thisform._shortcutmenu1.ShowMenu()
	
	5. In the custom Myproc method, place the following code:
	
	        PARAMETER cPrompt
	
	        DO CASE
	           CASE cPrompt = "Check/UnCheck CCC"
	              IF Thisform.lcheck
	                 Thisform.lcheck = .F.
	                 WAIT WINDOW "PPP is now unchecked" NOWAIT
	              ELSE
	                 Thisform.lcheck = .T.
	                 WAIT WINDOW "PPP is now checked"  NOWAIT
	              ENDIF
	           CASE cPrompt = "EEE"
	              IF Thisform.lbold
	                 Thisform.lbold = .F.
	              ELSE
	                 Thisform.lbold = .T.
	              ENDIF
	        ENDCASE
	
	6. Save and run the form.
	
	Right-click the form and select "Check/UnCheck CCC" to either place or remove a
	check mark next to the "CCC" menu prompt. A WAIT WINDOW command appears each
	time you toggle the check mark. Select the "EEE" prompt to toggle the bold face
	on or off.
	
	Additional query words: kbVFp600 kbFFC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
