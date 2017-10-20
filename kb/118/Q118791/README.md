---
layout: page
title: "Q118791: Windows 95 Views But Cannot Access NTFS and HPFS Partitions"
permalink: /kb/118/Q118791/
---

## Q118791: Windows 95 Views But Cannot Access NTFS and HPFS Partitions

{% raw %}

	Article: Q118791
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click My Computer after installing Windows 95 on a system with
	Windows NT or OS/2 already installed, Windows 95 recognizes any existing NTFS
	and HPFS partitions as hard disk drives. However, Windows 95 does not have
	access to the NTFS or HPFS partitions and therefore reports one or more of the
	following errors when you try to use an NTFS or HPFS disk partition:
	
	  The disk in drive <x> is not formatted. Do you want to format it now?
	
	  -or-
	
	  Drive <x> cannot be selected right now. Try again later.
	
	  -or-
	
	  Unable to create 'fldr000'.
	  Make sure the disk is not full or read-only.
	
	Windows 95 incorrectly reports the size of and space available on the NTFS or
	HPFS drive. Both values are overestimated. For example, a 80-megabyte (MB)
	partition may be reported as 3.5 gigabytes in size with 1.8 gigabytes of
	available space.
	
	Windows 95 allows you to share an NTFS or HPFS drive. Connecting to a shared NTFS
	or HPFS drive results in either an empty listing or the following error message
	
	  An error occurred while connecting to drive <x>.
	
	where <x> is the selected drive letter for the network connection.
	
	CAUSE
	=====
	
	Windows 95 does not support read and write access to NTFS or HPFS partitions;
	however, Windows 95 Setup does identify these partitions as hard disk drives.
	
	RESOLUTION
	==========
	
	Currently, there is no method to prevent Windows 95 from displaying NTFS or HPFS
	partitions as disk drives.
	
	Additional query words: wwt err msg
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
