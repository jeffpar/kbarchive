---
layout: page
title: "Q177062: PRB: Update Conflict When Key Field Is Not Unique in Remote View"
permalink: kb/177/Q177062/
---

## Q177062: PRB: Update Conflict When Key Field Is Not Unique in Remote View

	Article: Q177062
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Update Conflict" appears when deleting, editing, or inserting records
	in a remote view if the key field chosen in the Update Criteria tab is not a
	unique field.
	
	CAUSE
	=====
	
	If FoxPro finds duplicate keys in the local buffer of the table, it generates
	this error. FoxPro uses the key field to uniquely identify the correct record to
	delete or edit. If FoxPro did not identify the record, it could delete or edit
	the wrong records.
	
	RESOLUTION
	==========
	
	Here are two workarounds for this problem:
	
	- Design the tables with a unique key field and mark the field as the key field
	  in the Update Criteria tab of the view designer.
	
	  -or-
	
	- If creating a unique key field is impossible, select multiple fields to be
	  the keys in the Update Criteria tab. If these fields combine to make a unique
	  key, update conflicts will not occur because FoxPro can uniquely identify the
	  record.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	User's Guide Online, Chapter 5: Updating Data with Views
	
	Technical Papers Online: Client Server Development
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by David
	Botzenhart, Microsoft Corporation
	
	
	Additional query words: remote view update delete
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
