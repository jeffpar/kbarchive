---
layout: page
title: "Q149038: FIX: VB Registry Functions Are Limited with Nested Settings"
permalink: kb/149/Q149038/
---

## Q149038: FIX: VB Registry Functions Are Limited with Nested Settings

	Article: Q149038
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbVBp400bug kbVBp600fix kbGrpDSVB
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
	
	Error 5 - Invalid Procedure Call appears when the DeleteSetting is attempted.
	
	CAUSE
	=====
	
	The SaveSetting statement and GetSetting function in Visual Basic 4.0 for
	Windows are used to create and retrieve information from nested levels in the
	Registry. However, the related DeleteSetting statement does not handle these
	nested settings. The GetAllSettings function also has this limitation.
	
	RESOLUTION
	==========
	
	Use more than one DeleteSetting statement to remove sections of the nested keys
	before removing the top level key, rather than attempting to remove the top key
	in isolation.
	
	For example, in the following, do not use:
	
	     DeleteSetting "Test1"
	
	Instead, use the following two lines of code to remove the Test1 key and its
	subkeys:
	
	     DeleteSetting "Test1\Test2"
	     DeleteSetting "Test1"
	
	To enable all possible functionality, you can use the Registry API functions to
	perform any desired operation manually.
	
	For more information on the Registry API functions, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q145679 : How to Use the Registry API to Save and Retrieve Setting
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 4.0, 32-bit version. Form1 is created by default. Place
	  two command buttons on the form. Add the following code to Form1:
	
	     Private Sub Command1_Click()
	         SaveSetting "Test1", "Test2\Test3", "TestKey", "TestValue"
	     End Sub
	
	     Private Sub Command2_Click()
	         DeleteSetting "Test1"
	     End Sub
	
	2. On the Run menu, choose Start, or press F5 to begin the application. Choose
	  Command1 to add the nested keys to the registry. Open the Registry Editor and
	  confirm that the information has been correctly added under the key
	  HKEY_CURRENT_USER\Software\VB and VBA Program Settings.
	
	3. Return to the running application and choose Command2. VB will raise error 5
	  - Invalid Procedure Call. To view the workaround, stop the program and
	  replace the single call to DeleteSetting with the two calls listed in the
	  Workaround section above. Rerun the program and choose the second command
	  button again. Use the Registry Editor to see that the keys have been removed
	  correctly.
	
	Additional query words: kbVBp400bug kbVBp600fix kbVBA kbRegistry kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbVBp400bug kbVBp600fix kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
