---
layout: page
title: "Q130713: How to Use Collection Array Property for Object Container"
permalink: /kb/130/Q130713/
---

## Q130713: How to Use Collection Array Property for Object Container

	Article: Q130713
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, all the object containers in a form have a collection property
	associated with them. The collection property is an array that references each
	container object. You can reference properties and methods by using the
	collection array property rather than a specific object name.
	
	For example, the collection array property for a CommandGroup button is
	buttons(). The following example changes the caption of the first command button
	in the CommandGroup named CommandGroupName:
	
	      CommandGroupName.Buttons(1).Caption = "New"
	
	MORE INFORMATION
	================
	
	The following table lists the object containers that create an array property
	when the object containers are created.
	
	  Object Container       Collection Property
	  ------------------------------------------
	  Formsets               Forms
	  Forms                  Controls
	  PageFrame              Pages
	  Page                   Controls
	  CommandGroup           Buttons
	  OptionGroup            Buttons
	  Grid                   Controls
	  Column                 Controls
	
	For more information on the collection property, search the Help file for
	'Collection Properties'.
	
	Sample Code
	-----------
	
	The following example toggles the enabled property of all text boxes on a form to
	the inverse of the value of its current enabled property. In other words, if the
	text box enabled property is equal to true (.T.), the code set it to false
	(.F.):
	
	     FOR icount = 1 TO Thisform.controlcount
	        IF UPPER(Thisform.Controls(icount).Class) = "TEXTBOX"
	           Thisform.Controls(icount).Enabled = ;
	              !Thisform.Controls(icount).Enabled
	        ENDIF
	     ENDFOR
	
	Additional query words: VFoxWin kbfest
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
