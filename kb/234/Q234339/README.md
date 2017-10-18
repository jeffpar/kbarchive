---
layout: page
title: "Q234339: Volume Lock Request Does Not Release Volume After File Operation"
permalink: kb/234/Q234339/
---

## Q234339: Volume Lock Request Does Not Release Volume After File Operation

	Article: Q234339
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that improperly uses an NTFS volume lock function call on
	a computer running Windows NT 4.0, the volume lock may not be removed after the
	program has finished running.
	
	CAUSE
	=====
	
	The DeviceIoControl() function can be used to lock the volume by specifying
	FSCTL_LOCK_VOLUME as I/O control code. This function may not work properly if it
	is called after you perform the following file operations:
	
	- Open the destination file and do some I/O for that file. Then close the file.
	
	- As soon as you close the destination file, rename another file to the
	  destination file by using MoveFileEx().
	
	Utility programs affected with this problem require exclusive access to the disk
	volume. Those programs may report an error message as if another process is
	still accessing the volume. For instance, if you run the "CHKDSK -F" (without
	the quotation marks) command against a disk volume experiencing this problem,
	the following error message may be displayed:
	
	  The type of the file is NTFS.
	  Cannot lock current drive.
	  Chkdsk cannot run because the volume is in use by another process. Would you
	  like to schedule this volume to be checked the next time the system restarts?
	
	Disk Administrator may also be affected as well.
	
	The closed file object is not dereferenced if the closed file was specified as
	the new file for the MoveFileEx() function before the file cache write process
	completes. Other file operations other than locking a volume work fine. This is
	an NTFS-specific problem. FAT volumes are not affected by this problem.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	You can run Clearmem.exe to recover from this problem. The Clearmem utility
	flushes the section used as file cache, thus the file object in question is
	dereferenced by running Clearmem. This tool is included in the Microsoft Windows
	NT 4.0 resource kit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
