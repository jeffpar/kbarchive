---
layout: page
title: "Q157360: FIX: LIST STRUCTURE Ignores Index if Index Name != Field Name"
permalink: kb/157/Q157360/
---

## Q157360: FIX: LIST STRUCTURE Ignores Index if Index Name != Field Name

	Article: Q157360
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the name of the Index is different from the name of the field that it is
	based on, then the LIST STRUCTURE command ignores the Index entry. The DISPLAY
	STRUCTURE command exhibits the same behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Table and Index with the following commands:
	
	        CREATE TABLE Test(Fld1 c(5), Fld2 c(5))
	        INDEX ON fld1 TAG one
	
	2. Issue the "LIST STRUCTURE" (without the quotation marks) command.
	
	The INDEX column is blank, which means that LIST STRUCTURE does not recognize the
	"one" tag and so does not display it as such.
	
	NOTE: The same behavior exists even if the table is part of a database.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
