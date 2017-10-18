---
layout: page
title: "Q148705: PC DirSync ErrMsg: NSDA -x Terminated Abnormally w/ Exit Code"
permalink: kb/148/Q148705/
---

## Q148705: PC DirSync ErrMsg: NSDA -x Terminated Abnormally w/ Exit Code

	Article: Q148705
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Directory Synchronization (Dir-Sync), you may see the following
	error on the Dispatch screen or in the Dispatch session log:
	
	  INST1 02/02/96 13:18 Checking the process table on NET1\PO1
	  INST1 02/02/96 13:18 Running NSDA - xx
	  INST1 02/02/96 13:18 "NSDA - xx" terminated abnormally with exit code 65
	
	where -xx could be -RT, -S, or -RR.
	
	CAUSE
	=====
	
	This error will occur if some portion of the NDSA process does not complete.
	
	RESOLUTION
	==========
	
	The Dir-Sync process, DISPATCH.EXE, consists of three phases: T1, T2, and T3.
	The three phases are spawned by NSDA -RT, NSDA -S, and, and NSDA -RR,
	respectively. NSDA will in turn spawn another process, as follows:
	
	  T1: NSDA -RT will spawn reqmain.
	  T2: NSDA -S will spawn srvmain.
	  T3: NSDA -RR will spawn reqmain, import, and rebuild.
	
	To determine the source of the exit code 65, use the following steps.
	
	1. Check several lines above the exit code to find the postoffice responsible
	  for the error. Make a note of the time stamp and postoffice generating the
	  error.
	
	2. Go to the postoffice that reported the error, and check the DIRSYNC.LOG file.
	  Locate the entries with the same date and time stamp. There may be a more
	  specific error listed that will assist in locating the problem.
	
	  For example, if the Mail Administrator program (ADMIN.EXE) is running against
	  NET1\PO1, Import will not be able to complete, and you will see the following
	  entries in the DIRSYNC.LOG on the DSServer:
	
	  02/02/96 13:18 | 1 -1 Microsoft  Mail DirSync Requestor
	  V3.5.12
	        02/02/96 13:18 | 1 105 36
	        02/02/96 13:18 | 2 91 ADMIN
	  02/02/96 13:18 | 2 -1 Mailbox name:
	  Admin. 02/02/96 13:18 | 2 -1 Full name:
	  Administrator. 02/02/96 13:18 | 2 -1
	  FLAG.GLB is locked open. 02/02/96 13:18 |
	  1 -1 Import is finished
	
	  In the DSSERVER.LOG on the requestor, you will see the following entries:
	
	  02/02/96 13:18 | Status Microsoft  Mail DirSync Requestor
	  V3.5.12 02/02/96 13:18 | Status Requestor updates received:
	  36
	  02/02/96 13:18 | Fatal [91] The database is locked by
	  another process: ADMIN
	        02/02/96 13:18 | Fatal [  ]   Mailbox name:
	  Admin.
	  02/02/96 13:18 | Fatal [  ]   Full name:
	  Administrator.
	  02/02/96 13:18 | Fatal [  ]   FLAG.GLB is locked open.
	  02/02/96 13:18 | Status Import is finished
	
	  In this case to correct the problem, close ADMIN.EXE on the problem postoffice
	  and then let Dir-Sync run again.
	
	3. If there are no associated error messages in the DIRSYNC.LOG, go to the
	  following steps.
	
	  Determine which stage the error occurred:
	
	   - NSDA -RT (T1 time)
	
	   - NSDA -S (T2 time - runs only on DS server)
	
	   - NSDA -RR (T3 time)
	
	4. If the error occurs in T1 (NSDA -RT), check the following:
	
	   - REQCONF.GLB should be 512 bytes only and accessible.
	
	   - REQTRANS.GLB should be accessible (not locked).
	
	   - REQMAIN.EXE is in the correct location and accessible by DISPATCH.EXE.
	
	5. If the error occurs in T2 (NSDA -S), check the following:
	
	  NOTE: Only the Dir-Sync server should be running T2.
	
	   - SRVCONF.GLB should be divisible by 1024 and accessible.
	
	   - MSTTRANS.GLB should be accessible.
	
	   - SYSTEM.KEY should be 560 bytes only.
	
	   - SYSTEM.MBG should be divisible by 116 bytes and accessible.
	
	   - SRVMAIN.EXE is in the correct location and accessible by DISPATCH.EXE If
	     the two SYSTEM files do not divide evenly, or if the SYSTEM.MBG file is
	     very large (quotient larger than 100), you may want to reset the two
	     SYSTEM files. Refer to "Directory Synchronization (Dir- Sync)" document
	     for the resetting procedures.
	
	     You can obtain this document from the following sources:
	
	      - Microsoft's World Wide Web Site on the Internet
	
	      - The Internet (Microsoft anonymous ftp server)
	
	      - The Microsoft Network (MSN)
	
	      - Microsoft Product Support Services
	
	     The following self-extracting file is available for download from the
	     Microsoft Download Center:
	
	  Wa0725.exe
	
	     The following file is available for download from the Microsoft Download
	     Center:
	
	  DownloadDownload Wa0725.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/23/WIN/EN-US/Wa0725.exe)
	
	     For additional information about how to download Microsoft Support files,
	     click the article number below to view the article in the Microsoft
	     Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	     Microsoft used the most current virus detection software available on the
	     date of posting to scan this file for viruses. Once posted, the file is
	     housed on secure servers that prevent any unauthorized changes to the
	     file.
	
	     This document has also been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail public/WA0725/
	
	     For more information about how to obtain this document, please see the
	     following article in the Microsoft Knowledge Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	6. If the error occurs in T3 (NSDA -RR), check the following:
	
	   - SRVTRANS.GLB should be 0 bytes after T3 completion if it is not at 0
	     bytes, reset the file with the following command:
	
	  "TYPE NUL > SRVTRANS.GLB" (without the quotation marks)
	
	   - USRTRANS.GLB same conditions as above.
	
	   - NMETRANS.GLB same conditions as above.
	
	   - GWTRANS.GLB same conditions as above.
	
	   - GWTRANS.GLB should not be present; if it is delete it.
	
	   - INMETRAN.GLB should not be present; if it is delete it.
	
	   - IUSRTRAN.GLB should not be present; if it is delete it.
	
	   - SRVUPDS.GLB should not be present; if it is delete it.
	
	   - REQUPDS.GLB should not be present; if it is delete it.
	
	   - Any SORTxxxx.GLB where xxxx is a number should not be present, if so
	     delete it.
	
	   - REQMAIN.EXE is in the correct location and accessible by DISPATCH.EXE.
	
	   - IMPORT.EXE is in the correct location and accessible by DISPATCH.EXE.
	
	   - REBUILD.EXE is in the correct location and accessible by DISPATCH.EXE.
	
	7. Because the REBUILD.EXE process in T3 is the most time and resource consuming
	  process, the following conditions may also cause the exit code 65 error:
	
	   - Lack of disk space on postoffice server.
	
	   - Ownerless files (Novell only) on postoffice server.
	
	   - Lack of available memory on Dispatch computer.
	
	MORE INFORMATION
	================
	
	There may be other factors and possible causes that are not mentioned here. This
	article is intended to provide a more defined starting point to begin
	troubleshooting this error.
	
	
	For additional information, see Chapter 14 in the "Administrator's Guide" for
	Microsoft Mail for PC Networks.
	
	Also see the DIRSYNC.TXT file on Disk 1 of your Microsoft Mail for PC Networks
	disks.
	
	Additional query words: 3.50 fatal error 91
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : :3.5
	
	=============================================================================
	
