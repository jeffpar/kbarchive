---
layout: page
title: "Q149075: ADT/ODE: How to Reference Buttons on a Custom Toolbar Control"
permalink: kb/149/Q149075/
---

## Q149075: ADT/ODE: How to Reference Buttons on a Custom Toolbar Control

	Article: Q149075
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	This article describes how to reference individual command buttons placed on a
	custom Toolbar control. The custom Toolbar control is included with the
	Microsoft Office 97 Developer Edition Tools and the Microsoft Access Developer's
	Toolkit version 7.0.
	
	MORE INFORMATION
	================
	
	This article assumes that a form with a custom Toolbar control has already been
	created. For the examples provided in this article, the custom Toolbar control
	should have at least two command buttons.
	
	The key to understanding the custom Toolbar control is understanding its object
	model. The custom Toolbar control is a Container object with its own properties
	and methods and it has a Buttons collection consisting of one or more buttons.
	The Button collection also has its own properties and methods. The diagram below
	illustrates this:
	
	  Toolbar Control Object
	    |
	    +-- Properties
	    |
	    +-- Methods
	    |
	    +-- Button Collection
	           |
	           +-- Properties
	           |
	           +-- Methods
	           |
	           +-- Buttons
	
	When you click a button on the custom Toolbar control, the toolbars ButtonClick
	event is triggered. It is important to note that the Toolbar control has both a
	Click event and a ButtonClick event. To determine which button someone clicked,
	the ButtonClick event must be used.
	
	Each button in the Button collection has an "index" value and an optional key
	value. These values can be used to reference the desired button when selected.
	To view the index or key value of a particular button, using the right mouse
	button (right click), click the custom Toolbar control in form Design view,
	point to Toolbar Control Object, and then click Properties. Within the
	ToolbarControl Properties window, click the Buttons tab. The Buttons tab shows
	the Index value of a particular button and a key may also be provided.
	
	The code examples below assumes there are at least two buttons on the custom
	Toolbar control. This example will display an appropriate message box, depending
	on which button was selected. In this example, the Button collections index
	property is used to determine which button was pressed. The index value stores
	an integer. Each button in the buttons collection will have a unique index
	value.
	
	Enter the code in the Toolbar control's ButtonClick event. To enter this code, on
	the View menu, click Code while in the form's Design view. Then, select the
	Toolbar custom control object from the Object list and ButtonClick from the Proc
	list.
	
	NOTE: The following code will not work within the Toolbar control's Click event
	when using Microsoft Access for Windows 95.
	
	  Private Sub oleToolbar_ButtonClick(ByVal Button As Object)
	
	      Select Case Button.Index
	
	      Case 1    ' The first button was clicked.
	           Msgbox "You Selected Button #1"
	      Case 2    ' The second button was clicked.
	           Msgbox "You Selected Button #2"
	      Case Else
	           Msgbox "You Selected an invalid button"
	      End Select
	
	  End Sub
	
	The next example shows how to perform the same actions by referencing the Button
	collections "key" value instead of its Index value. The key value stores a
	string and this value is optional. If the key value is used, each button in the
	button collection should have a key and the key value must be unique.
	
	  Private Sub oleToolbar_ButtonClick(ByVal Button As Object)
	
	       Select Case Button.Key
	
	       Case "One"   ' The key value is "One".
	            Msgbox "You Selected Button #1"
	
	       Case "Two"   ' The key value is "two".
	            Msgbox "You Selected Button #2"
	
	       Case Else
	            Msgbox "You Selected an invalid button"
	
	       End Select
	
	  End Sub
	
	NOTE: The index values for buttons in the Button collection are automatically
	assigned by their sequential order in the custom Toolbar control. If a button is
	removed, the index values are reassigned to all of the buttons in the
	collection. For reliable code, use the "key" value when referencing buttons.
	This value is user defined and cannot be changed by removing a button in the
	collection.
	
	REFERENCES
	==========
	
	For more information about the Toolbar control, search the Help Index for
	"Toolbar Control."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
