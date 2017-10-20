---
layout: page
title: "Q180756: PRB: Alignment Property of TextBox Always Aligns to the Left"
permalink: /kb/180/Q180756/
---

## Q180756: PRB: Alignment Property of TextBox Always Aligns to the Left

{% raw %}

	Article: Q180756
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the Alignment property of a TextBox, it has no affect on the
	justification of the text placed inside a TextBox. The text always appears
	justified on the left. This happens both on the Windows CE device and within the
	emulator.
	
	RESOLUTION
	==========
	
	Set the MultiLine property of the Textbox to True.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The ES_RIGHT and ES_CENTER edit styles in Windows CE are only supported when the
	MultiLine property is set to True.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. On Form1, draw three TextBoxes (Text1, Text2 and Text3).
	
	3. Set the Alignment properties of the Textboxes as follows:
	
	   - Text1 = 0 - Left Justify
	   - Text2 = 1 - Right Justify
	   - Text3 = 2 - Center
	
	4. Press F5 to run the application and note that the default text in each
	  textbox appears on the left.
	
	Additional query words: wince vbce vbce6 wce evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
