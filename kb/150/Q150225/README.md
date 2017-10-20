---
layout: page
title: "Q150225: BUG: Carriage Return Embedded in Text When MultiLine Toggled"
permalink: /kb/150/Q150225/
---

## Q150225: BUG: Carriage Return Embedded in Text When MultiLine Toggled

{% raw %}

	Article: Q150225
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Multiline property of a Text box is toggled while in Design mode, it
	causes a Carriage Return to be embedded in the Text property of the Text control
	if the list option of the Text property is invoked while Multiline is set to
	True.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Delete the Carriage Return from the Text property.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default. Place a
	  Text box on Form1.
	
	2. In the Properties window for the Text box in Visual Basic, change the
	  Multiline property to True.
	
	3. In the Properties window, adjacent to the Text property, select the drop-down
	  arrow, and type a value underneath the default Text value.
	
	4. Toggle the Multiline property back to False.
	
	NOTE: An extraneous character appears appended to the Text property. It is safe
	to remove that character by highlighting it and pressing the Delete key.
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
