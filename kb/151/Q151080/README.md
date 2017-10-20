---
layout: page
title: "Q151080: BUG: Printer Dialog Box Doesn't Show For Common Dialog Control"
permalink: /kb/151/Q151080/
---

## Q151080: BUG: Printer Dialog Box Doesn't Show For Common Dialog Control

{% raw %}

	Article: Q151080
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Common Dialog control is used to invoke an Open dialog box, and if a file
	is selected from that Open dialog box, and then if the Printer dialog box is
	invoked using the same Common Dialog control, the Printer dialog does not
	appear.
	
	RESOLUTION
	==========
	
	To work around this behavior, reset the Flags property of the Common Dialog
	control to zero (0) after showing the Open dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Problem
	--------------------------
	
	1. Start a new project. Form1 is created by default.
	
	2. Place a Common Dialog control and two Command buttons on the form.
	
	3. In the Click event for Command1, place the following code:
	
	        Private Sub Command1_Click()
	          CommonDialog1.filename = "*.mdb"
	          CommonDialog1.ShowOpen
	        End Sub
	
	4. In the Click event for Command2, place the following code:
	
	        Private Sub Command2_Click()
	          CommonDialog1.ShowPrinter
	        End Sub
	
	5. Run the project by pressing the F5 key. Click on the Command1 button to show
	  the Open dialog box and select any MDB file (such as Biblio.mdb in the Visual
	  Basic directory.) Then click on the Command2 button to show the Printer
	  dialog box. Note that the Printer dialog box does not appear.
	
	To implement the workaround, change the code in the Click event of the Command2
	button to:
	
	     Private Sub Command2_Click()
	       CommonDialog1.Flags = 0
	       CommonDialog1.ShowPrinter
	     End Sub
	
	The Printer dialog box appears even after the Open dialog box has been displayed.
	
	Additional query words: kbVBp400bug kbVBp kbdsd kbDSupport kbPrinting
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
