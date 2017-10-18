---
layout: page
title: "Q171551: FIX: 32-Bit DBList/DBCombo May Exhibit Problems When Locked"
permalink: kb/171/Q171551/
---

## Q171551: FIX: 32-Bit DBList/DBCombo May Exhibit Problems When Locked

	Article: Q171551
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,97
	Operating System(s): 
	Keyword(s): kbVBp400 kbVBp500 kbVS97sp2fix kbGrpDSVBDB kb32bitOnly kbvbp500sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Locked property of the 32-bit DBList and DBCombo controls is set to
	True, the following problems may occur:
	
	- Attempts to programmatically modify the Text or BoundText properties cause
	  error 387 - Property can't be set on this control.
	
	- The control does not show data from the current record.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the Visual Basic 5.0 Data Bound List Controls
	(DBList32.ocx) in the version that ships with the product (5.00.3714) and in the
	version that ships with Service Pack 2 (5.01.4319).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in version 5.01.4511 of
	the DBList32.ocx file that ships in Visual Studio 97 Service Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 3, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q175450 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 3
	
	MORE INFORMATION
	================
	
	This bug does not occur with any 16-bit versions of Visual Basic.
	
	Although this bug did not occur with the 32-bit version of Visual Basic 4.0, the
	bug can cause problems with 32-bit applications built by Visual Basic 4.0.
	
	If an application built by the 32-bit version of Visual Basic 4.0 uses the Data
	Bound List Controls and an application built by Visual Basic 5.0 is installed on
	that same machine, the older version of the Data Bound List Controls will be
	overwritten and the bug may occur.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbVBp500 kbVS97sp2fix kbGrpDSVBDB kb32bitOnly kbvbp500sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVB500 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
