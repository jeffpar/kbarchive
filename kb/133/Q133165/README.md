---
layout: page
title: "Q133165: DOCERR: Developer's Guide Gives Incorrect DataSession Default"
permalink: /kb/133/Q133165/
---

## Q133165: DOCERR: Developer's Guide Gives Incorrect DataSession Default

	Article: Q133165
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	The Visual FoxPro for Windows "Developer's Guide," version 3.0, page 429
	incorrectly states:
	
	  "By default, forms open with the DataSession property set to 2 ..."
	
	The DataSession Property setting of 2 is actually "Private Data Session."
	The default setting for a DataSession within forms is 1, "Default Data
	Session" as stated correctly in the Visual FoxPro Help file under the
	"DataSession Property" topic.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
