---
layout: page
title: "Q257741: FIX: UserControl Validate Event Hangs the VB IDE"
permalink: /kb/257/Q257741/
---

## Q257741: FIX: UserControl Validate Event Hangs the VB IDE

{% raw %}

	Article: Q257741
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActivexEvents kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbIDEProject kbGrpDSVB kbDSupport
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a UserControl has a control with code in the Validate event, and it is sited
	on a form in a Standard EXE project, the project causes the system to lock up
	when it is run in the Visual Basic integrated development environment (IDE).
	This problem only occurs on Windows 95, Windows 98, or Windows Me computers.
	
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
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, add a new UserControl to the project.
	
	3. Add a TextBox control and a Label control to the UserControl.
	
	4. Paste the following code into the Code window of UserControl1:
	
	  Option Explicit
	
	  Private Sub Text1_Validate(Cancel As Boolean)
	      MsgBox "Text1_Validate"
	  End Sub
	
	5. Close the designer of the UserControl, and then place an instance of it on
	  Form1.
	
	6. Save and run the project.
	
	7. Click on Label1. Your Visual Basic IDE should lock up.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbActivexEvents kbVBp kbVBp600bug kbOSWin95 kbOSWin98 kbIDEProject kbGrpDSVB kbDSupport kbVS600sp4fix kbOSWinME kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
