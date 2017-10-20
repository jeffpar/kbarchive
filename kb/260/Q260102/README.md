---
layout: page
title: "Q260102: FIX: Can't Add Available Toolbar Buttons After They Are Removed"
permalink: /kb/260/Q260102/
---

## Q260102: FIX: Can't Add Available Toolbar Buttons After They Are Removed

{% raw %}

	Article: Q260102
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0,6.0 sp1, sp2, sp3
	Operating System(s): 
	Keyword(s): kbVBp600bug kbVS600bug MSGRAPH kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Toolbar Wizard in Visual Basic 6.0 and you remove a
	button that was positioned before a separator in the toolbar buttons list, you
	cannot add it back.
	
	RESOLUTION
	==========
	
	Install the latest service pack for Visual Studio 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the latest service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	From within a standard.exe application in Visual Basic 6.0, you can reproduce the
	behavior by following these steps:
	
	1. Insert a toolbar.
	
	2. Insert several buttons and at least one description.
	
	3. Run the application.
	
	4. Click in the toolbar space to bring up the lists.
	
	5. Remove the last button from the Toolbar buttons list (there should be an
	  inactive separator after the last toolbar button).
	
	6. Try to add the button back from the Controls box available list.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Chris Wojahn, Microsoft Corporation
	
	
	Additional query words: VSSP4, vssetup
	
	======================================================================
	Keywords          : kbVBp600bug kbVS600bug MSGRAPH kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0,6.0 sp1, sp2, sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
