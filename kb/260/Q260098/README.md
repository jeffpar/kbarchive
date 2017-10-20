---
layout: page
title: "Q260098: FIX: Cannot Set the ComboBox Text in the Click Event in VB 6.0"
permalink: /kb/260/Q260098/
---

## Q260098: FIX: Cannot Set the ComboBox Text in the Click Event in VB 6.0

{% raw %}

	Article: Q260098
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0,6.0 sp1, sp2, sp3
	Operating System(s): 
	Keyword(s): kbVBp600bug kbVBp600fix kbVS600bug kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a change in the item of a ComboBox control in the Combo1_Click
	event in Visual Basic 6.0, the result is blank.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the latest service pack for Visual Studio 6.0.
	
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
	
	To reproduce this behavior, perform the following:
	
	1. Open a Standard.exe file, and then select Form1 (the default form).
	
	2. Drag-and-drop the ComboBox control on Form1.
	
	3. Double-click the ComboBox control.
	
	4. Add the following code to the form:
	
	  
	
	  Combo1.AddItem "111 Mary"
	  Combo1.AddItem "222 Joe"
	  Combo1.AddItem "333 Jack"
	
	5. Add the following code to the Combo1_Click event:
	
	  
	
	  Combo1.Text = MID(Combo1.Text, 4)
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Chris Wojahn, Microsoft Corporation
	
	
	Additional query words: sp4 Add Item; Combo Box; VSSP4, BetaPublic
	
	======================================================================
	Keywords          : kbVBp600bug kbVBp600fix kbVS600bug kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0,6.0 sp1, sp2, sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
