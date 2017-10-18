---
layout: page
title: "Q221670: FIX:Multiselect Fails in Class Designer for Objects on PageFrame"
permalink: kb/221/Q221670/
---

## Q221670: FIX:Multiselect Fails in Class Designer for Objects on PageFrame

	Article: Q221670
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbDesigner kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS60
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Class Designer, selecting multiple objects on a page of a PageFrame using the
	SHIFT key and a mouse click does not work.
	
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
	
	1. Create a PageFrame class using the following code:
	
	  CREATE CLASS pgfjunk as Pageframe of test
	
	2. Edit the PageFrame and drop several objects (such as textboxes) on the page.
	
	3. Attempt to multiselect the objects by holding down the SHIFT key and then
	  clicking on each of the objects on the page.
	
	  Note that you are unable to multiselect with the SHIFT key and mouse click.
	  However, clicking and holding the mouse button on the page and then drawing
	  an outline across all objects selects all of them.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbDesigner kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
