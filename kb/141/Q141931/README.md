---
layout: page
title: "Q141931: INFO: Limitations of the Visual Basic 4.0 Add-In Object Model"
permalink: /kb/141/Q141931/
---

## Q141931: INFO: Limitations of the Visual Basic 4.0 Add-In Object Model

{% raw %}

	Article: Q141931
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbAddIn kbVBp400 kbGrpDSVB kbDSupport
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
	
	Visual Basic 4.0 is the first version of Visual Basic to include the ability to
	create add-ins for the Visual Basic development environment. With the add-in
	object model defined by Visual Basic 4.0 you can create many great add-ins.
	However, only a portion of the development environment is exposed to add-ins,
	and therefore, some functionality that you may want could be missing.
	
	This article documents some of the most common limitations that you may run into.
	Note that in future versions of Visual Basic the add-in object model should be
	expanded to solve most or all of these issues.
	
	MORE INFORMATION
	================
	
	Here is a list of the most common limitations of the add-in object model
	encountered by add-in developers:
	
	- No property to indicate the type of Component object. A Component could be a
	  form, class, module, or resource file. There is a FileNames property that
	  returns the file name with the extension. However, users do not have to use
	  the standard extensions when naming project files. For components that have
	  been saved, add-ins can check inside the file to determine the type of
	  component.
	
	- Add-ins can only access the ActiveForm. There is no FormTemplates collection.
	  Similarly, you cannot get to a FormTemplate object from the Components
	  collection.
	
	- Properties of an object type (such as Font and Picture) return a Properties
	  collection object. There is no way to access the actual object type property.
	  Add-ins can only access individual properties of an object type property
	  through the Properties collection. For example you cannot directly access the
	  Font object property of a Form through an add-in. However, you can access the
	  individual properties of the Font object such as Name, Bold, and Size through
	  the Properties collection that is returned as the Value of the Form Font
	  property.
	
	- No method to set properties of class or standard module. The Component object
	  has a Name property but it is read-only. For files that have been saved, it
	  is possible to write to the file to change the property, then reload the
	  Component.
	
	- The only method for inserting code is the InsertFile command. InsertFile can
	  only insert code between the general declarations section and the first
	  procedure. If the add-in needs more control, it must save the Component to a
	  file, modify the file as desired, and Reload the component.
	
	- There are methods for adding references to controls and type libraries, but
	  no methods for removing the references. To work around this, an add-in can
	  open the project file, make the desired modification, and reload the project.
	
	- No methods exist for changing project options. The ReadProperty and
	  WriteProperty methods of the ProjectTemplate object are for user-defined
	  properties only. Add-ins can modify the options by writing directly to the
	  project file.
	
	- There are no methods for displaying a specific form, class, standard module,
	  or procedure within. However, when adding a new form it will become the
	  active form.
	
	- Multiple instances of Visual Basic could be using a single add-in. There is
	  no property that indicates the title or handle of the instance of Visual
	  Basic so that an add-in can control it through other means besides the add-in
	  object model.
	
	- Methods have not been exposed that correspond to all of Visual Basic's menu
	  commands.
	
	- Add-ins can only place menus and items under the Visual Basic Add-In menu.
	
	  There are no methods for putting menus anywhere else on the Visual Basic menu
	  or any of the pop-up menus.
	
	- Cannot set the DataSource property of a bound control from an add-in.
	
	- Cannot set any Picture object properties such as the Icon, MouseIcon, and,
	  Picture properties of a form.
	
	- Add-ins are not given access to the toolbar and cannot add any buttons to it.
	
	- Add-ins are not given access to the Toolbox, Project, Menubar, Code, Debug,
	  or Properties windows that make up the Visual Basic development environment.
	
	- No properties or methods have been exposed to indicate if the IDE is in run,
	  break, or debug mode.
	
	Additional query words: addin Addins VBIDE
	
	======================================================================
	Keywords          : kbAddIn kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
