---
layout: page
title: "Q235543: File Copy to Macintosh Volume Takes Time"
permalink: /kb/235/Q235543/
---

## Q235543: File Copy to Macintosh Volume Takes Time

{% raw %}

	Article: Q235543
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When files are copied to a Macintosh volume, the changes do not appear on a
	Macintosh client immediately. For the files to appear on the Macintosh client
	directory, you must wait approximately five seconds, and then refresh the
	Macintosh Finder. If a file is copied to a Macintosh volume on a Windows NT 4.0
	server and is then immediately renamed, Services for Macintosh (SFM) does not
	update the index and the Macintosh client cannot see the files until the index
	is rebuilt.
	
	NOTE: The SFM volume index is automatically rebuilt when SFM is started or
	restarted with Windows NT 4.0 SP4 or later. For additional information and
	troubleshooting information about SFM and volume indexing, please click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q185722 SFM Rebuilds Indexes upon Restarting of Windows NT
	
	  Q164138 Files in Macintosh Volume Disappear from Macintosh Clients
	
	  Q147909 Troubleshooting MacVolume Creation Errors
	
	CAUSE
	=====
	
	SFM does not update the volume indices if files are renamed immediately after
	being written to the volume.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP3,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
