---
layout: page
title: "Q128875: UT1x: No Referential Integrity Triggers Using Upsizing Tools"
permalink: kb/128/Q128875/
---

## Q128875: UT1x: No Referential Integrity Triggers Using Upsizing Tools

	Article: Q128875
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbusage kbEnableSight kbEnableMove
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upsize two tables from Microsoft Access with the Upsizing Wizard,
	referential integrity triggers are not created.
	
	CAUSE
	=====
	
	There is an outer join between the two tables. To check the relationship type
	for the tables, choose Relationships from the Edit menu, double-click the line
	between the two tables, and then choose the Join Type button. If join type 2 or
	3 is selected, it is an outer join.
	
	RESOLUTION
	==========
	
	Change the join type to an equi-join rather than an outer join. The only effect
	that using an outer join in the relationship has (other than causing this
	problem) is that this join will be the default join when you create a query
	based on these two tables.
	
	REFERENCES
	==========
	
	Microsoft Access "User's Guide," version 2.0, Chapter 7, "Relationship Types,"
	pages 127-129
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbEnableSight kbEnableMove 
	Technology        : kbAccessSearch kbAccessUpsizingTools100
	Version           : WINDOWS:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
