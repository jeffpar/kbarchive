---
layout: page
title: "Q257516: FIX: Button Removed from Toolbar Cannot Be Added Back"
permalink: /kb/257/Q257516/
---

## Q257516: FIX: Button Removed from Toolbar Cannot Be Added Back

{% raw %}

	Article: Q257516
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAppToolBar kbCmnCtrls kbToolbar kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working with the Toolbar control and you remove one of the buttons
	using the Customize dialog box, if you try to add the button back, it is not
	available and cannot be restored.
	
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
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, select Components, check Microsoft Windows Common
	  Controls 6.0, and then click OK.
	
	3. Add a Toolbar control to Form1.
	
	4. Right-click the Toolbar control, select Properties, and then select the
	  Buttons tab. Add four buttons.
	
	5. Add a caption for each button.
	
	6. Run the project.
	
	7. Display the Customize dialog box by double-clicking the toolbar.
	
	8. Click on the last button in the right-side window.
	
	9. Click on Remove.
	
	10. Close the Customize dialog box.
	
	11. Double-click the toolbar to redisplay the Customize dialog box. Note that
	  the button is no longer available and cannot be added back to the toolbar.
	
	REFERENCES
	==========
	
	For additional information on using the ToolBar control, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q161257 HOWTO: Add a Toolbar to a Visual Basic Project
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbAppToolBar kbCmnCtrls kbToolbar kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
