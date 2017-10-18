---
layout: page
title: "Q202006: SMS: Delete Special Uses Many Locks"
permalink: kb/202/Q202006/
---

## Q202006: SMS: Delete Special Uses Many Locks

	Article: Q202006
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200fix kbsms120bug smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 1.2, when selecting large numbers of computers to
	delete from the Delete Special box, as many as 100 locks may be used to remove
	one computer. This could cause poor performance on the database because it is
	likely to occur during normal business hours and while that database is under
	normal or heavy stress. In Systems Management Server version 2.0, this behavior
	has been changed.
	
	MORE INFORMATION
	================
	
	In Systems Management Server 1.2, the deletion of a single computer would have
	generated the SQL syntax below to remove it. This potentially resulted in as
	many as 100 locks against the database:
	
	  begin transaction
	  delete MachineDataTable from MachineDataTable ,#WS where datakey = dwMachineID
	  delete MachineDataHistoryTable from MachineDataHistoryTable ,#WS where datakey = dwMachineID
	  delete Machines from Machines ,#WS where datakey = dwMachineID
	  delete from WorkstationStatus where  LastHWScan < "07/01/96 18:37:16" and (LastSWScan < "07/01/96 18:37:16" OR LastSWScan is null)
	  commit transaction
	
	Because most administrators would be performing this maintenance during business
	hours, this may have caused locking errors to be recorded on the SQL Server, as
	well as hampered overall SQL Server performance.
	
	However, in Systems Management Server 2.0, SMS_SQL_MONITOR automatically performs
	the computer removal from the database during times of minimal SQL Server
	activity; frequently enough to prevent a backlog. SMS_SQL_MONITOR was designed
	to remove computers from the database that have not been inventoried in the last
	90 days. This new design will reduce the work of the administrator, as well as
	reduce the potential performance hits against the database.
	
	Because SMS_SQL_MONITOR works automatically in the background, it is a more
	efficient method of removing computers that have become inactive.
	
	Additional query words: machine machines
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200fix kbsms120bug smsdatabase 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
