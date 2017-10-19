---
layout: page
title: "Q161094: HOWTO: Use the Procedure Attributes Dialog Box"
permalink: /kb/161/Q161094/
---

## Q161094: HOWTO: Use the Procedure Attributes Dialog Box

	Article: Q161094
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Just as there are properties associated with objects, there are also type
	library attributes for each object property, method, and event. The
	Tools|Procedure Attributes menu in Visual Basic allows you to set and alter
	these attributes. The Procedure Attributes dialog box is disabled unless you
	have existing property procedures, methods, or events in your project and you
	are currently in a project file (for example, Form, UserControl, Basic Module,
	and so forth). Once you add a property procedure, method, or event to your
	project file you can set specific attributes for it.
	
	MORE INFORMATION
	================
	
	The Procedure Attributes dialog box contains the following attributes:
	
	1. Name: Lists of all available properties, methods, and events. The list box
	  defaults to display properties for the property procedure, method, or event
	  that the cursor was on in the code window. You can select and modify a
	  different property procedure, method, or event without having to leave the
	  dialog box.
	
	2. Description: Enter information that you want to display in the description
	  area of the Object Browser.
	
	3. Project Help File: Displays the path to the Help file that is specified in
	  the General tab of the Project Properties dialog box. This option is
	  read-only.
	
	4. Help Context ID: Allows you to specify a Help Context ID to be associated
	  with the selected property procedure, method, or event. If you are in Code
	  View or in the Object Browser, you can get help on this procedure, method, or
	  event based on this ID.
	
	Click Advanced>>, and set the following additional options:
	
	1. Procedure ID: Sets a standard member ID for the currently selected property,
	  event or method. This member ID may be one a client may know about, and
	  therefore behaves in an expected way.
	
	  A ProcedureID is a GUID. If this is left blank, Visual Basic 5.0 will assign
	  one. There are some common GUIDs that developers can use for their procedures
	  that the host application may be aware of and handle in a specific manner. By
	  choosing a common GUID, you are letting the host application know that your
	  code behaves in a standard fashion. For example, if you have a procedure to
	  handle the background color, you could use the predefined GUID for BackColor
	  because it's a common property that controls expose. The host application can
	  look for this GUID and, if it is found, can assume that your code will behave
	  in a predictable fashion.
	
	  Setting this attribute does not guarantee that the procedure will behave as
	  expected. It is up to you to write code to do what you say you're going to
	  do. For example, if you select the Refresh Procedure ID, the code you write
	  and associate with the procedure should Refresh the control.
	
	  NOTE: Assigning a property procedure or method a Procedure ID of 0 makes it
	  the default property (also known as the Value property).
	
	2. Use This Page In Property Browser: This setting is only available for
	  Properties. It sets which property page is used for your property when you
	  change its value in the Property Window. You can select a predefined property
	  page or one of your own custom property pages. If you select a predefined
	  property page, make sure your property exposes the appropriate data type
	  (OLE_COLOR, FONT, PICTURE).
	
	  If you want the Properties Verb to appear when you right-click your control,
	  you need to add the PropertyPage to the UserControl's PropertyPages property.
	  When you select modify PropertyPages, you can choose which property pages
	  appear when you select the Properties Verb for your UserControl. You can also
	  use this dialog box to modify the order in which the pages are presented.
	
	3. Property Category: This setting is only available for Properties. It lets you
	  select which category your property appears in under the Property Window's
	  "Categorized Tab."
	
	4. Hide This Member: Prevents your procedure from appearing in the Object
	  Browser (unless the Object Browser has "Show Hidden Members" enabled).
	
	5. User Interface Default: You can select this for one Event and one Property
	  per UserControl. This determines which event is displayed when you
	  double-click on a new instance of the control to see the Code Window. This
	  determines which property is automatically highlighted in the Property
	  Window. Note that this is not the same as the default property, which applies
	  to coding (see Procedure ID above).
	
	6. Do not Show In Property Browser: This setting is for properties only. This
	  option prevents your property from appearing in the Property Window. However,
	  it still appears in the Object Browser.
	
	The DataBinding section allows you to control whether a property can be bound or
	linked to a field in a database table. These settings are:
	
	1. Property is data bound: Determines if the property supports databinding and
	  appears in the DataBindings Collection.
	
	2. This Property binds to DataField: Determines if the field that this property
	  is bound to is specified in the DataField property. When this is set the user
	  can set the DataField property instead of using the DataBindings Collection.
	
	3. Show in DataBindings Collection at design time: Determines if the property
	  will appear as bindable at design time. If this is set, the property appears
	  in the Bindings dialog box. If it is not selected, the property does not
	  appear in the user interface as bindable property but you can continue to
	  write code to access it.
	
	4. Property will call CanPropertyChange before Changing: Tells the control
	  container that the control will always call the CanPropertyChange method and
	  respect the return value before changing a property value.
	
	REFERENCES
	==========
	
	Visual Basic 5.0 Help; topic: Procedure Attributes Dialog Box
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
