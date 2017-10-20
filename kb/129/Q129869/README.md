---
layout: page
title: "Q129869: Why GUIDs Change On Every Recompile Of OLE Automation Server"
permalink: /kb/129/Q129869/
---

## Q129869: Why GUIDs Change On Every Recompile Of OLE Automation Server

{% raw %}

	Article: Q129869
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
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
	
	When an application is compiled as an OLE Automation Server, the Interface
	identifiers (IIDs) and the Class identifiers (CLSIDs) used internally to
	uniquely identify an object's class and its properies and methods, change with
	every compile. This behavior is by design. This article explains why this is so
	and offers a workaround.
	
	MORE INFORMATION
	================
	
	Consider two Visual Basic application instances, SRV and CTRLR. SRV is an OLE
	Automation Server and CTRLR is an OLE Automation Controller that has a reference
	to an object in SRV. If SRV shuts down and a major change (such as changing the
	name of a procedure or class, changing the number or type of the parameters, or
	removing a method) is made to it, CTRLR will still have a reference to the old
	type library and will bind to the old definition of the class. Thus CTRLR will
	now have an invalid reference to SRV. GUIDs always change on recompilation, in
	order to avoid such a scenario.
	
	In object applications, changes you make to existing procedures may cause the new
	version to be incompatible with previous versions. For example, you could change
	either the name of a procedure, the number of arguments passed to a procedure,
	or the data type of arguments passed to a procedure.
	
	For code that uses previous versions of the object application, such changes may
	cause errors. Visual Basic provides a way to define a version of your
	application as a reference, to which your changes are compared. This reference
	version is called the "compatible object application." If a change is made that
	might cause incompatibility with the compatible object application, Visual Basic
	displays a warning message to alert you to the possible incompatibility.
	
	Therefore, to work around the behavior:
	
	1. When you begin a project, decide on the names of all the classes that will be
	  exposed while making the project.
	
	2. Add a .CLS module for each class. Make it public and creatable, and set the
	  name for the class.
	
	3. Make an .EXE file.
	
	4. Set the .EXE file as the "compatible object application." To specify a
	  compatible object application:
	
	  a. From the Tools menu, choose Project Options. The Project Options dialog
	     box appears.
	
	  b. In the Compatible Object Application field, enter the full path and
	     filename of the .EXE file you want to use as the basis for identifying
	     possible version incompatibilities.
	
	  c. Choose OK.
	
	5. Be sure to update the compatible server when a class name is changed, a class
	  attribute is set, or a new class is added.
	
	If an incompatible change is made to the object, and you go ahead and recompile
	the server application despite the warning, you will have to close the client
	application and re-start it in order for it to read the system registry again to
	get the new GUIDs for the object.
	
	Even if you make a compatible change, such as adding a new method, there is no
	mechanism to tell the running instances of the controllers to use the new
	version of the interface.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	
	=============================================================================
	

{% endraw %}
