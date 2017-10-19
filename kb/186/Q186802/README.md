---
layout: page
title: "Q186802: FIX: Lock Error Occurs When Deleting a File from FTP Directory"
permalink: /kb/186/Q186802/
---

## Q186802: FIX: Lock Error Occurs When Deleting a File from FTP Directory

	Article: Q186802
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbiis400 kbiis400bug kbiis500fix
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the computer running Internet Information Server (IIS), attempting to delete
	a file from an FTP site's directory causes a lock error, and the file cannot be
	deleted. To work around this problem, stop and restart the Inetinfo process. To
	do this, use the Internet Service Manager (ISM) to stop and then restart all
	services under Internet Information Server for that computer.
	
	CAUSE
	=====
	
	A client was using FTP to download the file when the download was interrupted.
	As a result, the lock the system placed on the file during the download was
	never removed.
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	STATUS
	======
	
	This problem was corrected in Internet Information Server 5.0.
	
	Additional query words: mmc remove inetinfo.exe akz
	
	======================================================================
	Keywords          : kbiis400 kbiis400bug kbiis500fix 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
