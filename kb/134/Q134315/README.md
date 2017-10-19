---
layout: page
title: "Q134315: FIX: Cannot Open Database and No Message Is Displayed"
permalink: /kb/134/Q134315/
---

## Q134315: FIX: Cannot Open Database and No Message Is Displayed

	Article: Q134315
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to open a Visual FoxPro database (.DBC) by using the menu
	options or by clicking the Open button on the Standard toolbar, Visual FoxPro
	does not open the database or issue a message if the database has been open
	exclusively by another user or in a different private data session.
	
	CAUSE
	=====
	
	The database is already open exclusively on a second machine or in another
	Visual FoxPro session on the same machine. When the database is already open,
	Visual FoxPro echoes the OPEN DATABASE command to the Command window, but does
	not execute it.
	
	WORKAROUND
	==========
	
	Here are three possible workarounds:
	
	- Attempt to open the database by executing the OPEN DATABASE command that was
	  echoed to the Command window. The error "File Access Denied" occurs because
	  the database is already opened exclusively.
	
	-or-
	
	- Execute the OPEN DATABASE command in a program.
	
	-or-
	
	- Open the database SHARED on all machines and in each Visual FoxPro session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	In a network environment:
	
	1. Open a database exclusively.
	
	2. From a second machine running Visual FoxPro, attempt to Open the same
	  database exclusively. On the File menu, click Open, or click the Open button
	  on the Standard Visual FoxPro toolbar.
	
	From one machine using two Visual FoxPro sessions:
	
	1. Open a database exclusively.
	
	2. Run Visual FoxPro a second time, keeping the first session of Visual FoxPro
	  running. Attempt to open the same database exclusively. On the File menu,
	  click Open, or by click the Open button on the Standard Visual FoxPro
	  toolbar.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
