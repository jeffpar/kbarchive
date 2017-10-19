---
layout: page
title: "Q134757: CONN: README.TXT: Mail Connection 3.2"
permalink: /kb/134/Q134757/
---

## Q134757: CONN: README.TXT: Mail Connection 3.2

	Article: Q134757
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the content of the README.TXT included on the version 3.2
	Microsoft Mail Connection MS-DOS Setup Disk.
	
	Microsoft Mail Connection Version 3.2 - Supplementary Information
	
	This document supplements information in the Microsoft Mail Connection version
	3.2 "Administrator's Guide" not available at the time of printing, and should be
	read before installing this release.
	
	It covers the following topics :
	
	1. Release Notes
	
	2. Connection Name Utility Memory Requirements
	
	3. Connection Name Utility Hardware Requirements
	
	4. Defining the Connection Name Utility as a Dir-Sync Requestor
	
	5. Using IMPORT.EXE
	
	6. Running DISPATCH.EXE with MACGATE.EXE
	
	7. Manually entered Gateway Recipients removed when a full import is performed.
	
	8. PC Mail Global Address List may contain two addresses for each AppleTalk Mail
	  user
	
	9. Installing an Access Gateway on a server in a different site than the gateway
	  server.
	
	10. Processing of Dir-Sync mail located in the Network Manager's mailbox.
	
	11. A full Directory Import must be requested to receive address changes from
	  non Dir-Sync PC Mail gateways.
	
	12. Multiple instances of the Connection Name Utility within the same AppleTalk
	  Mail Network not supported.
	
	13. Monochrome Support for MACGATE.EXE
	
	14. Server Memory Allocation
	
	15. Setting the date and time for the Mail Connection gateway
	
	16. MACGATE.EXE and Novell 2.2
	
	17. Attachment extensions when sending mail to the Microsoft Mail Gateway to Fax
	
	18. Sending MS-DOS attachments from AppleTalk Mail through the Mail Connection
	  gateway
	
	19. Deletion of the SERVER.MAP file may result in different addresses being
	  generated.
	
	MORE INFORMATION
	================
	
	1. Release Notes
	
	  In addition to the Administrator's Guide, Release Notes have been provided to
	  assist in the installation and configuration of the Microsoft Mail Connection
	  Gateway. Please take the time to read the Release Notes, they provide
	  invaluable tips and information on the Connection Gateway. Included in the
	  Release Notes are a Quick Installation Guide and a section called Directory
	  Synchronization Configuration Tips.
	
	2. Connection Name Utility Memory Requirements
	
	  CNU must keep two copies of the World List in Memory to perform both Exports
	  and Imports. In the case of large GALs or large World Lists, the amount of
	  memory CNU requires can exceed the default setting. If CNU is to be used with
	  large GALs and World Lists, increase CNU's application memory.
	
	  To increase CNU's Memory Requirements, from the Macintosh finder, select CNU
	  and perform a Get Info (File, Get Info). Under Memory Requirements, increase
	  the "Preferred Size:" to a larger amount. This increase in memory size may
	  require CNU running on a AppleTalk Mail server with a significant amount of
	  memory.
	
	3. Connection Name Utility hardware requirements
	
	  The CNU must be run on a 68020 Macintosh or higher. The CNU will not run on a
	  lower processor machine.
	
	4. Defining the Connection Name Utility as a Dir-Sync Requestor
	
	  The Mail Connection Gateway supports Directory Synchronization with Microsoft
	  Mail for PC Networks via the CNU. To participate in directory
	  synchronization, the proxy network and proxy postoffice must be registered as
	  a requestor with the directory server. Note, it is the Proxy Network and
	  Postoffice that must be registered as the requestor and NOT the MSGATE
	  gateway. To register the proxy network and postoffice as the requestor,
	
	   - On the Dir-Sync Server postoffice, run the PC Mail Administrator program
	
	   - choose Config Dir-Sync Server Requestors Create
	
	   - Select Networks from the list, and then select your proxy network.
	
	   - Enter a requestor password if you wish to specify one
	
	5. Using IMPORT.EXE
	
	  You must be using version 3.0.6 of IMPORT.EXE to be able participate in
	  directory exchange.
	
	6. Running DISPATCH.EXE with MACGATE.EXE
	
	  The minimum available memory requirement for running both the DISPATCH.EXE
	  program and the MACGATE.EXE program on the same machine is 430K.
	
	7. Manually entered Gateway Recipients removed when a full import is performed.
	
	  Manually entered AppleTalk Mail gateway recipients are removed by the CNU when
	  a full import is performed. If manual entered gateway recipients are
	  required, the addresses should be created on PC Mail and included in the
	  Dir-Sync cycle. The addresses will then be included in the AppleTalk Mail
	  World List by the CNU.
	
	8. PC Mail Global Address List may contain two addresses for each AppleTalk Mail
	  user
	
	  After upgrading an existing 1.0b Mail Connection Gateway, you may observe two
	  addresses in the PC Mail Global Address List for each AppleTalk Mail user.
	  One of the addresses will be in AppleTalk Mail format (user@MacMailServer)
	  held over from the 1.0b gateway, while the second address is a "proxy"
	  address generated by the 3.2 gateway.
	
	  The "proxy" addresses are contained in the proxynet/proxypo address list
	  (MACNET/MACPO by default), the AppleTalk Mail format addresses are contained
	  in "MS Mail" address list. When the PC Mail Global Address List is rebuilt,
	  both address lists are combined into the Global Address List resulting in two
	  addresses for each AppleTalk Mail user.
	
	  Located on the MS-DOS Mail Connection Disk is a MS-DOS batch file designed to
	  assist you in removing the gateway addresses from the PC Mail Global Address
	  List. Copy the following files from the MS-DOS Connection Disk to the EXE
	  directory of your PC Mail gateway postoffice:
	
	  RMVMAC.BAT
	  CONNECT.GAL
	
	  To remove the gateway addresses, type
	
	  " RMVMAC <ADMIN> <ADMINPASSWORD> <DRIVE> " (without the
	  quotation marks)
	
	  Where ADMIN is the name of the administrator mailbox, ADMINPASSWORD is the
	  password for the administrator mailbox, and DRIVE is the drive mapped to the
	  postoffice maildata directory.
	
	  The "native" AppleTalk Mail addresses will be removed from the PC Mail Global
	  Address List after the next Dir-Sync cycle (or GAL rebuild).
	
	9. Installing an Access Gateway on a server in a different site than the gateway
	  server.
	
	  If you install an access gateway on a server that is located in a different
	  site than the gateway server, full routing must be configured between the two
	  sites. Refer to the AppleTalk Mail Network Manager's Guide for further
	  details.
	
	10. Processing of Dir-Sync mail located in the Network Manager's mailbox.
	
	  The CNU checks the Network Manager's Inbox for directory exchange messages at
	  the "Process Updates" time or upon initial startup. If you are performing a
	  manual Dir-Sync, you must quit and restart CNU to cause it to extract and
	  process directory exchange messages.
	
	  Ensure that Network Manager is automatically logged in at startup. To have
	  the Network Manager automatically log in on startup, launch the Chooser and
	  select the MS Mail Chooser extension. Select the server (and zone if
	  necessary) and click Set Up. Select Sign in to Mail Automatically and select
	  Password entered by the System. Specify the Network Manager's mailbox and
	  password. Click OK.
	
	11. A full Directory Import must be requested to receive address changes from
	  non-Dir-Sync PC Mail gateways.
	
	  Automatic Dir-Sync does not send updates for PC Mail gateways unless the
	  gateway participates in Dir-Sync. A full directory import must be requested
	  via the CNU to receive address changes from PC Mail gateways which do not
	  participate in Dir-Sync. To perform a full directory exchange, launch CNU,
	  select File: Import Directory: Complete Directory.
	
	12. Multiple instances of the Connection Name Utility within the same AppleTalk
	  Mail Network not supported.
	
	  You can not run multiple instances of the CNU within the same AppleTalk Mail
	  network (including sites that have routing enabled). Running multiple
	  instances of the CNU may result in duplicate entries in the PC Mail GAL. You
	  can install multiple instances of the Connection gateway, but you can only
	  have one instance of CNU performing automatic directory synchronization.
	
	  Multiple instances of the CNU will operate correctly when backboning isolated
	  AppleTalk Mail networks over PC Mail.
	
	13. Monochrome Support for MACGATE.EXE
	
	  The MACGATE.EXE component of the Mail Connection Gateway does not support a
	  monochrome display. The MACGATE.EXE program must be run on a color display.
	
	14. Server Memory Allocation
	
	  The Server Memory Allocation should be set to as close to the maximum as
	  possible. In the event of large attachments or large messages (including CNU
	  messages), the mail server may require additional memory. As a result, the
	  server memory allocation should be increased. To increase the memory
	  allocation, sign on to AppleTalk Mail as the Network Manager and select
	  MAIL, SERVER SETTINGS, and increase the Server Memory Allocation.
	
	15. Setting the date and time for the Mail Connection gateway
	
	  The Mail Connection Gateway monitors traffic through the gateway and in the
	  event of a failure, automatically notifies either the AppleTalk Mail Network
	  Manager or the PC Mail Administrator. To perform this operation, the Mail
	  Connection Gateway monitors the age of messages located on the Connection
	  Store. If the messages exceed a configurable limit, notification is
	  automatically sent.
	
	  To ensure mail is not sent erroneously, the date, time, and time zone must be
	  set identically on the following three machines:
	
	   - the AppleTalk Mail Gateway Server containing the Macintosh component of
	     the Connection Gateway
	
	   - the PC running the MACGATE.EXE program
	
	   - the file server where the PC Mail gateway postoffice is located
	
	16. MACGATE.EXE and Novell 2.2
	
	  When running the MACGATE.EXE program, it requires users to have a drive
	  mapped to the data directory of the gateway Postoffice. When the drive
	  representing the path to the data directory is specified with the -d option,
	  MACGATE.EXE verifies that the data directory and its required sub-
	  directories actually exist.
	
	  With NOVELL 2.2, MACGATE.EXE will not recognize the data directory path (and
	  its sub-directories) if the corresponding drive is faked to map to the data
	  (i.e., PO) directory at the root level. For instance, if
	  f:\Microsoft\Maildata is mapped to the root of drive g: (i.e., G:\ points to
	  f:\Microsoft\Maildata), MACGATE.EXE will not recognize the path G:\ and its
	  sub-directories, and thus, it will not run.
	
	  Mapping a drive to a fake root directory can be accomplished via the
	  following command (note, that key word "root" in the following expression
	  makes a fake root mapping):
	
	  Map root g:=Volume:Path
	
	  On NOVELL 2.2, you MUST not map a drive to a fake root directory.
	
	  Instead of the above MAP command, the following mapping will operate
	  correctly on NOVELL 2.2:
	
	  Map g:=Volume:Path
	
	  No problems are apparent with Novell 3.X.
	
	17. Attachment extensions when sending mail to the Microsoft Mail Gateway to
	  Fax
	
	  When sending mail through the Mail Connection Gateway destined for the
	  Microsoft Mail Gateway to Fax (MS-DOS gateway), attachments must be valid
	  Fax attachments (DCX, TXT, or PCX file types). The attachment name must
	  conform to the MS-DOS 8.3 format and must have the extension PCX, TXT, or
	  DCX. All other file types and extensions are invalid.
	
	18. Sending MS-DOS attachments from AppleTalk Mail through the Mail Connection
	  gateway
	
	  When sending attachments through the Connection gateway, the gateway converts
	  the end of line character(s) within text and ANSI attachments. When going
	  from AppleTalk Mail to PC Mail, CR is converted to CRLF. When going from PC
	  Mail to AppleTalk Mail the CRLF is converted to CR. When sending mail from
	  AppleTalk Mail to PC Mail, all text and ANSI attachments should be in
	  Macintosh format before being sent through the gateway.
	
	19. Deletion of the SERVER.MAP file may result in different addresses being
	  generated.
	
	  The file SERVER.MAP located in the ..\macgate\misc directory should not be
	  deleted. This file contains a mapping of the AppleTalk Mail servers and is
	  used when generating proxy addresses.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
