---
layout: page
title: "Q181311: Data Corruption Occurs with Record Locking on FPNW Server"
permalink: /kb/181/Q181311/
---

## Q181311: Data Corruption Occurs with Record Locking on FPNW Server

{% raw %}

	Article: Q181311
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Novell Client 32 on a computer running Windows 95 Client 32, data
	corruption can occur to a file that is open by multiple users when record
	locking is enabled on the File and Print Service for NetWare (FPNW) server. This
	problem only happens with Client 32 accesses the files on FPNW server. It does
	not happen with Client 32 accessing the files on the Novell server or a VLM
	client assessing the files on the FPNW Server.
	
	CAUSE
	=====
	
	The Novell Client 32 thinks the data files are marked shareable and, therefore,
	does more aggressive caching than it should.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	Windows NT. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbWin95search kbZNotKeyword3 kbServicesNetwareSearch
	Version           : WinNT:4.0;Windows:95
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
