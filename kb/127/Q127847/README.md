---
layout: page
title: "Q127847: PRB: Cannot Set a One-to-Many Relationship in Data Designer"
permalink: /kb/127/Q127847/
---

## Q127847: PRB: Cannot Set a One-to-Many Relationship in Data Designer

	Article: Q127847
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Data Designer, when you drag the mouse from one table to another to draw
	a one-to-many relationship:
	
	- The cursor does not change and no relation is drawn.
	
	-or-
	
	- The relationship is one-to-one and cannot be set to one-to-many.
	
	CAUSE
	=====
	
	The relationships established in the Database Designer are persistent and are
	used for data integrity. A persistent relation is established from tag to tag,
	and the nature of the tag determines the type of relationship created.
	
	WORKAROUND
	==========
	
	You must have an index created in both the source and target tables before a
	relationship may be established. The type of relationship that is created is
	determined by the type of index in the target (child) table. To create a
	one-to-many relationship, the key index type in the target table must be set to
	'regular'. The following pointers may be helpful when creating relationships
	between tables.
	
	Ensure that you are dragging the mouse from an index tag to an index tag, and
	verify that the key you are using in the source (parent) table is not a regular
	key.
	
	If you want to create a one-to-many relationship, verify that the key in the
	target table is not a candidate or primary key. These types of indexes require
	that no two records have the same value. It is therefore impossible to have a
	candidate or a primary key as the target for a one-to-many relationship.
	
	Once you set the relationship, it is shown in the Database Designer as a line
	connecting the two tables.
	
	STATUS
	======
	
	This behavior by design.
	
	REFERENCES
	==========
	
	Visual FoxPro for Windows "User's Guide", version 3.0, Chapter 5, "Collecting
	Tables into a Database."
	
	Visual FoxPro for Windows "Developer's Guide", version 3.0, Chapter 6, "Using
	Databases."
	
	Additional query words: VFoxWin modify structure 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
