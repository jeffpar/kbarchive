---
layout: page
title: "Q257530: FIX: Images Replicated When Customizing a Toolbar"
permalink: /kb/257/Q257530/
---

## Q257530: FIX: Images Replicated When Customizing a Toolbar

{% raw %}

	Article: Q257530
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 29-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are displaying images on a toolbar and, at run time, you bring up the
	Customize dialog box and change the order of the images by moving them up and
	down, the images on the toolbar begin to replicate so that you see the same
	image several times.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in Visual Studio
	6.0 Service Pack 5.
	
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
	
	1. Open a new Standard EXE project in Visual Basic 6.0. Form1 is created by
	  default.
	
	2. On the Project menu, select Components. Check the Microsoft Windows Common
	  Controls 6.0 and click OK.
	
	3. Add the ImageList and ToolBar controls to Form1.
	
	4. Right-click on ImageList1, select Properties, and then select the Images tab.
	  Add four images to the ImageList.
	
	5. Add the following code to Form1:
	
	  Private Sub Form_Load()
	      Set Toolbar1.ImageList = ImageList1
	      Toolbar1.Buttons.Add , , , , 1
	      Toolbar1.Buttons.Add , , , , 2
	      Toolbar1.Buttons.Add , , , , 3
	      Toolbar1.Buttons.Add , , , , 4
	  End Sub
	
	6. Run the Project. Double-click the toolbar to display the Customize dialog
	  box.
	
	7. Move the images Up and Down using the buttons on the dialog box.
	
	8. Note that the images on the toolbar begin to repeat. The images in the
	  Customize dialog box are correct, but the images on the toolbar are not.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
