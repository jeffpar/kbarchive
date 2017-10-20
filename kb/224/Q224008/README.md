---
layout: page
title: "Q224008: Print Services for Macintosh Do Not Work at Times"
permalink: /kb/224/Q224008/
---

## Q224008: Print Services for Macintosh Do Not Work at Times

{% raw %}

	Article: Q224008
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	At times, Print Services for Macintosh does not work. Event ID 2019 and Event ID
	4011 error messages from True Image may be displayed as well.
	
	CAUSE
	=====
	
	This problem is caused by sending PostScript level-two print jobs to Printer
	Control Language (PCL) print queues from Macintosh clients.
	
	RESOLUTION
	==========
	
	To resolve this problem, send only PostScript level-one or PCL print jobs from
	Macintosh clients to PCL print queues.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0,
	Windows NT Server 4.0 Service Packs 1, 2, 3, and 4 as well as Windows NT Server,
	Enterprise Edition version 4.0 and 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The print services for Macintosh uses True Image to convert Post Script print
	jobs to PCL when the print jobs are sent to PCL print queues. Windows NT is only
	designed to convert Post Script level one print jobs. Post Script level two
	print jobs may be sent to Post Script print queues without any problem because
	the computer running Windows NT Server passes the Post Script job straight to
	the printer without altering it.
	
	Additional query words: SFM PS
	
	======================================================================
	Keywords          :  
	Component         : Macintosh
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
