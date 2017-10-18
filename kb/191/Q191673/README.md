---
layout: page
title: "Q191673: DOC: Calling Genhtml.prg Gives &quot;Alias Not Found&quot; Error"
permalink: kb/191/Q191673/
---

## Q191673: DOC: Calling Genhtml.prg Gives &quot;Alias Not Found&quot; Error

	Article: Q191673
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Calling Genhtml.prg using the syntax provided in the Visual FoxPro Help file
	results in the following error:
	
	  Alias <alias name> Not Found.
	
	MORE INFORMATION
	================
	
	The Genhtml.prg Help topic incorrectly documents the syntax for calling
	Genhtml.prg.
	
	The correct syntax for calling GenHTML.PRG is as follows:
	
	  DO (_GENHTML) WITH <cOutFile>, <cSourceFile> ; [,
	  <nShow>][,<vIELink>][,[...
	
	Additional query words: kbVFp600 kbDocs kbXBase kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	
	=============================================================================
	
