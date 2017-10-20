---
layout: page
title: "Q127846: How to Use CANDIDATE Keys"
permalink: /kb/127/Q127846/
---

## Q127846: How to Use CANDIDATE Keys

{% raw %}

	Article: Q127846
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A CANDIDATE key is an index expression that does not allow duplicate or NULL
	values. This articles provides examples that demonstrate the use of candidate
	keys.
	
	MORE INFORMATION
	================
	
	By definition, a candidate key is a single field or a composite expression that
	meets the requirements of a primary key. It is a database design requirement
	that tables have one and only one primary key. A table might however contain
	several unique identifiers. Once the primary key has been identified, other
	unique keys are referred to as candidate keys.
	
	In Visual FoxPro, primary keys are used to reinforce data integrity, and are
	therefore only available for tables included in a database. Free tables on the
	other hand can have candidate keys. Candidate keys can be used to ensure that a
	record is unique.
	
	Following are two scenarios that might require the use of a candidate key in
	addition to a primary key.
	
	Employee table: you have a table that records information about employees. Each
	employee can be identified by an employee identification number (primary key)
	and also by a social security number (candidate key).
	
	Medical system: a table records patient information. Two fields can uniquely
	identify each patient: a medical record number (unique key) and a social
	security number (candidate key). The primary key provides a more intuitive way
	to search the data.
	
	REFERENCES
	==========
	
	"Developer's Guide", Visual FoxPro version 3.0, chapter 7, Working with Tables.
	
	"A Guide to the SQL Standard", C.J. Date, p. 44, Addison-Wesley.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
