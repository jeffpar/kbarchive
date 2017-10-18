---
layout: page
title: "Q148330: BUG: ODBC: SQLGetProp Causes IC Error in Debug Window"
permalink: kb/148/Q148330/
---

## Q148330: BUG: ODBC: SQLGetProp Causes IC Error in Debug Window

	Article: Q148330
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbMDAC250kbbuglist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An internal consistency (IC) error occurs when you attempt to view the
	properties of a connection using SQLGetProp in the DEBUG window.
	
	CAUSE
	=====
	
	You are using an invalid connection handle in the SQLGetProp() function in the
	DEBUG window.
	
	RESOLUTION
	==========
	
	Print the return value of SQLGetProp() to the desktop or currently active window
	using ? or \ printing as in this example:
	
	     ? SQLGETPROP(<handle>, "BATCHMODE")
	
	In this example, <handle> is a valid handle to the connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create an ODBC data source based on the Oracle 7.0 driver.
	
	2. Create a database with a remote view based on the data source created in step
	  1.
	
	3. Open the remote view.
	
	4. Open the Debug window, and type the following line in the left pane:
	
	        SQLGetProp(3, "BATCHMODE")
	
	  In this example, 3 is an invalid connection handle.
	
	
	Additional query words: ICE kbvfp300 kbvfp300b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbMDAC250 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbbug
	
	=============================================================================
	
