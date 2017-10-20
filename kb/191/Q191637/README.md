---
layout: page
title: "Q191637: PRB: SEEK Returns Different Results Depending on No. of Fields"
permalink: /kb/191/Q191637/
---

## Q191637: PRB: SEEK Returns Different Results Depending on No. of Fields

{% raw %}

	Article: Q191637
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SEEK command returns different results depending on the number of fields in
	a table. If there are 62 or less fields in a table, the SEEK command returns
	false when another user unmarks a record that has been marked for deletion . If
	there are 63 or more fields in the table, the SEEK command returns true. The
	expected result would be that SEEK would return false. Make sure that the SET
	REFRESH is set to zero and that SET DELETED is on.
	
	CAUSE
	=====
	
	This seems to occur because FoxPro reads the table from the hard drive and
	retrieves the data if there are more than 62 fields in the table. If there are
	62 fields or less, then FoxPro reads the data from the cache.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The preceding scenario depends on having two sessions of FoxPro open and marking
	a record for deletion in a table in the first session, then opening the same
	table in a second session. After switching back to the first session and
	recalling the record, the SEEK command returns false if there are 62 or less
	fields in the table or it returns true if there are 63 or more fields in the
	table. The SET REFRESH must be set to zero and SET DELETED ON, for this to
	occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open two sessions of FoxPro. Issue the SET REFRESH TO 0,0 command in both of
	  the sessions.
	
	2. Open a table, shared, that contains 62 or less fields in the first session of
	  FoxPro. Mark the first record for deletion and move the cursor off the
	  record.
	
	3. Switch to the second session of FoxPro and issue a SET DELETED ON. Open the
	  same table, shared, and set the order to one of the fields that has an index.
	
	4. Switch back to the first session of FoxPro and unmark the deletion from the
	  first record and move the cursor off the record.
	
	5. Switch back to the second session and issue the following command, giving the
	  SEEK command the value of the field that is indexed in the first record that
	  you unmarked for deletion the first FoxPro session:
	
	        WAIT WINDOW IIF(SEEK("<value>"), ".T.", ".F.")
	
	  NOTE: The SEEK command returns false.
	
	6. Follow steps 2-5 using a table with 63 or more fields. Note that the SEEK
	  command now returns true.
	
	Additional query words: kbVFp300b kbVFp500 kbVFp500a kbVFp600 kbXBase KbDBFDBC kbDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
