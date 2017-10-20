---
layout: page
title: "Q180771: PRB: Enabled Property of Label Does Not Change Appearance"
permalink: /kb/180/Q180771/
---

## Q180771: PRB: Enabled Property of Label Does Not Change Appearance

{% raw %}

	Article: Q180771
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Enabled property of a Label control to False does not change the
	appearance of the label (grayed out) as expected.
	
	RESOLUTION
	==========
	
	The workaround is to add code to handle the appearance of the label control
	whenever setting the Enabled property to False, and also to add code to restore
	its appearance when setting the Enabled property to True. For example:
	
	  'To disable a label:
	  Label1.ForeColor = vb3DShadow
	  Label1.Enabled = False
	
	  'To enable a label:
	  Label1.ForeColor = vbWindowText
	  Label1.Enabled = True
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Changing the Enabled property of a control causes two actions: a change in
	availability to the user and a change in visual appearance.
	
	When a control-Enabled property is set to False, the control is not available
	(cannot receive the focus) and the appearance becomes grayed out to indicate
	unavailability.
	
	Changing the Enabled property of a Label control affects the availability of the
	control, but it does not change the appearance to match. The code in the
	RESOLUTION section of this article correctly alters the appearance and
	availability.
	
	Additional query words: wce disable vbce evb vbce6 wince
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
