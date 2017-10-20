---
layout: page
title: "Q175600: HOWTO: Give Your ActiveX Component a Friendly Name"
permalink: /kb/175/Q175600/
---

## Q175600: HOWTO: Give Your ActiveX Component a Friendly Name

{% raw %}

	Article: Q175600
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to place an ActiveX Document or ActiveX Control created in
	Microsoft Visual Basic into another application (such as Microsoft Office Binder
	or another Visual Basic project), the object name will be displayed as one of
	the following:
	
	     <ActiveX Project Name>.<Document Name>
	
	     <ActiveX Project Name>.<Class Name>
	
	or, as one of the following:
	
	     Project1.UserDocument1
	
	     Project1.UserControl1
	
	This article demonstrates how to give your ActiveX Object a friendly name, such
	as "My ActiveX Control."
	
	MORE INFORMATION
	================
	
	In order to give your ActiveX Document or ActiveX Control a friendly name, you
	must modify the Description property of your class. The example below describes
	how to modify the Description property for ActiveX Documents or ActiveX
	Controls.
	
	Step-by-Step Example
	--------------------
	
	1. Open the ActiveX Project in which the document or control exists.
	
	2. Open the Object Browser by choosing Object Browser from the View menu or by
	  pressing the F2 key.
	
	3. Locate your Project name in the drop-down list of available libraries.
	
	4. Next, locate the ActiveX Document or ActiveX Control under the heading of
	  'Classes.'
	
	5. Right-click the ActiveX Document or ActiveX Control in the list of Classes,
	  and then choose Properties from the short cut menu.
	
	6. Modify the Description property to give your ActiveX Document or Control a
	  friendly name.
	
	To complete the process, compile your ActiveX project. Once the project is
	compiled, if you attempt to place your ActiveX Object into another application,
	you will see the new friendly name associated with your object. For example, in
	Microsoft Access with a form in design mode by choosing ActiveX Control from the
	Insert menu, you should see the friendly name you chose in step 6 above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
