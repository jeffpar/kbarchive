---
layout: page
title: "Q132356: How to Use a Container Object Instead of a Custom Object"
permalink: /kb/132/Q132356/
---

## Q132356: How to Use a Container Object Instead of a Custom Object

	Article: Q132356
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
	
	This article describes how you can use the container control instead of the
	custom control to obtain additional functionality for your custom controls.
	
	MORE INFORMATION
	================
	
	The container and custom classes are both Visual FoxPro base classes. Both can
	contain member objects that are user-defined controls. An object based on the
	custom class does not have a visual representation and receives the Init,
	Destroy, and Error events.
	
	On another hand, the container class has a visual representation. An object based
	on the Container class can receive the following events: Click, DragDrop,
	GotFocus, MouseDown, MouseMove, Resize, Destroy, Error, LostFocus, MouseUp, and
	UiEnable.
	
	The container class is therefore more versatile than the custom class. If you
	plan on performing operations that require a visual representation, such as
	moving an object to an area and using the DragDrop event, an object based on the
	Container class might be appropriate. If you do not want to represent the
	container visually, you can set the Visible property of the container to false
	(.F.).
	
	For more information about the Container and Custom classes, search for Container
	object and Custom object in the Visual FoxPro Help file.
	
	The following code sample shows how to use an object based on the Container
	class. In this code, a form is drawn that contains a container and a command
	button. The command button is dragged to the container. To run this code, copy
	and paste it into a program (.PRG) file. Once the form is displayed, drag the
	command button to the left, and drop it in the container. This functionality
	could not be achieved with a custom class.
	
	Code Sample
	-----------
	
	  PUBLIC oForm
	
	  oForm=CREATEOBJECT('MYFORM')
	  oForm.SHOW
	
	  *:*************************************************************************
	  *:
	  *: Class:MYFORM  BaseClass: FORM
	  *:
	  *:*************************************************************************
	  DEFINE CLASS MYFORM AS FORM
	     ADD OBJECT Container1 AS MYCONTAINER WITH Top=1, Left=1
	     ADD OBJECT Command1 AS COMMANDBUTTON WITH Top=1,Width=78, Left=84,;
	          DragMode=1
	  ENDDEFINE
	
	  *:*************************************************************************
	  *:
	  *: Class:MYCONTAINER  BaseClass: CONTAINER
	  *:
	  *:*************************************************************************
	
	  DEFINE CLASS Mycontainer AS CONTAINER
	     Dragmode=1
	     Width=80
	
	     PROCEDURE DragDrop
	        PARAMETERS OSOURCE, XCOORD,YCOORD
	        ONAME=OSOURCE.NAME
	        nNberofMembers=AMEMBERS(atest,THIS,2)
	
	        IF TYPE('atest')<>"U"  && there are member objects
	           nIsObjectThere=ASCAN('atest',ALLTRIM(UPPER(ONAME)))
	           IF nIsObjectThere<>0
	              ONAME=ALLTRIM(ONAME)+ALLTRIM(STR(nNberofMembers+1))
	           ENDIF
	        ENDIF
	        THIS.ADDOBJECT(ONAME,OSOURCE.CLASS)
	        Oref=EVAL('this.'+oname)
	        Oref.Top=(nNberofMembers*OSOURCE.HEIGHT)+3
	        Oref.Visible=.T.
	     ENDPROC
	  ENDDEFINE
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
