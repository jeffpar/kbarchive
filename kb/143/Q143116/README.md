---
layout: page
title: "Q143116: BUG: Calendar Control in Visual Basic Causes Application Error"
permalink: /kb/143/Q143116/
---

## Q143116: BUG: Calendar Control in Visual Basic Causes Application Error

{% raw %}

	Article: Q143116
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A 16-bit Visual Basic program containing the calendar control from the Access
	Developer's Toolkit, version 2.0 causes an application error if Microsoft Office
	is running in the background and you run the Visual Basic program in a 32-bit
	operating system. This behavior does not occur under the 16-bit operating
	system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start 16-bit Visual Basic 4.0, or if it is already running, click New Project
	  on the File menu.
	
	2. On the Tools menu, click Custom Controls. Click MSACAL20 to add the calendar
	  control from the Access Developer's Toolkit to Visual Basic. Click OK to
	  close the dialog box.
	
	3. Add the calendar control to the Form1 form.
	
	4. On the Run menu, click Start or press the F5 key to start the program. When
	  you stop the program an application error occurs with the following message
	  and Visual Basic ends:
	
	
	  VB caused a general protection fault in module MSACAL20.OCX at 0003:0000153d.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
