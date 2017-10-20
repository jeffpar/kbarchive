---
layout: page
title: "Q122907: Declaring Variables in FoxPro"
permalink: /kb/122/Q122907/
---

## Q122907: Declaring Variables in FoxPro

{% raw %}

	Article: Q122907
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ths article describes how variables are defined (declared) in FoxPro. A variable
	in FoxPro can have one of three attributes: Public, Private, or Hidden.
	
	MORE INFORMATION
	================
	
	Public Variables
	----------------
	
	Public variables, also known as global variables, are variables that may be used
	and modified by any FoxPro program and any of its sub-programs for the duration
	of the FoxPro session or until the variable is cleared from memory.
	
	Public variables are declared in one of two ways:
	
	1. Create a variable in the Command window. Any variable created in the Command
	  window is automatically declared public. For example, from the Command
	  window, type X=1000. The variable X is now public to all applications.
	
	2. Within a program, declare a variable as public by using the PUBLIC command.
	  In all programs, you must declare the variable as public before assigning it
	  a value, as in this example code:
	
	     PUBLIC var1
	     var1=1000
	
	Private Variables
	-----------------
	
	Private variables are declared within programs or procedures and can be used and
	manipulated within that program or procedure and any of its sub-programs.
	
	Private variables are declared one of three ways:
	
	1. Create a variable inside a program or procedure without declaring is as
	  public. The variable then becomes private to the program or procedure in
	  which it is declared.
	
	  For example, in the program MYPRG.PRG, declare var2 as private with this
	  command:
	
	        var2=2500
	
	  Now var2 is declared as private to MYPRG.PRG. It is available to all
	  procedures called by MYPRG.PRG.
	
	2. Include the variable on a PARAMETERS statement. This automatically causes the
	  variable to become private to that program or procedure.
	
	3. Use the PRIVATE command on variables declared previously. This makes the
	  previously declared variable and its contents hidden. The new private
	  variable becomes private to the current program or procedure. The PRIVATE
	  command does not initially declare anything, a variable must already exist
	  before PRIVATE can be used on it successfully.
	
	Hidden Variables
	----------------
	
	Variables may not be declared hidden, but variables that were previously declared
	as Public or Private may become hidden. By hiding variables created in higher
	programs, you can enable variables of the same name to be manipulated in the
	current program without affecting the values of the hidden variables.
	
	Once the program or procedure containing the private variables completes
	execution, all memory variables and arrays that were subsequently hidden are
	again available.
	
	Variables are hidden in one of two ways:
	
	1. If a variable has already been declared, use the PRIVATE command followed by
	  the variable name to hide the existing variable and create a new PRIVATE
	  variable.
	
	2. Use a variable of the same name in a PARAMETERS statement. If a newly
	  declared variable shares the same name as a variable previously declared, the
	  previously declared variable becomes hidden and a new private variable is
	  created for the current program or procedure.
	
	To check the status of a variable, use the DISPLAY MEMORY command. DISPLAY MEMORY
	provides information about user-defined variables -- whether they are public,
	private, or hidden, and where (which program or procedure) they were declared.
	
	REFERENCES
	==========
	
	Language Reference, version 2.5 pages L3-751, L3-764
	
	Additional query words: VFoxWin FoxWin 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0
	
	=============================================================================
	

{% endraw %}
