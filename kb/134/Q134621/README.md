---
layout: page
title: "Q134621: How to Find Out If an Object Is in a Container or Not"
permalink: kb/134/Q134621/
---

## Q134621: How to Find Out If an Object Is in a Container or Not

	Article: Q134621
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the TYPE() function to find out whether or not
	an object is contained in another object.
	
	MORE INFORMATION
	================
	
	It is sometimes necessary to know if an object is in a container, and perform an
	action according to the way an instance of the object is created. For example, a
	form can be placed on the desktop or in a formset, and the program can perform
	different tasks depending on the container.
	
	The Parent property of an object references the container object of a control.
	Use the TYPE() function to determine if an object has a parent. For example:
	
	     IF TYPE ('This.Parent')= "0"  && The object has a container
	        ? This.Parent.Name
	     ENDIF
	
	The following example illustrates this method using a command button. If the
	control is placed in a toolbar, the Visible property of the toolbar is set to
	false (.F.) when the button is released. To run this example, copy and paste the
	code into a program (.PRG) file. When the toolbar is displayed, click the Close
	button. The toolbar is hidden before it is released.
	
	Sample Code
	-----------
	
	  PUBLIC oTB1,oFrm1  && Define public variables
	  oTb1=CREATE('tbmytool') && Create an instance of the toolbar object
	  oTb1.SHOW
	  oFrm1=CREATE('Frmmyform') && Create an instance of the form object
	  oFrm1.SHOW
	
	  DEFINE CLASS cmdQuit AS COMMANDBUTTON
	     PROCEDURE CLICK
	        RELEASE THISFORM  && Release either the form or the toolbar
	     ENDPROC
	     PROCEDURE DESTROY  && Called when the object is released
	        IF TYPE('This.parent')="O"
	           IF THIS.PARENT.BASECLASS="Toolbar"
	              THIS.PARENT.VISIBLE = .F. && Hides the toolbar
	              =MESSAGEBOX('Toolbar is hidden')
	           ENDIF
	        ENDIF
	     ENDPROC
	
	  ENDDEFINE
	
	  DEFINE CLASS tbMyTool AS TOOLBAR
	     ADD OBJECT cmdNew AS COMMANDBUTTON
	     ADD OBJECT cmdClose AS cmdQuit
	  ENDDEFINE
	
	  DEFINE CLASS frmmyform AS FORM
	     ADD OBJECT cmdForm AS cmdQuit
	  ENDDEFINE
	
	Additional query words: VFoxWin form set
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
