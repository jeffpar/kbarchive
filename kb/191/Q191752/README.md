---
layout: page
title: "Q191752: PRB: DataRepeater Control's RepeaterBindings List Is Empty"
permalink: kb/191/Q191752/
---

## Q191752: PRB: DataRepeater Control's RepeaterBindings List Is Empty

	Article: Q191752
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PropertyName drop-down combo box on the RepeaterBindings tab of the
	DataRepeater control's property page is empty.
	
	CAUSE
	=====
	
	This problem can be caused by not marking the desired properties of the data
	bound control shown in the DataRepeater control as data bound.
	
	RESOLUTION
	==========
	
	Follow step 6 of "Creating a Data Bound User Control for use in the Data
	Repeater Control" in the Help topic "Using the DataRepeater Control" which
	says:
	
	  "Use the Procedure Attributes dialog box to make the properties data- bound.
	  On the Tools menu click Procedure Attributes.
	
	  On the Procedures Attributes dialog box, click Advanced. The Name box contains
	  the property you want to make data-bound, and should contain ProductName.
	  Click Property is data-bound, then click Show in DataBindings collection at
	  design time. Click the Name box and click UnitPrice. Once again, click
	  Property is data-bound, then click Show in DataBindings collection at
	  design-time. Click OK to close the dialog box."
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: RepeatedBindings DataRepeater kbVBp600 kbCtrl kbdse kbDSupport kbVBp kbDataBinding
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
