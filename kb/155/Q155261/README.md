---
layout: page
title: "Q155261: PRB: Protected Property Cannot be Changed by Objects in a Class"
permalink: /kb/155/Q155261/
---

## Q155261: PRB: Protected Property Cannot be Changed by Objects in a Class

{% raw %}

	Article: Q155261
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Object that was added to a class at design time will not be able to modify a
	protected property or method of the class. If it tries, it will fail with the
	following error:
	
	  "Property is not found"
	
	WORKAROUND
	==========
	
	In order to allow an object in a class to modify protected properties of a
	class, you will need to create public methods for your objects to call and then
	have the method change the protected properties.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Protected properties added to a container class in Visual FoxPro become part of
	your container class. However, objects that are added to the container in the
	Class Designer are not considered to be part of the container class but rather
	external objects sitting in the container. Because of this, protected properties
	are encapsulated in the container class and can not be seen by objects sitting
	in the container. This behavior can be confusing because the class designer
	gives the appearance that the container and all the objects in it are part of
	the container class.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following program:
	
	     ***** Start Program Code *****
	     PUBLIC oForm1
	     oForm1 = CREATEOBJECT("myform")
	     oForm1.Show
	
	     DEFINE CLASS myform AS form
	       Name = "myform"
	       PROTECTED cString
	
	       ADD OBJECT command1 AS commandbutton WITH ;
	         Top = 20, ;
	         Left = 20, ;
	         Height = 30, ;
	         Width = 100, ;
	         Caption  = "Change Property"
	
	       ADD OBJECT command2 AS commandbutton WITH ;
	         Top = 100, ;
	         Left = 20, ;
	         Height = 30, ;
	         Width = 100, ;
	         Caption  = "Call Method"
	
	       PROCEDURE command1.Click
	         * This fails because the Command button
	         * Cannot change a protected property of the class
	         This.Parent.cString = "Change Me"
	       ENDPROC
	
	       PROCEDURE command2.Click
	         * calling a method to change a protected property will work
	         This.Parent.ChangeString()
	
	       ENDPROC
	
	       PROCEDURE ChangeString
	         * because the method is part of the class, it
	         * can change the cString property
	         This.cString = "Change Me"
	         WAIT WINDOW "The Property cString now equals "+This.cString
	       ENDPROC
	
	     ENDDEFINE
	
	     ***** End Code *****
	
	2. Run the program and click the Call Method Command button. Note that the
	  property changes. Pressing the other button causes the error to appear.
	
	REFERENCES
	==========
	
	For more information about how inheritance affects protected properties, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q128633 How Inheritance Affects PROTECTED Methods and Properties
	
	Additional query words: kbdsd vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0
	
	=============================================================================
	

{% endraw %}
