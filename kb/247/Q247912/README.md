---
layout: page
title: "Q247912: PRB: Property Page of Data-Aware Controls Is Blank w/CRViewer"
permalink: /kb/247/Q247912/
---

## Q247912: PRB: Property Page of Data-Aware Controls Is Blank w/CRViewer

	Article: Q247912
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to set the DataSource or RowSource properties of the DataList or
	DataCombo controls in a project that also contains the Crystal Reports Smart
	Viewer control, you may see one or all of the following symptoms:
	
	- The entire property page of the control goes blank.
	
	- Visual Basic stops responding and requires you to end the task.
	
	- You may receive the following error:
	
	  vb6.exe Application Error
	  The instruction at "0x0055d620" referenced memory at "0x0000003"
	  The memory could not be read.
	
	NOTE: The exact memory locations may vary from system to system.
	
	Although these symptoms have been verified only with the DataList and DataCombo
	controls, the problem can occur with any data-aware control.
	
	RESOLUTION
	==========
	
	According to Seagate Technical Support, to work around this, remove the Smart
	Viewer Control from the project when you need to edit the DataSource or
	RowSource properties of any data-aware control that causes the symptoms listed
	above. After the properties have been edited, add the Smart Viewer Control back
	into the project.
	
	STATUS
	======
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For more information regarding this issue, please call Seagate Software at:
	
	  1-604-669-8379 Technical Support
	
	  1-800-877-2340 General Information
	
	Additional query words: hang crash exception
	
	======================================================================
	Keywords          : kb3rdparty kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
