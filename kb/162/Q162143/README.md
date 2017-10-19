---
layout: page
title: "Q162143: PRB: MSDataList/MSDataCombo Controls Do Not Work in VFP"
permalink: /kb/162/Q162143/
---

## Q162143: PRB: MSDataList/MSDataCombo Controls Do Not Work in VFP

	Article: Q162143
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft DBList and Microsoft DBCombo are ActiveX controls that ship with
	Visual FoxPro 5.0 and higher. These controls are very similar to the Visual
	FoxPro Combo Box and List Box. The Help for the DBList and DBCombo states the
	following about the RowSource Property:
	
	  RowSource: Name of Data control used as a source of items for the list
	  portion of the control.
	
	When you look in the Property Window for the RowSource Property it is not there.
	You cannot use the control because this property is missing.
	
	CAUSE
	=====
	
	The DBCombo and DBList are complex data-bound controls that are unsupported in
	Visual FoxPro.
	
	The RowSource looks for a Visual Basic DataControl Object. Because Visual FoxPro
	is a database development system, it does not need a DataControl to access data
	and there is no equivalent object in Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new Form.
	
	2. Place an OLE container control on the Form.
	
	3. In the Insert Object dialog box, click Insert/Create Control.
	
	4. From the Control Type List, select Microsoft DBList Control.
	
	5. With the Olecontrol selected on the form, click the Properties Window.
	
	6. Look for the RowSource Property for Olecontrol1. Note that you cannot see a
	  RowSource Property for Olecontrol1.
	
	Additional query words: ActiveX
	
	======================================================================
	Keywords          : kbinterop kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
