---
layout: page
title: "Q103090: ERR: &quot;File Does Not Exist&quot; or &quot;Syntax Error&quot; on READ Command"
permalink: /kb/103/Q103090/
---

## Q103090: ERR: &quot;File Does Not Exist&quot; or &quot;Syntax Error&quot; on READ Command

{% raw %}

	Article: Q103090
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error message "File Does Not Exist" occurs on the READ command in a program
	after a VALID function is executed. This error may also occur in a format file
	after a VALID function is executed. In releases of FoxBASE+/Mac before June
	1992, the error that results may be
	
	  Syntax Error
	
	instead of
	
	  File Does Not Exist.
	
	CAUSE
	=====
	
	When a user-defined function (UDF) is called from the VALID clause of a GET, the
	UDF must return a value; otherwise, the error
	
	  File Does Not Exist
	
	or
	
	  Syntax Error
	
	will occur.
	
	RESOLUTION
	==========
	
	To eliminate the error in the sample below, change the last line of MYVAL.PRG
	from "RETURN" (without the quotation marks) to "RETURN .T." (without the
	quotation marks).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program called VALTEST.PRG as follows:
	
	        USE :foxbase:tutorial:faculty.dbf
	
	        CLEAR
	        @ PIXELS 15,13 GET faculty->last VALID myval() SIZE 15,72
	        @ PIXELS 36,13 GET faculty->first SIZE 15,72
	        READ
	
	2. Create another program called MYVAL.PRG as follows:
	
	        WAIT "In faculty->last VALID function..press any key to continue"
	        RETURN
	
	3. In the Command window, type "do valtest" (without the quotation marks).
	
	4. When the GET fields appear, press the TAB key to move to the second field and
	  execute the VALID function. A WAIT message will appear; press any key to
	  continue, as directed.
	
	The
	
	  File Does Not Exist
	
	error will then occur and the highlighted line in the program is the READ
	command.
	
	Additional query words: format .fmt syntax
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	

{% endraw %}
