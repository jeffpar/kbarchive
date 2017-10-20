---
layout: page
title: "Q140760: PRB: Invalid Key Length Error When Indexing a Cursor File"
permalink: /kb/140/Q140760/
---

## Q140760: PRB: Invalid Key Length Error When Indexing a Cursor File

{% raw %}

	Article: Q140760
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Indexing a cursor file with a key field that contains more than 240 characters
	generates this error:
	
	  Invalid Key Length
	
	This procedure did not generate an error in FoxPro version 2.6.
	
	CAUSE
	=====
	
	This is a deliberate change in behavior. The maximum length for an index key in
	a compact index is 240 bytes. If a key is longer than 240, FoxPro 2.6 truncates
	it. Visual FoxPro 3.0, 5.0 and 6.0 display the "Invalid Key Length" error
	message to protect against the possiblity of generating duplicates.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This error message also occurs with a table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Type the following commands in the Command window:
	
	     CREATE CURSOR Address (address C(254))
	     INDEX ON address TAG address
	
	The "Invalid Key Length" error message is displayed.
	
	REFERENCES
	==========
	
	For more information on Visual FoxPro 3.0 system capacities, search for "System
	capacities" in the FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
