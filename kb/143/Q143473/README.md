---
layout: page
title: "Q143473: FIX: Unattended Setup Stops Unexpectedly"
permalink: /kb/143/Q143473/
---

## Q143473: FIX: Unattended Setup Stops Unexpectedly

	Article: Q143473
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBKkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform an unattended Setup of Windows NT 4.0, you may receive one of
	the following messages:
	
	- Pre-installation completed successfully - press any key to shut down and
	  reboot the system.
	
	- File system conversion complete.
	
	When you receive one of these messages, the unattended Setup stops.
	
	CAUSE
	=====
	
	This behavior occurs when you use the following lines in your Unattend.txt
	file:
	
	  [Unattended]
	  NoWaitAfterTextMode=1
	  Filesystem=ConvertNTFS
	  ExtendOemPartition=1
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Extract the Setupdd.sys file from the latest Windows NT 4.0 Service Pack or
	  download the Setupdd.sys file from the following location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/
	  hotfixes-postsp2/setupdd-fix
	
	  For example, to extract all Service Pack files from Windows NT 4.0 Service
	  Pack 3 to the current folder, type the following command at a command
	  prompt:
	
	  "Nt4sp3_i.exe /x" (without the quotation marks)
	
	2. Copy the Setupdd.sys file to the folder from which you run Windows NT
	  unattended Setup.
	
	3. Edit the Unattend.txt file to add the "nowait" option to the end of the
	  "ExtendOemPartition" line. For example, edit the Unattend.txt file so it
	  includes the following lines:
	
	  [Unattended]
	  NoWaitAfterTextMode=1
	  Filesystem=ConvertNTFS
	  ExtendOemPartition=1, nowait
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem is corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To use the "ExtendOemPartition" option in Windows NT 4.0 unattended Setup, the
	"OemPreinstall" option must be enabled. The "OemPreinstall" option was
	originally designed to allow the Original Equipment Manufacturer (OEM) to stop
	Windows NT Setup so the computer could be shipped to a customer at that point.
	
	For additional information about these and other options available in Windows NT
	4.0 unattended Setup, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	Additional query words: prodnt deploy rollout pause expand Unattended Setup Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
