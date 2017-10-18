---
layout: page
title: "Q258951: XADM: Space Not Gained After Changing Deleted Items Retention"
permalink: kb/258/Q258951/
---

## Q258951: XADM: Space Not Gained After Changing Deleted Items Retention

	Article: Q258951
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you reduce the number of days for the Deleted Items Retention setting in the
	Exchange Server Administrator program and then run an offline defragmentation,
	the space that should be reclaimed from the removal of deleted items that exceed
	the new Deleted Items Retention setting is not freed from the Priv.edb database.
	
	CAUSE
	=====
	
	This issue can occur because the removal of these deleted items is not completed
	until an online defragmentation (information store maintenance) has been run on
	the Priv.edb database. After an online defragmentation of the Priv.edb database
	is allowed to finish, an offline defragmentation reclaims free space from the
	database.
	
	WORKAROUND
	==========
	
	To free up space in the Priv.edb database as quickly as possible after you
	reduce the days in Deleted Items Retention, open the properties of the Server
	object, click the IS Maintenance tab, and then click Always to run an online
	defragmentation.
	
	The online defragmentation may take up to 30 minutes to begin. The beginning of
	the defragmentation is logged with the following event in the application event
	log:
	
	  Event ID: 179
	  Source: Ese97
	  Type: Information
	  Category: Online Defragmentation
	  Description: MSExchangeIS (170) Online Defragmentation is beginning a full
	  pass on database 'C:\exchsrvr\mdbdata\priv.edb'.
	
	  The defrag may take several hours to complete and upon complete will log the
	  following in the application log:
	
	  Event ID: 180
	  Source: Ese97
	  Type: Information
	  Category: Online Defragmentation
	  Description: MSExchangeIS (170) Online Defragmentation has completed a full
	  pass on database 'C:\exchsrvr\mdbdata\priv.edb'.
	
	After the online defragmentation is complete, you must stop the information store
	to run the offline defragmentation (the eseutil /d /ispriv command) and reclaim
	the free space.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
