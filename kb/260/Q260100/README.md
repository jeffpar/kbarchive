---
layout: page
title: "Q260100: FIX: Printform Ignores Changes in Printer.orientation"
permalink: kb/260/Q260100/
---

## Q260100: FIX: Printform Ignores Changes in Printer.orientation

	Article: Q260100
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0,6.0 sp1, sp2, sp3
	Operating System(s): 
	Keyword(s): kbVBp600 kbVBp600bug kbVS kbVS600 kbVS600bug kbFAQ MSGRAPH kbVBp600FAQ kbVS600sp4fix kb
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the print function in Visual Basic, if the current printer setting
	has print orientation set to portrait and you use the code
	
	  printer.orientation = vbPRORLandscape
	  me.printform
	
	to change the desired orientation to landscape, the form still prints in portrait
	orientation.
	
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
	
	Create a Visual Basic 6.0 form and insert the code described in the Symptoms
	section of this article.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Chris Wojahn, Microsoft Corporation
	
	
	Additional query words: VSSP4, print form
	
	======================================================================
	Keywords          : kbVBp600 kbVBp600bug kbVS kbVS600 kbVS600bug kbFAQ MSGRAPH kbVBp600FAQ kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0,6.0 sp1, sp2, sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
