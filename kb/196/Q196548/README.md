---
layout: page
title: "Q196548: Y2K Update for Windows NT Server 4.0, Terminal Server Edition"
permalink: kb/196/Q196548/
---

## Q196548: Y2K Update for Windows NT Server 4.0, Terminal Server Edition

	Article: Q196548
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbYear2000
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the problems described in the following
	articles in the Microsoft Knowledge Base:
	
	  Q175093 User Manager Does Not Recognize February 2000 As a Leap Year
	
	  Q180122 After Changing the Time, Windows NT May Skip a Day
	
	  Q183123 Find Files Displays Garbled Date if Year is 2000 or Greater
	
	  Q183125 Shell Doc Property Dialog Custom Date Incorrect after Year 2000
	
	  Q184132 Err Msg: Value Entered Does Not Match with the Specified Type
	
	  Q186669 FPNW Logout.exe Incorrectly Reports Year After Jan. 1, 2000
	
	  Q191768 Date of Print Job May Be Displayed Incorrectly in Print Queue
	
	  Q193056 Problems in Date/Time after Choosing February 29 in a Leap Year
	
	  Q193434 Migration Changes NetWare Accounts Expiration Date
	
	  Q194726 FPNW Client Does Not Get Correct Time or Date After Y2K
	
	  Q207799 IBM PS/1 will not Boot on or After January 1, 2000
	
	  Q216916 NTBACKUP Writes Incorrect Year to Log File
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	Server 4.0, Terminal Server Edition service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  02/23/99  12:45p                57,104 Docprop.dll   (x86)
	  01/19/99  03:17p               221,920 Fpnwsrv.sys   (x86)
	  05/28/98  12:02p                28,095 Logout.exe    (x86)
	  11/24/98  03:51p               295,184 Netui2.dll    (x86)
	  11/24/98  04:08p               711,440 Ntbackup.exe  (x86)
	  01/06/99  12:44p                26,816 Ntdetect.com  (x86)
	  11/25/98  11:46p               217,360 Nwconv.exe    (x86)
	  11/24/98  04:27p             1,296,656 Shell32.dll   (x86)
	  11/24/98  03:53p                52,496 Timedate.cpl  (x86)
	  11/24/98  03:57p                79,120 Win32spl.dll  (x86)
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40TSE/hotfixes-postSP3/Y2k2-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	Additional query words: 4.00 wts tse y2k year 2000
	
	======================================================================
	Keywords          : kbYear2000 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
