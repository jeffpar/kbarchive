---
layout: page
title: "Q183720: MacDrive 95 and 98 Are Unable to Read Macintosh Formatted Disks"
permalink: /kb/183/Q183720/
---

## Q183720: MacDrive 95 and 98 Are Unable to Read Macintosh Formatted Disks

{% raw %}

	Article: Q183720
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,2.1,2.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kberrmsg osr2 win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a Macintosh-formatted floppy disk by using the MacDrive
	95/98 program, you may be unable to do so, and you may receive the following
	error message:
	
	  The disk in drive A is not formatted
	
	CAUSE
	=====
	
	This problem can occur if the following Windows 95 floppy disk driver is
	installed in the Windows\System\Iosubsys folder:
	
	  HSFLOP.PDR version 4.00.1112 dated 1/13/97 24,737 bytes
	
	This version of Hsflop.pdr reports that a disk is not formatted if the disk does
	not have a valid media byte. Disk that are formatted for Macintosh do not have a
	valid media byte.
	
	This version of Hsflop.pdr is included in the update described in the following
	article in the Microsoft Knowledge Base:
	
	  Q159153 Error Messages While Backing Up to Some Floppy Disk Drives
	
	These updated files may also be preinstalled on some computers running Microsoft
	Windows 95 OEM Service Release 2, 2.1, or 2.5.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: media4 productions macdrive 98
	
	======================================================================
	Keywords          : kb3rdparty kbenv kberrmsg osr2 win95 kbfixlist
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : :1.0,2.0,2.1,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
