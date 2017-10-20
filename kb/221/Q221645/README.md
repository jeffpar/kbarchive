---
layout: page
title: "Q221645: FIX:_SCREEN.Forms&#91; &#93; Collection Not Available at Design-Time"
permalink: /kb/221/Q221645/
---

## Q221645: FIX:_SCREEN.Forms&#91; &#93; Collection Not Available at Design-Time

{% raw %}

	Article: Q221645
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3f
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 6.0, the _SCREEN.Forms[ ] Collection is not available at
	design-time. Attempting to access methods of the collection results in error
	messages or incorrect results. In Visual FoxPro 5.0x, you could access elements
	of the collection at design-time.
	
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
	
	1. Type the following in the Command window to create a form:
	
	  CREATE FORM Ztest
	
	2. In Command window, type in the following commands:
	
	  ? _SCREEN.FormCount 
	  ? _SCREEN.Forms[1].name
	
	The first line of code produces 0. The second line of code produces the error
	message:
	
	  FORMS is not an object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
