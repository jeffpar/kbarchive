---
layout: page
title: "Q221644: FIX: Can Drag Folder in Installed Controls in Component Gallery"
permalink: /kb/221/Q221644/
---

## Q221644: FIX: Can Drag Folder in Installed Controls in Component Gallery

{% raw %}

	Article: Q221644
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 16-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Installed Controls folder in the Component Gallery is designed to display
	the ActiveX controls that are currently installed on the system. The contents of
	this folder are determined by querying the system registry for installed ActiveX
	controls. Due to the nature of this folder, the user should not be allowed to
	manually add items to it. However, it is possible to add non-ActiveX control
	items to this folder using drag-and-drop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Component Gallery.
	
	2. Select the ActiveX Catalog, select the Controls folder, and then select the
	  Installed Controls folder.
	
	3. Select the Visual FoxPro Catalog.
	
	4. Drag the Visual FoxPro Catalog and drop it on the Installed Controls folder.
	
	Note that a copy of the Visual FoxPro Catalog is erroneously added to the
	Installed Controls folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
