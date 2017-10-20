---
layout: page
title: "Q172362: Directory Replicator Service Fails to Start with Event 7000"
permalink: /kb/172/Q172362/
---

## Q172362: Directory Replicator Service Fails to Start with Event 7000

{% raw %}

	Article: Q172362
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory Replicator Service fails to start with the following error message:
	
	  Could not start the Directory Replicator service on <computer_name>
	  Error 0005: Access is Denied.
	
	The event viewer records the following event:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  The Directory Replicator service failed to start due to the following error.
	  Access is denied
	
	CAUSE
	=====
	
	The Directory Replicator Service is configured to start under an account other
	than the system account, and this particular account does not have at least Read
	access to the %SystemRoot%\System32 or the %SystemRoot%\System32\Repl
	subdirectories.
	
	RESOLUTION
	==========
	
	Verify that the account has at least Read (R) access to the %SystemRoot%\
	System32 and the %SystemRoot%\System32\Repl subdirectories and the files located
	therein.
	
	MORE INFORMATION
	================
	
	For replication to complete successfully, the Replicator group on the import
	computer will also need to have at least Change permissions on the
	%SystemRoot%\System32\Repl\Import and the %SystemRoot%\...\Import\Scripts
	subdirectories.
	
	Additional query words: repl repluser
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
