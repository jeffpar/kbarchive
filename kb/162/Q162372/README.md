---
layout: page
title: "Q162372: UT95: Upsizing Wizard Fails When Out of Disk Space on SQL Server"
permalink: /kb/162/Q162372/
---

## Q162372: UT95: Upsizing Wizard Fails When Out of Disk Space on SQL Server

{% raw %}

	Article: Q162372
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 12-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Upsizing Tools 7.0 
	-------------------------------------------------------------------------------
	
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you use the Upsizing Wizard for Microsoft Access 7.0 to export a database
	to SQL Server, you may receive the following error message:
	
	  Server Error 1105: Can't allocate space for object 'Syslogs' in database
	  'SQLCleanWind' because the 'logsegment' segment is full. If you ran out of
	  space in Syslogs, dump the transaction log. Otherwise, use ALTER DATABASE or
	  sp_extendsegment to increase the size of the segment.
	
	CAUSE
	=====
	
	The Upsizing Wizard does not check the SQL Server to see if there is enough
	available disk space on the server, nor does it check the amount of available
	space for the transaction log before it tries to upsize a database to SQL
	Server. If the Upsizing wizard does not have enough disk space on the server to
	paste the database or if it does not have enough space for the transaction log,
	it will fail.
	
	RESOLUTION
	==========
	
	If the Upsizing Wizard fails, do one or more of the following:
	
	- Free up a sufficient amount of disk space on the SQL Server.
	
	- Increase the amount of space available for the transaction log.
	
	- Dump the transaction log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 7.0. This
	problem no longer occurs in Microsoft Access 97.
	
	MORE INFORMATION
	================
	
	The Upsizing Wizard takes a Microsoft Access database and creates a database on
	SQL Server with the same table structure, data, and many other attributes of the
	original Microsoft Access database. Before you upsize a database to SQL Server,
	you must check to see if the server has sufficient disk space. If the server
	does not have enough disk space, you will need to increase the space for a new
	database or log.
	
	NOTE: If the Upsizing Wizard does fail, it will leave an empty table on the
	server. This table should be deleted before you try to upsize your database
	again.
	
	REFERENCES
	==========
	
	For additional information about the upsizing tool, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q149841 ACC95: MS Access 95 Upsizing Tools Available in Download Center
	
	Additional query words: can t allocate space for object Syslogs in database SQLCleanWind because the logsegment is full
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbAccessSearch kbAccess95Search kbAccessUpsizingTools700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
