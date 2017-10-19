---
layout: page
title: "Q260300: XADM: Online Defragmentation Stops with Event ID 183"
permalink: /kb/260/Q260300/
---

## Q260300: XADM: Online Defragmentation Stops with Event ID 183

	Article: Q260300
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 25-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view the application log of a Microsoft Exchange Server, the user may
	receive the following event:
	
	  Event ID: 183
	  Source: ESE97
	  Type: Information
	  Category: Online Defragmentation
	  Description: MSExchangeIS ((198)) Online defragmentation of database
	  'C:\exchsrvr\MDBDATA\PRIV.EDB' was interrupted and terminated. The next time
	  online defragmentation is started on this database, it will resume from the
	  point of interruption.
	
	MORE INFORMATION
	================
	
	Exchange Server online defragmentation against the information store databases
	starts immediately after information store maintenance tasks have been
	completed. By default, the online defragmentation process runs for a minimum of
	fifteen minutes and it only runs for up to one hour after the information store
	maintenance scheduled window time.
	
	This is a low priority task, and if the task is interrupted by another task that
	requires access to the database (commonly an online backup), the server logs
	event 183.
	
	The user may want to schedule the Exchange Server Information Store (IS)
	Maintenance and the backups for different times during off-peak hours. This
	allows more time for the online defragmentation to take place. To change the IS
	Maintenance schedule:
	
	1. Start the Exchange Administrator program.
	
	2. Expand the left pane until you see the server name of the Exchange server on
	  which you want to change the IS Maintenance schedule.
	
	3. Click the server name, and then click Properties on the File menu.
	
	4. On the IS Maintenance tab, click the schedule that you want, click Apply, and
	  then click OK.
	
	For additional information about IS Maintenance, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	  Q159306 XADM: IS Maintenance Tasks Not on IS Schedule
	
	For additional information about configuring the minimum runtime for online
	defragmentation, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q244524 XADM: How to Configure the Exchange Online Defragmentation Time
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
