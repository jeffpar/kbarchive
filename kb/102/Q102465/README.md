---
layout: page
title: "Q102465: How to Use the _MEMVARMASK Variable"
permalink: kb/102/Q102465/
---

## Q102465: How to Use the _MEMVARMASK Variable

	Article: Q102465
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	_MEMVARMASK is a variable used in FoxPro for Windows versions 2.5a and later to
	make menus work properly with the GraphWizard and spelling checker.
	
	Because of the underscore in the variable name, many people assume it is a system
	memory variable and would be displayed on the screen if the following commands
	were issued:
	
	  CLEAR MEMORY
	  DISPLAY MEMORY
	
	MORE INFORMATION
	================
	
	The following text from the 2.5a README.TXT file illustrates the use of
	_MEMVARMASK:
	
	===================
	Part 4: _MEMVARMASK
	===================
	
	Menus you created in FoxPro 2.5 that included expressions may not
	have behaved properly when the spelling checker or GraphWizard were
	active.
	
	SKIP FOR expressions typically depend on the value of skip variables,
	but the skip variables were not visible to your menus when the
	spelling checker or GraphWizard was active in FoxPro 2.5. In the
	initialization code of the spelling checker and GraphWizard
	applications (SPELLCHK.APP and GENGRAPH.APP respectively), PRIVATE ALL
	is intentionally issued. This hides skip variables from user-defined
	menus and causes a "Variable not found" error when you make a menu
	choice.
	
	To correct this situation, the following code is added to the beginning of
	the spelling checker and GraphWizard applications:
	
	  IF TYPE("_memvarmask") = "C" and !EMPTY(_memvarmask)
	     PRIVATE ALL EXCEPT &_memvarmask
	  ELSE
	     PRIVATE ALL
	  ENDIF
	
	Suppose a certain menu option should be skipped when the memory variable
	named "skipvar" evaluates to true. You should include the following lines
	in your menu startup code to take advantage of the _MEMVARMASK variable:
	
	  PUBLIC _memvarmask
	  _memvarmask = "skipvar"
	  STORE .T. TO skipvar             && Skip initially.
	
	To create a set of skip variables, include the following lines in your
	menu startup code:
	
	  PUBLIC _memvarmask
	  _memvarmask = "skip*"
	  STORE .T. TO skipthis, skipthat  && Skip initially.
	
	When you execute the spelling checker and GraphWizard, they don't hide
	variables in SKIP FOR expressions, preventing the "Variable not found"
	errors you may have experienced in FoxPro 2.5.
	
	Note that _MEMVARMASK isn't a system memory variable.
	
	REFERENCES
	==========
	
	Microsoft FoxPro 2.5a for Windows README.TXT file
	
	Additional query words: VFoxWin FoxWin 2.50a 2.50b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
