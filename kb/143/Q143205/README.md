---
layout: page
title: "Q143205: How to Use the GETPEM() Function"
permalink: kb/143/Q143205/
---

## Q143205: How to Use the GETPEM() Function

	Article: Q143205
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The GETPEM() function introduced in Visual FoxPro 3.0b returns the current value
	for a property or the program code for an event or a method. It can be used as a
	debugging tool. Because the GETPEM() function can operate on classes, it is
	useful to create applications that extend the Visual FoxPro interface. This
	article highlights some of the functionality of GETPEM().
	
	MORE INFORMATION
	================
	
	Syntax
	------
	
	The syntax of GETPEM() is as follows:
	
	     GETPEM(oObjectName | cClassName, cProperty | cEvent | cMethod)
	
	GETPEM receives either an object name or a class name as a first parameter. This
	means that the GETPEM() function does not require an instance of the class to
	return a value. In the following example, GETPEM is called to return the value
	of a property. The first time GETPEM is used, the first parameter is an object
	name. The second GETPEM verifies the value of the Caption property at the class
	level.
	
	     oObjRef=CreateObject('myform')
	     oObjRef.Show
	     oObjRef.Caption="Testing the New Function"
	     ?'Caption of the Object: '
	     ??GETPEM(oObjref,'Caption')
	     ?'Caption in the Class: '
	     ??GETPEM('myform','Caption')
	     =Messagebox('Press Any Key to Clear')
	
	     DEFINE CLASS myform as Form
	       Caption="Testing GETPEM"
	     ENDDEFINE
	
	Note that the first parameter does not require quotation marks when it is a
	variable that references an object. However, if the first parameter is the name
	of a class, and you do not type quotation marks, the error "Variable <var>
	is not Found" is returned.
	
	Using GETPEM with Visual FoxPro Base Classes or User Defined Classes
	--------------------------------------------------------------------
	
	GETPEM can return the value of a property of a base class. For example, to
	determine the default font of a text box, you can use the following command:
	
	     ?GETPEM('TextBox','FontName')
	
	You can use this to determine default attributes of objects before you modify
	them. To return a value on a user defined class, GETPEM requires that the class
	be cached in memory. It does not, however, require that an instance of the class
	actually exist. To have a class cached in memory, you need to create an instance
	of the user defined class. You can then release this instance. For example:
	
	     oTool1=CREATEOBJECT('ToolBar')
	     oTool1=.NULL.
	
	A CLEAR ALL or CLEAR CLASS ClassName would release the class from memory. Note
	that GETPEM does not search a Visual Class Library (VCX) opened with the SET
	CLASSLIB command. You also need to create an instance of the class and release
	it when you search a class defined in a VCX.
	
	Calling GETPEM at design time
	-----------------------------
	
	The GETPEM() function can be called at design time or at run time. The following
	step-by-step example shows how you can use GETPEM with SYS(1270) to return the
	value of a property. By using SYS(1270), you don't need to make an explicit call
	to a variable reference.
	
	1. In the Command window, type
	
	  " ON KEY LABEL F7 WAIT WINDOW GETPEM(SYS(1270),'Class') " (without the
	  quotation marks)
	
	2. Create a form, and place a command button and text box on the form.
	
	3. Position the mouse pointer over one control, and press the F7 key. A window
	  displays the class name of the control.
	
	Using GETPEM to Return Event Code
	---------------------------------
	
	The GETPEM function is also useful to return method or event code. Although you
	cannot write method code at run time, you can use GETPEM to help you debug an
	application. The following example prints the code of a method that generates an
	error.
	
	1. Create a form.
	
	2. Add a command button to a form.
	
	3. In the Click event of the button, add this code:
	
	     RELAESE THISFORM   && error that calls the event handler
	
	4. In the Error event handler of the button, type:
	
	     LPARAMETERS nError, cMethod, nLine
	     ACTIVATE SCREEN
	     ?'ERROR'+ALLTRIM(STR(nError))+'IN LINE'+ALLTRIM(STR(nLine))+':'
	     ?GETPEM(THIS,cMethod)
	
	5. Save and run the form. When the form is displayed, click the command button.
	  It contains an error that calls the Error event. The method code is then
	  printed to the screen.
	
	Additional query words: debug trace builder wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
