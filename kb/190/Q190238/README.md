---
layout: page
title: "Q190238: BUG: AddProperty Fails With Initial Value of Type Currency"
permalink: /kb/190/Q190238/
---

## Q190238: BUG: AddProperty Fails With Initial Value of Type Currency

	Article: Q190238
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call the AddProperty method of an object and pass an initial value of
	type currency, you may receive the following error when the AddProperty
	executes:
	
	  Unrecognized command verb.
	
	RESOLUTION
	==========
	
	To work around this behavior, you can pass the initial value as a named
	expression or pass a variable containing the initial value, as follows:
	
	     oCst.AddProperty("currencyvalue",($0))
	
	NOTE: Note the added parentheses around the currency value.
	
	  -or-
	
	     yCurVal = $0
	     oCst.AddProperty("currencyvalue", yCurVal)
	
	NOTE: The initial value is passed as a variable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The AddProperty() method takes two parameters. The first parameter is the name
	for the added property, and the second parameter is the value of the newly added
	property.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command window:
	
	        oCst = NEWOBJECT("custom")
	        oCst.AddProperty("currencyvalue",$0)
	
	RESULTS: The error "Unrecognized command verb" occurs.
	
	1. The following code works without error:
	
	        * Pass as named expression.
	        oCst.AddProperty("currencyvalue",($0))
	
	  -or-
	
	        * Pass as variable.
	        yCurVal = $0
	        oCst.AddProperty("currencyvalue", yCurVal)
	
	REFERENCES
	==========
	
	Visual FoxPro Help file; search on: "AddProperty"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE kbOOP kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
