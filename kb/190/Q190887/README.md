---
layout: page
title: "Q190887: PRB: PDW Wizard Does Not Create HTM for All ActiveX DLL Projects"
permalink: kb/190/Q190887/
---

## Q190887: PRB: PDW Wizard Does Not Create HTM for All ActiveX DLL Projects

	Article: Q190887
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual Basic 6.0 Package and Deployment Wizard (PDW) does not create an HTM
	file for an ActiveX Document DLL project if the project contains DHTML Page
	Designer or a WebClass.
	
	RESOLUTION
	==========
	
	An HTM is created for ActiveX Document DLLs only when they do not contain DHTML
	Page Designers or WebClasses.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Package and Deployment Wizard will not create an HTM file for an ActiveX
	Document DLL project if the project contains DHTML Page Designer or a WebClass.
	DHTML Page Designers or WebClasses have their own HTM/ASP files.
	
	Additional query words: kbdsi kbDSupport kbVBp kbVBp600 kbInfoDelivery kbWebClasses kbPageDesigner
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
