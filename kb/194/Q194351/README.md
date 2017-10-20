---
layout: page
title: "Q194351: Read Errors After Primary Member of Mirror Set Fails"
permalink: /kb/194/Q194351/
---

## Q194351: Read Errors After Primary Member of Mirror Set Fails

{% raw %}

	Article: Q194351
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the system experiences a failure on a mirror set, Windows NT will break the
	mirror and orphan the faulty drive. There may be a situation where bad data is
	passed back to applications after breaking the mirror. This can cause a variety
	of problems, such as application problems and read media errors on a healthy
	disk.
	
	In addition to symptoms:
	
	- A server with hot pluggable disk system (for example: Compaq, HP)
	
	- Mirror set created in the disk system
	
	When you unplug the mirror disk while online from the mirror set (for example,
	hardware failure), a warning message is received that the mirror set is broke.
	The server and the original disk are functioning correctly. After you shut down
	the server, replace the mirror disk and then restart the system, you may
	encounter file corruption with the original disk. Disk Administrator may report
	a healthy status for the mirror set.
	
	CAUSE
	=====
	
	Although one of the mirrored disks was orphaned because of hardware failure,
	users continue to use the system without replacing the failed disk and
	re-creating the mirror set. During this time, disk I/O is suppose to be
	performed only from the partition of the healthy disk.
	
	If an application requests data from the disk, and a read I/O error is
	encountered on the healthy disk, Ftdisk.sys erroneously retrieves data from the
	orphaned disk, which results in unreliable data from the orphaned disk being
	returned to the application as reliable data.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	-or-
	
	To work around the problem, before you shut down the server and replace the disk,
	you should manually break the mirror set in Disk Administrator.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q120227 Steps to Recover a Failed Mirrored System/Boot Partition
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: scsi dirty mirroring
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
