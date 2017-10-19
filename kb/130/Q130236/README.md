---
layout: page
title: "Q130236: Explanation of Referential Integrity Rules for INSERT"
permalink: /kb/130/Q130236/
---

## Q130236: Explanation of Referential Integrity Rules for INSERT

	Article: Q130236
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is a general explanation of Referential Integrity Rules for INSERT included
	with the Referential Integrity Builder provided with Visual FoxPro.
	
	MORE INFORMATION
	================
	
	Visual FoxPro allows only "Restrict" or "Ignore" referential integrity rules for
	Inserts on a child table. If you choose "Restrict," Visual FoxPro prevents
	orphan records. If you choose "Ignore," Visual FoxPro does not protect against
	orphan records.
	
	The Restrict and Ignore options on Insert are the only choices available because
	the rule is expressed or enforced from the child's point of view. The "Delete"
	and "Update" tabs provide the additional choice of Cascade because the point of
	view is taken from the parent. It is not possible to Cascade from the child's
	point of view. In other words, there is nothing below a child.
	
	The "point of view" refers to the perspective taken from the current table in a
	relation. The "point of view" of each rule is expressed in highlighted text in
	each Tab of the Referential Integrity Builder dialog.
	
	Because the child point of view is taken on the Insert rules it is asking, "what
	do you want to do when something is done/Inserted in the child table?" In
	referential terms, the "restrict" rule says a child record's foreign key value
	must be present in the parent table's primary key before the record can be
	added.
	
	Both of the other referential integrity options (Update and Delete) take the
	point of view of the parent table; in effect, they ask, "what do you want to do
	when something is done in the parent?"
	
	In referential terms this means when the primary-key value in the parent changes,
	you may or may not want something done to the matching foreign-key records in
	the child table.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
