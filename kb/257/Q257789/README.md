---
layout: page
title: "Q257789: FIX: Data Source Is Not Updated When PropertyChanged Is Called"
permalink: /kb/257/Q257789/
---

## Q257789: FIX: Data Source Is Not Updated When PropertyChanged Is Called

	Article: Q257789
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Visual Basic 6.0 Standard EXE project contains several data-bound UserControls
	of the same type on a form. One property of the UserControl is bound to an OLE
	DB Simple data source at run-time after the form is loaded. The bindings are
	added by looping through the Form.Controls collection. The property attribute is
	set to "immediate update" at UserControl design time.
	
	In the Visual Basic integrated development environment (IDE), changes to the
	bound properties are correctly reflected back to the underlying data source as
	soon as the PropertyChanged method is called.
	
	However, when you run the compiled EXE, the underlying data source of the control
	is only updated when the control focus is moved to any other control on the
	form.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
