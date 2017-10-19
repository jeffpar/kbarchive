---
layout: page
title: "Q158811: Some Exchange Objects Cannot be Added to Performance Data Log"
permalink: /kb/158/Q158811/
---

## Q158811: Some Exchange Objects Cannot be Added to Performance Data Log

	Article: Q158811
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT 4.0 Resource Kit includes a utility called Performance Data Log
	Service. This utility functions much like Performance Monitor except Performance
	Data Log Service runs as a service and writes the performance data to a text
	file for analysis in a spreadsheet or database package.
	
	If Microsoft Exchange Server is installed, several objects are added to the list
	of objects that can be monitored with the Performance Data Log Service. The
	following Microsoft Exchange objects cannot be monitored with the Performance
	Data Log Service.
	
	  Microsoft Exchange Information Store
	  Microsoft Exchange Information Store - private
	  Microsoft Exchange Information Store - public
	
	WORKAROUND
	==========
	
	The Microsoft Exchange objects listed above can be monitored with Windows NT
	Performance Monitor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the resource kit utility
	Performance Data Log Service. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: pdlsvc.exe pdlcnfig.exe
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
