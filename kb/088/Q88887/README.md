---
layout: page
title: "Q88887: Using the ON ESCAPE Command in FoxBASE+"
permalink: /kb/088/Q88887/
---

## Q88887: Using the ON ESCAPE Command in FoxBASE+

{% raw %}

	Article: Q88887
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:1.21,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the user presses the ESC key during a READ or during the execution of a
	full-screen editing command, the command terminates. The ON ESCAPE routine does
	not execute.
	
	MORE INFORMATION
	================
	
	To determine if the ESC key was pressed under these circumstances, check the
	value returned from READKEY() and determine if it equals ESC.
	
	The following code demonstrates how to execute a routine in response to the user
	pressing ESC in a READ statement:
	
	        x = SPACE(20)
	     @ 3,3 GET x
	     READ
	     IF READKEY() = 12 .OR. READKEY() = 268
	        DO <ON ESCAPE routine>
	     ENDIF
	
	If the user presses the ESCAPE key in a read, FoxBASE+ saves the values of all
	fields except for the field that contains the cursor. This behavior differs from
	that of dBASEIII PLUS, which does not save the values of any field under this
	condition.
	
	Pressing the ESC key during the execution of an APPEND or EDIT command discards
	all changes.
	
	The following code demonstrates how to discard the changes in all fields if the
	user presses the ESC key in any field:
	
	        SCATTER TO temp
	     @ 3,3 GET field1
	     @ 5,5 GET field2
	     READ
	     IF READKEY() = 12 .OR. READKEY() = 268
	        GATHER FROM temp
	     ENDIF
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	

{% endraw %}
