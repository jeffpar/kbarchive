---
layout: page
title: "Q130825: Tools Available with Visual FoxPro 3.0 Professional"
permalink: /kb/130/Q130825/
---

## Q130825: Tools Available with Visual FoxPro 3.0 Professional

{% raw %}

	Article: Q130825
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the following tools available only in the Professional
	Edition of Visual FoxPro:
	
	- Running BUILDAPP.PRG with the BuildEXE parameter.
	
	- Using the Class Browser Window.
	
	- Using the Image Editor.
	
	- Using the OLE Controls Sample.
	
	NOTE: The information in this article is also available in various help topics in
	the Visual FoxPro Help file, under Contents, Professional Reference, Tools, and
	Samples.
	
	MORE INFORMATION
	================
	
	Running BUILDAPP.PRG with the BuildEXE Parameter
	------------------------------------------------
	
	BUILDAPP.PRG strips the method and event code of .SCX and .VCX files from .APP
	and .EXE files for distribution purposes. BUILDAPP.PRG is located in the Visual
	FoxPro TOOLS\BUILDAPP directory.
	
	In Visual FoxPro, source code is usually stored in the Methods field of all .SCX
	and .VCX tables. When you build an application, these fields are included in the
	build and the code is included in the .APP file. BUILDAPP strips the code from
	the methods field before the final application build and restores files to their
	original state following the build. By building files without source code, your
	.APP files are smaller and more secure.
	
	The syntax for BUILDAPP.PRG is:
	
	DO BUILDAPP [WITH ProjectName [, AppFileName [, DebugMode [, BuildEXE]]]]
	
	- ProjectName specifies the name of the project. If it is not included, a
	  Locate File dialog box is displayed.
	
	- AppFileName, if specified, instructs BUILDAPP to build the application with
	  this name and an .APP extension. If you do not specify AppFileName, the
	  application is built with the ProjectName and an .APP extension. If you
	  specify an AppFileName with an .EXE extension, an .EXE is built; this feature
	  is available only in the Professional Edition of Visual FoxPro.
	
	- DebugMode sets debug mode on. Debug mode is off by default. To set debug mode
	  on, set DebugMode to true (.T.).
	
	- BuildEXE builds a compact .EXE file instead of an .APP file. BuildEXE is off
	  by default. To build an .EXE file, set BuildEXE to true (.T.). BUILDEXE is
	  available only in the Professional Edition of Visual FoxPro.
	
	If you run BUILDAPP without specifying any arguments, a form is displayed
	prompting you for the required information. BUILDAPP performs the following
	operations:
	
	- Locates files.
	
	- Opens the project.
	
	- Sets debug mode.
	
	- Builds the application from original project files. This ensures that the
	  source code in the Methods fields in all .VCX and .SCX tables is compiled and
	  the P-code is stored in the corresponding ObjCode field in each table. During
	  the application build, if an error is found, the error is displayed, and you
	  can choose Ignore, Suspend, or Cancel. Builds must be error-free for BUILDAPP
	  to execute completely.
	
	- Creates and populates an array with file names corresponding to every .VCX
	  and .SCX file in the project.
	
	- Packs .VCX files to remove any orphan records.
	
	- Copies Methods fields from all .VCX and .SCX tables to temporary tables in
	  the array.
	
	- Replaces all Methods fields with ' ' (blank string), copies the tables to a
	  temporary location, removes records from the original table, appends the
	  temporary tables (with empty Method fields) back to the original tables, and
	  deletes the temporary files.
	
	- Rebuilds the application.
	
	- Restores all Methods fields in the original tables, deletes all temporary
	  files, and restores the project to its original state.
	
	No permanent changes are made to the project when you run BUILDAPP.
	
	Using the Class Browser Window
	------------------------------
	
	The Class Browser available in the Professional Edition of Visual FoxPro displays
	the classes in a class library or a form. You can use the Class Browser to view,
	use, and manage classes and their user-defined members.
	
	To use the Class Browser, choose Class Browser from the Tools menu and specify a
	file, or type DO (_BROWSER) in the Command window.
	
	The Class Browser consists of these tools:
	
	- Class Browser buttons, which perform various Class Browser commands.
	
	- Pushpin button, which controls the state of the Class Browser window. When
	  the button is in the down position, the window remains on top, even when
	  other windows are active. When the button is in the up position, the Class
	  Browser window does not remain on top.
	
	- Type box, which allows selection or entry of a class type or character string
	  to filter the class list. The drop-down list shows the base classes. The list
	  also keeps a history of class types and filters you have selected or entered
	  for the current instance of the Class Browser.
	
	- Hierarchical option, which displays the classes in a hierarchy so that class
	  trees can be expanded or collapsed.
	
	- Alphabetical option, which displays the classes alphabetically.
	
	- Protected check box button, which displays protected members in the member
	  tabs. Protected members are indicated by an asterisk (*).
	
	- Empty check box button, which displays empty methods in the member tabs.
	  Empty methods are indicated by a tilde (~).
	
	- Class icon, which displays an icon representing the selected class. The icon
	  can be dragged to a form to add an object of that class to the form. A
	  user-defined bitmap can be assigned to the class icon.
	
	- Class list, which lists the classes and subclasses contained in a class
	  library (.VCX) or form (.SCX) in an outline-like view. Folder icons appear
	  next to each class and subclass. A chevron (<<) next to a class
	  indicates that the parent class is in a file that is not displayed in the
	  current Class list. To see the parent class, double-click the folder. To
	  modify any class in the Class Designer, double-click the class name.
	
	- Member tabs, which display user-defined members for the selected class by
	  member type. Members inherited from base and parent classes do not appear in
	  the tabs. The first column indicates the member type with a lowercase letter.
	  For example, "o" indicates an object member. Choose a tab to look for a
	  specific member type.
	
	- All, which displays user-defined object members, properties, methods, and
	  instances for the selected class.
	
	- Object members, which displays object members for the selected container
	  class. Protected members are indicated by an asterisk (*) and are only
	  included if the Protected button is clicked.
	
	- Methods, which displays method members for the selected class.
	
	- Properties, which displays property members that define attributes for the
	  selected class.
	
	- Instances, which displays current objects based on the selected class.
	
	- Class Description box, which displays a description for the selected class.
	  This box is located at the bottom-left of the Class Browser window. You can
	  edit the description in this box.
	
	- Member Description box, which displays information about the selected member
	  of a class. This box is located at the bottom-right of the Class Browser
	  window. For object members, the box is a read-only display of class library,
	  class, and base class. For property or method members, the box displays a
	  description you can edit. For instances, the box displays a read-only
	  description that includes the variable scope (public or hidden), member
	  names, and property values.
	
	Using the Image Editor
	----------------------
	
	To view and edit bitmaps, cursors, and icons, use the Image Editor
	(IMAGEDIT.EXE). To use the Image Editor, choose the Image Editor icon in your
	Visual FoxPro group, or Run IMAGEDIT.EXE.
	
	The Image Editor is available only in the Professional Edition of Visual FoxPro
	if you choose either the Complete installation or choose Utilities from the
	Professional Tools section of the Custom installation. For more information on
	viewing and editing images, please see the Image Editor help file
	(IMAGEDIT.HLP).
	
	Using the OLE Controls Sample
	-----------------------------
	
	OLE controls, such as the Outline and MAPI controls in your Window SYSTEM
	directory, are prepackaged objects.
	
	You cannot create OLE controls with Visual FoxPro. However, you can get them from
	independent software vendors or create them using the Microsoft OLE Custom
	Control Developer's Kit (CDK) provided with Microsoft Visual C++ version 2.0.
	
	OLE controls are versatile because you can subclass them to create other
	controls, and you can control them by using their associated events, methods,
	and properties.
	
	The following OLE control samples are provided with Visual FoxPro:
	
	- Outline control sample, located in the Visual FoxPro SAMPLES\OLE directory.
	  The OUTLINE1.SCX form demonstrates how to use the Outline custom control. It
	  contains sample code that allows the user to select a database and populate
	  the outline with the tables and views contained in the database. You can view
	  the fields and indexes in each table by expanding the outline.
	
	- MAPI controls sample form, located in the Visual FoxPro SAMPLES\OLE
	  directory. The SENDMAIL.SCX form demonstrates how to use the MAPI Message and
	  MAPI Session controls to start a mail session, gather data from the current
	  record, and create and send a mail message that contains that data.
	
	- MAPI controls sample class, located in the Visual FoxPro SAMPLES\OLE
	  directory. The MAPIBTN.VCX visual class library contains a sample container
	  class. This class, mailbtn, contains a command button, a MAPI Message
	  control, and a MAPI Session control. This class has the same functionality
	  demonstrated in the MAPI controls sample form and can be added to any form.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : :3.0,3.0b
	
	=============================================================================
	

{% endraw %}
