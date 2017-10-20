---
layout: page
title: "Q186669: FPNW Logout.exe Incorrectly Reports Year After Jan. 1, 2000"
permalink: /kb/186/Q186669/
---

## Q186669: FPNW Logout.exe Incorrectly Reports Year After Jan. 1, 2000

{% raw %}

	Article: Q186669
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbWinNT400sp4fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Services for NetWare version 4.0 
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The File and Print Services for NetWare (FPNW) service Logout.exe program may
	report the year incorrectly for files created on or after January 1, 2000.
	
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
	
	Windows NT 3.51
	---------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as described below. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  09/17/98  06:16p               237,552 Login.exe     (x86)
	  09/17/98  06:16p                31,015 Logout.exe    (x86)
	
	You must manually replace Login.exe and Logout.exe in the correct folders on your
	client computers with these updated files.
	
	NOTE: Y2k351-i.exe and Y2k351-a.exe were updated on November 5, 1998.
	
	This hotfix has been posted to the following Internet location as Y2k351-i.exe
	(x86) and Y2k351-a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/y2k-fix/
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Windows NT 3.51
	---------------
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51.
	
	MORE INFORMATION
	================
	
	For more information on what is fixed in Y2K2-fix, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q175093 User Manager Does Not Recognize February 2000 As a Leap Year
	
	  Q180122 After Changing the Time, Windows NT May Skip a Day
	
	  Q183123 Find Files Displays Garbled Date if Year is 2000 or Greater
	
	  Q183125 Shell Doc Property Dialog Custom Date Incorrect after Year 2000
	
	  Q184132 Err Msg: Value Entered Does Not Match with the Specified Type
	
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
	
	Additional query words: Y2K 4.00
	
	======================================================================
	Keywords          : kbYear2000 kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
