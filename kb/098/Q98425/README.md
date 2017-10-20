---
layout: page
title: "Q98425: NUMBIGBUF Parameter Information for LM 2.1 and 2.2"
permalink: /kb/098/Q98425/
---

## Q98425: NUMBIGBUF Parameter Information for LM 2.1 and 2.2

{% raw %}

	Article: Q98425
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The "LAN Manager 2.1 Administrator's Reference" states that NUMBIGBUF should be
	set to 1 if a server is only a file server with HPFS386. It also states that the
	entry is an MS-DOS-only parameter.
	
	This is incorrect. NUMBIGBUF in LAN Manager 2.1 and later is used for print job
	spooling, IPC, FAT volume reads/writes, remote APIs, and UAS replication.
	
	In LAN Manager 2.0, NUMBIGBUF was a low-water mark: the server could allocate
	more if it needed it to the point that there was no memory left in the system
	for other applications. In LAN Manager 2.1 and 2.2, it is a high-water mark. If
	you set it to 1, that's all you get. It is a lot safer to go with 10-15 big
	buffers for servers participating in any of the activities mentioned above. The
	range is 1-255 buffers; the default is 0. On backup domain controllers, it must
	not be set to 1.
	
	The parameter works for MS-DOS and OS/2.
	
	REFERENCES
	==========
	
	LAN Manager Administrator's Reference, version 2.2, page 239
	
	Additional query words: 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
