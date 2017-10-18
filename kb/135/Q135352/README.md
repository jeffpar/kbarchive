---
layout: page
title: "Q135352: Frequently Asked Questions for Mail for PC Networks"
permalink: kb/135/Q135352/
---

## Q135352: Frequently Asked Questions for Mail for PC Networks

	Article: Q135352
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a list of frequently asked questions and the answers about version 3.5
	of Microsoft Mail for PC Networks.
	
	MORE INFORMATION
	================
	
	1. Q. What are the most common Mail issues listed in the Microsoft Knowledge
	  Base?
	
	  A. Q114119: Application Notes Available for Mail for PC Networks
	  Q115163: Automating Multiple Mail Logins on NetWare 3.11
	  Q99946: Available Modem Scripts
	  Q99725: Checking for Ownerless Files in NetWare
	  Q103421: Contents of Mail 3.2 Enhancements and Corrections
	  Q77926: Description of Mail Database Subdirectories
	  Q94259: Err Msg: Could Not Find Mail System Database
	  Q111537: Frequently Asked Questions for Mail for Windows 3.2
	  Q100826: How External Sends Mail Between Postoffices
	  Q103379: How to Create Groups Spanning Multiple Postoffices
	  Q96501: Incorrect Unread Message Count
	  Q95939: Installing PC Mail 3.0 on a Novell 3.11 Server
	  Q97958: Installing Remote and LAN Drivers on One Computer
	  Q97080: Mail Installation Prompts for User Data Disk
	  Q115162: Microsoft At Work PC Fax with Mail 3.2 Windows Client
	  Q97852: Modifying Modem Scripts
	  Q104360: New Mail Notification Using a Custom Command
	  Q93562: New Mail Notification - Sound Chime & Flash Envelope
	  Q92439: Preventing .KEY Files from Locking Up on Networks
	  Q94210: Running the Mail 3.0b Windows Client from the Network
	  Q99636: Running Windows Client on Windows for Workgroups
	  Q105964: Simple MAPI Common Technical Questions and Answers
	  Q110733: Summary List of Mail for Windows 3.2 Bugs
	  Q111000: Summary List of Mail Remote for Windows 3.2 Bugs
	  Q100455 Using Gateway Address Lists
	  Q96531: Using Mail Remote with Schedule+
	  Q101138: Using the ServerPath Entry in the MSMAIL.INI File
	  Q98912: Version 3.2 Postoffice Upgrade Instructions
	
	2. Q. Is there a list of bug fixes included in version 3.5 of Mail for PC
	  Networks?
	
	  A. All files have been upgraded with version 3.5 of Microsoft Mail for PC
	  Networks. A comprehensive list of all files upgraded due to fixes or
	  otherwise revised is as follows:
	
	  Client (version 3.5.2000.4086)
	
	  MSMAIL.EXE
	  MAPI.DLL
	  MSSFS.DLL
	  SCHEDMSG.DLL
	  Microsoft Mail (Macintosh workstation)
	
	  Server (version 3.5 for .EXE)
	
	  ADMIN.EXE
	  EXTERNAL.EXE
	  ASYNC.OVL
	  X25ATLAN.OVL
	  X25EICON.OVL
	  IMPORT.EXE
	  REBUILD.EXE
	  SRVMAIN.EXE
	
	  For more information, see Q132059 "Summary List of Mail for PC Networks 3.5
	  Bug Fixes" in the Microsoft Knowledge Base.
	
	3. Q. Will the MTA and MMTA run under Windows NT?
	
	  A. Version 3.2x of the mail transfer agent (MTA) is designed and tested to run
	  on an MS-DOS-based operating system. Version 3.2x of the Mail Multitasking
	  MTA (MMTA) is designed and tested to run on OS/2 and 2.x operating system.
	
	  The 3.2x MTA is not supported under any circumstances under Windows NT. The
	  3.2x MMTA is supported doing LAN-based transfers only under the Windows NT
	  operating system. The MMTA is not supported doing asynchronous transfers
	  because the MMTA must access hardware directly, and this is not possible
	  under Windows NT.
	
	  Transferring via X.25 is not supported either for the MMTA on Windows NT, as
	  there was not an X.25 driver for Windows NT. Only version 3.5 of the Mail
	  Multitasking MMTA for Windows NT is supported in an NT environment.
	
	4. Q. What is the purpose of inbox shadowing?
	
	  A. The Inbox Shadowing feature instructs Mail for Windows to synchronize its
	  inbox with the other Microsoft for PC Networks workstations[ASCII 146]
	  inboxes.
	
	  For example, Mail marks each inbox message once as synchronized. When you
	  delete a message from the Mail for Windows inbox, it will be deleted from the
	  inbox for each other client.
	
	  For more information, see Q96718, "Description and Use of Inbox Shadowing," in
	  the Microsoft Knowledge Base.
	
	
	5. Q. How can I perform maintenance on the Mail for PC Networks database?
	
	  A. The "Database Maintenance Utilities" document describes operational details
	  for utilities used to repair and maintain the database for Microsoft Mail for
	  PC Networks. The procedures described apply to versions 2.1 and later of
	  Microsoft Mail except where noted.
	
	  To obtain this document and the utilities in the United States, ftp to the
	  following site:
	
	  ftp://ftp.microsoft.com/bussys/mail/pcmail-public/WA0641/
	
	6. Q. What integrity or diagnostic tests can be run against my mail message file
	  (MMF)?
	
	  A. There are two utilities that you can run on the MMF: integrity check and
	  compression.
	
	  To run the integrity check:
	
	  NOTE: Do not invoke the MMF integrity check unless you know your MMF is
	  corrupt. There is a possibility, depending on the contents of an attachment,
	  that the Mail client will improperly remove part or all of the attachment.
	
	  Hold the SHIFT key down while you are entering Mail for Windows to check the
	  integrity of the MMF.
	
	  To run the compression:
	
	  Hold the F5 key down while you are entering Mail for Windows to recover space
	  occupied by deleted objects in the MMF.
	
	  For more information, see Q112265, "Using F5 or SHIFT Key to Start Mail
	  Utilities," in the Microsoft Knowledge Base.
	
	7. Q. I have run MOVEUSER.EXE, and now a number of users cannot access the mail
	  server. What is the problem?
	
	  A. This problem indicates that an ADMIN.EXE password recover has been executed
	  on the user's mail message file (MMF) before you moved the user with
	  MOVEUSER.EXE. As a result, the password was not carried over to the new mail
	  server.
	
	  For more information, see Q117650, "MOVEUSER.EXE Causes Invalid MMF After
	  Password Reset," in the Microsoft Knowledge Base.
	
	8. Q. Is there a utility available that will allow me to perform housekeeping on
	  server-based mail message files (MMFs)?
	
	  A. Yes. Microsoft provides MMFCLEAN.EXE, a Windows-based application, to purge
	  mail from MMFs.
	
	  For more information, see Q117693, "Microsoft Mail MMFCLEAN.EXE Utility," in
	  the Microsoft Knowledge Base.
	
	9. Q. How can I optimize Mail connections via Remote Access Service (RAS)?
	
	  A. Microsoft Mail for Windows is supported over RAS; although it will be much
	  slower than if you access Mail directly over a network. (Version 3.2 of
	  Microsoft Mail Remote for Windows provides faster access.) If you need to use
	  Mail for Windows over RAS, you should compose and read messages offline.
	
	  For more information, see Q119581, "Using Mail Over RAS," in the Microsoft
	  Knowledge Base.
	
	10. Q. Why do I get the error "This account is not a valid user of this message
	  file" when I log in to the Windows client?
	
	  A. You will receive the error when the criteria contained in the Mail Message
	  File (MMF) does not match your information on the postoffice. When this
	  message is seen, it indicates that you are being properly validated by the
	  postoffice, and the information returned from the postoffice does not match
	  what is in the MMF.
	
	  For more information, see Q130096, "Err Msg: This Account Is Not a Valid User
	  of this...," in the Microsoft Knowledge Base.
	
	11. Q. Can I have more than one Directory Synchronization (Dir- Sync) server
	  within my organization?
	
	  A. No. Requestors can be registered with only one Dir-Sync server. Also, the
	  Dir-Sync server cannot be registered as a requestor with another Dir-Sync
	  server.
	
	  For more information about the Dir-Sync process, please see Q96060,
	  "Directory Synchronization (Dir-Sync)" in the Microsoft Knowledge Base.
	
	12. Q. Can the MS-DOS Directory Synchronization (Dir-Sync) files be used on the
	  OS/2 platform with the Multitasking MTA (MMTA)?
	
	  A. Yes. The Dir-Sync files (IMPORT.EXE, NSDA.EXE, REBUILD.EXE, REQMAIN.EXE,
	  and SRVMAIN.EXE) are "bound" applications. As a result, they can be run on
	  multiple platforms, such as MS- DOS and OS/2.
	
	  All Dir-Sync files, except DISPATCH.EXE, can be run in these environments.
	
	13. Q. What is the MAIL.DAT file?
	
	  A. The MAIL.DAT is a file created when Advanced Security is installed on the
	  postoffice. This file contains the location of the postoffice data files.
	  The file is encrypted so users cannot see the location of the data files;
	  thus, they can not tamper with them.
	
	  The MAIL.DAT file must reside in the Mail executable directory. If you remove
	  the file, your postoffice no longer has the advanced security features, and
	  users must establish a drive connection to the Maildata share to use the
	  Mail program.
	
	  For more information about the MAIL.DAT file, refer to Chapter 2 of the Mail
	  for PC Networks "Administrator's Guide."
	
	14. Q. How can two or more users run Microsoft Mail from one workstation?
	
	  A. To run multiple Mail clients from the same workstation, make the
	  MSMAIL.INI file read-only. As a result, each person who logs in to the
	  workstation will have to enter his or her name and password information to
	  access the Mail account.
	
	15. Q. How can I create groups on one postoffice that span multiple
	  postoffices?
	
	  To set up this environment so that the least amount of maintenance is needed,
	  do the following:
	
	  1. Create a group on each postoffice titled, for example,
	
	  All PO# Users
	
	     where # is the postoffice number. Each group should contain ALL local
	     users, but NO external users.
	
	  2. Export the updated address lists among all the postoffices (or let the
	     directory synchronization (Dir- Sync) cycle complete).
	
	     NOTE: If a group only contains users on the local postoffice, it can
	     participate in Dir-Sync.
	
	  3. After the Dir-Sync cycle is complete, from the Administrator program on
	     each postoffice, merge the group names from the other postoffices into the
	     local postoffice address list (POL) using the Address, Create command.
	
	  4. Create a group on EACH postoffice, for example,
	
	  All Users at ABC Company
	
	     The group should contain all local users (the same users as in step 1
	     above) AND the All PO# Users group names from the other postoffices.
	
	     Notes:
	
	      - Once the groups in step 4 have been created, you should not export the
	        address list again. Doing so will create duplicate group names on the
	        Global Address List (GAL).
	
	      - Because this group will contain two external addresses, it will not
	        participate in Dir-Sync.
	
	  For more information on automating groups, see Q103379, "How to Create Groups
	  Spanning Multiple Postoffices" and Q124044 "Replicating Postoffice Address
	  List Groups Between POs" in the Microsoft Knowledge Base.
	
	16. Q. How can I create group folders from Mail for Windows?
	
	  A. Group folders cannot be created in the Windows client. They must be
	  created in the Microsoft Mail for PC Networks, MS- DOS workstation in order
	  for the Windows client to use them.
	
	17. Q. My Directory Synchronization (Dir-Sync) cycle is one hour off the week
	  before Daylight Saving Time begins. How can I correct this?
	
	  A. The PROCESS.GLB is not Daylight Saving Time (DST) aware, but the Dispatch
	  process is. As a result, when Dispatch queries the PROCESS.GLB schedule
	  table, it calculates each process up to a week (604,800 seconds) in advance.
	  The week before DST, Dispatch interprets the table as one week plus one hour
	  different; however the difference is not noted in the PROCESS.GLB schedule.
	
	  To correct this, either re-adjust the times in the Administrator[ASCII 146]s
	  program (ADMIN.EXE) to update the PROCESS.GLB file, or use the TimeZone
	  (-TZ) variable on the External command line.
	
	  For more information, see Q101753 [ASCII 147]When to Use the Time Zone Option
	  with Dir-Sync[ASCII 148] in the Microsoft Knowledge Base.
	
	18. Q. How do I configure Mail when a shared version of Microsoft Windows is
	  installed on my network server?
	
	  A. The information in the Microsoft Knowledge Base article Q107444 "Running
	  Windows Client from the Network" outlines the procedures for users to run
	  Mail for Windows from the network without storing Mail files on their local
	  workstations.
	
	  The following procedures are outlined in the article so that the network
	  administrator can set up Mail so users can run Mail for Windows from the
	  network without storing Mail files on their local workstations.
	
	   - "Running Windows and Mail from the Network--Same Directory" explains how
	     to set up Mail for Windows when users run both Microsoft Windows and
	     version 3.2a of Mail for Windows from the same network directory.
	
	   - "Running Windows and Mail from the Network--Different Directories"
	     explains how to set up Mail for Windows when users run both Windows and
	     Mail for Windows from different network directories.
	
	   - "Running Windows Locally and Mail from the Network" explains how to set up
	     Mail for Windows when users run Windows locally and run Mail for Windows
	     from the network.
	
	   - "Running Windows from the Network and Mail Locally" explains how to set up
	     Mail for Windows when users run Windows from the network and run Mail for
	     Windows locally.
	
	19. Q. What are the differences between the Windows for Workgroups version of
	  Mail and retail Mail?
	
	  A. The Workgroups Mail postoffice architecture is similar to the architecture
	  for Microsoft Mail for PC Networks. This is so users with connectivity needs
	  beyond their workgroup can easily upgrade.
	
	  The postoffice structure and Windows client are identical except for the
	  following:
	
	   - No Demo files are in the workgroup postoffice. Microsoft Mail for PC
	     Networks does include these files.
	
	   - No spell checker is supplied with Microsoft Mail for PC Networks.
	
	   - The postoffice in Windows for Workgroups does not support connections to
	     external postoffices or gateways. For example, a Windows for Workgroups
	     postoffice cannot connect to another postoffice or gateway.
	
	   - Microsoft Mail for PC Networks includes support for global aliases or
	     network group names while Windows for Workgroups Mail does not.
	
	   - The default ADMIN.TPL and ADMIN.INF files in Windows for Workgroups Mail
	     are created with predefined user information in the workgroup postoffice.
	     For example, the user templates included in Windows for Workgroups Mail
	     contain template information regarding Phone number #1, Phone number #2,
	     Office, Department, and Notes. These must be created separately in
	     Microsoft Mail for PC Networks.
	
	   - Microsoft Mail for PC Networks includes an administration program not
	     created in Windows for Workgroups Mail. In Windows for Workgroups, the
	     administration program is accessed via the Mail menu in the Windows Mail
	     client.
	
	   - Microsoft Mail for PC Networks includes an administration utility that is
	     used to administer and configure the postoffice. The ADMIN.EXE program can
	     be used to configure and administer the postoffice from any workstation on
	     the network running MS-DOS. In Windows for Workgroups, the administration
	     program is accessed via the Mail menu in the Windows Mail client. Only the
	     administrator can log on under his or her account and administer the
	     postoffice on the workstation only.
	
	   - The Mail client included with Microsoft Windows for Workgroups version
	     3.11 is designed to work with Microsoft At Work PC Fax. However, At Work
	     Fax is not supported with version 3.2 of Microsoft Mail for Windows.
	
	  For more information, see Q94178, "Differences Between Windows for Workgroups
	  Mail & PC Mail." in the Microsoft Knowledge Base.
	
	Additional query words: 3.50 FAQ questions and answers
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN350
	Version           : :3.5
	Issue type        : kbinfo
	
	=============================================================================
	
