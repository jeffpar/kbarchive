---
layout: page
title: "Q155931: INFO: Project File Structure Changes in Visual FoxPro 5.0"
permalink: kb/155/Q155931/
---

## Q155931: INFO: Project File Structure Changes in Visual FoxPro 5.0

	Article: Q155931
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe kbvfp500 kbvfp600 kbOLDocs
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the project file structure differences between Visual FoxPro
	3.0 and Visual FoxPro 5.0.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro 5.0 project file structure has several new fields. These
	fields and their definitions are listed below:
	
	  Field Name    Field Description
	  ---------------------------------------------------------------------
	
	  ID            Uniquely identifies the object.
	
	  SCCDATA       Information used by Visual FoxPro to enable source
	                code control.
	
	  LOCAL         Specifies whether the object is source code controlled.
	
	                Type of Record  Setting  Meaning
	                -------------------------------------------------------
	
	                'H' (Header)    (Empty)  The project is not source code
	                                         controlled.
	
	                                'T'      The project is source code
	                                         controlled.
	
	                All Others      'F'      The object is source code
	                                         controlled.
	
	                                'T'      The object is not source code
	                                         controlled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbvfp500 kbvfp600 kbOLDocs 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
