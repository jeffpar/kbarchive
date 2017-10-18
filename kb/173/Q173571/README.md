---
layout: page
title: "Q173571: BUG: Invalid Code Generated Implementing Outlook.Mailitem"
permalink: kb/173/Q173571/
---

## Q173571: BUG: Invalid Code Generated Implementing Outlook.Mailitem

	Article: Q173571
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following code (created by Visual Basic using the OUTLOOK.MAILITEM object)
	is displayed in the color red by the Visual Basic IDE, indicating an error in
	the code:
	
	     Private Sub MailItem_SaveAs(ByVal Path As String,_
	           Optional ByVal Type As Variant)
	
	CAUSE
	=====
	
	The code generated uses "Type" in the second argument. "Type" is a reserved word
	in Visual Basic.
	
	RESOLUTION
	==========
	
	Rename the second argument from "Type" to something that is not a reserved word
	in this declaration:
	
	     Private Sub MailItem_SaveAs(ByVal Path As String,_
	          Optional ByVal Type As Variant)
	
	Replace "Type" with "Arg2" as follows:
	
	     Private Sub MailItem_SaveAs(ByVal Path As String,_
	          Optional ByVal Arg2 As Variant)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic or, if Visual Basic is already running, choose New
	  Project.
	
	2. Select Project from the menu, and then select the References item. Choose the
	  Microsoft Outlook 8.0 object module.
	
	3. Add a class module named Class1, and then add the following code:
	
	        IMPLEMENTS OUTLOOK.MAILITEM
	
	4. Select "MailItem" from the Object drop-down box, and then select "SaveAs"
	  from Procedures/Events drop-down box. The following code gets inserted in the
	  code window:
	
	        Private Sub MailItem_SaveAs(ByVal Path As String,_
	          Optional ByVal Type As Variant)
	
	        End Sub
	
	5. Note that the second argument is "Type," which is a reserved word in Visual
	  Basic.
	
	6. Save the project as Project1.
	
	7. Close the project.
	
	8. Open Project1 and view your code in Class and note that the code looks like
	  the following in the editor:
	
	        'This line is in red >>>   Private Sub MailItem_SaveAs(ByVal Path As
	        String, Optional ByVal Type As Variant)
	
	        'This line is in black>>>   End Sub
	
	The line in red means there is an error in this line of code, specifically on the
	name "Type."
	
	Additional query words: kbVBp500bug kbVBp600bug kbVBp kbdse kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
