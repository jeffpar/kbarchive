---
layout: page
title: "Q199985: SMS: Event ID 320 Occurs and Jobs Remain Pending"
permalink: /kb/199/Q199985/
---

## Q199985: SMS: Event ID 320 Occurs and Jobs Remain Pending

{% raw %}

	Article: Q199985
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbsms120
	Last Modified: 09-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server 1.2 site server, the Windows NT Event Viewer and
	the Systems Management Server Events window both display the following error
	message:
	
	  Event ID: 320
	
	  The job encountered an error trying to execute a query and therefore cannot
	  generate the list of target workstations for the job. Possible causes are:
	  SQL Server is not available; or a fatal low memory condition was encountered.
	
	As a result of this error, new Systems Management Server jobs remain pending and
	don't go active.
	
	CAUSE
	=====
	
	The tempdb database does not have Select Into/Bulk Copy enabled.
	
	WORKAROUND
	==========
	
	To enable Select Into/Bulk Copy and resolve the problem, follow this procedure:
	
	1. Open SQL Enterprise Manager and register the server, if necessary.
	
	2. Expand the server tree and then expand the Databases folder.
	
	3. Right click tempdb and then click Edit.
	
	4. Click the Options tab and select the Select Into/Bulk Copy check box if it is
	  not already selected.
	
	MORE INFORMATION
	================
	
	For additional information about recommended configuration options for a SQL
	Server running a Systems Management Server database, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q166244 SQL Server Tuning Parameters for Systems Management Server
	
	Additional query words: prodsms jobs pending 320
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
