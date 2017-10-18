---
layout: page
title: "Q318910: XML Programming Core Reference Comments and Corrections"
permalink: kb/318/Q318910/
---

## Q318910: XML Programming Core Reference Comments and Corrections

	Article: Q318910
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS XML Programming Core Reference ISBN 0-7356-1185-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book XML Programming Core Reference, ISBN
	0-7356-1185-8.
	
	The following topics are covered:
	
	- CD-ROM: Ch04 Code Sample openxml.sql Change
	
	- Page 7: "XTML" Should Be "XHTML"
	
	- Page 97: Missing Column Name In SELECT Statement
	
	- Page 98: Incorrect Dept_ID In Table
	
	- Page 130: Replace Code in Listing 4-27
	
	- Page 140: Line Missing From Results of Listing 4-32
	
	- Page 196: Document Element Incorrectly Repeated In Listing 5-10
	
	- Page 343: Definition For Address-Object Missing
	
	MORE INFORMATION
	================
	
	CD-ROM: Ch04 Code Sample openxml.sql Change
	-------------------------------------------
	
	The final line of code in the code sample openxml.sql, found in the ch04
	directory, is incorrect. A replacement file is available for download.
	
	In the attached file,
	
	EXEC sp_xml_removeDocument @hXmlDoc
	
	has been changed to:
	
	EXEC sp_xml_removeDocument @xmlHnd
	
	The following file is available for download from the Microsoft Download Center:
	
	  openxml.exe (http://download.microsoft.com/download
	  /MSPressPub/openxml/1.0/WIN98XP/EN-US/openxml.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	Page 7: "XTML" Should Be "XHTML"
	--------------------------------
	
	On page 7, change the section heading:
	"XML Compared to XTML"
	
	To:
	"XML Compared to XHTML"
	
	
	Page 97: Missing Column Name In SELECT Statement
	------------------------------------------------
	
	On page 97, in the first code sample, the column name Employee_ID is missing.
	
	Change:
	
	  SELECT CONCATENATE(  LastName,  ' ', FirstName ) AS Fullname
	      FROM Employee
	  WHERE LastName = 'Jordan'
	
	To:
	
	  SELECT Employee_ID, (LastName + ',  ' + FirstName ) AS Fullname
	      FROM Employee
	  WHERE LastName = 'Jordan'
	
	Note: CONCATENATE is not a standard function in all RDBMS, and you should use the
	"+" operator for Microsoft SQL Server and "||" for Oracle to concatenate the
	last name and first name values.
	
	
	Page 98: Incorrect Dept_ID In Table
	-----------------------------------
	
	On page 98, in the table at the top, in the fourth row,
	
	Change:
	"Dept_ID
	3"
	
	To:
	"Dept_ID
	2"
	
	And in the fifth row,
	
	Change:
	"Dept_ID
	4"
	
	To:
	"Dept_ID
	3"
	
	
	Page 130: Replace Code in Listing 4-27
	--------------------------------------
	
	On page 130, in listing 4-27, change the final line of code from:
	
	  EXEC sp_xml_removeDocument @hXmlDoc
	
	To:
	
	  EXEC sp_xml_removeDocument @xmlHnd
	
	
	Page 140: Line Missing From Results of Listing 4-32
	---------------------------------------------------
	
	The expected results table shown on page 140 is missing a row. Add the following
	row for record 10 as the last row of the output (column headings given for
	reference):
	
	+------------------------------------------------+
	| EMPLOYEE_NO | FIRST_NAME | LAST_NAME | DEPT_NO | 
	+------------------------------------------------+
	| 10          | Joshua     | Lehman    | 5       | 
	+------------------------------------------------+
	
	
	Page 196: Document Element Incorrectly Repeated In Listing 5-10
	---------------------------------------------------------------
	
	On pages 195-196, in listing 5-10, the section of code from the first line to the
	tag on page 196 (line 6) should be removed.
	
	The listing should begin with line 7 on page 196.
	
	
	Page 343: Definition For Address-Object Missing
	-----------------------------------------------
	
	On page 343, the definition for the Address-Object is missing, and as a result
	the creation of an instance is not complete and does not lead to the XML code in
	the next section (The Object Instance XML Document).
	
	Add the following lines of code beneath the call to the Person constructor:
	
	Person p = new Person("John", "Smith", "11/30/1974", "brown", "blue");
	p.address.setAddress1("200 Brattle Street"); p.address.setCity("Cambridge");
	p.address.setState("MA"); p.address.setZip("02138");
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1185-8 WYKE REHMAN LEUPEN XML DEVBOOK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
