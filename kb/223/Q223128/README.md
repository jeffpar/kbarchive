---
layout: page
title: "Q223128: FIX: Problems Saving Visual Basic Form to Visual SourceSafe"
permalink: /kb/223/Q223128/
---

## Q223128: FIX: Problems Saving Visual Basic Form to Visual SourceSafe

{% raw %}

	Article: Q223128
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbSSafe kbSSafe500 kbSSafe600 kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Saving a form that was previously saved that meets the following criteria:
	
	- The form contains an ActiveX control.
	
	- The form was checked out from Visual SourceSafe.
	
	causes a "Save as Dialog" to display and you are prompted to overwrite the
	existing file.
	
	CAUSE
	=====
	
	This problem occurs when you check out a form without checking out the .vbp file
	first.
	
	RESOLUTION
	==========
	
	To work around this, checkout the .vbp file first, then checkout the other
	files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project. Form1 is created by default.
	
	2. Add an ActiveX control to Form1 (for example, a progress bar).
	
	3. Add the project and the form to Visual SourceSafe.
	
	4. Check in the .vbp file.
	
	5. Check out the form and make a change to it.
	
	6. Save the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbSSafe kbSSafe500 kbSSafe600 kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
