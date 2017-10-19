---
layout: page
title: "Q216990: XADM: Exchange Fails to Install on Second Cluster Partition"
permalink: /kb/216/Q216990/
---

## Q216990: XADM: Exchange Fails to Install on Second Cluster Partition

	Article: Q216990
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Exchange Server 5.5 on the second partition of the shared SCSI
	disks of a cluster, the following error message is displayed:
	
	  The specified path is not valid or is incomplete or is not a subdirectory or
	  is not a valid cluster disk resource. Specify a valid path name.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Setup Program
	
	+-------------------------+
	| File Name  | Version    | 
	+-------------------------+
	| Admin.exe  | 5.5.2554.0 | 
	+-------------------------+
	| Srvmax.exe | 5.5.1960   | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	To install this fix, you must rename Srvmax.exe to Setup.exe and copy the file
	on top of the Exchange Server 5.5 Setup file. After you install Exchange Server,
	replace the Exchange Administrator program (admin.exe) with the new version of
	this file.
	
	If you are using this configuration, there is another issue to be aware of with
	Microsoft Exchange Performance Optimizer. For additional information, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q216682 XADM: Perfwiz Doesn't Recognize Logical Partitions on Clustered Drive
	  Resource
	
	
	Additional query words: cluster node
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
