---
layout: page
title: "Q169279: ACC97: Error in Documenter If Object Can't Be Checked Out"
permalink: /kb/169/Q169279/
---

## Q169279: ACC97: Error in Documenter If Object Can't Be Checked Out

	Article: Q169279
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbAccess kbSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you try to run the Documenter on an object that is under Source Code
	Control, you may receive the following message:
	
	  Do you want to check out '<formname>' before opening it in Design view?
	
	If the object is already checked out by another user and you click Yes, you will
	receive the following additional message:
	
	  Unable to check out '<formname>' because it is already checked out...
	
	  Unable to check out '<formname>'.
	
	You then receive the following Documenter error:
	
	  Application-defined or object-defined error.
	
	
	RESOLUTION
	==========
	
	Click No when asked if you want to check out the object, and then run the
	Documenter on the object. The object does not have to be checked out before you
	can run the Documenter.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a database you have under Source Code Control that is shared with other
	  users.
	
	2. On the Tools menu, click Analyze, and then click Documenter.
	
	3. When the Documenter tab control appears, select any object that is already
	  checked out by another user and click the object's check box. Click OK.
	
	  NOTE: If an object is already checked out, an icon appears next to the object
	  in the Database window.
	
	4. When you receive an alert asking if you want to check out the object, click
	  Yes. Note that you receive the error message mentioned in the "Symptoms"
	  section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe500
	Version           : WINDOWS:5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
