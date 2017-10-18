---
layout: page
title: "Q128403: System Time Advances One Day When You Run Mail's EXTERNAL"
permalink: kb/128/Q128403/
---

## Q128403: System Time Advances One Day When You Run Mail's EXTERNAL

	Article: Q128403
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Mail version 3.2 and run the MS-DOS Message Transfer
	Agent (EXTERNAL.EXE) in Windows NT, the computer system clock increments by 24
	hours.
	
	CAUSE
	=====
	
	This problem occurs if the BIOS type of the computer is not detected properly.
	This problem may occur on any network operating system that is running the
	MS-DOS Message Transfer Agent and the Postoffice is located on the system.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Make sure the following entry in the EXTERNAL.INI file for Mail version 3.2x
	  is set as follows:
	
	     ClockRollOver=0
	
	- From the MS-DOS Command Prompt, run EXTERNAL.EXE with the /ClockRollOver
	  switch as follows
	
	     EXTERNAL /ClockRollOver=0
	
	NOTE: The ClockRollOver value is set to 1 by default. If you set this value to 0,
	EXTERNAL does not attempt to read the system BIOS.
	
	MORE INFORMATION
	================
	
	EXTERNAL.EXE version 3.2.13 or later is required to correct this problem.
	
	To update your MS-DOS EXTERNAL.EXE file
	---------------------------------------
	
	1. You can find EXTUPD.EXE, a self-extracting file, on the following services:
	
	   - Microsoft's World Wide Web Site on the Internet On the www.microsoft.com
	     home page, click the Support icon. Click Knowledge Base, and select the
	     product. Enter kbfile EXTUPD.EXE, and click GO! Open the article, and
	     click the button to download the file.
	
	   - Internet (anonymous FTP) ftp ftp.microsoft.com Change to the
	     Softlib/Mslfiles folder. Get EXTUPD.EXE
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	2. After you download EXTUPD.EXE to an empty directory, run it (by typing
	  "extupd" at the MS-DOS prompt) to extract the contents of the file. You
	  should receive the following files:
	
	     ASYNC.OVL    (371,898 bytes, dated 12/01/94, 6:01 P.M.)
	     EXTERNAL.EXE  (57,535 bytes, dated 12/01/94, 5:46 P.M.)
	     X25ATLAN.OVL (376,890 bytes, dated 12/01/94, 6:06 P.M.)
	     X25EICON.OVL (395,898 bytes, dated 12/01/94, 6:09 P.M.)
	     README.TXT
	
	3. At the MS-DOS command prompt, type the following (pressing ENTER after each
	  line)
	
	     copy <path>:\external.exe <destination>
	     copy <path>:\*.ovl <destination>
	
	  where <path> is the drive and directory where you ran the self-
	  extracting EXTUPD.EXE file and <destination> is the drive and directory
	  where your EXTERNAL.EXE and *.OVL files currently reside. For example, if you
	  ran the self-extracting file from the TEST directory on drive D, and your
	  EXTERNAL.EXE and *.OVL files are located in the MAILEXE directory on drive C,
	  type the following commands:
	
	     copy d:\test\external.exe c:\mailexe
	     copy d:\test\*.ovl c:\mailexe
	
	  NOTE: The EXTERNAL.EXE and *.OVL files typically reside on the postoffice
	  server in the Mail executables directory, as well as on the machine
	  transferring messages to and from the database. Make sure you update all
	  copies of the EXTERNAL.EXE and *.OVL files.
	
	NOTE: When operating a message transfer agent on Windows NT, Microsoft recommends
	that you use the Windows Mail 3.5 Multitasking Message Transfer agent. Microsoft
	does not endorse the use of the MS-DOS Message Transfer Agent on Windows NT.
	
	Additional query words: 3.10 3.20 mta timestamp computer prodnt S14582
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5
	
	=============================================================================
	
