---
layout: page
title: "Q181033: BUG: Access Keys for UserControl Do Not Work in MFC Dialog"
permalink: /kb/181/Q181033/
---

## Q181033: BUG: Access Keys for UserControl Do Not Work in MFC Dialog

{% raw %}

	Article: Q181033
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp kbVBp500bug kbVBp600bug kbVC kbVC500bug kbVC600bug kbGrpDSVB kbDSupp
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Access Keys (accelerators) for a UserControl do not work if the control is
	contained in an MFC Dialog.
	
	CAUSE
	=====
	
	This problem is due to mnemonic differences between MFC 4.2 and Visual Basic
	5.0. These mnemonic differences are discussed in the following article in the
	Microsoft Knowledge Base:
	
	  Q145698 PRB: Mnemonic Differences Between MFC 4.0 and Visual Basic 4.0
	
	Although this article describes a scenario where the roles of Visual Basic and
	MFC are reversed, the same problem is encountered when a Visual Basic- created
	control is contained in an MFC Dialog.
	
	RESOLUTION
	==========
	
	There is currently no known workaround for this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new ActiveX Control project in Visual Basic.
	
	2. Set the AccessKeys property to "NM."
	
	3. Add a TextBox to the control.
	
	4. Compile the UserControl to an .ocx.
	
	5. Create a MFC Dialog application using the VC++ MFCAppWizard.
	
	6. Add the Visual Basic .ocx to the MFC dialog.
	
	7. Run the MFC application.
	
	8. Attempt to use the ALT+"N" or ALT+"M" key combinations. Note that the
	  behavior is a system beep rather than a change in focus.
	
	Additional query words: user control activex ocx
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp kbVBp500bug kbVBp600bug kbVC kbVC500bug kbVC600bug kbGrpDSVB kbDSupport kbControl 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
