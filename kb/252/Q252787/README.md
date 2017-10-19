---
layout: page
title: "Q252787: DOC: DOCERR: Parameters Passed to Form Set's Load not Setup1"
permalink: /kb/252/Q252787/
---

## Q252787: DOC: DOCERR: Parameters Passed to Form Set's Load not Setup1

	Article: Q252787
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbDocs kbvfp600 kbGrpDSFox kbDSupport kbDOCError
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Visual FoxPro Command window, enter the command:
	
	  HELP DO FORM
	
	or go to page 529 in Microsoft Visual FoxPro 6.0 Language Reference.
	
	Locate the section labeled "WITH cParameterList."
	
	The documentation currently states:
	
	  "If a form set is run, the parameters are passed to the form set's Init
	  method if the form set's WindowType property is set to ModeLess (0) or Modal
	  (1). The parameters are passed to the Setup1 method if the form set's
	  WindowType property is set to Read (2) or ReadModal (3)."
	
	The documentation should state:
	
	  If a form set is run, the parameters are passed to the form set's Init method
	  if the form set's WindowType property is set to ModeLess (0) or Modal (1).
	  The parameters are passed to the Load method if the form set's WindowType
	  property is set to Read (2) or ReadModal (3).
	
	In the second sentence, note that the parameters are passed to the LOAD method
	not the Setup1 method.
	
	MORE INFORMATION
	================
	
	The WindowType property settings of Read (2) or ReadModal (3) are included for
	backward compatibility and available only for forms converted from previous
	versions of FoxPro.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, search on: DO FORM
	
	Microsoft Visual FoxPro 6.0 Language Reference, pp 529
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbDocs kbvfp600 kbGrpDSFox kbDSupport kbDOCError 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	
	=============================================================================
	
