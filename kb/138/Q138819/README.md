---
layout: page
title: "Q138819: Differences Among Form's Initialize, Load, and Activate Events"
permalink: /kb/138/Q138819/
---

## Q138819: Differences Among Form's Initialize, Load, and Activate Events

	Article: Q138819
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Form_Initialize, Form_Load, and Form_Activate events are in many ways
	related, but also have important and fundamental differences. This article gives
	more information and clarifies the relationship among these events. Note that
	the Form_Initialize event is only present in Visual Basic 4.0; Form_Load and
	Form_Activate are present earlier versions.
	
	MORE INFORMATION
	================
	
	Initialize
	----------
	
	This event fires only when an application first creates an instance of a form. In
	an application with a startup form, the first event that occurs is the startup
	form's Initialize event. Initialize may also be called well in advance of a Load
	or Show if, for example, the following statement is executed:
	
	     Set x = New Form1
	
	In addition, Initialize is called again if all of the references to the form have
	been previously set to Nothing and the form is then loaded, shown or has a
	variable set to it (for example, Set x = New Form1).
	
	Many of the tasks previously done in the Form_Load statement can, in Visual Basic
	4.0, be performed in the Form_Initialize statement. Any statement that needs to
	be performed a single time when a form is created can be done here. Be careful
	that you do not reference any of the properties of the controls on the form
	because doing so will cause an automatic Form_Load.
	
	Load
	----
	
	The Form_Load event fires when a form is first loaded into memory. A form can be
	caused to load by an explicit Load statement, by calling a Show method when the
	form is not already loaded, or by a line of code in another module making a
	reference to any of the unloaded form's properties (or to any properties of the
	unloaded form's children).
	
	For example, if Form2 is not loaded, and a subroutine in Form1 executes a line of
	code setting or reading Form2's Caption property, then Form2 will be loaded into
	memory, and the corresponding Form2_Load event will be called. Unless a form is
	loaded as a result of a Show method or has its Visible property set to True, the
	form will be loaded into memory but will not be made visible. Forms can be
	hidden and shown (using the Hide and Show methods) while remaining in memory;
	the Load event will only be fired when the form is first loaded.
	
	Some procedures and methods of controls (for example, the SetFocus method)
	require that their parent form be loaded before they are called. In this
	situation, the best thing to do is to perform an explicit Form.Show in the
	Form_Load event, and do any such initialization after calling the Show method.
	This is preferable to doing the initialization in, for example, the
	Form_Activate event because Activate is called every time the user switches
	between forms in an application. Also, if you are calling related events, such
	as Activate, Paint, or Resize, be careful that their actions do not conflict
	with the Load and that they don't fire recursive events.
	
	Activate
	--------
	
	As was stated previously, the Activate event is called every time a form becomes
	the active window, as long as the focus has moved between forms in the
	application. The Activate event is not called if the previous window that had
	the focus was outside of the application.
	
	There are fewer caveats with Activate than with the previous two event
	procedures, perhaps because Activate is marginally less important than the
	Initialize and Load events. Code that needs to be executed every time the focus
	changes within an application should reside in the form's activate event.
	
	REFERENCES
	==========
	
	For more information, please search the Visual Basic 4.0 Help file or printed
	documentation for the Initialize, Load, and Activate events.
	
	Additional query words: 4.00 vb4win vb4all
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
