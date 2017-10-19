---
layout: page
title: "Q191875: FIX: Multiple Open Class Browsers Cause Error Message"
permalink: /kb/191/Q191875/
---

## Q191875: FIX: Multiple Open Class Browsers Cause Error Message

	Article: Q191875
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Opening multiple instances of the Class Browser or Component Gallery
	simultaneously in Visual FoxPro 6.0 may cause the following error message to
	occur:
	
	  OLE error code 0x80040154 : Class not registered. OLE object is being
	  ignored. Record number 5.
	
	However, you might get the following error message instead:
	
	  There is not enough memory to complete this operation.
	
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
	
	The amount of memory installed helps determine the number of open instances of
	Class Browser or Component Gallery allowed. This number may range from three
	instances up to 20 instances of Class Browser or Component Gallery before the
	preceding errors appear.
	
	Steps to Reproduce Behavior
	---------------------------
	
	From the Tools menu, choose Class Browser multiple times.
	
	Eventually, one of the two errors occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbMiscTools kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
