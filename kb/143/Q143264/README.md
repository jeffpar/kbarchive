---
layout: page
title: "Q143264: PRB: RDC/ODBC Password Display Inconsistencies"
permalink: /kb/143/Q143264/
---

## Q143264: PRB: RDC/ODBC Password Display Inconsistencies

{% raw %}

	Article: Q143264
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.5,4.0,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbRDO kbVBp kbVBp400 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting the password property of the RemoteData Control (RDC) at design
	time in the Property Window, asterisks are not substituted for the password
	characters. When the ODBC dialog box is displayed, the password is converted
	into asterisks.
	
	CAUSE
	=====
	
	The RDC does not control the edit field in the Property Window, and therefore
	cannot force asterisks to be displayed. An OLE custom control does not have
	direct control over the Property window supplied by the Visual Basic design
	environment. The Remote Data control does correctly use asterisks in its own
	Property page.
	
	RESOLUTION
	==========
	
	If you want to protect password information, use the property sheet provided by
	the Remote Data control itself. To access this property sheet either right mouse
	click on the control itself and choose the properties menu item or click on the
	(Custom) property button in the Visual Basic Property window. When you type the
	password, asterisks will be substituted for the characters. When this is
	completed, the password is not displayed in the Visual Basic property window, so
	security is not compromised.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a RemoteData Control on Form1.
	
	3. Type a value into the password property of the RemoteData Control. Note that
	  the password is readable.
	
	4. Now delete the entry you made for the password property and go to the
	  Property window supplied by the control itself. When you type in the
	  password, property asterisks will be displayed instead of the characters you
	  type.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbRDO kbVBp kbVBp400 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMDACSearch kbVB400Search kbVB400 kbMDAC250
	Version           : WINDOWS:2.5,4.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
