---
layout: page
title: "Q98355: How to Update a Master File from a Transaction File"
permalink: /kb/098/Q98355/
---

## Q98355: How to Update a Master File from a Transaction File

{% raw %}

	Article: Q98355
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro UPDATE command allows existing records in a database to be updated
	from information contained in a second database, based on a common key field
	between the two databases. The UPDATE command does not allow new records in the
	second database to be automatically added to the first database. The following
	procedure can be used to update existing records as well as add new records.
	
	MORE INFORMATION
	================
	
	The following procedure uses the UPDATE command to first update existing
	records. A SELECT SQL command determines which records in the new data file are
	not contained in the original data file. An APPEND command appends the results
	of the SELECT command into the original database.
	
	     * oldfile = existing .DBF file
	     * newfile = .DBF with updated and new records to add to oldfile
	
	     * NOTE: For the UPDATE command to be successful, both databases
	     * must have a key field in common and be ordered on that key field.
	
	     SELECT A
	        USE oldfile ORDER keyfield
	     SELECT B
	        USE newfile ORDER keyfield
	     SELECT oldfile
	
	     * Note: The following command must be edited to allow for
	     * replacing each field in the oldfile DBF with the corresponding
	     * field in the newfile DBF.
	
	     UPDATE ON keyfield FROM newfile ;
	        REPLACE oldfile.field1 WITH newfile.field1, ;
	        oldfile.field2 WITH newfile.field2, ;
	        oldfile.field3 WITH newfile.field3
	
	     SELECT *;
	        FROM newfile ;
	        INTO TABLE myupdate ;
	        WHERE newfile.keyfield NOT IN ;
	              (SELECT oldfile.keyfield FROM oldfile)
	     SELECT oldfile
	     APPEND FROM myupdate
	     SELECT myupdate
	     USE
	     SET SAFETY OFF
	     DELETE FILE myupdate
	     SET SAFETY ON
	
	For more information, see the SELECT, SELECT SQL, UPDATE, and APPEND FROM
	commands in the FoxPro 2.0 "Commands & Functions" manual or the FoxPro 2.5
	"Language Reference."
	
	Additional query words: VFoxWin FoxDos FoxWin 2.00,
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP600
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	

{% endraw %}
