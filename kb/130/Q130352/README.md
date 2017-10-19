---
layout: page
title: "Q130352: How to Remove Table from Persistent Relation with Program"
permalink: /kb/130/Q130352/
---

## Q130352: How to Remove Table from Persistent Relation with Program

	Article: Q130352
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows three methods you can use to remove a table from a Persistent
	Relation.
	
	MORE INFORMATION
	================
	
	Use the following code to create an example database (DBC) with two tables in a
	Persistent Relation:
	
	     CREATE DATABASE pr_dbc
	     CREATE TABLE pr_Paren (cid c(3) PRIMARY KEY, cfld2 c(3))
	     CREATE TABLE pr_Child (cid c(3) REFERENCES pr_Paren TAG cid, ;
	        cfld2 c(3), cfld3 c(3))
	     MODIFY DATABASE      && To view the persistant relationship
	
	Method One - Risky
	------------------
	
	Drop or remove the PRIMARY KEY from the parent table as in this example:
	
	     ALTER TABLE pr_Paren DROP PRIMARY KEY
	
	This command successfully removes the parent table from any and all Persistent
	Relations in which the table is participating. It also removes the PRIMARY Key
	index tag from the table. This is not a "safe" method to use because of the
	scope of its effect.
	
	Method Two - Safer
	------------------
	
	Delete the tag in the child table that is part of the Persistent Relation as in
	this example:
	
	     USE pr_Child
	     DELETE TAG cid
	
	This method breaks the Persistent Relation, but it also deletes the tag in the
	pr_Child table.
	
	Method Three - Best Method
	--------------------------
	
	Use the following command:
	
	     ALTER TABLE-SQL's DROP FOREIGN KEY TAG <Tagname> [SAVE]
	
	This command successfully removes the child table from the Persistent Relation
	and the [SAVE] clause preserves the child table's index tag. Here is an example
	using the example database:
	
	     ALTER TABLE pr_Child DROP FOREIGN KEY TAG cid SAVE
	
	If the SAVE clause is not used, the cid tag is deleted from the pr_Child table.
	
	Methods two and three are safer than method one because they have a relatively
	narrower scope of effect with fewer global changes. Removing the primary key, as
	method one does, could destroy one or more other persistant relations, which you
	may not want to do.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
