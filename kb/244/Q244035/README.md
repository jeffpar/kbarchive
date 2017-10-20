---
layout: page
title: "Q244035: XCON: Event 2125 Caused by mismatched Info?log.cfg Files"
permalink: /kb/244/Q244035/
---

## Q244035: XCON: Event 2125 Caused by mismatched Info?log.cfg Files

{% raw %}

	Article: Q244035
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a service pack update or update the Exchsrvr\Mtadata run
	folder, the following event may appear:
	
	  Event ID: 2125
	  Source: MSEXCHANGE MTA
	  Category: Resource
	  Description: Statistics for dbi call (db server):file write disp: result, read
	  22, cache hits 338, misses 5%. Attribute 6%, value number 7%, object id: 8%
	  (00000000>na). Caller 12% [9% 10% 11%] (8).
	
	CAUSE
	=====
	
	This event is caused when the Info4log.cfg, Infodlog.cfg, and Infotlog.cfg files
	do not match the currently installed version of Emsmta.exe. For example, the
	.cfg files are from Exchange Server 5.5 Service Pack 1, but Emsmta.exe has been
	updated to Service Pack 2.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. At a command line, type "net stop msexchangemta" (without the quotation
	  marks), and then press ENTER. This may require stopping additional connector
	  services; type Y to allow these services to stop.
	
	2. At a command line, type "md c:\backup" (without the quotation marks), and
	  then press ENTER. This creates a backup directory on the C drive.
	
	3. Using Regedt32.exe, open the following registry key:
	
	  HKLM\System\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	  Note the value of the entry called MTA Run Directory. This is the directory
	  that will be modified in the following steps.
	
	4. Move the Info4log.cfg, Infodlog.cfg, and Infotlog.cfg files in the
	  Exchsrvr\Mtadata folder to the C:\Backup folder.
	
	5. From the service pack or retail CD, copy the Info4log.cfg, Infodlog.cfg, and
	  Infotlog.cfg files to the Exchsrvr\Mtadata folder.
	
	6. In Windows Explorer, select the Info4log.cfg, Infodlog.cfg, and Infotlog.cfg
	  files in the Exchsrvr\Mtadata folder.
	
	7. Open the properties of these files, and click to clear the Read-only check
	  box.
	
	8. Restart the message transfer agent (MTA) by typing "net start msexchangemta"
	  (without the quotation marks) at the command line, and pressing ENTER.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
