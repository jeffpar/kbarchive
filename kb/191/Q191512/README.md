---
layout: page
title: "Q191512: PRB: DataFormat Property Not Reset to Blank Value"
permalink: /kb/191/Q191512/
---

## Q191512: PRB: DataFormat Property Not Reset to Blank Value

{% raw %}

	Article: Q191512
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the properties window, the DataFormat property of a text box control is set
	to nothing ("") by default. Once the user sets it to some other value, such as
	DATE, it cannot be reset back to nothing ("") by deleting the DATE value
	therein.
	
	RESOLUTION
	==========
	
	To reset this property the value needs to be set to GENERAL, which is the same
	as the default setting [ASCII 150] nothing ("").
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic 6.0 and create a Standard EXE project.
	
	2. Place a text box control on the new form.
	
	3. In the Properties dialog box, note that the DataFormat property is currently
	  blank. Set the DataFormat property to DATE.
	
	4. Go back to the Properties dialog box and try to delete DATE. Note that it
	  cannot be deleted.
	
	NOTE: To go back to the original default state, reset the DataFormat to GENERAL.
	This time GENERAL displays in the Properties dialog box. It is not possible at
	this point to clear the contents of this property.
	
	Additional query words: kbVBp600 KbUIDesign kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
