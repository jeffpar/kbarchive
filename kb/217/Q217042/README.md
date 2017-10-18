---
layout: page
title: "Q217042: Dump Discovery Data Tool Views Discovery Data from the Client"
permalink: kb/217/Q217042/
---

## Q217042: Dump Discovery Data Tool Views Discovery Data from the Client

	Article: Q217042
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDiscovery kbsmsUtil
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Dump Discovery Data tool (Discdump.exe) is available in the Microsoft
	Systems Management Server 2.0 BackOffice Resource Kit.
	
	You can use this tool at a command prompt on a client to view network discovery
	data from the local .ddr file in a readable format. The data is displayed in
	tree view. You must install and run this tool on the client.
	
	MORE INFORMATION
	================
	
	The Dump Discovery Data tool runs in Microsoft Windows NT, Microsoft Windows 98,
	and Microsoft Windows 95.
	
	To install the Dump Discovery Data tool, copy the required files to the
	<Windows>\Ms\Sms\Core\Bin folder on the client. The required files are:
	
	  Clibase.dll (default)
	  Clilog.dll (default)
	  Discdump.exe
	  Discv_nd.dll (NetWare clients only)
	  Smsdiscv.dll (default)
	
	To run the tool, type "discdump" (without the quotation marks) at a command
	prompt on the client. There are no command-line switches or options for this
	tool.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDiscovery kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
