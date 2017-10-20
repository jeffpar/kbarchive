---
layout: page
title: "Q192550: BUG: VBCE: Control Manager Does Not Properly Uninstall Control"
permalink: /kb/192/Q192550/
---

## Q192550: BUG: VBCE: Control Manager Does Not Properly Uninstall Control

{% raw %}

	Article: Q192550
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbRegistry kbToolkit kbVBp500 kbVBp600 kbOSWinCE100bug kbOSWinCE200bug kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Control Manager might not properly uninstall a control and remove its
	registry entries.
	
	RESOLUTION
	==========
	
	To work around this problem, use the Registry Editor shipped with both the
	Microsoft Windows CE Toolkit for Visual Basic (VBCE) and eMbedded Visual Basic
	(eVB) to manually remove the registry keys for the control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	For specific steps to remove control registry entries, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q185223 HOWTO: Manually Uninstall Visual Basic CE Applications
	
	Additional query words: wce vbce6 evb
	
	======================================================================
	Keywords          : kbRegistry kbToolkit kbVBp500 kbVBp600 kbOSWinCE100bug kbOSWinCE200bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
