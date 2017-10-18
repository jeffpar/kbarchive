---
layout: page
title: "Q235253: MOD2000: Configure Files &amp; Projects for VBE/VSS Integration"
permalink: kb/235/Q235253/
---

## Q235253: MOD2000: Configure Files &amp; Projects for VBE/VSS Integration

	Article: Q235253
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdta kbOffice2000 modSSafe
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the recommended procedures for organizing files and
	Visual SourceSafe (VSS) projects for use with the Office 2000 VBA Source Code
	Control Add-in in a multiuser environment. This article assumes that you are
	already familiar with the VBA SourceCode Control Add-in menu, and that you know
	how to perform basic SourceSafe operations in the VSS Explorer.
	
	Note that this article applies to Visual Basic Editor (VBE) Source Code Control
	integration with Excel, Word, and PowerPoint. Access uses a different
	integration model, so some of the procedures are different and outside the scope
	of this article.
	
	MORE INFORMATION
	================
	
	The following conventions are used in this article:
	
	- "Documents" are .xls, .doc, .ppt, or .vba files.
	
	- VBA "objects" are modules, class modules, or forms that make up a VBA
	  project.
	
	- All VSS operations on the documents are performed in the VSS Explorer.
	
	- VSS operations on the objects are performed in the Visual Basic Editor (VBE)
	  by using the VBA Source Code Control option on the Add-ins menu.
	
	Step 1: Organizing the Documents
	--------------------------------
	
	One user creates the initial folder structure and files for a Source Code Control
	project, which can be modified by any user later on. It is important to keep the
	files that make up an Office application in a logical, self-contained folder
	structure.
	
	In the example for this article, the application is named Sales and has three
	levels: general information, history, and forecasts. The files that relate to
	general information are in a folder called Sales, and there are subfolders for
	history and forecasts. There is another subfolder for VBA projects that are
	independent of any specific document. With this example, the folder and file
	organization on each user's hard disk would look as follows:
	
	  \Sales\Sales.doc
	  \Sales\Sales.ppt
	  \Sales\Sales.xls
	
	  \Sales\History\History.doc
	  \Sales\History\History.ppt
	  \Sales\History\History.xls
	
	  \Sales\Forecasts\Forecasts.doc
	  \Sales\Forecasts\Forecasts.ppt
	  \Sales\Forecasts\Forecasts.xls
	
	  \Sales\VBA Projects\Utilities.vba
	  \Sales\VBA Projects\Calculations.vba
	
	Documents can be organized in many different ways, but they should always be
	within the same folder hierarchy. In a multiuser environment, each user has
	local copies of all the files that make up the application. The path to the
	Sales folder can differ from one user to another, but from that folder downward,
	the structure must be identical for each user.
	
	Although some file types, notably Access, are outside the scope of this article,
	all other files that make up the Office application should be organized
	following the same guidelines.
	
	IMPORTANT: Documents that are under VSS control for the purpose of managing the
	VBA source code must be sample files used only for testing while developing the
	application. After the application is ready, the VBA objects can be exported for
	use in the actual documents.
	
	
	Step 2: Adding the Documents to VSS
	-----------------------------------
	
	The user who creates the initial VSS folders and files adds the documents to VSS.
	The easiest way to do this is to use drag the documents from Windows Explorer
	into the VSS Explorer.
	
	In this example, you could create the parent project in VSS (for example $/office
	apps), and drag the Sales folder from Windows Explorer to the $/office apps
	project in VSS. Click to select the Recursive check box in the Add Folder dialog
	box, and then click Yes to set <path>\Sales as your personal working
	folder for $/office apps/Sales.
	
	Regardless of the method that you use to add documents, it is important to set
	the working folder for $/office apps/Sales to <path>\Sales. By default,
	the working folders for the VSS subprojects under Sales will be the
	corresponding subfolders on each user's hard disk.
	
	Step 3: Adding the VBA Projects to VSS
	--------------------------------------
	
	In each document that contains a VBA project that you want to add to Source Code
	Control, run the Visual Basic Editor, and add each VBA project to VSS. When you
	add a VBA project to VSS through the Source Code Control Add-in, you are
	required to create a new VSS project using the "Add to SourceSafe Project"
	dialog box. Do not use the VSS Explorer to create the subprojects that will
	contain the VBA objects.
	
	Although you can add a VBA project to any location in the VSS project tree, it
	make sense to follow a hierarchy similar to the one used in organizing the
	files.
	
	Using the previous example, the VSS project structure would look as follows:
	
	  $/office apps
	     /Sales
	        sales.doc
	        sales.ppt
	        sales.xls
	        
	        /sales_doc (subproject for VBA objects in sales.doc)
	        /sales_ppt (subproject for VBA objects in sales.ppt)
	        /sales_xls (subproject for VBA objects in sales.xls)
	       
	        /History (subproject of Sales)
	           history.doc
	           history.ppt
	           history.xls
	
	           /history_doc (subproject for VBA objects in history.doc)                                              
	           /history_ppt (subproject for VBA objects in history.ppt)
	           /history_xls (subproject for VBA objects in history.xls)
	
	You can use a different project organization, but be sure to maintain a clear and
	consistent mapping from where the document itself is stored in VSS to the
	subproject that stores the VBA objects contained in that document.
	
	REFERENCES
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbOffice2000 modSSafe 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
