---
layout: page
title: "Q167386: WD97: Can't View Embedded Control Event Code"
permalink: kb/167/Q167386/
---

## Q167386: WD97: Can't View Embedded Control Event Code

	Article: Q167386
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming kbusage kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enter design mode to view the code for a control in a new document
	based on a template that contains the embedded control (for example a Command
	button), the Visual Basic for Applications code appears to be missing.
	
	CAUSE
	=====
	
	In Word 97, documents and templates have their own Visual Basic for Applications
	projects: a document project and a template project.
	
	When you create a new document based on a template that contains a control, you
	create a new "document" project. Because the control has been embedded in the
	template, the code you create for the control event resides within the template
	project. When you attempt to view the code for a control after you create a new
	document based on a template, you will only see the procedures for the document
	project. Since the code for the control is stored in the template project, you
	do not see the Visual Basic for Applications control code as expected.
	
	WORKAROUND
	==========
	
	To view the code for the control, use the following steps:
	
	1. On the View menu, point to Toolbars, and then click Control Toolbox.
	
	2. Click the Design Mode button on the Control Toolbox toolbar.
	
	3. Select the control.
	
	4. Click the View Code button on the Control Toolbox toolbar.
	
	5. Switch to the Visual Basic Editor.
	
	6. On the View menu, click Project Explorer.
	
	7. In the Project Explorer, open the template project.
	
	8. Open the Microsoft Word Objects\ThisDocument module within the template
	  project.
	
	9. Select the ThisDocument module.
	
	10. On the View menu, click Code.
	
	  You can now see the code for the embedded control.
	
	Additional query words: wordcon 8.0 vb vbe vba lost invisible see
	
	======================================================================
	Keywords          : kbprogramming kbusage kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
