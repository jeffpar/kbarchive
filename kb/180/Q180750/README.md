---
layout: page
title: "Q180750: PRB: ShowInTaskBar Forms Still Appear When Set to False"
permalink: /kb/180/Q180750/
---

## Q180750: PRB: ShowInTaskBar Forms Still Appear When Set to False

{% raw %}

	Article: Q180750
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
	
	Forms with the ShowInTaskBar property set to False are still displayed in the
	Windows CE taskbar.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Windows CE operating system does not support this functionality. It shows a
	taskbar item for all top-level windows.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Windows CE project in Visual Basic or eMbedded Visual Basic.
	  Form1 is created by default.
	
	2. Set the ShowInTaskbar property to False on Form1.
	
	3. Press F5 to run the application, and note that the form still appears in the
	  taskbar.
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
