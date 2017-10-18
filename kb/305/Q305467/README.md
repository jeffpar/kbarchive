---
layout: page
title: "Q305467: Microsoft Windows Script Host 2.0 Developer's Guide Comments and"
permalink: kb/305/Q305467/
---

## Q305467: Microsoft Windows Script Host 2.0 Developer's Guide Comments and

	Article: Q305467
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows Script Host 2.0 Developer's Guide ISBN 0-7356-0931-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows Script Host 2.0
	Developer's Guide, ISBN 0-7356-0931-4.
	
	The following topics are covered:
	
	- CD-ROM: Code Error In ErrorTest2.js Sample
	
	- Page 31: WSH File Extension Should Be WSF
	
	- Page 66: 0011 Decimal Should Be 0011 Binary
	
	- Page 216: Invalid Element In Code Sample
	
	- Page 289: Incorrect Reference To RegDel Method
	
	MORE INFORMATION
	================
	
	CD-ROM: Code Error In ErrorTest2.js Sample
	------------------------------------------
	
	The sample file ErrorTest2.js found in the \WSHDevGuide\Chapter02 directory of
	the companion CD contains an error. This error prevents the debugger from
	starting at the debugger statement. Change line 22 from:
	"WScript.Quit(); ' Quit the script"
	
	To:
	"WScript.Quit();"
	
	The apostrophe was a comment character in the original VBScript, but is
	understood as an opening quotation mark by the JScript interpreter. Since there
	is no closing quotation mark, a syntax error occurs before the debugger
	statement is executed.
	
	
	Page 31: WSH File Extension Should Be WSF
	-----------------------------------------
	
	There is an error in step 3 at the top of page 31.
	
	Change:
	"3. Repeat step 2, and add DWORD values for js and wsh."
	
	To:
	"3. Repeat step 2, and add DWORD values for js and wsf."
	
	
	Page 66: 0011 Decimal Should Be 0011 Binary
	-------------------------------------------
	
	There is an error at the top of page 66.
	
	Change:
	"...value 3 is equivalent to 0011 decimal,"
	
	To:
	"...value 3 is equivalent to 0011 binary,"
	
	
	Page 216: Invalid Element In Code Sample
	----------------------------------------
	
	The code sample on page 216 includes an invalid element.
	
	The "</hr>" element should be completely removed from the bottom of the
	page.
	
	
	Page 289: Incorrect Reference To RegDel Method
	----------------------------------------------
	
	There is an incorrect reference to the DelReg method on page 289.
	
	Change:
	"To delete a value or a key, you can use the RegDel method with ..."
	
	To:
	"To delete a value or a key, you can use the RegDelete method with ..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-0931-4
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
