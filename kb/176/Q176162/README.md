---
layout: page
title: "Q176162: BUG: Resource Loss with VB4 16-Bit OLE Container in Windows 3.11"
permalink: /kb/176/Q176162/
---

## Q176162: BUG: Resource Loss with VB4 16-Bit OLE Container in Windows 3.11

	Article: Q176162
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kb16bitonly kbVBp400 kbGrpDSVB
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the 16-bit Visual Basic 4.0 OLE Container Control under Windows 3.11,
	a one time loss of System Resources will occur. For example, when inserting an
	Excel 5.0 Worksheet into the OLE Container, the first time that sheet is
	instantiated, Windows will incur a loss of approximately 3 percent of the
	available System Resources. This loss has been reproduced with other inserted
	objects as well, with varying amounts of System Resources being lost. This
	resource loss only occurs the first time that the inserted object is
	instantiated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Add an OLE Container Control to Form1.
	
	2. Insert an Excel 5.0 Worksheet into the OLE Container.
	
	3. Compile this project into an executable file. Exit to DOS and restart
	  Windows.
	
	4. In Program Manager, select "About Program Manager" from the Help Menu, and
	  note the Available Resources.
	
	5. Start the executable created in step 3.
	
	6. Double-click the OLE Container.
	
	7. Press the ESC key to close the Excel Worksheet.
	
	8. Exit the Visual Basic program.
	
	9. Re-check the Available Resources and note that there is a loss of Resources.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
