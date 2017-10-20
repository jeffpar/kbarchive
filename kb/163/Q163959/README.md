---
layout: page
title: "Q163959: FIX: .dct File Grows Larger After Each Compile"
permalink: /kb/163/Q163959/
---

## Q163959: FIX: .dct File Grows Larger After Each Compile

{% raw %}

	Article: Q163959
	Product(s): Microsoft FoxPro
	Version(s): 5.0a 3.0 3.0b 5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a database container has stored procedure code in it, the .dct file of the
	database container increases in size each time
	
	- A project containing the database is rebuilt with the option "Recompile All
	  Files" checked.
	
	- The COMPILE DATABASE command is issued.
	
	The increase in size depends on the amount of code that is in the stored
	procedure.
	
	RESOLUTION
	==========
	
	There are a couple of ways to reduce the size of the .dct file:
	
	1. Open the database container and issue the PACK DATABASE command.
	
	2. Modify the database using the Database Designer, and click Clean Up Database
	  from the Visual FoxPro Database menu.
	
	Remember that the database must be opened exclusively and no table or view in the
	database can be open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Issue the following commands in a program (.prg) file or from the Command window.
	For the DIR command to work correctly, ensure that the database container
	Tastrade.dbc is closed and is not marked as "readonly" before running this
	code.
	
	     CD HOME()+"samples\tastrade\data"
	     DIR tastrade.dct
	     COMPILE DATABASE tastrade
	     DIR *.dct
	
	The reported size of the .dct file increases.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : 5.0a 3.0 3.0b 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
