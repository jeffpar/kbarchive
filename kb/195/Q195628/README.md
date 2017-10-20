---
layout: page
title: "Q195628: FIX: VFP Will Not Shutdown With Multiple Component Galleries"
permalink: /kb/195/Q195628/
---

## Q195628: FIX: VFP Will Not Shutdown With Multiple Component Galleries

{% raw %}

	Article: Q195628
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp kbvfp600 kbvfp600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbMiscTool
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple Component Galleries are open, clicking the Close button (the "X" in
	the upper-right-hand corner) of the Visual FoxPro main window, closes one
	Component Gallery, but does not close Visual FoxPro.
	
	RESOLUTION
	==========
	
	Enter the Dynamic folder directly into the Node tab of the Properties dialog box
	without using the Open dialog.
	
	-or-
	
	Install the October 1998 Visual FoxPro 6.0 Gallery and FoxPro Foundation Classes
	(FFC) update. You can download the update from the following Web address:
	
	  http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in the October 1998 Visual FoxPro 6.0 Gallery and FFC
	update.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Tools menu, select Component Gallery.
	
	2. Repeat step 1 to open a second instance of Component Gallery.
	
	3. Click the Close button of the main Visual FoxPro window.
	
	  RESULTS: Observe that only one Component Gallery closes and Visual FoxPro
	  remains open.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp kbvfp600 kbvfp600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbMiscTools1098fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
