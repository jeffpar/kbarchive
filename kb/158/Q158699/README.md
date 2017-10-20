---
layout: page
title: "Q158699: XGEN: README.TXT: Microsoft Exchange 4.0 U.S. Service Pack 4"
permalink: /kb/158/Q158699/
---

## Q158699: XGEN: README.TXT: Microsoft Exchange 4.0 U.S. Service Pack 4

{% raw %}

	Article: Q158699
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: As of 1/28/98, Quarterdeck Mail became StarNine Mail.
	
	WARNING: Due to U.S. State Dept. export regulations, all SP4 client
	software on these online services contains EXPORTABLE (40-bit) security
	only. U.S. and Canadian customers should NOT install these, or else they
	will no longer be able to read existing 64-bit encrypted mail. A North
	American- only version of SP4 is available to US and Canadian customers
	(for $14.95 plus shipping and handling) by calling Microsoft at 1-800-360-
	7561.
	
	VERY IMPORTANT: Please note that while SP4 contains the fixes included in
	SP3, it does not contain the fixes included in SP2. You MUST install SP2
	before installing SP4.
	
	Microsoft Exchange Server Version 4.0 Service Pack 4
	
	Contents
	
	  1.0  Introduction
	  2.0  Installation Instructions for Microsoft Exchange Server Service
	       Pack 4
	
	  2.1 Installation Instructions for Microsoft Exchange Client Service
	       Pack 4
	
	  2.2 Installation Instructions for Microsoft Exchange Service Pack 4
	      Macintosh Client
	
	  2.3  User Notes
	
	  2.4  Microsoft Exchange White Papers
	
	3.0  List of Bugs Fixed in Microsoft Exchange Server Service Packs
	
	1.0 Introduction
	----------------
	
	This release of Microsoft(R) Exchange Server 4.0 Service Pack 4 is easy to
	apply from within Microsoft Windows NT(R) and changes only those files that
	were originally set up on the Microsoft Exchange Server system.
	
	Important: Service Pack 4 requires that Service Pack 2 has already been
	installed on the server or client workstation that you are updating.
	
	2.0  Installation Instructions for Microsoft Exchange Server Service Pack 4
	---------------------------------------------------------------------------
	
	To install the Service Pack for Microsoft Exchange Server from compressed
	files:
	
	1. Create two subdirectories, Setup and Support.
	
	2. Download the compressed Setup file appropriate for your hardware
	  platform into the Setup directory. Select the appropriate file as
	  indicated in the following list:
	
	     Alpha AXP(TM)  SP4_400A.EXE
	     Intel(R)       SP4_400I.EXE
	     MIPS(R)        SP4_400M.EXE
	     PowerPC(TM)    SP4_400P.EXE
	
	3. Download the compressed support file appropriate for your hardware
	  platform into the Support directory. Select the appropriate file as
	  indicated in the following list:
	
	     Alpha AXP   SP4S400A.EXE
	     Intel       SP4S400I.EXE
	     MIPS        SP4S400M.EXE
	     PowerPC     SP4S400P.EXE
	
	4. At the Windows NT command prompt, switch to the Setup directory and
	  type the file name (downloaded in step 2) followed by a -d to ensure
	  that the correct directories are created. (Example: SP4_400A -d)
	
	5. At the Windows NT command prompt, switch to the Support directory and
	  type the file name (downloaded in step 3) followed by a -d to ensure
	  that the correct directories are created. (Example: SP4S400A -d)
	
	6. Switch to the Setup directory, and type update. Follow the instructions
	  displayed on the screen.
	
	2.1  Installation Instructions for Microsoft Exchange Client Service Pack 4
	---------------------------------------------------------------------------
	
	To install the service pack for the Microsoft Exchange client from a
	compressed file:
	
	1. Create a Client subdirectory.
	
	2. Download the compressed Setup file appropriate for the clients for your
	  hardware platform directory. Select the appropriate files as indicated
	  in the following list:
	
	     EForms Designer Setup                  SP4_40EF.EXE
	     Windows 16-bit client                  SP4_40WI.EXE
	     Windows 16-bit NEC client (Japan only) SP4_40EC.EXE
	     Windows 95 client                      SP4_409I.EXE
	     Windows NT (Alpha)                     SP4_40NA.EXE
	     Windows NT (Intel)                     SP4_40NI.EXE
	     Windows NT (MIPS)                      SP4_40NM.EXE
	     Windows NT (PPC)                       SP4_40NP.EXE
	     SMS files                              SP4_40SM.EXE
	
	3. At a command prompt, switch to the Client directory, and type the file
	  name (downloaded in step 2) followed by a -d to ensure that the correct
	  directories are created. (Example: SP4_40NA -d).
	
	4. To update a client, switch to the Client and platform directory, and
	  type setup. Follow the instructions displayed on the screen.
	
	NOTE: On older computers and non-Intel processors, the Update program could
	take 10 or more minutes to run because it needs to copy the cabinet files
	to the local computer, extract the files, and then copy them to their
	correct locations.
	
	NOTE: Updated Microsoft Systems Management Server files are in the file
	SP4_40SM.EXE.
	
	NOTE: To refresh your client install point on your network so that it
	contains the latest fixes and prevents new users to having to run Update
	right after they ran Setup, see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q131964
	  TITLE     : XADM: How to Update Client Install Share with SP4
	
	2.2  Installation Instructions for Microsoft Exchange Service Pack 4
	Macintosh Client
	--------------------------------------------------------------------
	
	To install the service pack for the Microsoft Exchange Macintosh client
	from a compressed file:
	
	1. Download the file SP4_40MA.EXE and unzip it.
	
	2. Copy SP4_40MA.hqx to a Macintosh or a Power Macintosh.
	
	3. Convert the file from BinHex format. (This requires a utility on the
	  Macintosh to convert from BinHex format.)
	
	4. Double-click the SP4_40MA file.
	
	5. Open the Microsoft Exchange folder.
	
	6. Double-click Microsoft Exchange Setup. Follow the instructions.
	
	7. Run Microsoft Exchange. The Profile Wizard guides you through the
	  process of creating a new profile.
	
	-or-
	
	1. Download SP4_40MA.hqx to a Macintosh or a Power Macintosh.
	
	2. Convert the file from BinHex format. (This requires a utility on the
	  Macintosh to convert from BinHex format.)
	
	3. Double-click the SP4_40MA file.
	
	4. Open the Microsoft Exchange folder.
	
	5. Double-click Microsoft Exchange Setup. Follow the instructions.
	
	6. Run Microsoft Exchange. The Profile Wizard guides you through the
	  process of creating a new profile.
	
	2.3 User Notes
	--------------
	
	2.3.1 Installing Symbol Files from the Compressed File
	------------------------------------------------------
	
	Installing Symbol Files from the Support directory created in Section 2.0:
	
	To install the symbol files corresponding to the new binaries in Service
	Pack 4, type:
	
	  XCOPY /S /U /D C:\Support\*.* %windir%\SYMBOLS
	
	NOTE: This assumes that you used drive letter C when downloading and
	unpacking in Section 2.0.
	
	The XCOPY command copies the Service Pack 4 .DBG files over the existing
	versions of these files. It copies only those .DBG files that are already
	installed (/U switch) and only those with a more recent time stamp (/D
	switch).
	
	2.4 Microsoft Exchange White Papers
	------------------------------------
	
	To download the Microsoft Exchange white papers:
	
	1. Create the subdirectory WPapers on your local hard disk drive.
	
	2. Download the file SP4_40WH.EXE located in the Server subdirectory to
	  your WPapers subdirectory.
	
	3. At the Windows NT command prompt, switch to the WPapers directory and
	  type SP4_40WH, followed by a -d to ensure that the correct directories
	  are created.(For example: SP4_400WH -d).
	
	The following list of Microsoft Exchange white papers have been included as
	a convenience to you and can be found in the \\Support\Whiteppr directory.
	These documents can be viewed with Microsoft Word for Windows 95 or
	Microsoft Word for Windows version 6.0.
	
	  Edrv3p1.doc - MS Exchange Disaster Recovery - Part I
	  Edrv3p2.doc - MS Exchange Disaster Recovery - Part II
	  This paper outlines thoughts, observations, and techniques that can be
	  applied to Microsoft Exchange disaster recovery planning.
	
	  Ex201.doc - Microsoft Exchange Support and Troubleshooting
	  This paper is intended to jump-start system support professionals who
	  will support and troubleshoot Microsoft Exchange Server client-server
	  messaging and groupware.
	
	  Exchnov.doc - Microsoft Exchange in a Novell NetWare Environment
	  This paper is intended to give you some ideas and guidelines on how to
	  deploy Microsoft Exchange Server in a Novell NetWare environment.
	
	  Setupe1.doc - Microsoft Exchange Client Setup Editor and Automatic
	  Profile Generator
	  This paper explains the purpose, functionality, and limitations of the
	  Microsoft Exchange Setup Editor and the Microsoft Exchange Automatic
	  Profile Generator.
	
	  Shiva.doc - Using ShivaRemote with MS Exchange
	  This paper discusses how to configure ShivaRemote 3.59 for use with
	  Microsoft Exchange.
	
	  Upswpfnl.doc - Microsoft Exchange Server Performance:  Concurrent Users
	  Per Server
	  The purpose of this paper is to help answer the question, "How many
	  concurrent users per server does Microsoft Exchange Server support?".
	
	NOTE: For more information about Microsoft Exchange Server, see the
	followingresources:
	
	The Microsoft Exchange Server web site at
	http://www.microsoft.com/exchange/ 
	
	Microsoft Exchange Troubleshooters:
	http://support.microsoft.com/support/exchange/content/whitepapers/whitepapers.asp
	
	Microsoft Exchange Frequently Asked Questions:
	http://support.microsoft.com/support/exchange/content/faq/default.asp
	
	Microsoft Knowledge Base:
	http://support.microsoft.com/support/c.asp
	
	Microsoft TechNet Reference Desk:
	http://www.microsoft.com/ithome/resource/technet/default.htm
	
	Microsoft Support OnLine
	http://support.microsoft.com/support/ 
	
	Microsoft TechNet - (800) 344-2121;
	http://www.microsoft.com/ithome or email technet@microsoft.com
	
	3.0  List of Bugs Fixed in Microsoft Exchange Server Service Packs
	------------------------------------------------------------------
	
	NOTE: Use the Qnnnnnn number that precedes the title of the bug fix to
	query the Microsoft Knowledge Base for an article about that bug.
	
	3.0.1 Service Pack 1
	
	Q126497: XADM: Limiting the Number of Recipients of a Message
	Q135459: XADM: Event Error 251: Fatal Internal MTA Error Occurred
	Q136786: XCON: IMC Sends NDR and OOF Messages to Bulk Mailing Lists
	Q136807: XADM: MTA Error: Too Many ECBs Processed In One Thread
	Q137699: XADM: Cannot Send X.400 Delivery Reports Through French ADMD
	Q139643: XADM: Error Writing Log Information to SA
	Q139858: XADM: Installing Server Into Large Existing Site Is Slow
	Q140338: XADM: DS Crashes With Dr. Watson In Details.c
	Q140448: XADM: Errors Processing Incoming Replication Messages
	Q140974: XCON: HP Openmail Messages with FTBP Attachments NDR
	Q140975: XCON: Event ID 4037 An Exception Has Occurred
	Q140976: XADM: MSExchangeMTA Errors When Many Connections Are Open
	Q141135: XCON: MSExchangeMSMI NDR Error EventID 2568
	Q141970: XCON: Exchange Unresponsive If Message Subject Has 0xD
	Q142257: XCON: MTA Database XFER-IN Thread Error
	Q142258: XADM: Exception Error on MTA Service Shutdown
	Q142260: XCON: IMC Replies To SMTP Messages In RTF
	Q142261: XCON: Correct Syntax For Debug Option of Restest.exe
	Q142262: XCLN: Display of Public Folder Summary Causes Error
	Q142266: XCON: MS Mail SMTP Addresses Modified During Migration
	Q142916: XADM: MTA Generates a 2171 Error
	Q143186: XADM: PerfMon Limited to 53 MTA Instances
	Q143197: XCON: Pending Delivery Notification on Read Receipts
	Q143236: XCLN: NT Domain Password Could Not Be Changed
	Q146473: XSRV InCon: Attachment with Name of Charset = iso-2022-JP
	Q146509: XCON: MTA May Stop If Site Connector Is Removed
	Q146537: XADM: DSA Queues: Too Many Initial Synchronizes at Startup
	Q146567: XCON: Messages with Long Addresses Are Not Delivered
	Q146598: XFOR: Messages Are Stuck in the IMC's OUT Queue
	Q147459: XCON: IMC Does Not Use the Resent-From Field
	Q147521: XADM: MTA Crashes with a Large Recipient List
	Q149579: XADM: MTA Error: Database Object Not in Use
	Q152890: XADM: Installing Server Into Large Existing Site Is Slow
	
	3.0.2 Service Pack 2
	
	Q140932: XCON: IMC: Resent-from Headers Use Oldest Information
	Q140933: XFOR: SMTP Proxy Address Generated Incorrectly
	Q140934: XFOR: IMC: NDR is Held Until Timeout Period Expired
	Q140935: XFOR: IMC: Empty or Partial Messages Received
	Q140936: XADM: System Attendant Crash During GWART Calculation
	Q140937: XCON: Remote MTA Reports Syntax Error
	Q140938: XADM: PerRecipientMessageTransferField Wrong
	Q140939: XGEN: Screenshots in German Version are in French
	Q140940: XFOR: IMC: 821 Routing Email Addresses Cause NDRs
	Q140941: XCLN: Identifying Exportable Client Versions
	Q140942: XADM: Rule to Forward to Foreign Address Causes a Loop
	Q140943: XFOR: Can't Open Attachments Sent From AppleTalk Mail
	Q140944: XADM: DirSync Imports Treated Differently by Exchange
	Q140945: XCON: MTA Error ID 251
	Q140946: XADM: Microsoft Mail Interchange Hang During DirSync
	Q140947: XADM: Number of Active Logons Counter Always Zero
	Q140948: XADM: Reply Rule Disabled When Deliver to Public Folder Via IMC
	Q140949: XCLN: Faxing ASCII Messages Fails Due to Corrupted Phone #
	Q140951: XFOR: DXA Generates Multiple SMTP Proxies for PCMail
	Q140952: XCLN: Toolbar Buttons Missing After Upgrade from 16
	Q140953: XCLN: Fax Template Generates Bad Phone Number
	Q140954: XCLN: Win16 Silent Mode Setup Fails to Create Profile
	Q140955: XCLN: Error When Opening Attachment in Client for Windows 3.x
	Q140956: XCON: MTA: Aborts Connection After Legitimate RTSE Activity
	Q140957: XFOR: X.400 Message from 3rdparty Gateway Causes Event ID 9405
	Q140958: XCON: MTA Mishandles Use of Default Dialogue-mode
	Q140959: XADM: Incorrect Buffering of X.121 Address for X.25
	Q140960: XADM: Read Receipts not Accepted from French Exchange Server
	Q140961: XADM: Duplicate Entries in PC Mail GAL
	Q140962: XFOR: Access Violation When RTF Message Over 64K
	Q143377: XADM: Cannot Open Custom Recipient in Administrator
	Q145585: XADM: Migrated MS Mail 3.x X400 PAB Entries NDR w/ Bad Address
	Q145794: XADM: 1993 Private Extension Support on Per-Message Envelope
	Q146183: XADM: Optimizer Deletes Edb*.log Files When Given Invalid Path
	Q146455: XADM: Generated SMTP Addresses for Duplicate Mailboxes
	Q146676: XADM: DXA Appends 001 to Display Names in the GAL
	Q146681: XADM: DXA Improperly Appending 001 to Friendly Names in the GAL
	Q147245: XFOR: Dial Up Networking Not Find Mail for PC Networks PO
	Q150927: XCON: MTA Continuously Dialing RAS Connection
	Q152344: XCLN: Winsock Application Starts When Exchange Client Starts
	Q152862: XADM: Specify Host Dialog in Administrator Reverses Order
	Q152863: XFOR: IMC Generates Empty Body on S/MIME Messages
	Q152864: XFOR: Exchange Doesn't Handle Multiple Comments in Addresses
	Q152865: XCLN: Last Update Time not Saved Using Remote Mail
	Q152866: XADM: No Command to Import MMF File on MIPS or Alpha
	Q152867: XADM: Backfilling Public Folders takes a Long Time
	Q152868: XADM: Max Logging for Replication Messages Causes Crash
	Q152869: XADM: IS Crashes When Replication Status Page is Opened
	Q152870: XADM: Event 2024 Logged When Not Necessary
	Q152871: XADM: Restore Re-populates Deleted Folders
	Q152872: Err Msg: The New Item Could Not be Inserted
	Q152873: XFOR: Command Line Migration Crashes With no FldOwner Entry
	Q152874: XADM: MTA NDR's All Messages Sent in Year 2000
	Q152875: XCON: Failure to Send to Embedded DL with Delivery Restrictions
	Q152876: XCON: MTA Hung After Deletion of X.400 Connectors
	Q152877: "XCON: Unexpected event ID's 1004, 1008, 1277, and 1198"
	Q152878: XADM: Wizard Sets Incorrect Concurrent Read Thread Range
	Q152879: Schedule+ 7.0 is Unable to Write to Schedule+ 1.0 CAL
	Q152880: XADM: Cannot Reinstall on a BDC Using a Domain Service Account
	Q152881: XCLN: Cannot Send Encrypted Mail to DL with Hidden Recipients
	Q152882: XCON: Unnecessary Files Left in Work Directory
	Q152883: XADM: Configuring IMC Properties Page on German PPC Platform
	Q152884: XADM: Err Msg: IS Generates EcBufferTooSmall
	Q152885: XADM: Public Folder Empty After Copying From Favorites
	Q152886: XADM: Message Tracking Time Stamps are Incorrect
	Q152887: XADM: Opening Property Page of Public IS Takes a Long Time
	Q152888: XADM: Profile Wizard Fails to Upgrade MMF
	Q152889: XCLN: Digital Signature Overwrites the Message Body
	Q152890: XADM: Installing Server Into Large Existing Site Is Slow
	Q152891: XADM: User Notifications of NDRs Contain all Recipients
	Q152892: XADM: Err Msg: Unable to Write Delivery Log
	Q152893: XADM: IS Causes High CPU Use and Drop in PF Performance
	Q152894: XADM: Store Crashes When Passing 32K of Data to Event Log
	Q152895: XADM: Unable to Migrate PABs for Appletalk Mail Users
	Q152896: XADM: MTA Startup Slow When Database is Large
	Q152897: "XADM: POP-4 State Checks (4282, 4283, 4284, 4287)"
	Q152898: XADM: MTA Access Violation in RPC DMOD
	Q152899: XADM: MTA Crash in RPC Security Processing.
	Q152900: XADM: MTA Event Id 248: Too Many ECBs Processed in One Thread
	Q152901: XADM: MTA Reports Repeated Occurrence of Event Id 1209
	Q152902: XADM: Continuous Attempts to Publish Free/Busy Information
	
	3.0.3 Service Pack 3
	
	Q146293: XADM: Auto-naming Feature Doesn't Work with Directory Import
	Q146371: XCLN: Expired Passwords, Win16 Exchange Inbox, and ShivaRemote
	Q147362: XADM: Event ID: 1016 Logged Incorrectly in Application Event Log
	Q149847: XADM: Isinteg Reports IPM Subtree Missing From IMC Mailbox
	Q152524: XCLN: SNADS Custom Template Information not Displayed
	Q152845: XFOR: Moving Messages Between Folders Fails to Delete Original
	Q152903: XFOR: Mail Connector Dispatch Fails Against Postoffice on Unix
	Q152905: XCLN: Err Msg: Upload of Offline Changes Could not be...
	Q152911: XCLN: FAX Cover Sheet Does Not List Recipients
	Q152912: XCLN: Delete Rule on Public Folder Treated as Error
	Q152915: XFOR: Messages Inbound from IMC Include Body as Attachment
	Q152916: XCLN: MAC Client Can't Open Attachments from Migrated MAC PO
	Q152918: XCON: MTA: Mail Delivery Slow and Disk Space Consumed
	Q152919: XFOR: SMTP CRs Routed to Home Site Before Going Out IMC
	Q152920: XCLN: MAPIOle Attachments from OLEMsg have no Rendering Data
	Q152921: XCON: IMC May Cause WorldTalk SMTP/MIME Gateway to Stop
	Q152922: XGEN: SMTP Addresses Don't Extract from MAC Mail to Exchange PAB
	Q152924: XFOR: DXA Sends Invalid Replace (R) Transactions
	Q152925: XCLN: Schedule Requests not Updated in MS Mail Clients
	Q152927: XADM: Event ID 136 Created When Importing Duplicate Alias
	Q152928: XFOR: MTA does not Generate Requested Delivery Report
	Q152929: XCLN: Wordpad and Exchange Crash on non-English NT 3.51
	Q152930: XCON: IMC Might Stop if RFC 821 From Address is > 64 Characters
	Q152933: XCLN: PowerPoint Presentation Can't Be Opened from Public Folder
	Q152939: XADM: Meeting Requests Written to Assistant's Calendar
	Q152942: XADM: Slow Intra-site Directory Replication Between Servers
	Q152943: XCLN: Error When Receiving Schedule+ Confirmation Message
	Q152944: XFOR: IMC Not Receiving Inbound Mail from UNIX Hosts
	Q152945: XCON: Microsoft Exchange Server MTA Not Responding
	Q152946: XADM: Exchange Store Stops Due to Data Corruption
	Q152947: XCON: Err Msg: Suspected Deadlock
	Q152948: XADM: IS Won't Stop and PerfMon Shows No Processing
	Q152950: XCLN: Text Attachments Open in Word on Macintosh Client
	Q152951: XCON: MTA Heap Corruption with Misconfigured TP4/TCP Connection
	Q152952: XCON: No Read/Delivery Receipts Sending X.400 Messages
	Q152953: XADM: SMTP Proxy Generation Fails After 21st Address
	Q152955: XCON: MTA Prematurely Returns Messages w/NDR
	Q152957: XADM: Non-Delivery Reports Incorrectly Returned in German
	Q154099: XFOR: cc:Mail Migration Wizard Adds Quotes in User.pri
	Q154301: XCON: MTA X.400 Connector Problems on Slow Links
	Q154426: XEXT: EFD Cannot Display Initial Subject Text in Reply Item
	Q154686: XADM: Options in Admin or User Manager May Be Overwritten
	Q154798: XFOR: SMTP Mail Attachments not Visible in PC Mail 3.x Clients
	Q155137: XFOR: Messages Not Deleted from IMC Inbound Queue
	Q155522: XADM: SP2 or SP3 Server Upgrade Fails with 281 and 1171 Errors
	Q155682: XADM: Info Store Won't transfer Some X.400 Messages to Gateway
	Q155683: XFOR: Verification of FROM Address in SMTP Messages
	Q155684: XFOR: IMC Support for VRFY Command
	Q155695: XCON: Replication Over X.400 Backbone Might Fail
	Q155812: XADM: NDR from Japanese Microsoft Exchange Server is Corrupt
	Q155813: XADM: Simplified Chinese MS Mail Connector Corrupts Messages
	Q155817: XADM: Chinese MIME-encoded Attachments Corrupted by IMC
	Q155819: XADM: IMC Can't Decode Mail That Uses the EUC-KR Charset
	Q155839: XFOR: IMC has Problems with Mail Sent from Eudora
	Q156703: XADM: Space Character not supported for SMTP Custom Recipients
	Q156705: XADM: Site Tear-Down Causes Public Folders to be Re-homed
	Q156706: XCON: Messages Forwarded from DEC ALL IN ONE User Missing Date
	Q156707: XADM: NDR's Due to Non-Printable Characters in the DDA Value
	Q156708: XADM: Rule Forces CPU Usage Above 90%, Stops Message Delivery
	Q156710: XFOR: Incoming SMTP Messages NDR with Invalid Argument
	Q156711: XCLN: Exchange Win95 Client with DNS Polls for New Mail
	Q156714: XFOR: Dir-Sync Requestor Updates Not Being Updated Properly
	Q156715: XADM: Unable to Back Up Exchange on Remote Server from NT 4.0
	Q156716: XCON: Foreign MTA Rejects X.400 Messages
	Q156719: XCLN: Mac Client Doesn't Handle MacBinary Type I Attachments
	Q156720: XCLN: Date/Time Field Corruption in Macintosh Client
	Q156721: XCLN: Double-Clicking an Attachment Might Open New Message
	Q156724: XCON: Messages Cannot Be Sent to Remote MTA, Repeated Err 2171
	Q156725: XFOR: MS Mail X.400 Gateways and Exchange X.121 Addresses
	Q156726: XFOR: DXA does not Import X.121 Addresses Correctly
	Q156727: XCON: WAN Drive Functionality of PC Connector and ISDN Lines
	Q156728: XFOR: MSMI Mistakenly Returns NDR Instead of DR
	Q156729: XFOR: Malformed Dir-Sync Transactions Cause DXA to Stop
	Q156730: XADM: CSI Type Addresses Show Up in Exchange GAL
	Q156963: XFOR: Korean Characters Are Corrupted by the MS Mail Connector
	Q156996: XFOR: Postoffice Lists Disappearing from GAL
	Q156998: XCLN: To: Recipients Shown Half-size if Client is on Server
	Q156999: XCLN: SMTP Headers Lost for DOS MS Mail Client
	Q157000: XFOR: Korean UUENCODED Attachments Corrupted
	Q157001: XCLN: PRC Exchange Win95 Client cannot Display DBCS Characters
	Q157002: XCLN: Attachments Might be Lost When Moving from OST to Server
	Q157005: XCLN: Invalid Page Fault in Mapi32.dll
	Q157006: XCLN: Client Access Violation when Opening New Message
	Q157007: XADM: Secondary Proxy Address Replaces Target Address of CR
	Q157008: XCON: IMC Might Use the Wrong Code Page
	Q157010: XADM: Exception In Dsamain.exe After Network Error
	Q157011: XCLN: Large Icon Labels can Cause Access Violation
	Q157012: XFOR: Corrupted Message When Using Hebrew or Arabic
	Q157013: XADM: MTA Terminates Unexpectedly with Event 3080 and 9405
	Q157014: XFOR: IMC Deletes Mail in MTS-OUT if no Code Page on MIME Tab
	Q157015: XCON: MTA Outbound Connection Refused by X.400 Host
	Q157016: XCLN: Saving an Encrypted Message to the IS Can Delete Content
	Q157017: XCLN: Attempting to Open Public Folder Might Return Error
	Q157018: XCLN: Using OLE Messaging to View Non-Replicated PF Fails
	Q157019: XADM: Changing X400 Country Code Toggles Between SE and SG
	Q157175: XCON: MTA Service Terminates Unexpectedly
	Q157358: XCON: Per-Domain-Bilateral-Information and Third Party Systems
	Q157565: XCON: MTA Terminates Without Logging Event in Application Log
	Q157683: XCLN: Forms Designed with Many Fields Might not Show Them All
	Q157684: XFOR: IMC Might Lose Inbound and Outbound Messages
	Q157686: XCON: MTA Crashes When Logging Event 321
	Q157687: XCLN: Switching Views on a Replicated Public Folder Fails
	Q157688: XCLN: Reminders not Processed When Default Store is PST
	Q157690: XCLN: Extended Characters do not Appear in the File Name
	Q157691: XADM: TNS Resolution Causes Buffer Overflow
	Q157693: XFOR: IMC Might Lose Messages if Code Pages are not Installed
	Q157694: XFOR: Exchange Corrupts FIPS Header with MCI Mail
	Q157695: XFOR: MTA can't Communicate with Another MTA via French X.25
	Q157698: XCON: Exchange Fails to Allow an Incoming X.25 Connection
	Q157699: XCON: Messages Sent to Wang Via X.400 Do Not Return Receipts
	Q157700: XCLN: Updating Windows 3.x Client can Cause GP Fault
	Q157702: XCON: MTA Stopping with Event ID 2143: Unrecoverable Error
	Q157703: XFOR: NDRs Sending Mail Using Email.dot
	Q157900: XCLN: Incorrect Characters Displayed in Profile for NT Client
	Q157941: XFOR: Attachment Moved When Sent Over MS Mail Connector
	
	3.0.4 Service Pack 4
	
	Q146681: XADM: DXA Improperly Appending 001 to Friendly Names in the GAL
	Q152938: XADM: Checking Knowledge Consistency Msg Freezes at 33 Percent
	Q152949: XFOR: Read Receipt is Received Instead of Return Receipt
	Q154128: XCLN: Long Filenames Converted to 8.3 Format
	Q154719: XCON: MTA: Line Wrap When Using ISO 6937 Bodypart
	Q154776: XCON: MTA Crashes in Otpmmain Due to Null Pointer
	Q155379: XADM: Unable to Match Custom Recipient Due to RFC1327 Conversion
	Q155592: XFOR: MSMI Message Tracking Does Not Log Message Size
	Q155727: XFOR: DirSync Deletes and Modifies not Being Processed by DXA
	Q155765: XADM: Store Crashes in Ecreleaselogonop
	Q155790: XFOR: MT Rejects Reply From CHT Outlook Client on MS Mail PO
	Q155885: XCLN: Update not Updating Files in Directories w/Long Filenames
	Q155896: XFOR: MTA Causes Application Exception in Oxpufret
	Q156355: XADM: IS Incorrectly Handles a Forward Slash in DDA Value
	Q156369: XCON: MTA Doesn't Accept IA5 in General Text Body Part
	Q156387: XADM: JET Asserts in ISINTEG During a Check on Database
	Q156399: XADM: JET Asserts on Heavily Used Multi-valued Columns in the DS
	Q156415: XADM: Information Store Fails to Start with JET Error -327
	Q156474: XADM: ISINTEG Reports Errors on Replicated NNTP News Folders
	Q156713: XADM: KM Server Crashes Intermittently on Alpha Servers
	Q156722: XADM: Invalid Parameters When Using X.121 Field in X.400 Address
	Q156796: XADM: Forward Rule Causes MTA to NDR When Submitting Msg to IS
	Q156844: XCON: Subject Line of Message is Truncated to 40 Characters
	Q157004: XCLN: Text Files Sent from Macintosh via IMC are Corrupted
	Q157043: XADM: Message Rerouted Between Servers and Disappears
	Q157058: XADM: Exchange MTA Restart Fails and Logs Error 2051
	Q157068: XADM: MTA Server Work Queue Increases Perfmon Unrealistically
	Q157235: XCON: MTA Terminates When Receiving Mail from HP X.400 MTA
	Q157689: XFOR: Importing Large Numbers of MHS Addresses is Very Slow
	Q157701: XCON: MTA: Dr. Watson Report with Exception e0020002
	Q157704: XCLN: Schedule+ Appointments Scheduled Time Incorrect
	Q157707: XFOR: The IMC Does Not Dial on Weekends
	Q157994: XADM: DS Stops While Calculating the Hierarchy Table
	Q158151: XFOR: ErrMsg: Event ID 1035 - Unable to Open or Read a Message
	Q158379: XFOR: MSExchangeMSMI Reports Event IDs 2380 and 2446/2447
	Q158590: XCON: Delivery Restrictions Max CPU and Slow Down Msg Delivery
	Q158852: XCLN: Client Cannot Read Project 4.0 Files Sent Through Exchange
	Q158901: XADM: MDB Event 2079: Unable to Submit, Send, or Transfer Msgs
	Q159170: XADM: Calling HRBackupGetDatabaseNames Returns Invalid Parameter
	Q159171: XADM: Mailboxes Show Multiple Instances in Admin Resources Page
	Q159172: XCON: Attachments from Wang Office Are Losing Filenames
	Q159174: XADM: MTA Terminates Unexpectedly with Events 251 and 9405
	Q159175: XFOR: Inbound Mail Failures on BinHex 4.0 Attachments
	Q159179: XCON: Message Body Truncated
	Q159180: XCON: Japanese Subject Is Replaced w/ Question Mark
	Q159180: XCON: Japanese Subject Is Replaced w/ Question Mark
	Q159182: XCON: MTAs Unable to Establish X.400 Connection
	Q159183: XADM: Err Msgs About Previously Deleted Msgs in Sync Log
	Q159184: XADM: MTA Fails to Deliver Messages with High DS Activity
	Q159184: XADM: MTA Fails to Deliver Messages with High DS Activity
	Q159184: XADM: MTA Fails to Deliver Messages with High DS Activity
	Q159184: XADM: MTA Fails to Deliver Messages with High DS Activity
	Q159186: XCON: Mail Sent Outside Site via X.400 Takes Illogical Route
	Q159187: XADM: French Extended Chars in Read Receipts Convert Incorrectly
	Q159189: XFOR: DXA Drops Transaction if X400 DDA Value Contains a Slash
	Q159192: XCON: MTA Shows High CPU Usage and Messages Not Delivered
	Q159193: XCON: MTA Terminates Unexpectedly with Event ID 9405
	Q159194: XCON: MTA Terminates Unexpectedly with Event ID 9405
	Q159195: XCON: MTA Terminates Unexpectedly with Event ID 9405
	Q159198: XFOR: Event ID 246 Attempt to Read Beyond End of Object
	Q159285: XFOR: Japanese Text in NDR from MS-Mail Is Replaced with ?
	Q159286: XCON: Messages Sent w/AppleSingle File Attachments Get Stuck
	Q159287: XCLN: MAPIFindNext Fails to Retrieve Message Identifiers
	Q159290: XFOR: Data Truncated in SMTP Protocol Log
	Q159292: XADM: $ in DDA Value Migrated Incorrectly in X.400 PAB Entry
	Q159294: XFOR: Extra Carriage Return in Dir-Sync Message
	Q159295: XFOR: Exchange Dir-Sync Failing with Event ID 134
	Q159296: XADM: MTA May Log Event ID 2187 for Specific DAT Files
	Q159299: XFOR: IMC Unable to Resolve Host Addr. Using Raptor Firewall
	Q159300: XFOR: PCMTA Fails to Respond to NetBIOS Notification
	Q159301: XADM: Messages Sent Over X.400 Connector Should NDR First
	Q159303: XCON: Message Sent Without Message Body Text is not Delivered
	Q159305: XFOR: MSMI Terminates Unexpectedly with Event ID 2335 and 2560
	Q159307: XCON: MTA Stopping with Event ID 2143: Unrecoverable Error
	Q159308: XFOR: DirSync Names Disappearing
	Q159566: XCON: MTA Error 209: Submitting Domain is Inconsistent
	Q159876: XADM: Permissions Lost During Move Mailbox Operation
	Q160153: XGEN: Directory Import Generates Unusable Random Password
	Q161711: XCON: Messages NDR Rather Than Being Queued for Later Delivery
	Q161755: XCLN: Message Date Displays as 12/65202/96
	Q161813: XFOR: SMTP Headers Visible in MSMail Clients After SP3 Install
	Q161839: XFOR: IMC May Incorrectly Set Time Zone Information
	Q161931: XCON: Configuring MTA TCP/IP Port # for X.400 and RPC Listens
	Q161932: XFOR: MtaCheck Causes Access Violation Exception Error
	Q161933: XFOR: MSMI Message Sent Time Stamp is Incorrect
	Q161936: XCON: Wrong Mapping of Msg Priority Between MSMAIL and Exchange
	Q161937: XCON: IMC Stops Processing Mail on Alpha Platform
	Q161939: XFOR: Outbound Msgs not Delivered by IMC Until Queue Refresh
	Q161940: XFOR: Message Appears Without Subject Line in All-in-One Client
	Q161941: XADM: Corrupt Page Causes Edbutil to Access Violate
	Q161942: XADM: Setup or Update Failing to Upgrade Admin-only Machine
	Q161943: XFOR: RFC822 Header Includes BCC Recipients Fields
	Q161944: XCON: Outlook Users Can't Access/Update Public Free/Busy Data
	Q161945: XCON: MSMail Shows Blank Icon for File Attachments from Internet
	Q161946: XCON: Free Form Name Attribute not Handled by Sprint
	Q161947: XCON: MTA: Address Space Replication with LOCAL Address Spaces
	Q161948: XCON: MTA NDRs Messages with Headers in P2 Part of Message
	Q161949: XCON: MTA Unable to Start on Invalid Object
	Q161950: XCLN: Microsoft Excel Table Cut Off When Pasted into Msg
	Q161951: XADM: WinDbg Hits Breakpoint During DN Conversion
	Q161952: XFOR: Msgs Sent with MSMI are Malformed
	Q161953: XFOR: Unable to Forward Schedule+ Messages
	Q161954: XFOR: When Field Not Printed
	Q162017: XFOR: Messages Not Being Delivered to X.400 Recipients
	Q162680: XCON: SMTP Messages Contain Encapsulated X.400 Addresses
	Q162841: XFOR: MSMI NDRs Dir-Sync Messages Under Certain Circumstances
	Q163376: XADM: Invalid Message Embedded in Internet Message Causes NDR
	Q163377: XADM: Msgs Forwarded from All-In-One have Incorrect Sent Date
	Q163445: XADM: NDR when Forwarding Message from Dec All-In-One
	Q163608: XADM: SQL MS Mail Messaging Breaks After Upgrading Windows NT
	Q163688: XCLN: Unable to Change Default Exchange Client Installation
	Q163689: XCON: MTA: Content Conversion Error 210
	Q163690: XCON: MTA: Content Conversion Error 210 with ISO 6937 Bodypart
	Q163746: XCLN: Chinese Chars in Attachment File Name Wrong in Outlook
	Q164049: XCON: MTA: Remote X.400 MTA Fails to Decode NDR from Exchange
	Q164136: XCON: MSMail Read Receipts Missing Subject: and To: Information
	Q164340: XADM: Importing CSV to Directory Causes GPF in MAD
	Q164457: XFOR: IMC Returns NDR When Sending to Specified By Email Domain
	Q164467: XCLN: Chinese Translation of ShivaRemote Message is Wrong
	Q164468: XFOR: Hebrew/Arabic MS Mail Message Body Corrupted
	Q164469: XFOR: Scheduled X.400 Connector Doesn't Initiate Connection
	Q164470: XCLN: Scanpst Fails to Detect/Fix File Truncation Corruption
	Q164697: XCON: EDK Gateway Gets Directory Name Instead of Email Address
	Q164768: XADM: DL Delivery Restriction Fails Without Name Resolution
	Q164833: XADM: EDBUTIL and ISINTEG Fail to Complete on Corrupted Store
	Q164834: XADM: Empty Notification-Requests Bitstring Causes Error
	Q164835: XCON: RETIX Message Does Not Trigger Read Receipt
	Q164836: XCON: Conditional Reroute on Single Link Bounces Back
	Q164838: XCON: MTA Looping Between HP MTA and Exchange MTA
	Q164839: XCLN: App Err When MSMail Client Gets the RR From Exchange
	Q164839: XCLN: App Err When MSMail Client Gets the RR From Exchange
	Q164841: XCON: Messages Stuck in MTA Queues
	Q164842: XCON: Enhanced Diagnostics in MTA
	Q164843: XADM: Enhancement to Separate Reply Address from E-mail Address
	Q164847: XCON: Win95 Client w/Mail Service Won't Prompt for RAS Callback
	Q164851: XFOR: Embedded Message Wrapping Incorrect With DEC All-In-One
	Q164852: XCON: Attachments from HP OpenDesk May not Open
	Q164853: XADM: Incorrect Spanish on Exchange Server
	Q164854: XADM: Cannot Remotely Administer IMC or MSMCON on NT 4.0
	Q164855: XCON: Japanese Exchange May Exhibit Subject Line of ????????
	Q164856: XCON: MTA Fails to Pick Up DN of Servers with Similar Site Names
	Q164858: XCON: Quarterdeck Mail Gateway May Crash or Rename Directory
	Q164859: XFOR: Mac Attachments Over IMC are Named Message.txt
	Q164860: XFOR: Garbled attachments between Exchange 4.0 and 5.0 IMCs
	Q164861: XFOR: Cannot Configure French AT Server as Directory Requestor
	Q164862: XCON: MTA Raises Exception on X.25 Connections
	Q165093: XCON: MTA: Content Conversion Error 260 (Event ID 210)
	Q165185: XCLN: Address Book Ops Crash with Modeless Address Book Apps
	Q165442: XCLN: Client Deletes Existing PST in Absence of Filescan Rights
	Q165522: XCON: MTA Crashes Generating Event ID's 2187, 9405, 9402, 9996
	Q165537: XCLN: Client Setup Overwrites Localized Version of OLE32.DLL
	
	Additional query words: servpack SP4 fix qfe
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
