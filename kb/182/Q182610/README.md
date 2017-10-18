---
layout: page
title: "Q182610: WD97: Err Msg: &quot;Runtime Error&quot; When Creating Form Letter"
permalink: kb/182/Q182610/
---

## Q182610: WD97: Err Msg: &quot;Runtime Error&quot; When Creating Form Letter

	Article: Q182610
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup word97 kbdmm
	Last Modified: 16-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Direct Mail Manager for Windows 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a form letter in Direct Mail Manager, you may receive the
	following error message:
	
	  Run-time error - 2147467259 (80004005)
	  Method 'Assistant' of object'_Application' failed
	
	And then one of the following will occur:
	
	- When you click End, the main document for your mail merge form letter is
	  created.
	
	  -or-
	
	- When you click Help, the Visual Basic Reference Help is shown, which
	  describes Automation Error 440. When you close the Visual Basic Reference
	  Help, you return to the error message above.
	
	CAUSE
	=====
	
	This error message occurs when you use any of the following Direct Mail Manager
	templates
	
	- Letter Wizard.wiz
	
	- Flyer Wizard.wiz
	
	- Postcard Wizard.wiz
	
	and the Microsoft Office Assistant is not installed.
	
	RESOLUTION
	==========
	
	To resolve this problem, run the Word 97 Setup program, and install the Office
	Assistant. To do this, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon.
	
	3. In the list of programs, double-click Microsoft Word 97.
	
	4. In Microsoft Word 97 Setup, when you are prompted with "Welcome to the
	  Microsoft Word 97 installation maintenance program," click Add/Remove.
	
	5. Click to select the Office Assistant check box, and then click OK.
	
	6. Click Continue to complete Word Setup.
	
	MORE INFORMATION
	================
	
	If you use Direct Mail Manager to create a form letter in Microsoft Word, and
	you use either the Letter Wizard.wiz, the Flyer Wizard.wiz, or the Postcard
	Wizard.wiz template, when you click Open, the Office Assistant should appear
	with the following help information in Word.
	
	Letter Wizard.wiz Template
	--------------------------
	
	  Welcome to the DirectNET Letter Wizard.
	
	  Create your letter using the DirectNET Wizard. When you're finished, save your
	  document and return to the Direct Mail Manager to complete your mailing.
	
	  The Letter Wizard helps you create a letter using techniques of direct mail
	  and professional copywriters. As you make your choices, you'll see them
	  implemented. When you click on Finish, read the document for more details.
	
	Flyer Wizard.wiz Template
	-------------------------
	
	  Welcome to the DirectNET Flyer Wizard.
	
	  Create your flyer using the DirectNET Wizard. When you're finished, save your
	  document and return to the Direct Mail Manager to complete your mailing.
	
	  The Flyer Wizard helps you create a flyer using direct marketing techniques.
	  As you make your choices, you'll see them happening tight on the screen. When
	  you click on finish, read the document and you'll get more ideas.
	
	Postcard Wizard.wiz Template
	----------------------------
	
	  Welcome to the DirectNET Postcard Wizard.
	
	  Create your postcard using the DirectNET Wizard. When you're finished, save
	  your document and return to the Direct Mail Manager to complete your
	  mailing.
	
	  The Postcard Wizard helps you create a postcard using direct marketing
	  techniques. As you make your choices, you'll see them happening right on the
	  screen. When you click on Finish, read the document and you'll get more
	  ideas.
	
	REFERENCES
	==========
	
	For more information about creating a form letter in Direct Mail Manager, click
	the Help button, click the Index button in Direct Mail Manager Help, type the
	following text
	
	  Form letters
	
	and then double-click the selected text to go to the "Create Form Letters step"
	topic.
	
	Additional query words: dmm letterwiz sbe
	
	======================================================================
	Keywords          : kberrmsg kbsetup word97 kbdmm 
	Technology        : kbWordSearch kbOutlookSearch kbAudDeveloper kbWord97 kbWord97Search kbZNotKeyword2 kbDMM
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
