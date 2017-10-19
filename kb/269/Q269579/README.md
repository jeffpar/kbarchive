---
layout: page
title: "Q269579: PRB: Tabbed Dialog Control Has Different Behavior on Non-VB Form"
permalink: /kb/269/Q269579/
---

## Q269579: PRB: Tabbed Dialog Control Has Different Behavior on Non-VB Form

	Article: Q269579
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrl kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When placing the Microsoft Tabbed Dialog Control on a non-Visual Basic form, the
	design-time behavior is different than it is when the control is placed on a
	Visual Basic Form. Specifically, when a tab is clicked, any child controls on
	other tabs are still visible.
	
	CAUSE
	=====
	
	This behavior occurs because the Microsoft Tabbed Dialog Control uses a private
	Visual Basic specific interface, IVBGetControl, to iterate through all the child
	controls on the form. The IVBGetControl interface is not documented and it is
	not available in containers other than Visual Basic.
	
	RESOLUTION
	==========
	
	Currently, there is no solution to using the same design time features of the
	Microsoft Tabbed Dialog Control outside of a Visual Basic form.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrl kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
