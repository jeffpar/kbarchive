---
layout: page
title: "Q190448: HOWTO: Save Properties Added with AddProperty()"
permalink: kb/190/Q190448/
---

## Q190448: HOWTO: Save Properties Added with AddProperty()

	Article: Q190448
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 6.0 has a new object method called AddProperty(). The AddProperty
	function allows you to add properties to instantiated objects. Although the
	primary intended use of the AddProperty function is to add properties to objects
	that remain only for the duration of the object's instance, under some
	circumstances you can add properties to objects at design or run-time and save
	them as forms or classes. This article demonstrates several ways to accomplish
	this task, along with some instances where this will not work.
	
	MORE INFORMATION
	================
	
	Saving Objects with Properties Added at Run-time
	------------------------------------------------
	
	The following two techniques use the AddProperty() function at run-time to add
	properties, and then save the object to which the property has been added,
	either as a form or class.
	
	Using SaveAs
	------------
	
	You may use the SaveAs() method to save a form with a property added with the
	AddProperty function. This example instantiates a form, adds a command button
	and a property with AddObject() and AddProperty(), respectively, and saves the
	form by calling the form's SaveAs() method. The form is then run, and the added
	property's value is displayed.
	
	1. Run the following code from a program (.PRG) file:
	
	        ERASE testxx.sc?
	        ofo = NEWOBJECT('form')
	        ofo.SHOW
	        ofo.ADDOBJECT('cmd','commandbutton')
	        ofo.ADDPROPERTY('formprop','Form Prop')
	        ofo.SAVEAS('testxx')
	        ofo.RELEASE()
	        DO FORM testxx
	        ?"The value of thisform.formprop = "+testxx.formprop
	
	2. The value of the added property is visible on the form.
	
	Using SaveAsClass
	-----------------
	
	You can use the SaveAsClass() method to save a class with a property added with
	the AddProperty() function. This example creates a form, adds a command button
	with the AddObject() function, then adds a property to the command button by
	calling its AddProperty() method. It then saves the command button as a class
	into a class library by calling the command button's SaveAsClass() method. The
	command button is then added to the Visual FoxPro desktop with the NewObject()
	method (NewObject() is also new to Visual FoxPro 6.0), then the value of the
	added property is displayed.
	
	1. Run the following code from a program (.prg) file:
	
	        ERASE testlib.vc?
	        ofo = NEWOBJECT('form')
	        ofo.SHOW
	        ofo.ADDOBJECT('cmd','commandbutton')
	        ofo.cmd.ADDPROPERTY('btnprop','Button Prop')
	        ofo.cmd.SAVEASCLASS('testlib','cmd')
	        ofo.RELEASE()
	        _SCREEN.NEWOBJECT('cmd1','cmd','testlib.vcx')
	        _SCREEN.cmd1.VISIBLE = .T.
	        ?"The value of _screen.btnprop = "+_SCREEN.cmd1.btnprop
	
	2. Look at the value of the property echoed to the Visual FoxPro desktop.
	
	3. CLEAR ALL removes the button from the Visual FoxPro desktop.
	
	Saving Objects with Properties Added at Design Time
	---------------------------------------------------
	
	The following example creates a form in the Form Designer, gets an object
	reference to it with the ASELOBJ() function, uses the AddProperty() function to
	add a property to the form, then saves the form to which the property has been
	added. The form is then run, and the value of the saved property is displayed.
	
	1. Run the following code from a program (.prg) file:
	
	        ERASE testxx.sc?
	        LOCAL aobj[1], ox
	        CREATE FORM testxx NOWAIT
	        =ASELOBJ(aobj,1)
	        ox = aobj[1]
	        ox.AUTOCENTER = .T.
	        ox.ADDPROPERTY('formprop','Form Prop')
	        KEYBOARD 'Y' CLEAR
	        RELEASE WINDOW 'Form Designer - testxx'
	        DO FORM testxx
	        ?'The value of testxx.formprop is ' +testxx.formprop
	
	2. The value of the added property is visible on the form.
	
	Examples of Where AddProperty() Properties will not be Saved
	------------------------------------------------------------
	
	There are certain cases where properties added with the AddProperty() function
	will not be saved when the object or form is saved. In summary, properties added
	to contained objects are not saved when the container object is saved.
	
	Example 1 - Example with SaveAs:
	
	1. Run the following code from a program (.prg) file:
	
	        ERASE testxx.sc?
	        ofo = NEWOBJECT('form')
	        ofo.AUTOCENTER = .T.
	        ofo.SHOW
	        ofo.ADDOBJECT('cmd','commandbutton')
	        ofo.cmd.VISIBLE = .T.
	        ofo.cmd.ADDPROPERTY('cmdprop','Commandbutton Prop')
	        _SCREEN.SHOW()
	        *Property exists while the object to which it was added still exists.
	        ?"The value of ofo.cmd.cmdprop = " + ofo.cmd.cmdprop
	        ofo.SAVEAS('testxx')
	        ofo.RELEASE()
	        DO FORM testxx NOSHOW
	        testxx.SHOW()
	        _SCREEN.SHOW()
	        *Property does not exist in saved form.
	        ?"The value of testxx.cmd.cmdprop = "+testxx.cmd.cmdprop
	
	2. The final line generates the error "Property CMDPROP is not found" since the
	  property does not exist. Note that the property did exist when it was added.
	  Because the property was not saved with the form, it does not exist when the
	  form is run with the DO FORM command. The reason the property was not saved
	  is that it was added to the command button, a contained object.
	
	Example 2 - Example with SaveAsClass:
	
	1. Run the following code from a program (.prg) file:
	
	        CLEAR
	        CLEAR ALL
	        ERASE testlib.vc?
	        ocnt = NEWOBJECT('container')
	        ocnt.ADDOBJECT('cmd','commandbutton')
	        ocnt.cmd.VISIBLE = .T.
	        ocnt.cmd.ADDPROPERTY('btnprop','Button Prop')
	        ?"The value of ocnt.cmd.btnprop = " + ;
	           ocnt.cmd.btnprop   && Present while original object exists.
	        ocnt.SAVEASCLASS('testlib','cnt')
	        _SCREEN.NEWOBJECT('cnt1','cnt','testlib.vcx')
	        _SCREEN.cnt1.TOP = 100
	        _SCREEN.cnt1.VISIBLE = .T.
	        ?"The value of _screen.cnt1.cmd.btnprop = " + ;
	           _SCREEN.cnt1.cmd.btnprop  && Error occurs, prop not in saved
	                                     && object.
	
	2. The final line generates the error "Property BTNPROP is not found" since the
	  property does not exist. Note that the property did exist when it was added.
	  Because the property was not saved with the container class, it does not
	  exist when the container is instantiated with the NewObject() function. The
	  reason the property was not saved is that it was added to the command button,
	  a contained object.
	
	Example 3 - Example with Form at Design Time
	
	1. Run the following code from a program (.prg) file:
	
	        ERASE testxx.sc?
	        LOCAL aobj[1], ox
	        CREATE FORM testxx NOWAIT
	        =ASELOBJ(aobj,1)
	        ox = aobj[1]
	        ox.AUTOCENTER = .T.
	        ox.ADDOBJECT('cmd','commandbutton')
	        ox.cmd.ADDPROPERTY('cmdprop','Cmd Prop')
	        KEYBOARD 'Y' CLEAR
	        RELEASE WINDOW 'Form Designer - testxx'
	        DO FORM testxx
	        ?'The value of testxx.cmd.cmdprop is ' +testxx.cmd.cmdprop
	
	2. The final line generates the error "Property CMDPROP is not found" since the
	  property does not exist. The reason the property does not exist is that it
	  was not saved because it was added to the command button, a contained object.
	
	An easy way to understand this behavior is that the property will be saved if the
	object whose AddProperty() method was called is the same object for which the
	SaveAs() or SaveAsClass() method was called, or the form or formset itself which
	is saved in the Form Designer. When the AddProperty() function is used without
	SaveAs or SaveAsClass, or AddProperty() adds a property to a contained object,
	the property remains only for the duration of the object's existence.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Help file; search on: "AddProperty()"; "NewObject()"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbOOP kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
