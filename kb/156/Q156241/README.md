---
layout: page
title: "Q156241: HOWTO: Use the New AutoVerbMenu Property of OLE Controls"
permalink: /kb/156/Q156241/
---

## Q156241: HOWTO: Use the New AutoVerbMenu Property of OLE Controls

	Article: Q156241
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbAutomation kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE Container Control and OLE Bound Control have a new property called
	AutoVerbMenu, which allows you to specify whether a pop-up menu appears when the
	user right-clicks an OLE object in a running form.
	
	MORE INFORMATION
	================
	
	The list of items on the pop-up menu are the verbs supplied by the server. They
	are the same ones you see when Object is clicked on the Edit menu.
	
	Steps to Demonstrate
	--------------------
	
	1. Create a new form.
	
	2. Add an OLE Container Control to the form.
	
	3. Select Microsoft Excel Worksheet in the Insert Object dialog box.
	
	4. Enter some data and deactivate the Excel object.
	
	5. With the Excel object selected, click Worksheet Object on the Edit menu. The
	  Edit and Open menu options appear.
	
	6. Set the AutoVerbMenu and Enabled properties for the object to .T. - True.
	
	7. Run the form and right-click the worksheet.
	
	The same items (Edit, Open) that are available on the Edit menu are available to
	the user of your form when they right-click the worksheet object.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, version 5.0; search one: AutoVerbMenu topic. (A right- click
	on this property in the Property window does not bring up this Help topic.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbAutomation kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
