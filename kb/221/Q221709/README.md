---
layout: page
title: "Q221709: FIX: Component Gallery Refresh Button for Web View Doesn't Work"
permalink: /kb/221/Q221709/
---

## Q221709: FIX: Component Gallery Refresh Button for Web View Doesn't Work

	Article: Q221709
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
	
	When viewing a dynamic folder in the component gallery, the Refresh button does
	not work.
	
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
	
	1. Open the Visual FoxPro Component Gallery.
	
	2. Click the Component Gallery Options toolbar button.
	
	3. Select the Advanced Editing Enabled checkbox. Click OK to close the Options
	  dialog box.
	
	4. Click Visual FoxPro Catalog in the left pane of the Component Gallery.
	
	5. Right-click within the right pane, select New Item, and click Folder.
	
	6. Right-click the new folder and click Properties.
	
	7. Click the Node tab. In the Dynamic folder textbox, type
	  "http://www.microsoft.com" without the quotes. Click OK.
	
	8. After the web page loads in the Component Gallery, click the Refresh toolbar
	  button.
	
	Note that the page is not refreshed.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Mike A.
	Stewart, Microsoft Corporation.
	
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
