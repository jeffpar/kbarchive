---
layout: page
title: "Q183123: Find Files Displays Garbled Date if Year is 2000 or Greater"
permalink: kb/183/Q183123/
---

## Q183123: Find Files Displays Garbled Date if Year is 2000 or Greater

	Article: Q183123
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbWinNT400sp4fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows NT Find Files or Folders feature, the two digit
	abbreviation of the year does not appear correctly. For example, if the year is
	set to 2001, when you click the Date Modified tab on the Find: All Files dialog
	box, the two digit abbreviation of the year appears as :1, rather than 01.
	
	CAUSE
	=====
	
	This problem occurs when the system date is set to 2000 or greater in the
	Date/Time utility in Control Panel.
	
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	The English version of this post-SP3 hotfix has been posted to the following
	Internet locations.
	
	  http://www.microsoft.com/ntserver/nts/downloads/archive/NT4y2kpostSP3/default.asp
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/y2k2-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	NOTE: Shell32.dll as shipped with Internet Explorer 4 Active Desktop is not
	replaced by this fix. For more information on Internet Explorer and Y2K issues,
	please see the following Microsoft web site:
	
	  http://www.microsoft.com/technet/topics/year2k/default.htm
	
	For more information on what is fixed in Y2K2-fix, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q175093 User Manager Does Not Recognize February 2000 As a Leap Year
	
	  Q180122 After Changing the Time, Windows NT May Skip a Day
	
	  Q183125 Shell Doc Property Dialog Custom Date Incorrect after Year 2000
	
	  Q184132 Err Msg: Value Entered Does Not Match with the Specified Type
	
	  Q186669 FPNW Logout.exe Incorrectly Reports Year After Jan. 1, 2000
	
	  Q191768 Date of Print Job May Be Displayed Incorrectly in Print Queue
	
	  Q193056 Problems in Date/Time after Choosing February 29 in a Leap Year
	
	  Q193434 Migration Changes NetWare Accounts Expiration Date
	
	  Q194726 FPNW Client Does Not Get Correct Time or Date After Y2K
	
	  Q207799 IBM PS/1 will not Boot on or After January 1, 2000
	
	  Q216916 NTBACKUP Writes Incorrect Year to Log File
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	For information on the Y2K2-fix for Windows NT 4.0, Terminal Server Edition,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q196548 Y2K Update for Windows NT 4.0, Terminal Server Edition
	
	Additional query words: Windows NT Explorer y2k year 2000 4.00
	
	======================================================================
	Keywords          : kbYear2000 kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
