---
layout: page
title: "Q133357: Differences Between Temporary and Permanent Relationships"
permalink: /kb/133/Q133357/
---

## Q133357: Differences Between Temporary and Permanent Relationships

	Article: Q133357
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Relationships between tables can be established to link the tables together
	based on matching values in a field common to all the tables. The relationships
	can be created to exist from one FoxPro session to another (permanent or
	persistent) or temporarily for each time a table is used. Each type relationship
	is created differently and exists or behaves, in Visual FoxPro, differently.
	
	Generally, both types of relationships are used regularly in Visual FoxPro
	programming.
	
	MORE INFORMATION
	================
	
	Permanent or Persistent Relationships
	-------------------------------------
	
	Permanent or persistent relationships can only exist between tables stored in a
	database container (as opposed to free tables). The relationship itself is
	stored within the database container and therefore can exist from one Visual
	FoxPro session to another until the relationship is explicitly terminated.
	
	Persistent relationship can be created in the Database Designer using the table
	indexes (as opposed to using the table fields).
	
	Because persistent relationships are stored in the database container certain
	functions can use these relationships as default links. Each time the tables
	involved in the persistent relationship are used in the Query, View, or Data
	Environment Designers, these persistent relationships are used as the default
	links. Persistent relationships are used to store referential-integrity
	information.
	
	Temporary Relationships
	-----------------------
	
	Temporary relationships can exist between free tables or tables stored in a
	database container. However, temporary relationships cannot be created between a
	free table and a table in database container.
	
	To create temporary relationships, use the SET RELATION TO command or create them
	visually in the View window. They must be recreated each time the table is
	used.
	
	Another major difference between a Persistent and Temporary relationship is that
	the Temporary relationship causes the record pointer in the child table to move
	automatically when the parent record pointer moves.
	
	REFERENCES
	==========
	
	Additional information regarding the definition, creation and removal of
	Persistent and Temporary relationships can be found in the Visual FoxPro Help
	menu and in the Visual FoxPro User's and Developer's Guides: Visual FoxPro
	User's Guide, Page 67; Developer's Guide, Pages 131, 183.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
