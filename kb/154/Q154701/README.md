---
layout: page
title: "Q154701: DIR Command on a NetWare Directory Results in &quot;File Not Found&quot;"
permalink: /kb/154/Q154701/
---

## Q154701: DIR Command on a NetWare Directory Results in &quot;File Not Found&quot;

{% raw %}

	Article: Q154701
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When performing a DIR command, you may receive a "File not found" error message
	if the NetWare server directory contains a very large number of files.
	
	CAUSE
	=====
	
	After typing the DIR command, the sequence of events that causes this error is:
	
	1. The server message block (SMB) client requests the directory information from
	  the SMB server.
	
	2. The SMB server requests files from the NetWare server. Sometimes the SMB
	  server must rewind the DIR search for the SMB client.
	
	3. Since the NetWare server does not support this rewind, the SMB server does a
	  brute force rewind starting from file 0 (zero).
	
	4. After the server gets down to about the 2000th file, this unwind takes so
	  long that the SMB client times out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
