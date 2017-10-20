---
layout: page
title: "Q128628: PC Ext: External Reports Incorrect Version"
permalink: /kb/128/Q128628/
---

## Q128628: PC Ext: External Reports Incorrect Version

{% raw %}

	Article: Q128628
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0a,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade EXTERNAL.EXE from a previous version, the Mail External
	program displays the incorrect version information.
	
	CAUSE
	=====
	
	This may happen if you try to perform the upgrade while the Mail External
	program is running, because both EXTERNAL.EXE and ASYNC.OVL are locked open
	during the External process.
	
	RESOLUTION
	==========
	
	1. Stop the External Message Transfer Agent (MTA).
	
	2. Backup the following files from the \MAILEXE directory using the MS-DOS Copy
	  command:
	
	  EXTERNAL.EXE
	  ASYNC.OVL
	  X25ATLAN.OVL
	  X25EICON.OVL
	
	3. Copy the new files to the existing \MAILEXE directory:
	
	  EXTERNAL.EXE
	  ASYNC.OVL
	  X25ATLAN.OVL
	  X25EICON.OVL
	
	4. Start the External MTA.
	
	MORE INFORMATION
	================
	
	There are three ways to display the version of the Mail External program:
	
	1. Run the External program (recommended).
	
	2. Type the following, and press ENTER:
	
	  " External /?" (without the quotation marks)
	
	3. Type the following, and press ENTER:
	
	  "External /h" (without the quotation marks)
	
	With version 3.2.16 of the Mail External program, the use of the command line
	switches will result in an Invalid Option error, and then it will display
	3.2.16, even if the .OVL files are incorrect. The preferred method of checking
	the version is to run EXTERNAL.EXE.
	
	All of the update files including EXTERNAL.EXE and all three .OVL files should be
	copied to the \MAILEXE directory. When the Mail External program runs, it takes
	the version number from all ASYNC.OVL files, even if the /CommDisable or -a
	option is used. The Mail External program also checks the other .OVL files
	(X25ATLAN.OVL and X25EICON.OVL) during an X.25 connection.
	
	
	
	Additional query words: 3.00a 3.20 3.20a external.ini command line
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a
	Version           : WINDOWS:3.0a,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
