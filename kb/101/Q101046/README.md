---
layout: page
title: "Q101046: How to Create a Dynamic SELECT Statement in an .EXE File"
permalink: /kb/101/Q101046/
---

## Q101046: How to Create a Dynamic SELECT Statement in an .EXE File

{% raw %}

	Article: Q101046
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A compiler cannot be accessed either in a stand-alone or compact executable
	file, so the Relational Query By Example (RQBE) screen is not available for the
	user to modify a query. However, the user can use macro substitution to modify
	an SQL SELECT statement as needed within an executable file.
	
	This technique will work in FoxPro for Windows with some modification. FoxPro for
	Windows does not create stand-alone executable files, but is capable of
	providing stand-alone applications. However, the query builder is not available
	in executable files built with the FoxPro for Windows Distribution Kit because
	it is intended to be used in interactive mode.
	
	MORE INFORMATION
	================
	
	This code example below uses the Clients table found in the
	\Sample\Organize\dbfs folder of FoxPro 2.x. The code assumes the Clients table
	resides in the current folder. If you use this code with Visual FoxPro, then it
	is assumed that the Clients table from FoxPro 2.x was copied into the current
	folder.
	
	The following program, which can be compiled into a stand-alone executable file,
	allows the user to dynamically change the SQL SELECT statement as needed:
	
	     USE CLIENTS.DBF
	     GETEXPR to x
	     GETEXPR to y
	     SELECT * FROM clients WHERE &x HAVING &y INTO CURSOR Test
	     BROWS
	   
	     PROCEDURE notcalled
	     SELECT * FROM clients WHERE state="CA" HAVING city="Los Angeles"
	
	When the .EXE file is run, two expression boxes appear in succession.
	
	1. In the first, choose STATE from the Field Names box.
	
	2. Type the following, and choose OK.
	
	  " ="TX"" (without the quotation marks)
	
	3. In the next expression box, choose CITY from the Field Names box.
	
	4. Type the following, and choose OK.
	
	  " ="Lubbock"" (without the quotation marks)
	
	This query will produce one record.
	
	NOTE: Because macro substitution is used, the stand-alone executable file may not
	have the proper code included to perform the required function so an error may
	occur. To avoid this problem, the notcalled procedure includes code for an SQL
	SELECT statement. When the executable file is compiled, FoxPro will include the
	necessary source code to execute the macro substitution. The notcalled procedure
	is not executed by the program.
	
	
	REFERENCES
	==========
	
	"Developer's Guide," version 2.0, page D16-11
	"Commands & Functions," version 2.0, page C3-10
	"Language Reference," version 2.5, page L3-9
	"Developer's Guide," version 2.5, page 14-11
	
	Additional query words: VFoxWin FoxDos FoxWin 2.x standalone memvar memory variable variables replaceable replacement
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
