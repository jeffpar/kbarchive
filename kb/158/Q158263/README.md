---
layout: page
title: "Q158263: XGEN: README.TXT: Microsoft Exchange 4.0 U.S. Service Pack 3"
permalink: /kb/158/Q158263/
---

## Q158263: XGEN: README.TXT: Microsoft Exchange 4.0 U.S. Service Pack 3

	Article: Q158263
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WARNING: Due to U.S. State Dept. export regulations, all SP3 client software on
	these online services contains EXPORTABLE (40-bit) security only. U.S. &
	Canadian customers should NOT install these, or else they will no longer be able
	to read existing 64-bit encrypted mail. A North American- only version of SP3 is
	available to US and Canadian customers (for $14.95 plus shipping and handling)
	by calling Microsoft at 1-800-360-7561.
	
	VERY IMPORTANT: Please note that Microsoft Exchange Service Pack 3 (SP3) is not
	cumulative. You must install SP2 before installing SP3.
	
	MORE INFORMATION
	================
	
	CONTENTS
	========
	
	1.0  Introduction
	2.0  Installation Instructions for the Microsoft Exchange Server Service
	    Pack 3
	2.1  Installation Instructions for the Microsoft Exchange Client Service
	    Pack 3
	2.2  Installation Instructions for the Microsoft Exchange Service Pack 3
	    Macintosh Client
	2.3  User Notes
	3.0  List of Bugs Fixed in Microsoft Exchange Service Packs
	
	1.0 INTRODUCTION
	================
	
	This release of Microsoft(R) Exchange Server 4.0 Service Pack 3 is easy to
	apply from within Microsoft Windows NT(R) and changes only those files that
	were originally set up on the Microsoft Exchange Server system. Service
	Pack 3 requires that Service Pack 2 has already been installed on the
	server or workstation that you are updating.
	
	2.0 INSTALLATION INSTRUCTIONS FOR MICROSOFT EXCHANGE SERVER SERVICE PACK 3
	==========================================================================
	
	To install the Service Pack for Microsoft Exchange Server from compressed
	files:
	
	1. Create two sub-directories, SETUP and SUPPORT.
	2. Download the compressed setup file appropriate for your hardware
	  platform into the SETUP directory. Select the appropriate file as
	  indicated by the following list:
	
	     Alpha AXP(TM): SP3_400A.EXE
	     Intel(R):      SP3_400I.EXE
	     MIPS(R):       SP3_400M.EXE
	     PowerPC(TM):   SP3_400P.EXE
	
	3. Download the compressed support file appropriate for your hardware
	  platform into the SUPPORT directory. Select the appropriate file as
	  indicated by the following list:
	
	     Alpha AXP(TM): SP3S400A.EXE
	     Intel(R):      SP3S400I.EXE
	     MIPS(R):       SP3S400M.EXE
	     PowerPC(TM):   SP3S400P.EXE
	
	4. At the Windows NT command prompt, go to the SETUP directory and type the
	  filename (downloaded in Step 2) followed by a -d to ensure that the
	  correct directories are created. For example, SP3_400A -d.
	5. At the Windows NT command prompt, go to the SUPPORT directory and type
	  the filename (downloaded in Step 3) followed by a -d to ensure that the
	  correct directories are created. For example, SP3S400A -d.
	6. Go to the SETUP directory, and type UPDATE. Follow the instructions
	  displayed on the screen.
	
	2.1 INSTALLATION INSTRUCTIONS FOR MICROSOFT EXCHANGE CLIENT SERVICE PACK 3
	==========================================================================
	
	To install the Service Pack for Microsoft Exchange Client from a compressed
	files:
	
	1. Create a CLIENT sub-directory.
	2. Download the compressed setup file appropriate for the clients for your
	  hardware platform directory. Select the appropriate files as indicated
	  by the following list:
	
	  Eforms Designer Setup   SP3_40EF.EXE
	  Windows 16-bit client   SP3_40WI.EXE
	  Windows 95 client       SP3_409I.EXE
	  Winnt (Alpha)           SP3_40NA.EXE
	  Winnt (Intel)           SP3_40NI.EXE
	  Winnt (MIPS)            SP3_40NM.EXE
	  Winnt (PPC)             SP3_40NP.EXE
	  SMS files               SP3_40SM.EXE
	
	3. At a command prompt, go to the CLIENT directory and type the filename
	  (downloaded in Step 2) followed by a -d to ensure that the correct
	  directories are created. For example, SP3_40NA -d.
	4. To update a client, go to the CLIENT and platform directory, and type
	  UPDATE. Follow the instructions displayed on the screen.
	
	2.2 INSTALLATION INSTRUCTIONS FOR THE MICROSOFT EXCHANGE SERVICE PACK 3
	MACINTOSH CLIENT
	=======================================================================
	
	To install the Service Pack for Microsoft Exchange Macintosh Client from a
	compressed files:
	
	1. Download the file SP3_40MA.EXE and unzip it.
	2. Copy SP3_40MA.hqx to a Macintosh or PowerMac
	3. Convert the file from binhex format. This will require a utility on
	  the Macintosh to convert from BinHex format.
	4. Double click on the SP3_40MA file, and this will self-expand.
	5. Open the Microsoft Exchange folder.
	6. Double-click Microsoft Exchange Setup. Follow the instructions.
	7. Run Microsoft Exchange. The Profile Wizard guides you through the
	  process of creating a new profile.
	
	OR
	
	1. Download SP3_40MA.hqx to a Macintosh or PowerMac.
	2. Convert the file from binhex format. This will require a utility on
	  the Macintosh to convert from BinHex format.
	3. Double click on the SP3_40MA file, and this will self-expand.
	4. Open the Microsoft Exchange folder.
	5. Double-click Microsoft Exchange Setup. Follow the instructions.
	6. Run Microsoft Exchange. The Profile Wizard guides you through the
	  process of creating a new profile.
	
	2.3 USER NOTES
	==============
	
	2.3.1 Installing Symbol Files from the downloaded FTP files
	
	To install the symbol files corresponding to the new binaries in Service
	Pack 3, type:
	
	  XCOPY /S /U /D C:\SUPPORT\SYMBOLS\*.* %windir%\SYMBOLS
	
	Note: This assumes that your C drive is the location in which the support
	files were unzipped as instructed in Section 2.0, line item 5.
	
	The XCOPY command copies the Service Pack 3 .DBG files over the existing
	versions of these files. It copies only those .DBG files that are already
	installed (/U switch) and only those with a more recent time stamp (/D
	switch).
	
	3.0 LIST OF BUGS FIXED IN MICROSOFT EXCHANGE SERVICE PACKS
	=================================================================
	
	Note: Use the Qxxxxxx number that precedes the title of the bug fix to
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
	  Q140957: XFOR: X.400 message from 3rdparty gateway causes ev
	  Q140958: XCON: MTA Mishandles Use of Default Dialogue-mode
	  Q140959: XADM: Incorrect Buffering of X.121 Address for X.25
	  Q140960: XADM: French ADMD not accept Read Receipts from French Exch.
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
	  Q152877: XCON: Unexpected event ID's 1004, 1008, 1277, and 1198
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
	  Q152897: XADM: POP-4 State Checks (4282, 4283, 4284, 4287)
	  Q152898: XADM: MTA Access Violation in RPC DMOD
	  Q152899: XADM: MTA Crash in RPC Security Processing.
	  Q152900: XADM: MTA Event Id 248: Too Many ECBs Processed in One Thread
	  Q152901: XADM: MTA Reports Repeated Occurrence of Event Id 1209
	  Q152902: XADM: Continuous Attempts to Publish Free/Busy Information
	
	3.0.3 Service Pack 3
	  Q146293: XADM: Auto-naming Feature Doesn't Work with Directory Import
	  Q146371: Win16 Inbox Returns Ambigous Error Using Shiva Remote
	  Q147362: XADM: Event ID 1016 Logged Incorrectly in Application Event Log
	  Q149847: ISINTEG Reports IPM Subtree Missing from IMC Mailbox
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
	  Q152925: XFOR: Schedule Requests not Updated in MS Mail Clients
	  Q152927: XADM: Event ID 136 Created When Importing Duplicate Alias
	  Q152928: XFOR: MTA does not Generate Requested Delivery Report
	  Q152929: XCLN: Wordpad and Exchange Crash on non-English NT 4.0
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
	  Q154426: XCLN: EFD Cannot Display Initial Subject Text in Reply Item
	  Q154686: XADM: Options in Admin or User Manager May Be Overwritten
	  Q154798: XFOR: SMTP Mail Attachments not Visible in PC Mail 3.x Clients
	  Q155137: XFOR: Messages Not Deleted from IMC Inbound Queue
	  Q155522: XADM: SP2 Server Upgrade Fails with 281 and 1171 Errors
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
	  Q156714: XFOR: DirSync Requestor Updates Not Being Updated Properly
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
	  Q156729: XFOR: Malformed DirSync Transactions Cause DXA to Stop
	  Q156730: XADM: CSI Type Addresses Show Up in Exchange GAL
	  Q156963: XFOR: Korean Characters Are Corrupted by the MS Mail Connector
	  Q156996: XFOR: Postoffice Lists Disappearing from GAL
	  Q156998: XCLN: To: Recipients Shown Half-size if Client is on Server
	  Q156999: XCLN: SMTP Headers Lost for DOS MS Mail Client
	  Q157000: XFOR: Korean UUENCODED Attachments Corrupted
	  Q157001: XCLN: PRC Exchange Win95 client cannot display DBCS Characters
	  Q157002: XCLN: Attachments may be lost when moving from OST to Server
	  Q157005: XCLN: Invalid Page Fault in Mapi32.dll
	  Q157006: XCLN: Client Access Violation when Opening New Message
	  Q157007: XADM: Secondary Proxy Address Replaces Target Address of CR
	  Q157008: XCON: IMC Might Use the Wrong Code Page
	  Q157010: XADM: Exception In Dsamain.exe After Network Error
	  Q157011: XCLN: Large Icon Labels can Cause Access Violation
	  Q157012: XFOR: Corrupted Message When Using Hebrew or Arabic
	  Q157013: XADM: MTA Terminates Unexpectedly with Event 3080 and 9405
	  Q157014: XFOR: IMC Deletes Mail in MTS-OUT if no code page is on MIME tab
	  Q157015: XCON: MTA Outbound Connection Refused by X.400 Host
	  Q157016: XCLN: Saving an Encrypted Message to the IS Can Delete Content
	  Q157017: XCLN: Attempting to Open Public Folder Might Return Error
	  Q157018: XCLN: Using OLE Messaging to View Non-Replicated PF Fails
	  Q157019: XADM: Changing X400 Country Code Toggles Between SE and SG
	  Q157175: XCON: MTA Service Terminates Unexpectedly
	  Q157358: XCON: Per-domain-bilateral-information and Third Party Systems
	  Q157565: XCON: MTA Terminates Without Logging Event in Application Log
	  Q157683: XCLN: Forms Designed with Many Fields Might not Show Them All
	  Q157684: XFOR: IMC Might Lose Inbound and Outbound Messages
	  Q157686: XCON: MTA Crashes When Logging Event 321
	  Q157687: XCLN: Switching Views on a Replicated Public Folder Fails
	  Q157688: XCLN: Reminders not Processed When Default Store is PST
	  Q157690: Extended Characters do not Appear in the File Name
	  Q157691: XADM: TNS Resolution Causes Buffer Overflow
	  Q157693: XFOR: IMC May Lose Messages if Needed Code Page is Not Installed
	  Q157694: XFOR: Exchange Corrupts FIPS Header with MCI Mail
	  Q157695: XFOR: MTA can't Communicate with Another MTA via French X.25
	  Q157698: XCON: Exchange Fails to Allow an Incoming X.25 Connection
	  Q157699: XCON: Messages Sent to Wang Via X.400 Do Not Return Receipts
	  Q157700: XCLN: Updating Windows 3.x Client can Cause GP Fault
	  Q157702: XCON: MTA Stopping with Event ID 2143
	  Q157703: XFOR: Messages Create by Microsoft WordMail '97 Will be NDR'd
	  Q157900: XCLN: Incorrect Characters Displayed in Profile for NT Client
	  Q157941: XFOR: Attachment Moved When Sent Over MS Mail Connector
	
	Additional query words: servpack SP3 bug fix qfe compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
