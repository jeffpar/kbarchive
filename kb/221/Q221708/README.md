---
layout: page
title: "Q221708: FIX: Class Browser Open File History List Truncates File Names"
permalink: kb/221/Q221708/
---

## Q221708: FIX: Class Browser Open File History List Truncates File Names

	Article: Q221708
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGr
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File names listed on the Class Browser's History List of previously opened files
	are truncated when the file name or directory path is long. This also happens in
	the Component Gallery.
	
	The History List is displayed by right-mouse clicking the Open toolbar button.
	
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
	
	1. Issue the following command in the Visual FoxPro Command window to create a
	  form with a file name that is 120 characters long:
	
	  CREATE FORM REPLICATE("abcdef",20)
	
	2. Create and open the form, then press the CTRL+W key combination to close and
	  save it.
	
	3. Open the Class Browser from the Tools menu.
	
	4. In the Class Browser, click on the Open toolbar button to open the form
	  created above.
	
	5. Close the Class Browser.
	
	6. Reopen the Class Browser.
	
	7. Right-mouse click the Open toolbar button. Note the History List of
	  previously opened files. The name of the form created above should be cut off
	  on the right side.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
