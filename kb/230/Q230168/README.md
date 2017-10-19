---
layout: page
title: "Q230168: Terminal Server Does Not Support User- Mode Printer Drivers"
permalink: /kb/230/Q230168/
---

## Q230168: Terminal Server Does Not Support User- Mode Printer Drivers

	Article: Q230168
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use a third-party printer driver to print, no output is generated and
	the server may stop responding (hang). When you print to a file, the resulting
	file size is 0.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT Server 4.0, Terminal Server Edition does
	not provide support for this type of extension.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	MORE INFORMATION
	================
	
	User-mode printer drivers can be used for modification of the data to be
	printed. Other uses may be for additional security checks for submitting a print
	job.
	
	You can find out if a particular printer driver uses a user-mode printer driver
	when you look into the registry under the following registry setting:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Print\Printers\<printer driver name>\PrinterDriverData
	
	There should be a SPLUserModePrinterDriver entry with the name of the DLL file
	containg the user-mode printer driver.
	
	Additional query words: tse wts
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
