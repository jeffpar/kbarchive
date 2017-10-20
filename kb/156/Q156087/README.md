---
layout: page
title: "Q156087: DOCERR: TABLEUPDATE() Improperly Documented in VFP 5.0 Help"
permalink: /kb/156/Q156087/
---

## Q156087: DOCERR: TABLEUPDATE() Improperly Documented in VFP 5.0 Help

{% raw %}

	Article: Q156087
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to the syntax of the TABLEUPDATE() function in Visual FoxPro Help, in
	order to use the cTableAlias argument, you can supply either the nRows argument
	or the lForce argument.
	
	This is incorrect; in order to use the cTableAlias argument, both the nRows
	argument and the lForce argument are required. If they are not supplied, an
	error appears.
	
	MORE INFORMATION
	================
	
	The following syntax, as documented in the Help documentation, incorrectly
	indicates that either the nRows argument or the lForce argument is optional in
	order to use the cTableAlias argument:
	
	  TABLEUPDATE([nRows [, lForce]] [, cTableAlias | nWorkArea] [, cErrorArray])
	
	- nRows: Specifies which changes made to the table or cursor are committed. If
	  nRows is 0 and row or table buffering is enabled, changes made only to the
	  current record in the table or cursor are committed.
	
	- LForce: Determines whether changes made to the table or cursor by another
	  user on a network are overwritten. If lForce is true (.T.), any changes made
	  to the table or cursor by another user on a network are overwritten.
	
	- cTableAlias: Specifies the alias of the table or cursor in which the changes
	  are committed.
	
	Here are two examples that use the nRows = 1, lForce = .T., and cTableAlias =
	'Customer' arguments:
	
	     =TABLEUPDATE(.T.,'Customer')     && This generates an error
	
	     =TABLEUPDATE(1, .T., 'Customer') && This works without an error
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.00
	
	=============================================================================
	

{% endraw %}
