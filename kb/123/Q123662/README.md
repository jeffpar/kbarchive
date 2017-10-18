---
layout: page
title: "Q123662: BUG: Select Case Does Not Allow Character Expression String"
permalink: kb/123/Q123662/
---

## Q123662: BUG: Select Case Does Not Allow Character Expression String

	Article: Q123662
	Product(s): Microsoft Fortran Compiler
	Version(s): 1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN PowerStation for MS-DOS, versions 1.0, 1.0a 
	- Microsoft Fortran Powerstation 32 for Windows NT, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program that contains a SELECT CASE statement that uses a variable
	in a character substring of length 1, fails and gives the following error
	message:
	
	  F2868: SELECT CASE : character expression must be of length 1
	
	CAUSE
	=====
	
	The compiler incorrectly evaluates the length of a character substring, when the
	character substring is defined using a variable, not a constant.
	
	RESOLUTION
	==========
	
	Avoid a SELECT statement that uses a character substring defined with a
	variable. Instead, use a character substring defined with a constant. As an
	alternative, you can define a temporary character variable of length 1 and
	assign the substring to that variable, which can be later used with a SELECT
	statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  C Compile options needed: none
	  C The following program reproduces the problem:
	
	        program go
	        character*5 a
	        integer*4 len
	        a = "Hello"
	        len = 1
	        select case( a(len:len) )  ! offending statement
	               case default
	        end select
	        end
	
	Sample Code to Solve Problem
	----------------------------
	
	  C Compile options needed: none
	  C The following code solves the problem:
	
	        program go
	        character*5 a
	        a = "Hello"
	        select case( a(1:1) )
	               case default
	        end select
	        end
	
	Sample Code to Solve Problem
	----------------------------
	
	  C Compile options needed: none
	  C The following code solves the problem:
	
	        program go
	        character a*5,tmp*1
	        integer*4 len
	        a = "Hello"
	        len = 1
	        tmp=a(len:len)
	        select case( tmp )
	               case default
	        end select
	        end
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword2 kbZNotKeyword3 kbFORTRANPower32100NT kbFORTRANPower100DOS kbFORTRANPower100aDOS
	Version           : :1.0,1.0a
	
	=============================================================================
	
