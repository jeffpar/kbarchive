---
layout: page
title: "Q317919: Event ID 2009 May Be Logged on Windows NT 4.0-Based Print Server"
permalink: /kb/317/Q317919/
---

## Q317919: Event ID 2009 May Be Logged on Windows NT 4.0-Based Print Server

	Article: Q317919
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbprint
	Last Modified: 29-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a Windows NT 4.0-based print server with Microsoft Windows
	2000-based client computers, you may see the following event logged in the
	System Event Log on the print server:
	
	Event Type: Error
	Event Source: Srv
	Event Category: None
	Event ID: 2009
	User: N/A
	Description: The server could not expand a table because the table reached the maximum size.
	    
	Data:
	0000: 00040000 00540001 00000000 c00007d9
	0010: 00000000 c000009a 00000000 00000000
	0020: 00000000 00000000 000003e9
	
	The print server may also stop responding (hang).
	
	CAUSE
	=====
	
	This issue can occur if the Windows 2000-based client has a Hewlett-Packard
	DeskJet 900-series printer installed and is connected to a shared printer on the
	print server. An issue with the DeskJet 900-series printer drivers causes the
	client to open thousands of opened named pipes to the server which overwhelms
	the Windows NT 4.0-based server and causes the server to hang and log event ID
	2009s.
	
	Note that this issue may also occur with Hewlett Packard OfficeJet G and Hewlett
	Packard OfficeJet K series printers.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain the latest drivers for the DeskJet 900-series
	printer. Hewlett-Packard has also released upgraded files for the OfficeJet
	printers to resolve this issue:
	
	  http://www.hp.com/cgi-bin/cposupport/printerfriendly.cgi?in=all_in_one/software/HpGK_NetTrafficFix.exe
	
	To resolve this issue, you can also upgrade the print server to Microsoft Windows
	2000 Server. Windows 2000 has a much higher threshold for open named pipes than
	Windows NT 4.0 because Windows NT 4.0 has a limitation of 2,048 concurrent open
	files. Windows 2000 has a limit of 16,384 concurrent open files.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q165815 How to Troubleshoot Event ID 2009 Errors
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words: HP
	
	======================================================================
	Keywords          : kbenv kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : :4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
