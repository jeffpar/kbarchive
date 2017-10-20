---
layout: page
title: "Q190920: PRB: Cannot Use MSFlexGrid Wizard Control in Custom App"
permalink: /kb/190/Q190920/
---

## Q190920: PRB: Cannot Use MSFlexGrid Wizard Control in Custom App

{% raw %}

	Article: Q190920
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the MSFlexGrid Wizard ActiveX control (FlexWiz.ocx) in a
	form, you see the following behavior:
	
	- The control is blank.
	
	- The control does not have any property pages. (When you right-click the
	  control in design view, Properties is not listed on the shortcut menu.)
	
	- If you run the form that contains the control, you receive the following
	  error message:
	
	  Run-time error '9':
	  Subscript out of range
	
	CAUSE
	=====
	
	Although the MSFlexGrid Wizard is listed in the Project Components dialog, it is
	a subwizard control used solely by the Application Wizard. You cannot use the
	control in custom applications.
	
	RESOLUTION
	==========
	
	Do not use the MSFlexGrid Wizard control in an application.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp600 kbWizard
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
