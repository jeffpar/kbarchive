---
layout: page
title: "Q184998: RDR May Read or Write from Wrong File If File Is Memory Mapped"
permalink: /kb/184/Q184998/
---

## Q184998: RDR May Read or Write from Wrong File If File Is Memory Mapped

{% raw %}

	Article: Q184998
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An application may write data to or read data from the wrong file if a client
	has the file open and an error occurs causing the network connection to close.
	
	NOTE: This problem can occur only if the file is a memory-mapped file.
	
	CAUSE
	=====
	
	When the connection is closed, the RDR does not check the status of a
	memory-mapped file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The Windows NT Rdr.sys logs on to the server using your user name/password and
	receives a UID number to reference the session in future requests. The same is
	true for files. When a file is opened, the server will return a FID to reference
	the file in future requests. The UID/FID pair is used to establish logon
	privileges and file permissions in RDR requests. These UIDs and FIDs get
	recycled each connection. On a new connection, the numbers assigned start at the
	beginning. The issue is that, when the connection is closed, the RDR is notified
	and will set a status in the file object so no further I/O can be done on the
	file. However, the status is not checked in the case of a memory-mapped file.
	This causes the RDR to use an old UID/FID pair. If the UID/FID pair were in use,
	the wrong file would be accessed.
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
