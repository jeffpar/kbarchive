---
layout: page
title: "Q263660: BUG: Click Event May Fire Even Though Command Button Is Hidden"
permalink: kb/263/Q263660/
---

## Q263660: BUG: Click Event May Fire Even Though Command Button Is Hidden

	Article: Q263660
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB kbDSupport kbVBM300bug kbOSWinCEPsPC200 kbOSWinCE300
	Last Modified: 14-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows CE for the PocketPC project, the Click event of a command button
	still fires even though it is invisible. This behavior does not occur in
	Microsoft Visual Basic 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE for the PocketPC project in eMbedded Visual Basic.
	  Form1 is created by default.
	
	2. Add a command button and a list box to Form1.
	
	3. Paste the following code to Form1:
	
	  Private Sub Command1_Click()
	      List1.AddItem "Addition"
	  End Sub
	
	  Private Sub Form_Load()
	      Command1.Visible = False
	      Command1.Default = True
	  End Sub
	
	  Private Sub Form_OKClick()
	      App.End
	  End Sub
	
	4. Press the F5 key to run the project, and then press ENTER. Notice that
	  "Addition" is added to the ListBox control.
	
	Additional query words: evb vbce
	
	======================================================================
	Keywords          : kbGrpDSVB kbDSupport kbVBM300bug kbOSWinCEPsPC200 kbOSWinCE300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
