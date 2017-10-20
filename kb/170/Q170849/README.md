---
layout: page
title: "Q170849: Restore of WINS Database to a Different Server Fails"
permalink: /kb/170/Q170849/
---

## Q170849: Restore of WINS Database to a Different Server Fails

{% raw %}

	Article: Q170849
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Restore Database option in WINS Manager to restore the WINS
	database from one WINS server to a different WINS server, you may notice that
	you receive the following message:
	
	  WINS Manager
	  Restore succesfully completed.
	
	NOTE: 'Successfully' is misspelled in the actual error message.
	
	However, you notice when you view the database in WINS Manager it is a new
	database and is not a restored copy of the original.
	
	The location of the WINS directory path is contained in the WINS backup set. If
	you copy Wins.mdb from the backup set location to the new WINS folder, when you
	start the WINS service you may receive the following error message:
	
	  WINS could not come up due to missing/corrupt database.
	  Restore the database using WINS Manager or winscl.exe and then restart.
	  If WINS still does not come up, start with a fresh copy of the database.
	
	CAUSE
	=====
	
	You are attempting to restore the WINS database to a location that is different
	from where the original database was stored.
	
	For example, if the original database was stored in the following location:
	
	  C:\Winnt\System32\Wins
	
	then the new location has to be the exact same path.
	
	NOTE: This occurs even when using the new Winsrpc.dll mentioned in the following
	Microsoft Knowledge Base article:
	
	  Q162563 WINS Restore Fails on Windows NT Server 4.0
	
	RESOLUTION
	==========
	
	To successfully transfer the WINS files from one WINS server to another, you
	will need to use one of the following workarounds:
	
	- The new Windows NT Server will need to be installed to the same path (drive
	  letter and folder name) as the original WINS server.
	
	  -or-
	
	- Instead of using the backup and restore functions of the WINS Manager,
	  manually copy the contents of the WINS folder from the original WINS server
	  to the new WINS server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: restoring
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
