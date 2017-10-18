---
layout: page
title: "Q128877: UT1x: Upsizing Wizard Does Not Allow Nulls in Foreign Key"
permalink: kb/128/Q128877/
---

## Q128877: UT1x: Upsizing Wizard Does Not Allow Nulls in Foreign Key

	Article: Q128877
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If after you have upsized Microsoft Access tables to Microsoft SQL Server, you
	attempt to save a record in which you have entered a null in a foreign key
	field, you may receive the following error messages
	
	  ODBC insert failed on attached table '<Childtablename>'
	
	and then:
	
	  Cannot add or change record. Referential integrity rules require a related
	  record in table '<Parenttablename>'
	
	CAUSE
	=====
	
	The Upsizing Wizard creates an insert trigger when two tables with referential
	integrity are upsized. Entering a null in a foreign key field causes an error
	with this trigger. This error also occurs when you insert a record using the
	Microsoft SQL Server tools, such as ISQL/w.
	
	RESOLUTION
	==========
	
	To work around this problem, you must change the insert trigger to allow null
	values in the foreign key field. Please see the "Steps to Reproduce Problem"
	section of this article for an example of this resolution.
	
	NOTE: This resolution assumes that you are familiar with Transact-SQL, the
	programming language used in Microsoft SQL Server. For more information about
	Transact-SQL, please refer to the "Transact-SQL Reference" manual for Microsoft
	SQL Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access Upsizing
	Tools version 1.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the sample database NWIND.MDB.
	
	2. Upsize the Categories table and the Products table, using all the default
	  settings. The Categories table is the parent table, and the Products table is
	  the child table; Category ID is the foreign key.
	
	3. Attempt to enter a record in the newly attached Products table
	  (Products_remote). Do not enter a value in the Category ID field. Note that
	  you receive the error messages described earlier in this article.
	
	To change the trigger to allow null values, change the original trigger created
	by the Upsizing Wizard that reads as follows.
	
	  ' Prevent inserts if no matching key in 'Categories'.
	
	       IF (SELECT COUNT(*) FROM inserted) !=
	       (SELECT COUNT(*) FROM Categories, inserted WHERE _
	       (Categories.Category_ID = inserted.Category_ID))
	        BEGIN
	            RAISERROR 44447 "Cannot add or change record._
	            Referential integrity rules require a related record in_
	            table 'Categories'."
	            ROLLBACK TRANSACTION
	        END
	
	to read:
	
	  ' Prevent inserts if no matching key in 'Categories'.
	
	       IF (SELECT Category_ID FROM inserted) IS NOT NULL
	       IF (SELECT COUNT(*) FROM inserted) !=
	       (SELECT COUNT(*) FROM Categories, inserted WHERE _
	       (Categories.Category_ID = inserted.Category_ID))
	       BEGIN
	           RAISERROR 44447 "Cannot add or change record._
	           Referential integrity rules require a related record in_
	           table 'Categories'."
	           ROLLBACK TRANSACTION
	       END
	
	NOTE: In the sample code above, an underscore (_) is used as a line- continuation
	character. Remove the underscore from the end of the line when re-creating this
	code.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAccessSearch kbAccessUpsizingTools100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
