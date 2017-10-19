---
layout: page
title: "Q139588: SMS Views Created By SMSVIEW Have Incorrect Results"
permalink: /kb/139/Q139588/
---

## Q139588: SMS Views Created By SMSVIEW Have Incorrect Results

	Article: Q139588
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the views created by SMSVIEW.EXE version 1.1, reports and queries
	you run against these views produce results that are inconsistent with the
	results returned by the Systems Management Server Administrator Tool.
	
	CAUSE
	=====
	
	The problem with the views has to do with the necessity to use an outer join
	when joining the MachineDataTable with the appropriate common or specific table.
	
	RESOLUTION
	==========
	
	Microsoft has modified the files, SMSVIEW.EXE and VIEWDLL.DLL, to correct this
	problem. To avoid use of outer joins, the new view generating program adds a
	"null" row to each of the data tables.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
