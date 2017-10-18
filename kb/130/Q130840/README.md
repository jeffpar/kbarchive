---
layout: page
title: "Q130840: How to Append Records from One Remote View to Another"
permalink: kb/130/Q130840/
---

## Q130840: How to Append Records from One Remote View to Another

	Article: Q130840
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro allows you to append records from one remote view to
	another as long as the source target databases do not contain general fields and
	the field names in the source and target databases are identical.
	
	MORE INFORMATION
	================
	
	The following code example shows how to append records from one remote view to
	another. To demonstrate this code, create two remote views (source and target)
	that contain fields of identical names. Copy the following code into an empty
	program file (.PRG), and run it:
	
	  SELECT view1  && view1 is the name of the view pointing to the source file
	  SCAN
	     SCATTER MEMVAR MEMO
	     SELECT view2  && view2 is the name of the view pointing to the target
	                   && file
	     APPEND BLANK
	     GATHER MEMVAR MEMO
	     SELECT view1
	  ENDSCAN
	
	For information on how to create a remote view, please see the "Creating a Remote
	View" topic under "Remote Views" in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
