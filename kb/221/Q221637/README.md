---
layout: page
title: "Q221637: FIX: Form Wizard Error with Maximum Design Area Set to (None)"
permalink: kb/221/Q221637/
---

## Q221637: FIX: Form Wizard Error with Maximum Design Area Set to (None)

	Article: Q221637
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDS
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Form Wizard after setting the Maximum Design Area of a form to None
	on the Forms tab of the Options dialog box causes the following error to
	appear:
	
	  Error #1881 in setfooter(0): Error with OSTYLEREF Height:
	  Expression evaluated to an illegal value.
	
	After clicking OK in the dialog box, the Form Wizard closes.
	
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
	
	1. Choose Options on the Tools menu, then click on the Forms tab.
	
	2. Set the Maximum Design Area option to (None).
	
	3. Click the Set As Default button.
	
	4. Run through the Form Wizard using only the default options.
	
	5. After you click Finish and try to save the form, the error appears.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
