---
layout: page
title: "Q199657: SMS: 1.2 and 2.0 Site Server Cannot Share SQL Server on 1.2 Site"
permalink: /kb/199/Q199657/
---

## Q199657: SMS: 1.2 and 2.0 Site Server Cannot Share SQL Server on 1.2 Site

	Article: Q199657
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbinterop kbsms200 kbsms120
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A System Management Server 1.2 site using a SQL Server that is installed on the
	same computer, cannot also host a Systems Management Server 2.0 database. The
	System Management Server 1.2 site server will not recognize the SMS_SQL_Monitor
	service from the Systems Management Server 2.0 site as a valid component and the
	service will be removed from the registry.
	
	The SMS_SQL_Monitor service is a component that monitors the Systems Management
	Server 2.0 site database on a SQL Server computer for changes and notifies
	related components when a change occurs. When an event occurs, SQL Monitor
	either writes a file to the related Systems Management Server inbox or notifies
	the component by named pipe. SMS_SQL_Monitor is also responsible for executing
	periodic database maintenance. The SMS_SQL_Monitor includes two threads:
	
	- Trigger Monitor notifies Systems Management Server components, such as
	  discovery data manager (DDM), when database events have occurred.
	
	- Task Manager runs scheduled database maintenance tasks.
	
	MORE INFORMATION
	================
	
	SQL Server is used to store and manage the site database. SQL Server can be
	installed on a separate computer running Windows NT Server. If SQL Server is
	installed on a computer other than the version 1.2 site server, SQL Server can
	be used for the site databases for a mix of version 1.2 and version 2.0 sites.
	This SQL Server can also be a client to the version 2.0 site, as well as a full
	participant in any Systems Management Server 2.0 component server roles, as long
	as version 1.2 uses it only for its database storage.
	
	Additional query words: prodsms smsinterop
	
	======================================================================
	Keywords          : kbinterop kbsms200 kbsms120 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
