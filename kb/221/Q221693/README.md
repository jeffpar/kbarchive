---
layout: page
title: "Q221693: FIX:C0000005 Fatal Error With This.Caption=This.Text In GotFocus"
permalink: /kb/221/Q221693/
---

## Q221693: FIX:C0000005 Fatal Error With This.Caption=This.Text In GotFocus

{% raw %}

	Article: Q221693
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS6
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding a custom property named Text to a form and then using the code
	This.Caption = This.Text from a form method, you might receive the error:
	
	  Fatal error: Exception code=C0000005
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a new form property and name it "Text."
	
	3. In either the form's Activate or GotFocus event, paste the following code:
	
	  ThisForm.Text = "Test Form"
	  ThisForm.Caption = ThisForm.Text
	
	4. Save and run the form.
	
	5. Close the form and run the form again if necessary to create the error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
