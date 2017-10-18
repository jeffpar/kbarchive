---
layout: page
title: "Q271612: FIX: Error &quot;Can't Print Form Image&quot; on Windows 98 with VB6 SP4"
permalink: kb/271/Q271612/
---

## Q271612: FIX: Error &quot;Can't Print Form Image&quot; on Windows 98 with VB6 SP4

	Article: Q271612
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0 SP4
	Operating System(s): 
	Keyword(s): kbVBp600bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 SP4, used with:
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print a form as a graphical image from Visual Basic in the
	Microsoft Visual Studio 6.0 Service Pack 4 (SP4) integrated development
	environment (IDE) on Windows 98, you may receive the following error message:
	
	  Can't print form image to this type of printer.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest Visual Studio 6.0 service pack. You
	can download Visual Studio 6.0 Service Pack 5 from the following Microsoft Web
	site:
	
	  http://msdn.microsoft.com/vstudio/sp/vs6sp5/default.asp
	
	WORKAROUND
	----------
	
	There are two potential workarounds for this problem, both of which print the
	form as it appears at run time.
	
	- Use another application, such as Paint, to print the graphical image of the
	  form:
	
	  1. Run your project and show the form that you want to print.
	
	  2. Press the ALT+PRINT SCREEN key combination.
	
	  3. Start Paint.
	
	  4. Paste the captured image into Paint.
	
	  5. Print the image from Paint.
	
	- Use the PrintForm method at run time:
	
	  1. In the form that you want to print, add the following code:
	
	        Private Sub Form_Click()
	           Me.PrintForm
	        End Sub
	
	  2. Run your project and show the form.
	
	  3. Click the form to print it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Basic 6.0 Service Pack 5. For additional
	information about Visual Studio service packs, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	This problem only occurs with Visual Basic in Visual Studio 6.0 SP4 on Windows
	98.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic in Visual Studio 6.0 SP4 on
	  Windows 98.
	
	2. On the File menu, select Print.
	
	3. In the Print What frame, clear the Code check box, and then select the Form
	  Image check box.
	
	4. Click OK. You receive the above-mentioned error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
