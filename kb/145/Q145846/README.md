---
layout: page
title: "Q145846: FIX: SQLSetProp() Without Expression Does Not Restore Defaults"
permalink: /kb/145/Q145846/
---

## Q145846: FIX: SQLSetProp() Without Expression Does Not Restore Defaults

	Article: Q145846
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Leaving off the optional [eExpression] in SQLSetProp() may not restore Visual
	FoxPro defaults for all SQL properties.
	
	WORKAROUND
	==========
	
	The values must be set manually, instead of relying on SQLSetProp() to restore
	the default values.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	The help file describes eExpression as "specifies the value for the setting you
	designate with cSetting. If you omit eExpression, the default value is restored
	for the setting."
	
	However, the following properties are not restored to their default settings when
	leaving eExpression off:
	
	  WaitTime - Resets to zero and default is 100
	  Transactions - Gives error message "Property value is out of bounds"
	  DispLogin - Gives error message "Property value is out of bounds"
	  BatchMode - Resets to false (.F.)
	
	Steps to Reproduce Problem
	--------------------------
	
	Type the following commands in the Command Window:
	
	     x = SQLCONN()                  && You can use any data source.
	     ?SQLGetProp(x,"WaitTime")      && Returns 100
	     ?SQLSetProp(x,"WaitTime",200)  && Returns 1
	     ?SQLGetProp(x,"WaitTime")      && Returns 200
	     ?SQLSetProp(x,"WaitTime")      && Returns 1
	     ?SQLGetProp(x,"WaitTime")      && Returns 0!
	     ?SQLDisConn(x)
	
	The last call to SQLGetProp() returns 0 when the default for WaitTime is 100.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
