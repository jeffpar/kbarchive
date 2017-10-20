---
layout: page
title: "Q158224: WD97: Cannot Find Veenlr3.hlp After Typical Installation"
permalink: /kb/158/Q158224/
---

## Q158224: WD97: Cannot Find Veenlr3.hlp After Typical Installation

{% raw %}

	Article: Q158224
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are working in the Visual Basic Editor, one of the following symptoms
	may occur:
	
	- Receiving a response of "I don't know what you mean. Please rephrase your
	  question." when asking the Office Assistant a Visual Basic question.
	
	  -or-
	
	- Pressing F1 for Help displays the following error messages:
	
	  Cannot find the C:\Program Files\Common Files\Microsoft
	  Shared\VBA\VEENLR3.HLP. Do you want to try to find this file yourself?
	
	  If you answer No, the following error message is displayed:
	
	  Cannot find the C:\Program Files\Common Files\Microsoft
	  Shared\VBA\VEENLR3.HLP Help File. Check to see that the file exists on your
	  disk. If it doesn't, you need to install it.
	
	CAUSE
	=====
	
	The Help file for the Visual Basic Editor is not installed.
	
	RESOLUTION
	==========
	
	Install the Microsoft Visual Basic Help file using the following procedure:
	
	1. Quit Word 97 and/or Office 97.
	
	2. On the Start menu, point to Settings, then click Control Panel.
	
	3. On the Control Panel screen, double-click Add/Remove Programs.
	
	4. Click the Install/Uninstall tab, then select Microsoft Word 97 or Microsoft
	  Office 97 from the install applications list. Then click the Add/Remove
	  button.
	
	5. Use one of the following procedures:
	
	  On the Microsoft Word 97 Setup screen:
	  a. Click Add/Remove. Select (do not clear the check box) "Help and Visual
	     Examples", and then click Change Options.
	
	  b. On the "Help and Visual Examples" screen, select "Help for Visual Basic"
	     (place a check mark in the check box).
	
	  c. Click OK once to move back to the Microsoft Word 97 Maintenance screen,
	     and then click Continue to complete the Setup.
	
	  On the Microsoft Office 97 Setup screen:
	  a. Click Add/Remove. Select (do not clear the check box) Microsoft Word, and
	     then click Change Option.
	
	  b. On the Microsoft Word screen, select (do not clear the check box) Help,
	     and then click Change Option.
	
	  c. On the Help screen, select "Help for Visual Basic" (place a check mark in
	     the check box).
	
	  d. Click OK twice to move back to the Microsoft Office 97 - Maintenance
	     screen, and then click Continue to complete the Setup.
	
	
	MORE INFORMATION
	================
	
	Microsoft Office 97 and Microsoft Word 97 for Windows do not install the Visual
	Basic Help file during a Typical Installation. The Help file is also not
	installed during a Custom Installation unless the option is selected or the
	Select All button is clicked on the Microsoft Office 97 Maintenance screen.
	
	Additional query words: wordcon 97 8.0 word8 word97 missing vba vb
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
