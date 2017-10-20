---
layout: page
title: "Q111703: PC DirSync: Microsoft Mail Srvmain.exe Version 3.2.14 Update"
permalink: /kb/111/Q111703/
---

## Q111703: PC DirSync: Microsoft Mail Srvmain.exe Version 3.2.14 Update

{% raw %}

	Article: Q111703
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the Srvmain.exe file that is included with
	versions 3.2 and 3.2a of Microsoft Mail for PC Networks.
	
	For complete information about obtaining and installing the Srvmain.exe file, see
	the following sections:
	
	- To download the updated file
	
	- To update your Srvmain.exe file
	
	MORE INFORMATION
	================
	
	IMPORTANT: When you update to Srvmain.exe version 3.2.14, you need to update
	Admin.exe to version 3.2.13 or later (update included in Admupd.exe on the MSL)
	and Listds.exe version 3.2.1 (included with this update). You MUST also run
	Sconfix.exe (included with this update) once. This is required for all users
	updating to Srvmain.exe version 3.2.14.
	
	This replacement file includes the following modifications for version 3.2 of
	Microsoft Mail for PC Networks:
	
	- The Import utility no longer stops responding (hangs) when it processes
	  RESYNC.GLB after doing heavy processing. This problem occurred because the
	  heap became corrupted when it was under a heavy load.
	
	  NOTE: To resolve this problem, two .exe files must be updated: the Srvmain.exe
	  file (included in this update) and the Import.exe file (update included in
	  Impupd.exe on the MSL).
	
	- The SRVMAIN utility no longer does one-byte reads of the template files.
	
	- A Microsoft Mail Connection 3.2 PROXYNET\PROXYPO postoffice address list is
	  now propagated to a downstream requestor postoffice when the gateway
	  postoffice is also the directory server postoffice. The Import utility now
	  copies FFAPI postoffice address lists from the directory server to the
	  GLB\Resync.glb file to perform a directory synchronization manual import
	  procedure.
	
	  NOTE: To resolve this problem, two .exe files must be updated: the Srvmain.exe
	  file (included with this update) and the Import.exe file (update included in
	  Impupd.exe on the MSL).
	
	This replacement file also includes the following modifications for version
	3.2a:
	
	- The directory synchronization (Dir-Sync) server now continues to process
	  updates when Srvmain.exe encounters duplicate entries in the system mailbag.
	  Previously, under these conditions SRVMAIN.EXE would quit without processing
	  any additional updates in the system mailbag, and the following entries would
	  be added to the DIRSYNC.LOG file:
	
	  Error [115] Failure to read mail from NULL
	
	  Warning [8] Error deleting file: <Network>/<Postoffice>/$SYSTEM.
	
	
	- Dir-Sync will no longer give error
	
	  Error 156 Invalid Dirsync password from PCM:Network/Postoffice
	
	  during the T2 cycle. Previously, even if the password for the Requestor
	  postoffice was correct, the password of a requestor postoffice would be
	  incorrectly compared against other requestor postoffices listed in the
	  SRVCONF.GLB. Specifically, this occurred when postoffices were registered in
	  a particular order, and the postoffice names were similar to or part of other
	  requestor postoffice names.
	
	
	- If the Dsserver.log on a requestor postoffice is corrupt for some reason, the
	  SRVMAIN -r process during Dir-Sync will no longer cause a Trap D.
	
	
	- When the Admin account mailbox is greater than eight characters in length,
	  the Keep Updates number will no longer change when you change the
	  Administrator's name in Config, DirSync, Server, Options.
	
	  IMPORTANT: This fix is specifically for users who have an Administrator's
	  mailbox name greater than eight characters, and who want to receive Dir-Sync
	  status messages.
	
	  To add the new Administrator's name, you need ADMIN.EXE version 3.2.13 or
	  later. Run Admin, DirSync, Server, Options. Type in the desired mailbox name.
	  If necessary, re-enter the Keep Updates field. This modified SRVMAIN requires
	  a new LISTDS.EXE version 3.2.1 or later for checking the SRVCONF.GLB file.
	
	
	- If X.400 addresses are included in the very first Dir-Sync cycle, Dir-Sync
	  will no longer fail with a protection violation during the T2 cycle of the
	  SRVMAIN process.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Srvupd.exe now
	  (http://download.microsoft.com/download/pcmail/Update/22/WIN/EN-US/Srvupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download Srvupd.exe to a clean directory, run it (by typing "srvupd"
	(without the quotation marks) at the MS-DOS command prompt) to extract the
	contents of the file. You should receive the following files:
	
	  SRVMAIN.EXE (163,941 bytes, dated 02-07-95, 11:33 A.M.)
	  SCONFIX.EXE (  6,887 bytes, dated 01-13-95,  2:48 P.M.)
	  LISTDS.EXE  ( 22,495 bytes, dated 01-23-95,  4:35 P.M.)
	  README.TXT
	
	To Replace Your Srvmain.exe File
	--------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER after each
	  line
	
	  " copy <path>\srvmain.exe <destination>
	
	  copy <path>\listds.exe <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting Srvupd.exe file and <destination> is the drive and directory
	  where your Srvmain.exe and Listds.exe files currently reside. For example, if
	  you ran the self-extracting file from the TEST directory on drive D, and your
	  Srvmain.exe and Listds.exe files are located in the MAILEXE directory on
	  drive C, type the following commands:
	
	  " copy d:\test\srvmain.exe c:\mailexe
	
	  copy d:\test\listds.exe c:\mailexe " (without the quotation marks)
	
	  Notes:
	
	   - The Srvmain.exe file typically resides on the postoffice server in the
	     Mail executables directory as well as on the machine running the Dispatch
	     program and the directory synchronization agents. Make sure you update all
	     copies of the Srvmain.exe file.
	
	   - Once you update to version 3.2.13 or later of SRVMAIN and ADMIN, use this
	     LISTDS for viewing the Srvconf.glb.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>\sconfix.exe <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting SRVUPD.EXE file and <destination> is the drive and directory
	  where your Mail executable files currently reside. For example, if you ran
	  the self-extracting file from the TEST directory on drive D, and your Mail
	  executable files are located in the MAILEXE directory on drive C, type the
	  following command:
	
	  " copy d:\test\sconfix.exe c:\mailexe " (without the quotation marks)
	
	3. Run the SCONFIX utility from the Mail executables directory by running
	
	  " sconfix -d<drive> " (without the quotation marks)
	
	  where <drive> is the drive mapped to the Dir-Sync server postoffice
	  database.
	
	The SRVMAIN.EXE and LISTDS.EXE utilities are included in the "Directory
	Synchronization (Dir-Sync)" document. For more information about how to obtain
	this document, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q96060 PC DirSync: Directory Synchronization (Dir-Sync)
	
	Note that this article is referred to by the pcmail article "PC Gen: Bound
	Applications That Work with MMTA," Q118677. If you modify or delete this
	article, please make corresponding changes in that article.
	
	Additional query words: 3.20 dirsynch
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
