---
layout: page
title: "Q239046: Error Connecting to &lt;Server&gt;, Unexpected Error 0x800740002 ..."
permalink: /kb/239/Q239046/
---

## Q239046: Error Connecting to &lt;Server&gt;, Unexpected Error 0x800740002 ...

	Article: Q239046
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you administer an Internet Information Services (IIS) 5.0 Web server using
	the IIS snap-in (through the Internet Services Manager or other method), the
	following error message may occur:
	
	  Error Connecting to server, unexpected error 0x80074002 occurred
	  Do you wish to continue to attempt to connect in the future?
	
	Where server is the name of the local computer.
	
	CAUSE
	=====
	
	This error can occur when the metabase has become corrupted. The metabase stores
	settings used in Internet Information Services.
	
	RESOLUTION
	==========
	
	To correct this problem, you should attempt to restore the metabase from a
	backup. If this does not correct the problem, however, you may need to restore
	the metabase from a system backup.
	
	The metabase, Metabase.bin, is located in the (default) C:\WINNT\System32\inetsrv
	(%WinDir%\System32\inetsrv) directory.
	
	For information on restoring the metabase, please click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q234429 How to Manually Restore the Metabase When No Proper Backup Exists or
	  the MMC Won't Start
	
	STATUS
	======
	
	
	
	Additional query words: iis metbase 0x80074002 80074002 connecting
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
