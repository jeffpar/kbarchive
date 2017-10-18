---
layout: page
title: "Q130404: BUG: CREATE CURSOR Does Not Accept UNIQUE as a Field Name"
permalink: kb/130/Q130404/
---

## Q130404: BUG: CREATE CURSOR Does Not Accept UNIQUE as a Field Name

	Article: Q130404
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the CREATE CURSOR command, the name UNIQUE may not be used to name
	one of the fields in the cursor. The error message "syntax error" is generated
	by issuing the CREATE CURSOR command from either the Command window or from a
	compiled program file when UNIQUE is used as a field name.
	
	The following example generates this syntax error:
	
	     CREATE CURSOR address (cName C(20), UNIQUE C(20))
	
	UNIQUE was allowed as a field name prior to Visual FoxPro version 3.0 when used
	in the CREATE CURSOR command.
	
	CAUSE
	=====
	
	UNIQUE is a reserved word in Visual FoxPro. However, reserved words can be used
	in the CREATE TABLE/CURSOR commands by using name substitution.
	
	RESOLUTION
	==========
	
	The following example uses name substitution to work around this problem. In
	this example, UNIQUE can be used as a field name in the CREATE CURSOR command.
	
	     CLOSE DATABASES
	     CLEAR
	     cField = "UNIQUE"
	     CREATE CURSOR employee (cName C(20), (cField) C(20))
	     DISPLAY STRUCTURE
	
	Notice that once the DISPLAY STRUCTURE command is issued, a cursor structure is
	displayed that contains two fields: cName and UNIQUE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbvfp300 kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
