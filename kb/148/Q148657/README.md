---
layout: page
title: "Q148657: Err Msg: &quot;The network name was deleted&quot; w/ DIR in Batch File"
permalink: /kb/148/Q148657/
---

## Q148657: Err Msg: &quot;The network name was deleted&quot; w/ DIR in Batch File

{% raw %}

	Article: Q148657
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the command NET SHARE in a batch file to delete an existing share
	and recreate the same share under a different name, and then use the DIR command
	in one of the directories on that share, the following error message pop-up
	dialog box appears prompting you to choose OK before the batch file can
	continue:
	
	  CMD.EXE-System error
	  The network name was deleted
	  OK
	
	Here is a batch file example:
	
	Assume there is a directory A shared under the name B on the local computer where
	the batch file is running:
	
	  NET SHARE B=d:\A
	  DIR \\<server name>\B\<directory_name>
	  NET SHARE B /d
	
	This batch file runs fine the first time, but generates the error message above
	when you run it the second time.
	
	In the Virtual DOS Machine (VDM) window the following error message appears:
	
	  The name specified is no longer available.
	
	
	CAUSE
	=====
	
	CMD.EXE caches the file handle for the old network share and fails to update it
	when the share is recreated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
