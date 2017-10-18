---
layout: page
title: "Q140195: PRB: The Word &quot;Setup&quot; Is Appended to Application Title"
permalink: kb/140/Q140195/
---

## Q140195: PRB: The Word &quot;Setup&quot; Is Appended to Application Title

	Article: Q140195
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Setup Wizard and create a set of distribution disks for your
	application and then run setup from this set of disks, the word "Setup" follows
	your application title. It is also displayed in the title bar of the application
	setup window.
	
	CAUSE
	=====
	
	The Setup Wizard appends the word "Setup" to the user-supplied title string.
	
	STATUS
	======
	
	This behavior is by design. There is no way to prevent the Setup Wizard from
	appending the word "Setup" to the title string.
	
	MORE INFORMATION
	================
	
	If you add the word "Setup" to the title string that the Setup Wizard requests
	for your application, it appears twice in the title bar of the setup window. One
	occurrence of the word is from the string you provided, and the other one is
	inserted by the Setup Wizard.
	
	For example, during the Setup Wizard process, you enter the string "My
	Application Setup" when the Setup Wizard asks for the title of your application.
	When setup is run from the resulting disk set, the string "My Application Setup
	Setup" is displayed in the title bar of the setup window.
	
	The Setup Wizard does not indicate that the word "Setup" is added to the final
	string presented to end users when they install your application.
	
	Additional query words: VFoxWin Title Bar
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
