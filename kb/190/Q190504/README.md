---
layout: page
title: "Q190504: BUG: CommandButton Style Problem with Cyrillic Script"
permalink: /kb/190/Q190504/
---

## Q190504: BUG: CommandButton Style Problem with Cyrillic Script

{% raw %}

	Article: Q190504
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Style property on a CommandButton is at its default value "0 -
	Standard," the button will not display Cyrillic text in its Caption property.
	
	RESOLUTION
	==========
	
	The Style property must be set to "1 - Graphical" for Cyrillic text to display
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Windows Control Panel and select the Keyboard icon. Select Add from
	  the Input Locales tab, and add "Russian." Click "Set as Default," and click
	  OK.
	
	2. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Add a Command button to Form1. Change the CommandButton Font to Arial. Set
	  the Script property to Cyrillic.
	
	4. Type a new value into the button's "Caption" property. Note that the caption
	  on the button does not appear as Cyrillic script. Change the button's Style
	  property to "1 - Graphical" and note that the button's caption displays
	  correctly.
	
	Additional query words: kbVBp500bug kbVBp600bug kbdss kbDSupport kbVBp kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
