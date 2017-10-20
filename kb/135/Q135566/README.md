---
layout: page
title: "Q135566: FIX: GATHER FROM Command Checks Lock Status of Table"
permalink: /kb/135/Q135566/
---

## Q135566: FIX: GATHER FROM Command Checks Lock Status of Table

{% raw %}

	Article: Q135566
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the GATHER FROM <array> FIELDS command specifies fields that are not
	in the target table, it examines the source table from which the fields were
	scattered. If that source table is shared by another user and that table's
	current record is locked, Visual FoxPro displays the following legend on the
	status bar:
	
	  Attempting to lock...Press ESC to cancel.
	
	When the user presses ESC, a message box appears explaining "Record is in use by
	another user."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	In Visual FoxPro 5.0, the message "Variable 'FLD2' is not found" appears rather
	than the locking message.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	You will need two computers sharing a common network to reproduce this problem.
	
	1. On one of the computers, create the following tables in Visual FoxPro:
	
	  Test1 has this structure:
	
	  FLD1 c(10)
	  FLD2 c(10)
	  FLD3 c(10)
	
	  Test2 has this structure (a single field):
	
	  FLD1 c(10)
	
	2. Share the directory containing the two tables, with READ/WRITE privileges.
	
	3. On the second computer, connect to the network drive just shared. Then use
	  the SET DEFAULT TO command to set the new drive as the default.
	
	4. On both computers, issue the SET EXCLUSIVE OFF command.
	
	5. On one computer, issue these commands:
	
	     USE Test1
	     =RLOCK()
	
	6. On the other computer, issue these commands:
	
	     USE Test1 IN 0
	     USE Test2 IN 0
	     SELECT Test1
	     SCATTER TO foot FIELDS fld1, fld2, fld3
	     SELECT Test2
	     GATHER FROM foot FIELDS fld1, fld2, fld3
	
	7. Note the message on the status bar.
	
	8. Press ESC, and note the message on the status bar.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbnetwork kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
