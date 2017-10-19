---
layout: page
title: "Q105312: PC Forms: Incorrect Data Displayed in Subform"
permalink: /kb/105/Q105312/
---

## Q105312: PC Forms: Incorrect Data Displayed in Subform

	Article: Q105312
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While reading a message created with a version 1.0 Microsoft Electronic Forms
	Designer custom form, you may notice that incorrect information is displayed in
	a subform. This problem can occur if E-Form caching is turned on and the Hide
	method in Microsoft Visual Basic was used to dismiss the window. To properly use
	subforms with caching turned on, the Visual Basic Unload method should be used
	to dismiss the forms.
	
	MORE INFORMATION
	================
	
	With the Microsoft Electronic Forms Designer, you can create a custom form to
	include subforms that are displayed in addition to the form's main window. You
	can use two methods to dismiss a subform in Visual Basic: Hide and Unload. The
	Hide method simply removes the dialog box from view; Unload removes the dialog
	box from memory.
	
	When E-Form caching is turned on, it is important that you use the Unload method
	to dismiss subforms. Otherwise, if you use the Hide method, when a message of
	the same message class is read, the first instance of the subform will always be
	displayed because it is cached in memory. The Unload command removes the subform
	from memory and therefore allows each message to perform as expected.
	
	For more information on subforms, see pages 95-102 of the Microsoft Electronic
	Forms Designer "Developer's Guide."
	
	Additional query words: 1.00 wrong sub-form sub form E-Forms
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
