---
layout: page
title: "Q246686: Inside SQL Server 7.0 Comments and Corrections"
permalink: /kb/246/Q246686/
---

## Q246686: Inside SQL Server 7.0 Comments and Corrections

{% raw %}

	Article: Q246686
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Microsoft SQL Server 7.0 ISBN 0-7356-0517-3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Inside Microsoft SQL Server 7.0, ISBN
	0-7356-0517-3.
	
	The following topics are covered:
	
	- Page xxiv: Book Does Not Cover Replication
	
	- Pages xxvii & xxviii: Names Misspelled In Preface
	
	- Page xxvii: Typographical Error
	
	- Page 29: Incorrect Spelling Out Of Acronym
	
	- Page 32: Figure 2-1 Corrections
	
	- Page 38-39: List Of Data Integrity Types Is Incorrect
	
	- Page 56: SQL-DMO Clarification
	
	- Page 57: Remove Database.Dump From Table 2-1
	
	- Page 111: LSN Correction In Figure 3-6
	
	- Page 160: Remove Sentence In Third Paragraph
	
	- Page 165: Table 4-4 Correction To Thai Character Set
	
	- Page 180: Maximum Size Of Database Is Wrong
	
	- Page 185: Typo In Note
	
	- Pages 195 & 196: Error In Filename Extensions In Example
	
	- Page 197: Corrections To Bullet
	
	- Pages 199-200: Change Spt_ To Sys
	
	- Pages 201 & 202: Corrections TO GAM Bit Settings
	
	- Page 205: Dbo Use Only Option Correction
	
	- Page 209: Note Correction
	
	- Page 215: Text Addition
	
	- Page 221: Table 6-1 Clarification
	
	- Page 222: Change Bits To Bytes
	
	- Page 228: Typo In Warning
	
	- Page 231: Maximum Size Of A Single Data Row Correction
	
	- Page 231: Text Corrections
	
	- Page 238: Table 6-4 Correction
	
	- Page 249: Paragraph Rewritten
	
	- Page 255: DBCC Command Misspelled
	
	- Page 258: Delete Text
	
	- Page 273: Text Correction
	
	- Page 278: Typo In Code
	
	- Page 279: Multiple Corrections
	
	- Page 293: Example Missing Parenthesis
	
	- Page 293: Sentence Rewritten
	
	- Page 294: Reword Paragraph For Clarity
	
	- Page 295: Text Of Bullet Reworded
	
	- Page 306: Less Than And Greater Than Symbols Reversed
	
	- Page 333: Add Single Quote To SELECT Statement
	
	- Page 453: Code Corrections In SELECT Statements
	
	- Page 461: Table 9-2 Symbol Correction
	
	- Page 464: Change 10th Bit To 11th Bit
	
	- Page 474: Remove Extra Parenthesis In Figure 9-7
	
	- Page 500: Function Name Misspelled
	
	- Page 524: Code Correction
	
	- Page 527: Transaction Isolation Level Incorrectly Set
	
	- Page 538: Code Comment Correction
	
	- Page 552: Text Correction
	
	- Page 557: Change Table To Procedure
	
	- Page 579: Change Sp_configuration To Sp_configure
	
	- Page 585: Text Correction
	
	- Page 590: Missing Parentheses In Code
	
	- Page 591: Change READTEXT To READINDEX
	
	- Page 592: Byte Corrections
	
	- Page 594: Change Bytes To Characters
	
	- Page 595: Example 2 Code Correction
	
	- Page 656: Corrections To Results From Sp_describe_cursor
	
	- Page 659: Sp_describe_cursor_columns Returns ID Of Table
	
	- Page 667: Code Correction In UPDATE Statement
	
	- Page 670: Several Code Corrections
	
	- Page 672: ASCII Value For A Is 65
	
	- Page 673: Change 1000 To 100
	
	- Page 687: Sentence Correction
	
	- Page 700: SELECT List Correction
	
	- Page 704: Missing Commas in Code
	
	- Page 711: Missing Comma In Select Statement
	
	- Page 733: Text Corrections
	
	- Page 751: Calling Sp_getbindtoken Must Include The Word OUTPUT
	
	- Page 809: LIKE '%Jon' Is Not Sargable
	
	- Page 812: Sentence Correction
	
	- Page 825 & 827: Code Corrections
	
	MORE INFORMATION
	================
	
	Page xxiv: Book Does Not Cover Replication
	------------------------------------------
	
	On page xxiv, delete second to last paragraph.
	
	"SQL Server database replication is also described in depth--especially the
	features that are new in version 7.0."
	
	
	Pages xxvii & xxviii: Names Misspelled In Preface
	-------------------------------------------------
	
	On page xxviii, in the first paragraph, in the second to last sentence the last
	name is misspelled.
	
	Change:
	"Steve Robertson"
	
	To:
	"Steve Robinson"
	
	In the second to last paragraph, in the second sentence the last name is
	misspelled.
	
	Change:
	"Glenn Christensen"
	
	To:
	"Glenn Christiansen"
	
	
	Page xxvii: Typographical Error
	-------------------------------
	
	On page xxvii, in the second to last paragraph, in the first sentence,
	"happening" is misspelled.
	
	Change:
	"...to figure out experientially what was really happing."
	
	To:
	"...to figure out experientially what was really happening."
	
	
	Page 29: Incorrect Spelling Out Of Acronym
	------------------------------------------
	
	On page 29, in the last paragraph, in the second to last sentence delete "Service
	Advertising Protocol".
	
	Change:
	"...including Microsoft's internal Service Advertising Protocol (SAP)
	implementation..."
	
	To:
	"...including Microsoft's SAP implementation..."
	
	In this instance, SAP is the name of a company (Systemanalyse und
	Programmentwicklung or Systems, Applications, and Products in Data Processing)
	and not an acronym for Service Advertising Protocol.
	
	
	Page 32: Figure 2-1 Corrections
	-------------------------------
	
	Client Components:
	
	"SQL-DMO" is based on ODBC and belongs in the Open Interfaces box next to "RDO
	OLE DB for ODBC."
	
	Other BackOffice Servers:
	
	Remove "Microsoft Commercial Internet System" and add "Microsoft Site Server" and
	"Microsoft SNA Server."
	
	
	Page 38-39: List Of Data Integrity Types Is Incorrect
	-----------------------------------------------------
	
	Domain integrity is covered on page 40. The first data integrity type covered is
	entity integrity.
	
	In the last sentence on page 38 change:
	"First is domain integrity."
	
	To:
	"First is entity integrity."
	
	On page 39, first paragraph, last sentence, change:
	"Domain integrity is enforced for a table by making sure that it has a primary
	key."
	
	To:
	"Entity integrity is enforced for a table by making sure that it has a primary
	key."
	
	
	Page 56: SQL-DMO Clarification
	------------------------------
	
	On page 56, in the second paragraph, insert the following author comment.
	
	"SQL-DMO is more than a set of Automation interfaces, as the paragraph suggests.
	It is a dual interface COM component, providing both Custom and Automation
	interfaces."
	
	
	Page 57: Remove Database.Dump From Table 2-1
	--------------------------------------------
	
	On page 57, in Table 2-1, Remove the "Database.Dump" Object.Method and the
	corresponding Action.
	
	The DMO Dump Method is not supported in SQL Server 7.0.
	
	
	Page 111: LSN Correction In Figure 3-6
	--------------------------------------
	
	On page 111, in Figure 3-6, in the second Transaction Log:
	
	Change the LSN value from:
	"LSN: 2:290:4"
	
	To:
	"LSN: 2:290:6"
	
	
	Page 160: Remove Sentence In Third Paragraph
	--------------------------------------------
	
	On page 160, in the third paragraph, remove second sentence.
	
	"Windows NT Authentication for SQL Server uses the Windows NT impersonation
	features, which are available only with these default networking choices."
	
	As of SQL Server 7.0, Windows NT Authentication (formerly called Integrated
	Security) is available over all network protocols.
	
	
	Page 165: Table 4-4 Correction To Thai Character Set
	----------------------------------------------------
	
	On page 165, in Table 4-4, in the Character Set column:
	
	Change:
	"Thai (DBCS)"
	
	To:
	"Thai"
	
	
	Page 180: Maximum Size Of Database Is Wrong
	-------------------------------------------
	
	On page 180, in the first bullet point:
	
	Change:
	"Can range in size from 1 MB through a theoretical limit of 1 TB (1,048,576 MB)
	in size."
	
	To:
	"Can range in size from 1 MB through a theoretical limit of 1,048,516 TB in
	size."
	
	
	Page 185: Typo In Note
	----------------------
	
	On page 185, in the second sentence, in the note, "test" should be "testdb".
	
	Change:
	"The Enterprise Manager will give the data file the logical name of testdb_Data
	(instead of just test)..."
	
	To:
	"The Enterprise Manager will give the data file the logical name of testdb_Data
	(instead of just testdb)..."
	
	
	Pages 195 & 196: Error In Filename Extensions In Example
	--------------------------------------------------------
	
	On pages 195 & 196, in the FILEGROUP CREATION Example, all of the data file
	names in the example use .mdf as their filename extension. Only the first one
	should use .mdf. The rest, except for the last one (..\saleslog.ldf) should use
	.ndf.
	
	
	Page 197: Corrections To Bullet
	-------------------------------
	
	On page 197, the third white bullet, NAME should be FILENAME.
	
	Change:
	"Change the NAME property for files only in the tempdb database; this change
	doesn't go into effect until you stop and restart SQL Server."
	
	To:
	"Change the FILENAME property for files only in the tempdb database; this change
	doesn?t go into effect until you stop and restart SQL Server.
	
	Changing the FILENAME can be used to move the files to a new physical location.
	(Note that there is no supported way to change the logical name of any file.)"
	
	
	Pages 199-200: Change Spt_ To Sys
	---------------------------------
	
	On page 199, in the last sentence, "spt_" should be "sys".
	
	Change:
	"All these system objects, in both the master and user databases, have names that
	begin with spt_."
	
	To:
	"All these system objects, in both the master and user databases, have names that
	begin with sys."
	
	
	Pages 201 & 202: Corrections TO GAM Bit Settings
	------------------------------------------------
	
	On page 201, the third bullet, in the last sentence:
	
	Change:
	"If the bit is 1, the corresponding extent is in use; if the bit is 0, the extent
	is free."
	
	To:
	"If the bit is 0, the corresponding extent is in use; if the bit is 1, the extent
	is free."
	
	Page 202, change the table at the top of the page to:
	
	+---------------------------------------------------------------------------+
	| Current Use of Extent                | GAM Bit Setting | SGAM Bit Setting | 
	+---------------------------------------------------------------------------+
	| Free, not in use                     | 1               | 0                | 
	+---------------------------------------------------------------------------+
	| Uniform extent, or full mixed extent | 0               | 0                | 
	+---------------------------------------------------------------------------+
	| Mixed extent with free pages         | 0               | 1                | 
	+---------------------------------------------------------------------------+
	
	
	Page 205: Dbo Use Only Option Correction
	----------------------------------------
	
	On page 205, in the "dbo use only" database option description, the first
	sentence needs the following modifications.
	
	Change:
	"When TRUE, this option prevents all users except the database owner from
	subsequently using the database."
	
	To:
	"When TRUE, this option prevents all users except the database owner and members
	of the db_owner role from subsequently using the database."
	
	
	Page 209: Note Correction
	-------------------------
	
	On page 209, in the Note, revise the first sentence as follows.
	
	Change:
	"The only options that you can set for the master database are autoclose, torn
	page detection, and trunc. log on chkpt."
	
	To:
	"The only option you can set for the master database is the trunc. log on chkpt.
	option."
	
	
	Page 215: Text Addition
	-----------------------
	
	On page 215, in the second sentence, add db_ddladmin.
	
	Change:
	"...but anyone with the sysadmin or db_owner role can create a table owned by
	another use."
	
	To:
	"...but anyone with the sysadmin, db_ddladmin, or db_owner role can create a
	table owned by another use."
	
	
	Page 221: Table 6-1 Clarification
	---------------------------------
	
	Binary and varbinary datatypes can both store up to 8000 bytes.
	
	
	Page 222: Change Bits To Bytes
	------------------------------
	
	On page 222, in the second paragraph, in the first sentence change bits to
	bytes.
	
	Change:
	"...because the last six bits..."
	
	To:
	"...because the last six bytes..."
	
	
	Page 228: Typo In Warning
	-------------------------
	
	On page 228, under "Warning", in the last sentence:
	
	Change:
	"We can't overemphasize that you're best bet for avoiding confusion..."
	
	To:
	"We can't overemphasize that your best bet for avoiding confusion..."
	
	
	Page 231: Maximum Size Of A Single Data Row Correction
	------------------------------------------------------
	
	On page 231, in the third paragraph, in the second sentence change maximum size
	of a single data row to 8060.
	
	Change:
	"The maximum size of a single data row is 8096 bytes."
	
	To:
	"The maximum size of a single data row is 8060 bytes."
	
	Although SQL Server 7.0 does leave 8096 bytes on a data page for data and row
	offsets, the maximum size of a single row is only 8060 bytes. The choice of an
	upper limit was somewhat arbitrary. There are some things designed into the row
	format, not yet exposed, which will cause the overhead of a row to grow in
	future releases if the developers end up using them. They would like to have
	your existing rows still fit even if extra space is needed for overhead in the
	future. So, they chose 8060 bytes as a reasonable upper limit.
	
	
	Page 231: Text Corrections
	--------------------------
	
	On page 231, revise the first sentence as follows.
	
	Change:
	"Data pages are the structures that contain all of a table's nontext and image
	data."
	
	To:
	"Data pages are the structures that contain all of a table's data that is not
	text or not an image."
	
	Also, on page 231, in the third paragraph, revise the third sentence as follows.
	
	Change:
	"...(except for nontext and image columns, which are stored in their own separate
	pages)."
	
	To:
	"...(except for text or image columns, which are stored in their own separate
	pages)."
	
	
	Page 238: Table 6-4 Correction
	------------------------------
	
	On page 238, Table 6-4, Information column, in the text following NULL bitmap
	entry, change "byte" to "bit".
	
	Change:
	"(1 byte for each column in table; a 1 indicates that the corresponding column is
	NULL)"
	
	To:
	"(1 bit for each column in table; a 1 indicates that the corresponding column is
	NULL)"
	
	
	Page 249: Paragraph Rewritten
	-----------------------------
	
	Page 249, replace the last full paragraph with the following text.
	
	"The DROP_EXISTING option specifies that a given index should be dropped and
	rebuilt as a single transaction, and is particularly useful in the case of
	rebuilding clustered indexes. Because nonclustered indexes must go through the
	clustered index to gain access to rows in a table, the DROP_EXISTING option
	prevents the nonclustered indexes from having to be rebuilt twice. Normally,
	when a clustered index is dropped, every nonclustered index has to be rebuilt to
	change its bookmarks to RIDs, instead of the clustering keys. Then, if a
	clustered index is built (or rebuilt), all the nonclustered indexes need to be
	rebuilt again to update the bookmarks. The DROP_EXISTING option to the CREATE
	INDEX command allows a clustered index to be rebuilt without having to rebuild
	the nonclustered indexes twice. If you are creating the index on the exact same
	keys it had previously, the nonclustered indexes do not need to be rebuilt at
	all. If you are changing the key definition, the nonclustered indexes are only
	rebuilt once, after the clustered index is rebuilt."
	
	
	Page 255: DBCC Command Misspelled
	---------------------------------
	
	On page 255, in the second paragraph, the second sentence contains a misspelled
	command.
	
	Change:
	"If this happens, you can use the DBCC CHECKINDENT command..."
	
	To:
	"If this happens, you can use the DBCC CHECKIDENT command..."
	
	
	Page 258: Delete Text
	---------------------
	
	On page 258, in the first paragraph, delete the second to last sentence.
	
	"A table-level constraint must always be named by its creator."
	
	Also on page 258, in the first paragraph, in the last sentence delete
	"column-level".
	
	Change:
	"...it's probably wise to explicitly name column-level constraints so that the
	same name will be used on all servers."
	
	To:
	"...it's probably wise to explicitly name constraints so that the same name will
	be used on all servers."
	
	
	Page 273: Text Correction
	-------------------------
	
	On page 273, under the CASCADE bullet:
	
	Change:
	"A delete of all matching rows in the referenced table occurs."
	
	To:
	"A delete of all matching rows in the referencing table occurs."
	
	
	Page 278: Typo In Code
	----------------------
	
	Change:
	
	  ALTER TABLE employee  
	  add department_no int CHECK (department_no < 100 AND department_no > 100)
	
	To:
	
	  ALTER TABLE employee  
	  add department_no int CHECK (department_no < 0 AND department_no > 100)
	
	
	Page 279: Correct number of days
	--------------------------------
	
	On page 279, in the second paragraph, in the second sentence:
	
	Change:
	"...to ensure that updates can't be made after day 28 of the month..."
	
	To:
	"...to ensure that updates can't be made after day 27 of the month..."
	
	
	Page 293: Example Missing Parenthesis
	-------------------------------------
	
	On page 293, the last line of the Example is missing a parenthesis.
	
	Change:
	
	  ALTER COLUMN emp_name (varchar(50)
	
	To:
	
	  ALTER COLUMN emp_name (varchar(50))
	
	
	Page 293: Sentence Rewritten
	----------------------------
	
	On page 293, revise the fifth bullet as follows.
	
	Change:
	"If the modified column participates in an index, the only type changes that are
	allowed are increasing the length of a variable length type, changing
	nullability of the column (for example, VARCHAR(10) to VARCHAR(20)), or both."
	
	To:
	"If the modified column participates in an index, the only type changes that are
	allowed are increasing the length of a variable length type (for example,
	VARCHAR(10) to VARCHAR(20)), changing nullability of the column, or both."
	
	
	Page 294: Reword Paragraph For Clarity
	--------------------------------------
	
	On page 294, change the second to last paragraph to:
	
	"You need to be aware when using ALTER TABLE to drop constraints that dropping a
	PRIMARY KEY or UNIQUE constraint will automatically drop the associated index.
	In fact, the only way to drop those indexes is by altering the table to remove
	the constraint."
	
	
	Page 295: Text Of Bullet Reworded
	---------------------------------
	
	On page 295, reword the fifth bullet.
	
	Change:
	"A column bound to a rule, accomplished via the following syntax:"
	
	To:
	"A column to which a rule is bound. Dropping a column is accomplished by using
	the following syntax:"
	
	
	Page 306: Less Than And Greater Than Symbols Reversed
	-----------------------------------------------------
	
	On page 306, in the fourth paragraph, in the second sentence:
	
	Change:
	"...an inner join can use an operator such as less than (>) or greater than
	(<)..."
	
	To:
	"...an inner join can use an operator such as less than (<) or greater than
	(>)..."
	
	
	Page 333: Add Single Quote To SELECT Statement
	----------------------------------------------
	
	On page 333, in the last query, add a single quote to the second line.
	
	Change:
	
	  'Author'=CONVERT(varchar(20), RTRIM(au_lname) + ,'
	
	To:
	
	  'Author'=CONVERT(varchar(20), RTRIM(au_lname) + ','
	
	
	Page 453: Code Corrections In SELECT Statements
	-----------------------------------------------
	
	On page 453, in the first SELECT statement, in the fourth and fifth lines of
	code:
	
	Change:
	
	  'Type' = 
	     WHEN type = 'mod_cook' THEN 'Modern Cooking',
	
	To:
	
	  'Type' = CASE
	     WHEN type = 'mod_cook' THEN 'Modern Cooking'
	
	Also on page 453, in the second SELECT statement, in the fourth and fifth lines
	of code:
	
	Change:
	
	  'Type' = type
	     WHEN 'mod_cook' THEN 'Modern Cooking',
	
	To:
	
	  'Type' = CASE type
	     WHEN 'mod_cook' THEN 'Modern Cooking'
	
	
	Page 461: Table 9-2 Symbol Correction
	-------------------------------------
	
	On page 461, in Table 9-2, in the Symbol Column:
	
	Change:
	"?"
	
	To:
	"-"
	
	
	Page 464: Change 10th Bit To 11th Bit
	-------------------------------------
	
	On page 464, in the second paragraph, in the last sentence:
	
	Change:
	"...which is the tenth bit or decimal 1024..."
	
	To:
	"...which is the eleventh bit or decimal 1024..."
	
	
	Page 474: Remove Extra Parenthesis In Figure 9-7
	------------------------------------------------
	
	On page 474, in Figure 9-7, Style entry corresponding to the ODBC canonical
	Output Type:
	
	Change:
	"hh:mi:ss((24h)"
	
	To:
	"hh:mi:ss(24h)"
	
	
	Page 500: Function Name Misspelled
	----------------------------------
	
	On page 500, in the first paragraph, in the last sentence:
	
	Change:
	"...SUSER_SAME..."
	
	To:
	"...SUSER_SNAME..."
	
	
	Page 524: Code Correction
	-------------------------
	
	On page 524, in the fourth line down, change 0 to 1.
	
	Change:
	
	  IF (@@ROWCOUNT > 0)
	
	To:
	
	  IF (@@ROWCOUNT > 1)
	
	There will be one 'Smith' even if the transaction never happened at all, and no
	dirty data was read.
	
	
	Page 527: Transaction Isolation Level Incorrectly Set
	-----------------------------------------------------
	
	On page 527, in the 12th line down:
	
	Change:
	
	  SET TRANSACTION ISOLATION LEVEL SERIALIZABLE
	
	To:
	
	  SET TRANSACTION ISOLATION LEVEL REPEATABLE READ
	
	
	Page 538: Code Comment Correction
	---------------------------------
	
	On page 538, in the third line from the bottom:
	
	Change:
	
	       -- Illegal parameter value. Must be between 0 and 12.
	
	To:
	
	       -- Illegal parameter value. Must be between 0 and 32.
	
	
	Page 552: Text Correction
	-------------------------
	
	On page 552, in the second to last paragraph, in the second sentence:
	
	Change:
	"The text of a stored procedure (including comments) is stored in syscomments552
	which is typically useful."
	
	To:
	"The text of a stored procedure (including comments) is stored in syscomments
	which is typically useful."
	
	
	Page 557: Change Table To Procedure
	-----------------------------------
	
	On page 557, in the second to last paragraph, in the second to last sentence,
	change "table" to "procedure".
	
	Change:
	"Because the scoping of a private temporary table is specific..."
	
	To:
	"Because the scoping of a private temporary procedure is specific..."
	
	
	Page 579: Change Sp_configuration To Sp_configure
	-------------------------------------------------
	
	On page 527, in the second to last paragraph, in the last sentence:
	
	Change:
	"...(but only if sp_configuration 'nested triggers' ist set to 1, as we'll see in
	a moment)."
	
	To:
	"...(but only if sp_configure 'nested triggers' ist set to 1, as we'll see in a
	moment)."
	
	Also on page 527, in the last paragraph, in the second sentence:
	
	Change:
	"...depends on the current sp_configuration value..."
	
	To:
	"...depends on the current sp_configure value..."
	
	
	Page 585: Text Correction
	-------------------------
	
	On page 585, in the second full paragraph, in the second to last sentence:
	
	Change:
	"...(or varchar(4000) for Unicode data)..."
	
	To:
	"...(or nvarchar(4000) for Unicode data)..."
	
	
	Page 590: Missing Parentheses In Code
	-------------------------------------
	
	On page 590, in the second set of code, add parentheses around the seventh line.
	
	Change:
	
	  @sizeneeded=DATALENGTH(pr_info) -
	     PATINDEX('%Washington%',pr_info) - 1
	
	To:
	
	  @sizeneeded=DATALENGTH(pr_info) -
	     (PATINDEX('%Washington%',pr_info) - 1)
	
	
	Page 591: Change READTEXT To READINDEX
	--------------------------------------
	
	On page 591, in the first paragraph after the Note, in the second sentence:
	
	Change:
	"READINDEX treats the first character as offset 0."
	
	To:
	"READTEXT treats the first character as offset 0."
	
	
	Page 592: Byte Corrections
	--------------------------
	
	On page 592, in the first paragraph after Note, in the fourth sentence:
	
	Change:
	"For example, with the default network packet size of 4192 bytes (4 KB), a good
	read size would be about 4100 bytes, assuming that your application could deal
	with that size."
	
	To:
	"For example, with the default network packet size of 4096 bytes (4 KB), a good
	read size would be about 4000 bytes, assuming that your application could deal
	with that size."
	
	
	Page 594: Change Bytes To Characters
	------------------------------------
	
	On page 594, in the first paragraph, in the third to last sentence, change
	"bytes" to "characters".
	
	Change:
	"The delete_length parameter tells you how many bytes to delete.."
	
	To:
	"The delete_length parameter tells you how many characters to delete.."
	
	
	Page 595: Example 2 Code Correction
	-----------------------------------
	
	On page 595, in the eighth line of code:
	
	Change:
	
	  IF @mytextptr IS NOT NULL AND @pat_offset >= 0
	
	To:
	
	  IF @mytextptr IS NOT NULL AND @pat_offset > 3
	
	
	Page 656: Corrections To Results From Sp_describe_cursor
	--------------------------------------------------------
	
	On page 656, in the information returned that immediately follows the code:
	
	Change Status from:
	"0"
	
	To:
	"1"
	
	Change Cursor_rows from:
	"0"
	
	To:
	"3"
	
	Change Fetch_status from:
	"0"
	
	To:
	"-9"
	
	
	Page 659: Sp_describe_cursor_columns Returns ID Of Table
	--------------------------------------------------------
	
	On page 659, in the last paragraph, in the third sentence:
	
	Change:
	"The information it returns includes the name of the column, the datatype, the
	ordinal position of the column, and the name of the table from which the cursor
	is selected."
	
	To:
	"The information it returns includes the name of the column, the datatype, the
	ordinal position of the column, and the ID of the table from which the cursor is
	selected."
	
	
	Page 667: Code Correction In UPDATE Statement
	---------------------------------------------
	
	On page 667, in the first block of code, in the second line change 10 to 7.
	
	Change:
	
	  SET phone = '425' + substring(phone, 4, 10)
	
	To:
	
	  SET phone = '425' + substring(phone, 4, 7)
	
	
	Page 670: Several Code Corrections
	----------------------------------
	
	On page 670, in the second block of code, correct first four lines of code as
	follows.
	
	Change:
	
	  CREATE TRIGGER update_budget
	  ON budget FOR update AS
	
	  IF (@@rowcount > 0 BEGIN
	       PRINT 'Only one row can be updated at a time'
	
	To:
	
	  CREATE TRIGGER update_budget
	  ON budget FOR update AS
	
	  IF (@@rowcount = 0) RETURN
	
	  IF (@@rowcount > 1) BEGIN
	       PRINT 'Only one row can be updated at a time'
	
	
	Page 672:  ASCII Value For A Is 65
	----------------------------------
	
	On page 672, in the last paragraph, in the first sentence change 64 to 65.
	
	Change:
	"...and add that number to 64, which is the ASCII value for A."
	
	To:
	"...and add that number to 65, which is the ASCII value for A."
	
	
	Page 673: Change 1000 To 100
	----------------------------
	
	On page 673, in the thirteenth line of code:
	
	Change:
	
	  /* Insert 1000 rows of data */ 
	
	To:
	
	  /* Insert 100 rows of data */ 
	
	
	Page 687: Sentence Correction
	-----------------------------
	
	On page 687, in the second paragraph, correct the seventh sentence as follows.
	
	Change:
	"In fact, the data was not inserted in order (although a clustered index exists,
	so if data were selected without an ORDER BY, it would seem to be in order)."
	
	To:
	"In fact, the data was not inserted in order."
	
	
	Page 700: SELECT List Correction
	--------------------------------
	
	On page 700, in the third line of code:
	
	Change:
	
	  M.mgr_no, M.emp_name AS Manager, M.emp_title AS Mgr_title
	
	To:
	
	  M.emp_no, M.emp_name AS Manager, M.emp_title AS Mgr_title
	
	
	Page 704: Missing Commas in Code
	--------------------------------
	
	On page 704, in the first five lines of code after comments:
	
	Change:
	
	  CREATE TABLE #orgchart
	  (seq_no		int	IDENTITY
	  org_level		int	NOT NULL
	  emp_id		int	NOT NULL
	  )
	
	To:
	
	  CREATE TABLE #orgchart
	  (seq_no		int	IDENTITY,
	  org_level  	int	NOT NULL,
	  emp_id		int	NOT NULL
	  )
	
	
	Page 711: Missing Comma In Select Statement
	-------------------------------------------
	
	On page 711, in the first complete block of code, in the sixth line down:
	
	Change:
	
	  SUM(CASE qtr WHEN 4 THEN value ELSE 0 END) AS q4
	
	To:
	
	  SUM(CASE qtr WHEN 4 THEN value ELSE 0 END) AS q4,
	
	
	Page 733: Text Corrections
	--------------------------
	
	On page 733, in the first paragraph after Note, in the first sentence:
	
	Change:
	"...if they had decided to always access the customer table first and the parts
	table second."
	
	To:
	"...if they had decided to always access the authors table first and the
	publishers table second."
	
	
	Page 751: Calling Sp_getbindtoken Must Include The Word OUTPUT
	--------------------------------------------------------------
	
	On page 751, in the second line of code:
	
	Change:
	
	  EXEC sp_getbindtoken @token
	
	To:
	
	  EXEC sp_getbindtoken @token OUTPUT
	
	
	Page 809: LIKE '%Jon' Is Not Sargable
	-------------------------------------
	
	On page 809, in the middle paragraph, in the second to last sentence:
	
	Change:
	"For example, LIKE 'Jon%' is sargable but LIKE 'Jon%' is not because the wildcard
	(%) at the beginning prevents the use of an index."
	
	To:
	"For example, LIKE 'Jon%' is sargable but LIKE '%Jon' is not because the wildcard
	(%) at the beginning prevents the use of an index."
	
	
	Page 812: Sentence Correction
	-----------------------------
	
	On page 812, in the first paragraph, in the third sentence:
	
	Change:
	"So if the employee table has a clustered index on the employee ID (emp_id)
	column, the nonclustered index on lname contains both the last name and the ID
	for every data row, stored in the leaf level of the index.
	
	To:
	So if the employee table has a clustered index on the employee ID (emp_id)
	column, the nonclustered index described earlier, on lname, fname and hire_date,
	will also contain the emp_ID for every data row, stored in the leaf level of the
	index."
	
	
	Page 825 & 827: Code Corrections
	--------------------------------
	
	On pages 825 & 827, in the second and third lines of code on each page:
	
	Change:
	
	  FROM employee.dept_no empl JOIN department.dept_no dept
	  ON dept.deptno=empl.deptno
	
	To:
	
	  FROM employee empl JOIN department dept
	  ON dept.dept_no=empl.dept_no
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0517-3 SQL DEVBOOK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
