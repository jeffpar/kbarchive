---
layout: page
title: "Q192484: XFOR: Exchange DSS Gets Event ID 133, 143, 168 Errors in Dirsync"
permalink: /kb/192/Q192484/
---

## Q192484: XFOR: Exchange DSS Gets Event ID 133, 143, 168 Errors in Dirsync

	Article: Q192484
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbFEA exc4 exc5 exc55 EXC55SP3Fea
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The directory synchronization (dirsync) process fails when approximately 150
	containers or more are set to be exported to more than one Microsoft Mail for PC
	Networks requestor. The process works for the first requestor, but fails with
	the second and subsequent requestors; they fail to get their updates. The
	following errors may be seen in the application event log when the logging level
	for the MSExchangeDX category is set to Maximum in the properties for the
	directory synchronization service:
	
	  Event ID: 143
	  Description: Unable to update the remote dirsync entry 233 in directory
	  service.
	
	  Event ID: 133
	  Description: Error DS_Service_error , problem DS_E_ADMIN_LIMIT_EXCEEDED
	  returned by the Microsoft Exchange DS. (thread 0).
	
	  Event ID: 168
	  Description: State information could not be updated. Duplicates may be sent or
	  received during the next synchronization cycle for remote dirsync 233.
	  (thread 452)
	
	CAUSE
	=====
	
	This problem is due to a Jet page size limitation.
	
	Jet limits page size to 4 KB. Jet tries to store all the information for a record
	in the page. If the combined data exceeds the page size, the data is stored
	elsewhere, and a 6-byte pointer is stored in the original page. After you add
	enough values/attributes, Jet can no longer add anything else, so it generates
	this error.
	
	RESOLUTION
	==========
	
	Microsoft recognizes the need for people to export large numbers of containers
	to more than one MS Mail (PC) requestor. We have modified the necessary Exchange
	Server components so that more containers can be exported.
	
	This feature is available in the latest service pack for Exchange Server version
	5.5. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this feature should have the following file attributes or
	later:
	
	Components: Administrator Program and Directory Synchronization
	
	+--------------------------+
	| File name  | Version     | 
	+--------------------------+
	| Admin.exe  | 5.5.2653.23 | 
	+--------------------------+
	| Dxa.exe    | 5.5.2653.11 | 
	+--------------------------+
	| Dxamsg.dll | 5.5.1960.3  | 
	+--------------------------+
	| Schema.csv | N/A         | 
	+--------------------------+
	| Schema.ini | N/A         | 
	+--------------------------+
	
	NOTES:
	
	- The updated Admin.exe, Dxa.exe and Dxamsg.dll files should be applied on the
	  dirsync server experiencing this problem.
	- The updated Admin.exe file should be applied on all Exchange Server
	  computers, so that they are aware of the new schema.
	- The updated Dxamsg.dll file should be applied on all servers that are used to
	  check the event logs of the dirsync server that has this feature.
	
	To apply this feature:
	
	1. Stop all the Exchange Server services except the directory service.
	
	2. On the dirsync server, type the following command at a command prompt, and
	  then press ENTER:
	
	  "admin -i schema.csv -d servername -o schema.ini" (without the quotation
	  marks)
	
	3. Stop the directory service.
	
	4. Copy the updated Admin.exe, Dxa.exe, and Dxamsg.dll files to the Exchsrvr\Bin
	  folder.
	
	5. Restart all the Exchange Server services.
	
	6. Check the event log for successful data conversion or any errors. Note that
	  the updated Administrator program will now be used for any changes to the
	  Exchange Server services or when additional Recipients containers are added
	  to the Export Container tab in the properties for the Remote DirSync
	  Requestor object.
	
	7. Copy the updated Admin.exe file to all Exchange Server computers.
	
	8. Copy the updated Dxamsg.dll file to all servers that are used to check the
	  event logs of the dirsync server that has this feature.
	
	
	WORKAROUND
	==========
	
	Reduce the number of containers exported to MS Mail (PC) requestors during
	dirsync to a number below 100.
	
	STATUS
	======
	
	This feature was first included in Exchange Server 5.5 Service Pack 3.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA exc4 exc5 exc55 EXC55SP3Fea 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
