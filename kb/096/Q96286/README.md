---
layout: page
title: "Q96286: ON ERROR Does Not Trap All Errors"
permalink: /kb/096/Q96286/
---

## Q96286: ON ERROR Does Not Trap All Errors

{% raw %}

	Article: Q96286
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the ON ERROR command may not trap all error conditions. Specifically, if
	the ON ERROR command does not call a procedure, it will trap only the first
	occurrence of an error. All subsequent errors will be handled by FoxBASE+/Mac
	internally.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates how the ON ERROR command is executed
	only on the first occurrence of an error. The second and third occurrences of
	the same error are not handled by the defined ON ERROR command, but rather by
	the internal FoxBASE+/Mac error handling routine.
	
	     ON ERROR ALERT STOP 1 STR(ERROR())
	
	     3=x      * returns error number 12
	     3=x      * returns message "Variable not found"
	     3=x      * returns message "Variable not found"
	
	A workaround is to place the ON ERROR command in a procedure, as shown below:
	
	     filename = SYS(16)
	     SET PROCEDURE TO &filename
	
	     ON ERROR DO ErrorProc
	
	     3=x     * returns error number 12
	     3=x     * returns error number 12
	     3=x     * returns error number 12
	
	     PROCEDURE ErrorProc
	     ALERT STOP 1 STR(ERROR())
	     RETURN
	
	Additional query words: 2.01
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
