---
layout: page
title: "Q191763: INFO: Abbreviating NOSHOW Clause May Result in an Error"
permalink: /kb/191/Q191763/
---

## Q191763: INFO: Abbreviating NOSHOW Clause May Result in an Error

	Article: Q191763
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Abbreviating the NOSHOW clause in the MODIFY PROJECT or CREATE PROJECT commands
	cause the following error:
	
	  Command contains unrecognized phrase/keyword.
	
	MORE INFORMATION
	================
	
	The MODIFY PROJECT and CREATE PROJECT commands have a new clause, NOSHOW, that
	can prevent the display of the Project Manager. If the NOSHOW clause is
	abbreviated to less than five characters, it is confused with the NOSHADOW
	command which can cause the preceding error to occur.
	
	The following command causes the error to occur:
	
	     MODIFY PROJECT myproj NOSH
	
	The following commands do not cause the error:
	
	     MODIFY PROJECT myproj NOSHO
	     MODIFY PROJECT myproj NOSHOW
	
	Additional query words: kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
