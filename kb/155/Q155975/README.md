---
layout: page
title: "Q155975: SMS: File Transfer Does Not Display NTFS Compressed Files"
permalink: /kb/155/Q155975/
---

## Q155975: SMS: File Transfer Does Not Display NTFS Compressed Files

	Article: Q155975
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to perform a file transfer using the Help Desk utilities, the
	Remote Files window will not display files compressed with the Windows NT file
	system (NTFS) on a remote volume. Local NTFS-compressed files are displayed
	normally.
	
	CAUSE
	=====
	
	The File Transfer Slave on the client computer is returning only file names
	which are not compressed.
	
	WORKAROUND
	==========
	
	To work around this problem, decompress the files that you want to transfer from
	the client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms compression
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
