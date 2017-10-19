---
layout: page
title: "Q221620: FIX: FFCs - _GraphByRecord in _utility.vcx_Should Show Name"
permalink: /kb/221/Q221620/
---

## Q221620: FIX: FFCs - _GraphByRecord in _utility.vcx_Should Show Name

	Article: Q221620
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Chart Type field in the _GraphByRecord Foundation Class builder does not
	provide the chart's name; all it has is a number.
	
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
	
	1. Create a form.
	
	2. Launch Component Gallery.
	
	3. In Component Gallery, go to Visual FoxPro Catalog, expand the Foundation
	  Classes folder, and choose the Automation folder.
	
	4. Drag-and-drop the GraphbyRecord class to the form.
	
	Note that the Builder shows 78 for the Chart Type.
	
	In the Visual Studio 6.0 Service Pack 3 for Visual FoxPro 6.0, the Chart Type
	field is now a combo box with chart's name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMiscTools kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
