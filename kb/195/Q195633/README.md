---
layout: page
title: "Q195633: FIX: Save Dynamic View Causes Subscript Outside Defined Range"
permalink: kb/195/Q195633/
---

## Q195633: FIX: Save Dynamic View Causes Subscript Outside Defined Range

	Article: Q195633
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When saving a Dynamic View in the Component Gallery, you may receive the
	following error message:
	
	  Subscript is outside defined range.
	
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
	
	1. Start the Component Gallery.
	
	2. Select the Options button on the Component Gallery toolbar.
	
	3. Click the Dynamic Views tab.
	
	4. Click the New button.
	
	5. Enter Button in the "Containing" field.
	
	6. Enter Active X in the "Keywords" field.
	
	7. Click the Save button.
	
	  RESULTS: The error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
