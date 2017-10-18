---
layout: page
title: "Q136855: When to Use Buffering, Referential Integrity, and Triggers"
permalink: kb/136/Q136855/
---

## Q136855: When to Use Buffering, Referential Integrity, and Triggers

	Article: Q136855
	Product(s): Microsoft FoxPro
	Version(s): 3.00 | 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the differences between buffering, referential integrity
	(RI), and triggers, and it describes when each should be used.
	
	MORE INFORMATION
	================
	
	Buffering
	---------
	
	To directly update tables or records in a multiuser environment, use row and
	table buffering. This eliminates the need to place the data from a record into
	memory variables (memvars), edit the memvars, check the record for changes, and
	then write the changes to the record. See the Buffering topic in the Visual
	FoxPro Help file for more detailed information.
	
	Referential Integrity (RI)
	--------------------------
	
	This refers to the rules that govern data integrity between related tables
	(primary key/foreign key). In addition to using engine-level enforcement of
	primary keys, you can create stored procedures that take certain actions when a
	row is updated, deleted, or inserted.
	
	The RI Builder will create one of the following stored procedures for each
	action:
	
	- Update: Ignore, Cascade, or Restrict
	
	- Delete: Ignore, Cascade, or Restrict
	
	- Insert: Ignore and Restrict
	
	The names of these stored procedures are placed under the proper trigger in the
	Table Properties section of the Table Designer.
	
	Triggers
	--------
	
	Record-level event code runs after an insert, update, or delete. triggers run
	after rules, and they do not run when buffering is in effect until TABLEUPDATE()
	is issued. In the case of row buffering, the record pointer is moved.
	
	Triggers can be created by using the CREATE TRIGGER command or by adding a stored
	procedure to the Database Container and referencing the stored procedure in the
	appropriate trigger in the Table Properties dialog box of the Table Designer.
	
	Buffering and RI can be used independently of each other, and the use of RI does
	not necessarily mandate that buffering be used. In a multiuser environment, you
	would typically use buffering whether or not any RI was in place.
	
	Although triggers are typically used to implement (by using the RI Builder)
	Cascade or Restrict capabilities on Update and Delete, or Restrict capabilities
	on Insert, these Triggers can also be used to call stored procedures that
	undertake actions wholly unrelated to RI. For example, an Update Trigger might
	call a stored procedure that sends an email message to another department to
	notify them of a change.
	
	Additional query words: VFoxMac VFoxWin multi-user
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP600
	Version           : 3.00 | 3.00b
	
	=============================================================================
	
