---
layout: page
title: "Q195625: FIX: Set Component Gallery Dynamic Folder to HTMLHelp Fails"
permalink: /kb/195/Q195625/
---

## Q195625: FIX: Set Component Gallery Dynamic Folder to HTMLHelp Fails

{% raw %}

	Article: Q195625
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbvfp600 kbvfp600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbMiscTools1098f
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot set the Dynamic Folder property of a Component Gallery folder to an
	.html Help topic.
	
	RESOLUTION
	==========
	
	The October 1998 Visual FoxPro 6.0 Gallery and FoxPro Foundation Classes (FFC)
	update includes a new version of the GenHTML.prg file, which addresses this
	problem. You can download the update from the following Web address:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in the October 1998 Visual FoxPro 6.0 Gallery and FFC
	updates.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Select a topic in the Microsoft Developer Network Visual Studio 6.0.
	
	2. From the Microsoft Developer Network Visual Studio 6.0 menu, select
	  "Go/URL..".
	
	3. Double-click the address in the Current URL text box. Press CTRL+C to copy
	  the text to the clipboard.
	
	4. From the Tools menu, select Component Gallery.
	
	5. Create a new folder.
	
	6. Make sure that the "Advanced editing enabled" check box is selected in the
	  Component Gallery Options dialog box.
	
	7. Right-click the folder and select Properties.
	
	8. Click the Node tab. Set the Dynamic Folder by pasting the address from the
	  clipboard into the Dynamic Folder text box. Click OK.
	
	  Observe that multiple errors display.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbvfp600 kbvfp600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbMiscTools1098fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
