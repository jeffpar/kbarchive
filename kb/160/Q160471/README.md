---
layout: page
title: "Q160471: Incorrect Documentation on WINS Database Backup Interval"
permalink: /kb/160/Q160471/
---

## Q160471: Incorrect Documentation on WINS Database Backup Interval

{% raw %}

	Article: Q160471
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Chapter 8, page 467, of the Windows NT Server 4.0 Networking Guide, "Managing
	Microsoft WINS Servers," contains the following documentation error. The first
	paragraph under the section "Backing Up the Database" states the following:
	
	  WINS Manager provides backup tools so that you can back up the WINS database.
	  After you specify a backup directory for the database, WINS performs complete
	  database backups every "three" hours, by installation default.
	
	This information is also incorrectly documented in the WINS Manager Help in
	Windows NT 4.0:
	
	  Specifies the path to the folder where the backup copies of the database are
	  to be stored. If you specify a backup path, WINS automatically performs a
	  full backup of its database to this folder every 3 hours.
	
	This information is incorrect. After specifying the path, WINS performs a
	complete database backup every 24 hours.
	
	The Windows NT Server 3.51 WINS Manager Help and the Resource Kit in Volume II,
	"Networking Guide", Chapter 14, "Installing and Configuring WINS Servers", page
	298, first paragraph, correctly documents this information.
	
	Additional query words: prodnt docs docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
