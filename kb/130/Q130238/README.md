---
layout: page
title: "Q130238: PRB: Macro Substitution Won't Work in Expression Builder"
permalink: /kb/130/Q130238/
---

## Q130238: PRB: Macro Substitution Won't Work in Expression Builder

	Article: Q130238
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add a macro-substituted memory variable in the Expression
	Builder, you receive a "Syntax Error."
	
	CAUSE
	=====
	
	Macro substitution is used with command syntax. It is not permitted in the User
	Interface.
	
	WORKAROUND
	==========
	
	Use EVALUATE() or a named expression that is expressed as "(<variable
	name>)".
	
	See the FoxPro "Language Reference" or Help file for more information on how to
	use the EVALUATE function, named expressions, or macro substitution.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window type the following two lines of code:
	
	     cVarName = "Hello"
	     cFilter = 'cVarName'
	
	2. Type the following line of code:
	
	     GETEXPR TO cX
	
	3. In the Expression Builder, type &cFilter, and click OK or Verify.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
