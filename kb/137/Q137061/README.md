---
layout: page
title: "Q137061: DOCERR: DO FORM LINKED Clause Does Not Require a Variable"
permalink: /kb/137/Q137061/
---

## Q137061: DOCERR: DO FORM LINKED Clause Does Not Require a Variable

	Article: Q137061
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Visual FoxPro Help file, and the Language Reference, page 345,
	incorrectly document the DO FORM command's LINKED clause.
	
	When the LINKED clause is used, no memory variable name (MemVarName) is needed
	after the keyword LINKED. Adding a MemVarName after linked will produce a
	"Command contains unrecognized phrase/keyword" error.
	
	NOTE: This was corrected in the Visual FoxPro 3.0b for Windows documentation.
	
	MORE INFORMATION
	================
	
	The LINKED clause stands by itself. Visual FoxPro always creates a MemVar when a
	DO FORM command is used. The MemVarName is either derived from the .scx file
	name or specified by the user when the optional NAME < MemVarName > clause
	is used. All the LINKED clause does is tell Visual FoxPro that the form should
	be destroyed when the MemVarName is released.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
