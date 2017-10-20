---
layout: page
title: "Q221727: FIX: FOXUSER Restores Window to Incorrect MDI State"
permalink: /kb/221/Q221727/
---

## Q221727: FIX: FOXUSER Restores Window to Incorrect MDI State

{% raw %}

	Article: Q221727
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 02-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You edit a program, file, form, or class. You maximize the editor or designer
	window. When you close and then reopen the editor window, it will once again be
	maximized.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Visual FoxPro is a Multiple Document Interface (MDI) application. MDI
	applications use a single primary window (the MDI parent window) to display one
	or more child document windows (MDI child windows). In the case of Visual
	FoxPro, the parent window is the Visual FoxPro desktop and the MDI child window
	would be the editor or designer window. When an MDI child window is maximized,
	the child window's title bar icon appears to the left of the primary window's
	menu bar, and the child window's control buttons (Minimize, Restore, and Close)
	will appear to the right of the primary window's menu bar. The name of the
	document being edited will appear in the application's main title bar followed
	by a hyphen and the normal application titlebar caption. For example, if you are
	editing a program called myprogram.prg in Visual FoxPro, when the editor MDI
	child window is maximized, the titlebar caption will read "myprogram.prg -
	Microsoft Visual FoxPro."
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: SET RESOURCE must be ON for this behavior to occur.
	
	1. Execute the following code in the Command Window:
	
	  MODIFY FILE TEST
	
	2. An empty editor window will appear. Click on the Maximize button in the
	  editor window. This will be the center button of the three buttons in the
	  upper right corner of the editor window.
	
	3. Close the editor window by pressing the ESCAPE key.
	
	4. Repeat step 1.
	
	The editor window will again appear maximized. This is incorrect. MDI guidelines
	dictate that child MDI windows should appear maximized only when the application
	itself is in an MDI maximized state. The application's MDI maximized state
	occurs when any child MDI window is explicitly maximized. This means that any
	additional MDI child windows opened after one is maximized will also appear
	maximized, and any currently open MDI child windows will be maximized when a
	single MDI child window is subsequently maximized.
	
	The described behavior also occurs within the Class Designer, Form Designer,
	Database Designer, and code editor windows within the Form and Class Designers.
	
	REFERENCES
	==========
	
	The Windows Interface Guidelines for Software Design. Redmond, WA: Microsoft
	Press, 1995.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
