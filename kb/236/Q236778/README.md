---
layout: page
title: "Q236778: BUG: Focus Events not triggered in ActiveX Doc with Acc Keys"
permalink: /kb/236/Q236778/
---

## Q236778: BUG: Focus Events not triggered in ActiveX Doc with Acc Keys

	Article: Q236778
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveDocs kbGrpDSInet kbDSupportkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an ActiveX Document is hosted inside Internet Explorer, the focus events
	are not triggered when using accelerator keys to navigate the controls.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Start a new ActiveX Document project(either DLL or EXE). Default name is
	  "Project1" and it contains one user control "UserDocument1".
	
	2. Place three labels (Label1, Label2, Label3) and two Text boxes (Text1,
	  Text2).
	
	3. Arrange controls so that Text1 is next to Label1 and Text2 is next to Label2.
	
	4. Set the order of TabIndex as Label1, Text1, Label2, Text2, Label3.
	
	5. Change the label caption of Label1 as Label&1 and Label2 as Label&2.
	  Remove the caption of Label3.
	
	6. Paste the following code in the UserDocument1's code:
	
	     Private Sub Text1_LostFocus()
	        Label3.Caption = Label3.Caption & "Text1_LostFocus "
	     End Sub
	
	     Private Sub Text2_GotFocus()
	        Label3.Caption = Label3.Caption & "Text2_GotFocus "
	     End Sub
	
	7. Run the project and start the component in UserDocument1.
	
	8. When using the accelerator keys ALT+1 and ALT+2, the focus can shift from
	  Text1 to Text2, but the lost_focus event of Text1 and the get_focus event of
	  Text2 are not triggered (while TAB triggers both of those events).
	
	Additional query words: ActiveX Document
	
	======================================================================
	Keywords          : kbActiveDocs kbGrpDSInet kbDSupport kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
