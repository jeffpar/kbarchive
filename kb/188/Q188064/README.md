---
layout: page
title: "Q188064: PRB: ISRLOCKED() and ISFLOCKED() Return Incorrect Values"
permalink: /kb/188/Q188064/
---

## Q188064: PRB: ISRLOCKED() and ISFLOCKED() Return Incorrect Values

{% raw %}

	Article: Q188064
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an instance of Visual FoxPro locks a record or a table, calling the
	ISRLOCKED() or ISFLOCKED() functions on another computer or another instance of
	Visual FoxPro returns false.
	
	RESOLUTION
	==========
	
	Test the lock status using RLOCK() or FLOCK() instead. ISRLOCKED() and
	ISFLOCKED() only indicate whether the record or file is locked by the instance
	of Visual FoxPro from which they are called. If these functions were to test for
	the record and file locks of other users, the lock status could quickly change.
	This would make the information returned by ISRLOCKED() and ISFLOCKED
	unreliable.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Save the following code in a program and run the program:
	
	        *-- Code begins here.
	        CREATE TABLE locktest (field1 C(10))
	        CLOSE DATA
	        USE locktest SHARED
	        INSERT INTO locktest (field1) VALUES ("A test")
	        GOTO 1
	        =RLOCK()
	        *-- Code ends here.
	
	2. On another computer or in another instance of Visual FoxPro, save the
	  following code in a program and run the program:
	
	        *-- Code begins here.
	        USE locktest SHARED
	        GOTO 1
	        IF ISRLOCKED()
	            WAIT WINDOW "Record is locked."
	        ELSE
	            WAIT WINDOW "Record is not locked."
	            =RLOCK() && Should get the "Attempting to lock..." in status bar
	        ENDIF
	        *-- Code ends here.
	
	  If you run the program from another computer, please map a drive to the first
	  computer containing the Locktest table.
	
	After you run the second program the Wait Window appears. Press any key and the
	"Attempting to lock..." message appears in the status bar.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE vfoxwin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
