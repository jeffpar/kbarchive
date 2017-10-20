---
layout: page
title: "Q257660: FIX: Setting Printer Object Reference to Nothing Causes IPF"
permalink: /kb/257/Q257660/
---

## Q257660: FIX: Setting Printer Object Reference to Nothing Causes IPF

{% raw %}

	Article: Q257660
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an array of objects that are of type Printer and you set them to the
	objects of the Printers collection, an Invalid Page Fault occurs when you set
	them to nothing.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
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
	
	1. On Microsoft Windows 95 or Microsoft Windows 98, create a new Standard EXE
	  project in Visual Basic. Form1 is created by default.
	
	2. Place a CommandButton on Form1.
	
	3. Paste the following code into the code window of Form1:
	
	  Private Sub command1_Click()
	    Dim i As Long
	    Dim objPrinter(200) As Printer
	    For i = 0 To 200
	        Set objPrinter(i) = Printers(0)
	    Next
	    For i = 0 To 200
	        Set objPrinter(i) = Nothing
	        Debug.Print i
	    Next
	  End Sub
	
	4. Press the F5 key to run the program.
	
	5. Click on Command1 and note that an Invalid Page Fault occurs.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp600bug kbGrpDSVB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
