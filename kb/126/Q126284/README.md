---
layout: page
title: "Q126284: Problem Running SMS on CNTFS Partition"
permalink: /kb/126/Q126284/
---

## Q126284: Problem Running SMS on CNTFS Partition

	Article: Q126284
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Systems Management Server version 1.0 performance degrades after upgrading to
	Windows NT Server version 3.51.
	
	CAUSE
	=====
	
	Windows NT version 3.51 includes support for file compression on Windows NT file
	system (NTFS) partitions (called Compressed NTFS [CNTFS]). CNTFS is based on a
	new compression file attribute. If SMS resides on a CNTFS partition, both SMS
	and CNTFS may attempt compression of the same files. This imposes unneeded
	overhead.
	
	For example, if the SMS Scheduler compresses a package for distribution, a
	compressed data stream is written to a file. If the file attributes have the
	compression bit set, CNTFS attempts to compress this data stream when writing to
	the disk. Redundant compression attempts waste server resources causing
	performance to degrade.
	
	WORKAROUND
	==========
	
	To prevent this redundant operation, ensure that directory and file attributes
	in the SMS\SITE.SRV directory and subdirectories do not have the compression bit
	set. To do this, type the following at the MS-DOS command line:
	
	     COMPACT /U /I /S <x>:\SMS\SITE.SRV\*.*
	
	where <x> is the host drive of the SMS installation. This clears the
	compression bit on current files and directories and prevents CNTFS from
	compressing the files in the future. SMS still compresses package files
	according to its own configuration settings.
	
	NOTE: In addition to file compression on package files, server performance can
	also be affected by the compression of files located in the subdirectories below
	LOGON.SRV. If these files are compressed by CNTFS, additional server overhead is
	required to make the data available to SMS clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1,3.51
	
	=============================================================================
	
