---
layout: page
title: "Q221733: FIX: C0000005 Fatal Error With French Wizstyle Baseform Class"
permalink: /kb/221/Q221733/
---

## Q221733: FIX: C0000005 Fatal Error With French Wizstyle Baseform Class

{% raw %}

	Article: Q221733
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix k
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When modifying the Baseform class of the French Wizstyle visual class library,
	the following error occurs:
	
	  Fatal error: Exception code=C0000005
	
	This error occurs if you use either the MODIFY CLASS command or the Visual FoxPro
	menus to open the baseform class.
	
	CAUSE
	=====
	
	The description for the wizard-added property WizBtnPos is greater than 252
	bytes. Therefore, potentially any property that had a description this large
	could cause the same error.
	
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
	
	
	1. Set the default to the folder containing the French version of the
	  Wizstyle.vcx file.
	
	2. Modify the BaseForm class using either the MODIFY CLASS command or the menu
	  options.
	
	  Before the Baseform class opens, the error mentioned in the SYMPTOMS section
	  occurs and Visual FoxPro closes.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
