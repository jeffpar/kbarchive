---
layout: page
title: "Q154028: 100% CPU Usage When FTP Clients Connect to IIS"
permalink: /kb/154/Q154028/
---

## Q154028: 100% CPU Usage When FTP Clients Connect to IIS

	Article: Q154028
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	FTP clients may be sluggish or appear to hang and the CPU usage may rise to 100%
	and remain at 100% until the FTP service is stopped and restarted. Macintosh FTP
	clients (for example, Mac Fetch) may also appear to hang.
	
	CAUSE
	=====
	
	This problem appears when a Macintosh Volume is applied to a directory that is
	also used by the IIS FTP service.
	
	WORKAROUND
	==========
	
	Move the Macintosh volume to another directory that is not used by FTP. If
	non-FTP Macintosh clients still need to access the data in the original
	directory, directory replication can be used to synchronize the files with
	another directory that is used by the FTP service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0c. This problem was corrected in Microsoft Internet
	Information Server 2.0.
	
	Additional query words: slow stop ftp
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
