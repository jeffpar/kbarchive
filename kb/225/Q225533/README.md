---
layout: page
title: "Q225533: SMS: Inventory MIFs Processes Slowly"
permalink: /kb/225/Q225533/
---

## Q225533: SMS: Inventory MIFs Processes Slowly

{% raw %}

	Article: Q225533
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120 kbDataLoader
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- Inventory does not update in the Systems Management Server Administrator
	  Console.
	
	- There is a backlog of files in the \sms\site.srv\dataload.box\deltamif.col
	  subdirectory.
	
	- The site server disk fills with data.
	
	After SQL Server tracing is enabled then the \sms\logs\datalodr.log has entries
	indicating that particular queries are taking an extraordinarily long time to
	complete. Below is a sample from a Datalodr.log where a standard query is taking
	over one minute to complete at the SQL Server file:
	
	  SQL>>>select * from MachineDataTable where dwMachineID = 18585~   $$<SMS_INVENTORY_DATA_LOADER><Wed Mar 31 05:39:12 1999~><thread=A4>
	  SQL>>>>> Done.   $$<SMS_INVENTORY_DATA_LOADER><Wed Mar 31 05:39:12 1999~><thread=A4>
	  SQL>>>select * from MachineDataHistoryTable where dwMachineID = 18585~   $$<SMS_INVENTORY_DATA_LOADER><Wed Mar 31 05:39:12 1999~><thread=A4>
	  SQL>>>>> Done.   $$<SMS_INVENTORY_DATA_LOADER><Wed Mar 31 05:40:45 1999~><thread=A4>
	
	CAUSE
	=====
	
	This behavior is representative of a site database that is missing one or more
	of the default Systems Management Server indexes. The default Systems Management
	Server indexes are created during installation and during service pack
	application. Many organizations drop and recreate the standard indexes during
	site database maintenance, if for some reason these indexes are not all
	recreated then there can be adverse affects on SQL Server operations including
	Management Information Format (MIF) processing.
	
	WORKAROUND
	==========
	
	NOTE: Always back up your site database before performing any operation that may
	make modifications to your site database directly.
	
	The standard indexes can be recreated using the Upgrd12.sql file from the most
	recent service pack that was applied to the site. To recreate the indexes run
	this script against the site database as follows:
	
	- Connect as DBO or SA using ISQL/w to the Site database server.
	
	- Open the Upgrd12.sql file with ISQL/w.
	
	- Be sure that the site database is selected in ISQL/w.
	
	- Run the script to recreate any missing indexes.
	
	MORE INFORMATION
	================
	
	For additional assistance on troubleshooting MIF backlog problems and for
	instructions on how to enable SQL Server tracing see the following articles in
	the Microsoft Knowledge Base.
	
	  Q176517 SMS: Troubleshooting Inventory MIF Backlog Problems
	
	  Q166244 SMS: SQL Server Tuning Parameters for Systems Management Server
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms120 kbDataLoader 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
