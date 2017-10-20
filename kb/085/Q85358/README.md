---
layout: page
title: "Q85358: FAX: How Dir-Sync Affects the Fax Gateway Address List"
permalink: /kb/085/Q85358/
---

## Q85358: FAX: How Dir-Sync Affects the Fax Gateway Address List

{% raw %}

	Article: Q85358
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to Fax, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The nature of directory synchronization (Dir-Sync) is such that each postoffice
	or foreign system tracks its own changes, and exchanges them with one central
	postoffice "server."
	
	The Microsoft Mail Gateway to Fax simply converts Microsoft Mail messages to a
	graphics format acceptable to fax machines, and transmits them. Because there is
	no "controlling agent" on the fax side to monitor changes; Directory
	Synchronization cannot be used.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to Fax Administrator's Guide"
	"Microsoft Mail Administrator's Guide"
	
	
	Additional query words: 3.00 pcmail dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateFax300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
