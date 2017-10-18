---
layout: page
title: "Q168735: XGEN: README.TXT: Microsoft Exchange 5.0 U.S. Service Pack 2"
permalink: kb/168/Q168735/
---

## Q168735: XGEN: README.TXT: Microsoft Exchange 5.0 U.S. Service Pack 2

	Article: Q168735
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP2
	Operating System(s): 
	Keyword(s): kbusage exc55sp2
	Last Modified: 26-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the Readme.txt file that accompanies the Microsoft Exchange
	Server version 5.0 U.S. Service Pack 2.
	
	       Microsoft Exchange Server Version 5.0
	                 Service Pack 2
	
	(c) 1998 Microsoft Corporation. All rights reserved.
	
	Microsoft and Windows NT are registered trademarks and Outlook is a
	trademark of Microsoft Corporation in the USA and other countries.
	
	All other companies and product names are trademarks or registered
	trademarks of their respective holders.
	
	Contents
	
	1.0  Introduction
	2.0  Installation Instructions for Microsoft Exchange Server Service
	    Pack 2
	       2.1  Installation Instructions for Microsoft Exchange Client
	            Service Pack 2
	       2.2  Installation Instructions for Microsoft Exchange Client for
	            Macintosh Service Pack 2
	       2.3  Installation Instructions for Microsoft Outlook Client for
	            Exchange Service Pack 2
	3.0  Updating the Web Connector
	       3.1  Requirements Before Updating
	       3.2  Chinese Language Preferences
	       3.3  Anonymous Access
	       3.4  Attachment Upload Requirements
	4.0  User Notes
	       4.1  Using Multiple Offline Address Books in the Administrator
	            Program
	       4.2  Using Multiple Offline Address Books in the Client
	       4.3  Windows File Types List for Microsoft Exchange Client for
	            Macintosh
	       4.4  Installing Internet Explorer 4.0 After Installing Microsoft
	            Exchange Server
	       4.5  Macintosh Appledouble Attachments
	       4.6  Microsoft Exchange Server White Papers
	5.0  List of Bugs Fixed in Microsoft Exchange Server Service Packs
	
	1.0  Introduction
	
	This release of Microsoft(R) Exchange Server 5.0 Service Pack 2 (SP2) is
	easy to apply from within Microsoft Windows NT(R) and changes only those
	files that were originally set up on the Microsoft Exchange Server system.
	
	Important: Service Pack 2 requires that Microsoft Exchange Server 5.0 has
	already been installed on the server or client workstation that you are
	updating.
	
	2.0  Installation Instructions for Microsoft Exchange Server Service Pack 2
	
	To install Service Pack 2 for Microsoft Exchange Server from compressed
	files:
	
	1. Create two subdirectories, Setup and Support.
	
	2. Download the compressed Setup file appropriate for your hardware
	platform into the Setup directory. Select the appropriate file as indicated
	in the following list.
	
	               Alpha AXP                       SP2_500A.EXE
	               Intel                           SP2_500I.EXE
	
	3. Download the compressed support file appropriate for your hardware
	platform into the Support directory. Select the appropriate file as
	indicated in the following list.
	
	               Alpha AXP                       SP2S500A.EXE
	               Intel                           SP2S500I.EXE
	
	4. At the Windows NT command prompt, switch to the Setup directory and type
	the file name (downloaded in step 2) followed by -d to ensure that the
	correct directories are created. (Example: SP2_500A -d)
	
	5. At the Windows NT command prompt, switch to the Support directory and
	type the file name (downloaded in step 3) followed by -d to ensure that the
	correct directories are created. (Example: SP2S500A -d)
	
	6. Switch to the Setup directory, and then type Update. Follow the
	instructions displayed on the screen.
	
	7. Switch to the Support directory, and then type Setup. Follow the
	instructions displayed on the screen.
	
	2.1  Installation Instructions for Microsoft Exchange Client Service Pack 2
	
	To install Service Pack 2 for Microsoft Exchange Client from a compressed
	file:
	
	1. Create a Client subdirectory.
	
	2. Download the compressed Setup file appropriate for the clients for your
	hardware platform directory. Select the appropriate files as indicated in
	the following list.
	
	               Windows 16-bit client                   SP2_50WI.EXE
	               Windows 16-bit NEC client (Japan only)  SP2_50EC.EXE
	               Windows 95 client                       SP2_509I.EXE
	               Windows NT (Alpha)                      SP2_50NA.EXE
	               Windows NT (Intel)                      SP2_50NI.EXE
	
	3. At a command prompt, switch to the Client directory, and then type the
	file name (downloaded in step 2) followed by -d to ensure that the correct
	directories are created. (Example: SP2_50NA -d)
	
	4. To update a client, switch to the Client and platform directory, and
	then type Update. Follow the instructions displayed on the screen.
	
	Note: On older computers and non-Intel processors, the Update program can
	take 10 or more minutes to run because it must copy the cabinet files to
	the local computer, extract the files, and then copy them to their correct
	locations.
	
	Note: To refresh the client installation point on your network so it
	contains the latest fixes and prevents new users from having to run Update
	immediately after they run Setup, see Microsoft Knowledge Base Article
	Q179548: XADM: How to Update Client Install Share with 5.0 SP1.
	
	2.2  Installation Instructions for Microsoft Exchange Client for Macintosh
	Service Pack 2
	
	To install Service Pack 2 for the Microsoft Exchange Macintosh Client from
	a compressed file:
	
	1. Download the file SP2_50MA.EXE and unzip it.
	2. Copy SP2_50MA.hqx to a Macintosh or a Power Macintosh.
	3. Convert the file from BinHex format. (This requires a utility on the
	Macintosh.)
	4. Double-click the SP2_50MA file.
	5. Open the Microsoft Exchange folder.
	6. Double-click Microsoft Exchange Setup and follow the instructions.
	7. Run Microsoft Exchange. The Profile Wizard guides you through the
	process of creating a new profile.
	
	-or-
	
	1. Download SP2_50MA.hqx to a Macintosh or a Power Macintosh.
	2. Convert the file from BinHex format. (This requires a utility on the
	Macintosh.)
	3. Double-click the SP2_50MA file.
	4. Open the Microsoft Exchange folder.
	5. Double-click Microsoft Exchange Setup and follow the instructions.
	6. Run Microsoft Exchange. The Profile Wizard guides you through the
	process of creating a new profile.
	
	Note: This version of the Macintosh client does not support Macintosh OS
	version 8.0 or later. Contact Microsoft Technical Support for additional
	information.
	
	2.3  Installation Instructions for Microsoft Outlook Client for Exchange
	Service Pack 2
	
	Note: The Microsoft Outlook(r) client included in this Service Pack is
	version 8.03 and is a complete installation of the client. Each user will
	be required to re-enter the PID number the user entered when installing
	Outlook the first time.
	
	Note: This version of the Outlook client cannot be installed on the same
	machine running Microsoft Exchange Server 5.0.
	
	To install Outlook version 8.03 from a compressed file:
	
	1. Create an Outlook directory.
	
	2. Download the compressed Outlook client files into the Outlook directory.
	
	                               SP2_50O1.EXE
	                               SP2_50O2.EXE
	                               SP2_50O3.EXE
	
	4. At the Windows NT command prompt, switch to the Client directory and
	then type each file name (downloaded in step 2) followed by -d to ensure
	that the correct directories are created. (Example: SP2_50O1 -d)
	
	5. Double-click Setup.exe, and then follow the instructions displayed on
	the screen.
	
	3.0  Updating the Web Connector
	
	The Web Connector is now called Microsoft Outlook Web Access.
	
	To update the Web client on Microsoft Exchange Server:
	
	1. Create an Outlook directory.
	
	2. Change to the Outlook directory and create a Web directory.
	
	3. Download the compressed Web Connector file appropriate for your hardware
	platform into the Web directory. Select the appropriate file as indicated
	in the following list.
	
	               Alpha AXP                       SP2_50BA.EXE
	               Intel                           SP2_50BI.EXE
	
	4. At the Windows NT command prompt, switch to the Web directory and then
	type the file name (downloaded in step 3) followed by a -d to ensure that
	the correct directories are created. (Example: SP2_50BI -d)
	
	3.1  Requirements Before Updating
	
	Before updating a server that has the Web Connector installed, the
	following must be installed:
	
	- Windows NT 4.0 Service Pack 3
	- Active Server Pages 1.0b (distributed in Windows NT 4.0 SP3)
	- Outlook Web Access does not support Microsoft Internet Information Server
	(IIS) 4.0. For IIS 4.0 support, you must upgrade to Microsoft Exchange
	Server version 5.5.
	- Support for Microsoft and Netscape browsers version 4.0 or later requires
	Outlook Web Access version 5.5.
	
	3.2  Chinese Language Preferences
	
	Web browsers can request Chinese Traditional (zh-tw) or Chinese Simplified
	(zh-cn). Some browsers do not differentiate between Chinese Traditional and
	Chinese Simplified when reporting their language preference to the server.
	In cases where the browser does not specify a sublanguage, the most
	recently installed language pack will be the default.  You can control what
	language will be returned in these cases by the order in which you install
	your Chinese language packs.
	
	3.3  Anonymous Access
	
	Anonymous access is not available to folders hosted on servers running
	Windows NT 3.51 servers. To support anonymous folder access, the folders
	must be hosted on a server running Windows NT 4.0.
	
	3.4  Attachment Upload Requirements
	
	When using Microsoft Internet Explorer for Windows 95 or Windows NT, you
	must update to Internet Explorer 3.02 with the File Upload add-on to add
	attachments to a message.
	
	4.0  User Notes
	
	4.1  Using Multiple Offline Address Books in the Administrator Program
	
	Administrators can configure offline Address Books that remote users can
	use to obtain information about other users in their organization. When
	connecting remotely to a Microsoft Exchange Server computer, a user can
	download an offline Address Book containing a list of recipients the
	administrator specifies. Offline Address Books are stored in hidden public
	folders.
	
	Remote users typically send messages to a regular group of addresses and
	require a subset of the global address list rather than the entire global
	address list for their organization. For example, members of a marketing
	group may need the addresses of the complete marketing and sales groups,
	but not the entire set of engineering group addresses.
	
	The Offline Address Book property page on the DS Site Configuration object
	has been enhanced to allow you to generate and manipulate multiple offline
	Address Books.
	
	Defining Offline Address Book Properties
	
	Use the Offline Address Book property page to set up multiple offline
	Address Books.
	
	1. In the Administrator window, choose Configuration, and then double-click
	DS Site Configuration.
	
	2. Select the Offline Address Book tab.
	
	3. In the Offline Address Book Server box, select one of the servers in
	your site.
	
	Important  You must select a server running Microsoft Exchange Server
	version 5.0 and Service Pack 1 or 2.
	
	4. To add containers for more offline Address Books, choose Add. To remove
	offline Address Book containers, select a container, and then choose
	Remove.
	
	5. To generate offline Address Books, choose Generate All.
	
	The following options appear in the Offline Address Book property page:
	
	Offline Address Book Server
	The name of the server where you want to generate the offline Address Book.
	
	Address Books
	Displays a list of Address Books to be generated for the site being
	administered.
	
	Add
	Displays a list of containers that can be added to the list of offline
	Address Books.
	
	Remove
	Removes the selected offline Address Book from the list.
	
	Generate All
	Generates all displayed offline Address Books immediately.
	
	4.2  Using Multiple Offline Address Books in the Client
	
	Multiple offline Address Books require Microsoft Exchange Server 5.0 SP1 or
	later and either Microsoft Exchange Client 5.0 SP1 or Outlook 8.02. When
	the multiple offline Address Book feature is enabled on the server and a
	user tries to download an offline Address Book (as in previous versions of
	Microsoft Exchange Server), the user will be prompted with a dialog box
	that lists all available Address Books. The user can select one of these
	Address Books.
	
	4.3  Windows File Types List for Microsoft Exchange Client for Macintosh
	
	Under some circumstances, the Microsoft Exchange Macintosh Client sends and
	receives e-mail by using only the data fork of the message. A new entry in
	the preferences file (named "Windows File Types") lists file types for
	which the Microsoft Exchange Client for Macintosh will use only the data
	fork of the message. This feature improves interoperability between the
	Microsoft Exchange Macintosh Client and other e-mail clients.
	
	Types of Entries
	There are two types of entries:
	
	       General extensions
	       Specific extensions for creator and type
	
	General Extensions
	Users can add an entry using the following syntax:
	
	       EXT [Number]= .[Extension]
	
	All files that have this extension will be inserted in subsequent messages
	as a data fork-only attachment. The default types are HTML, GIF, PDF, and
	JPEG.
	
	Specific Extensions for Creator and Type
	Users can add an entry using the following syntax:
	
	       :[CREATOR]:[TYPE]= .[Extension]
	
	All files that have the specified creator and type will be inserted as a
	data fork-only attachment. The extension will be added to the end of the
	file name, unless it is already present.
	
	4.4  Installing Internet Explorer 4.0 After Installing Microsoft Exchange
	Server
	
	If you need to run Internet Explorer and Microsoft Exchange Server on the
	same computer, it is strongly recommended that you install Internet
	Explorer 4.0 before installing Microsoft Exchange Server. If you install
	Internet Explorer 4.0 after installing Microsoft Exchange Server, Internet
	Explorer modifies the MIME registry database resulting in problems for
	international mail, especially mail with double-byte character content. If
	you installed Internet Explorer 4.0 after installing Microsoft Exchange
	Server, complete the following procedure to correct this problem. You can
	perform this procedure without stopping any Microsoft Exchange Server
	services.
	
	Note: This procedure is not required if you are installing Internet
	Explorer 4.0 before you install Microsoft Exchange Server.
	
	1. Create a MIME directory on your local hard drive.
	2. Download the compressed file SP2_50MM.EXE to your MIME directory.
	3. At the Windows NT command prompt, switch to the WPapers directory and
	then type SP2_50MM followed by -d to ensure that the correct directories
	are created. (Example: SP2_50MM -d)
	4. Right-click on the RESET.INF file in the MIME\Support Mimedb directory,
	and then choose Install.
	
	4.5  Macintosh Appledouble Attachments
	
	If an Internet message is received with Appledouble attachments, such as
	those generated by the Netscape mail client for Macintosh, the outbound
	message format is always determined by defaults configured for the Internet
	Mail Service or Internet protocols (IMAP4 and POP3), not by the incoming
	message format.
	
	4.6  Microsoft Exchange Server White Papers
	
	To download Microsoft Exchange Server white papers:
	
	1. Create the subdirectory WPapers on your local hard drive.
	2. Download the file SP2_50WH.EXE located in the Server subdirectory to
	your WPapers subdirectory.
	3. At the Windows NT command prompt, switch to the WPapers directory and
	then type SP2_50WH followed by -d to ensure that the correct directories
	are created. (Example: SP2_50WH -d)
	
	The following Microsoft Exchange white papers have been included as a
	convenience to you and can be found in the \Support\Whiteppr directory.
	These documents can be viewed with Microsoft Word for Windows 95 or
	Microsoft Word for Windows version 6.0.
	
	Edrv3p1.doc = Microsoft Exchange Disaster Recovery Part I
	
	Edrv3p2.doc = Microsoft Exchange Disaster Recovery Part II
	This paper outlines thoughts, observations, and techniques that can be
	applied to Microsoft Exchange disaster recovery planning.
	
	Shiva.doc = Using ShivaRemote with Microsoft Exchange
	This paper discusses how to configure ShivaRemote 3.59 for use with
	Microsoft Exchange Server.
	
	Note: For more information about Microsoft Exchange Server, see the
	following resources:
	
	  Microsoft Exchange Server Web site:  http://www.microsoft.com/exchange/ 
	  Microsoft Technical Support Questions:
	  http://support.microsoft.com/support/ 
	  Microsoft TechNet Reference:
	  http://www.microsoft.com/ithome/resource/technet/default.htm
	  Microsoft TechNet:  (800) 344-2121 and http://www.microsoft.com/ithome/ 
	  or email technet@microsoft.com
	
	5.0  List of Bugs Fixed in Microsoft Exchange Server Service Packs
	
	Note: Use the Qxxxxxx number that precedes the title of the bug fix to
	query the Microsoft Knowledge Base for an article about that bug.
	
	5.1 Service Pack 1
	
	  Q166616: XFOR: IMS Can Accept RFC821 Addresses Containing an Equal Sign
	  Q145789: XCLN: Boldon James MAPI X.500 Address Book Client Service Crash
	  Q145875: XFOR: cc:Mail Messages are not Delivered by DEC Mail Bus
	  Q145976: XCON: GWART is Incorrect Due to Latency in Directory Replication
	  Q145986: XCON: Illegal Country Code in X400 Address Causes MTA to Hang
	  Q146032: XCON: MTA: Invalid Originator Address When Sending to X.400
	  Q146143: XCON: DeferredDeliveryTime Echoed Within DeliveryReportEnvelope
	  Q146929: XCON: ORName not Included in Reported IPMessageId
	  Q147454: XFOR: PC MTA Message Tracking Does Not Log Message Size
	  Q147547: XFOR: IMC Mail Arrives in X.400 Address Format
	  Q148284: XCON: When and How to use the Mtacheck Utility
	  Q148992: XADM: Cannot Perform Forklift Upgrade Using UPDATE.EXE
	  Q149387: XFOR: MSMI Terminating with Memory Access Violation, Event ID 23
	  Q149974: XADM: ISINTEG Prematurely Aborts Processing in Test 22
	  Q151373: XCON: DBCS Chars in Subject of Embedded Message not Converted
	  Q151395: XCON: MTA Terminates After Receiving Mail from Zoomit Gateway
	  Q151413: XCON: ContentReturn Requested by Default
	  Q151417: XCON: Latin-1 X.400 Bodypart Encoding Causes NDR
	  Q151431: XFOR: MSMI Stops Without Error
	  Q151473: XFOR: MSMI Crashes Starting a New Thread, Reads a Null Pointer
	  Q151669: XFOR: MSMI Stops Processing Mail
	  Q151782: XFOR: DirSync Modifies Causing Names to Disappear from Exchange
	  Q151786: XFOR: Schedule+ Meeting Requests Drop the When Field
	  Q151788: XADM: "Reps-From" USN Too High for One Server
	  Q151790: XFOR: NDR with Diagnostic: 12 Erroneous Content Syntax
	  Q151791: XFOR: MSMI Stops Processing When Submitting Bad Address
	  Q151792: XFOR: One-off Addressed Mail from ccMail User not Tracked
	  Q151972: XADM: Message Limits Incorrectly Valculated After 5.0 Upgrade
	  Q151978: XADM: EcPropSize-MAPI_E_NOT_ENOUGH_MEMORY Reported by ISINTEG
	  Q151992: XADM: Simultaneous Move User Operations Freeze
	  Q152165: XCON: IMS Queues Back Up to Hosts with Multiple MX Records
	  Q152166: XFOR: Attachment Name Truncated When Name Contains a Period
	  Q152292: XFOR: IA5 Body Part Used Although Different Setting is Selected
	  Q152449: XADM: Directory Import Fails When Import File Includes DBCS
	  Q152529: XADM: Crash in Srvrmax.exe (RtlQueryInformationAcl) During Setup
	  Q153103: XCON: MTA Terminates Unexpectedly in Large Nested DL Expansion
	  Q153464: XFOR: Unexpected Text Attachment in Mail Received from Internet
	  Q153487: XFOR: Exchange Proxy Addresses Not Deleted on cc:Mail POs
	  Q154053: XFOR: Address Format Bhen Backboning cc:Mail over Exchange
	  Q154719: XCON: MTA: Line Wrap When Using ISO 6937 Bodypart
	  Q155379: XADM: Unable to Match Custom Recipient Due to RFC1327 Conversion
	  Q155592: XFOR: MSMI Message Tracking Does Not Log Message Size
	  Q155727: XFOR: DirSync Deletes and Modifies Not Being Processed by DXA
	  Q155765: XADM: Store Crashes in Ecreleaselogonop
	  Q156355: XADM: IS Incorrectly Handles a Forward Slash in DDA Value
	  Q156844: XADM: IS Incorrectly Handles a Forward Slash in DDA Value
	  Q158151: XFOR: ErrMsg: Event ID 1035 - Unable to Open or Read a Message
	  Q158590: XCON: Delivery Restrictions Max CPU and Slow Down Msg Delivery
	  Q159166: XCON: MTA Stops Responding; Event ID 2110
	  Q160250: OL97: Printout of Item Contains Header But no Body Text
	  Q160534: XCON: Size Limits May Cause Message Looping
	  Q160850: XADM: DS_E_BUSY after Directory Service Restore
	  Q161587: OL97: How to Customize Outlook Calendar Holidays
	  Q161945: XCON: MSMail Shows Blank Icon for File Attachments from Internet
	  Q161952: XFOR: Messages Sent with MSMI Are Malformed
	  Q163750: OL97: Outlook Running With Eudora Pro 3.0 May Cause Errors
	  Q164136: XCON: MSMail Read Receipts Missing Subject: and To: Information
	  Q164247: OL97: Outlook Does Not Correctly Show All TAPI Devices
	  Q164340: XADM: Importing CSV to Directory Causes GPF in MAD
	  Q164401: OL97: Using Contacts with Insert Address in Word
	  Q164408: OL97: Imported Fax Numbers May Not Work in Outlook
	  Q164662: XCON: Message Conversion Fails in MIME Uudecoder
	  Q164697: XCON: EDK Gateway Gets Directory Name Instead of E-mail Address
	  Q164839: XCLN: Application Err When MSMail Client Gets the Return Receipt
	  Q164845: XADM: Access Violation in Srvrmax.exe During Setup
	  Q164847: XCON: Win95 Client w/ Mail Service Won't Prompt for RAS Callback
	  Q164852: XCON: Attachments from HP OpenDesk May Not Open
	  Q164855: XCON: Japanese Exchange May Show a Subject Line of ????????
	  Q164856: XCON: MTA Fails to Pick Up DN of Servers with Similar Site Names
	  Q165115: OL97: Outlook Problems Handling Macintosh File Attachments
	  Q165371: XADM: Error Creating NT Account in Exchange Administrator
	  Q165412: OL97: Some Outlook Fields Are Offset by One Character
	  Q165442: XCLN: Client Deletes Existing PST in Absence of Filescan Rights
	  Q165873: OL97: Sam Translator Error Importing Schedule Plus File
	  Q166022: OL97: Summary of Changes in Outlook Version 8.02
	  Q166023: OL97: 8.02 Security Improvements
	  Q166162: XFOR: MACGATE Access Violation During Generation of Admin Msg
	  Q166262: OL97: Visual Basic Script Editor Has 32 KB Limit
	  Q166515: XADM: Primary SMTP Proxy Not Used for Email Address
	  Q166516: XFOR: Message Body Missing or Truncated While Downloading Msg
	  Q166518: XADM: New Public Folder Created by INS Defaults to US ASCII
	  Q166519: XCON: IMS Encapsulates the X.400 O/R Address
	  Q166521: XFOR: X.400 Address is Encapsulated on SMTP Messages
	  Q166522: XFOR: From Field Changed when Message Sent to INS
	  Q166523: XFOR: 5.0 Mapi Causes IMS to be 10% Slower
	  Q166531: XCLN: Mac Attachments are Unrecognizable After Crossing IMC
	  Q166532: XFOR: Incorrect Codepage SJIS Used when JIS Set as Default
	  Q166533: XFOR: Message Body Corruption Due to Ambiguous Codepage
	  Q166534: XCLN: Synchronization of Offline Folders Over RAS or Net Hangs
	  Q166536: XCON: MTA Generates Event ID 2187 on Deferred Delivery Message
	  Q166537: XFOR: NNTP Authentication Denied with Space in NT Password
	  Q166542: XADM: JET_errDatabaseInconsistent After Crash in Soft Recovery
	  Q166543: XFOR: Migration Wizard Hangs with Invalid Entry in SEC File
	  Q166545: XFOR: DXA Improperly Appending 001 to Friendly Names in the GAL
	  Q166546: XCLN: POP Attachments do not Decode
	  Q166547: XCLN: Mac Client will not Launch on PowerMacs Without Easy Open
	  Q166548: XADM: Administrators Cannot Add Accounts to Private IS
	  Q166549: XCLN: Can't Access Proptags in Other Propsets Via Fields.Item()
	  Q166550: XCLN: Active Messaging App Running as Service Fails
	  Q166551: XCON: MTA Fails while Rebuilding Routing Table
	  Q166552: XADM: Starting the IMS Causes the Infomation Store to Stop
	  Q166553: XCON: Encapsulated Message not Delivered Over X.400 Connector
	  Q166555: XADM: Address Book Views Fail if Referenced Object is Deleted
	  Q166556: XADM: Modifying cc:Mail Proxy Address can Cause Double Escapes
	  Q166557: XCLN: More Secure Launching of Attachments, Freedocs and URL's
	  Q166558: XFOR: Inbound Internet Message may Cause Access Violation
	  Q166560: XGEN: German EDB Error Messages not Localized
	  Q166561: XFOR: CCMC not Handling Bad Messages Correctly
	  Q166562: XFOR: STORE.EXE GPFs When POP3 Client Submits Bad Message Header
	  Q166563: XADM: System Attendant Stops While Tracking a Message
	  Q166564: XCLN: How to Not Convert Outbound Attachments to MacBinary
	  Q166567: XCON: How to Enable Lowest Cost Routes Only
	  Q166568: XCLN: Message Created Using MAPI Cannot be Opened
	  Q166570: XFOR: IMS May Crash When Receiving Message from Pegasus Mail
	  Q166572: XADM: 5.0 Proxy Address Generator and Scandinavian Characters
	  Q166573: XFOR: Two attachments Created When Filename Has a Path
	  Q166576: XFOR: GPF in Store.exe When Doing Fixed Width Font Conversion
	  Q166577: XFOR: Subject Field for SMTP Outbound Mails not ECU-KR Encoded
	  Q166580: XFOR: MIME and UUENCODED Messages Cause Store Conversion Error
	  Q166583: XADM: Folders are Sorted when Non-English Settings are Used
	  Q166584: XFOR: IMS does not Immediately Reject Inbound Connections
	  Q166590: XCLN: Searching for Manager Produces Mapi Error
	  Q166593: XFOR: MSMail Migration Wizard Stops in Progress
	  Q166595: XFOR: Japanese Web Client Messages Corrupted when Posted
	  Q166596: XADM: Store Dr. Watson's When Trying To Start
	  Q166597: XCLN: Outlook Chinese SFS Client Receives NDR's on Replies
	  Q166599: XCLN: .MMP file Created by Exchange Active Server
	  Q166600: XCON: Message Subject Lost When Sending to SP3 Exchange Server
	  Q166602: XCON: Exchange MTA TCP/IP and TP4 connection Limits
	  Q166604: XFOR: IMS Behind Firewall does not use Second MX Record
	  Q166605: XFOR: Reply Message to Internet Will have Embedded Text Ticked
	  Q166606: XFOR: Msgs With Mixed Japanese Encoding not Decoded Correctly
	  Q166608: XADM: Store Access Violation with error code C0000005
	  Q166610: XFOR: Unable to Open Attachment from ccMail
	  Q166612: XADM: Migration from Collabra to Exchange Fails
	  Q166613: XCLN: Mac Client Can't Logon if NT Account Has Extended Chars
	  Q166614: XFOR: Attachments Migrated from ccMail are not Viewable
	  Q166615: XFOR: Message Characters Corrupted When Different Locale Used
	  Q166618: XADM: Batch Export Crashes When Non Zero ulUSNBase is Specified
	  Q166621: XADM: Gateway out threads not set correctly by Perfwiz.exe
	  Q166622: XADM: SA Crashes When Generating Offline Address Book
	  Q166623: XCON: Large Number of Messages with Receipts Can Stay in MTA
	  Q166624: XADM: Upgrading Active Server Page Scripts
	  Q166645: OL97: Printed Shared Calendar Uses Wrong Name in Header/Footer
	  Q167024: XFOR: Cc:Mail Migration Generates Dr. Watson in Mailmig.exe
	  Q167100: XCLN: Out of Memory errors with Exchange 5.0 16-Bit Client
	  Q167132: XADM: Access Violation in Store.exe After Upgrading to SP4
	  Q167139: XFOR: MSMI Reports Errors 2563 and 2450
	  Q167639: XFOR: MSMI Reports Warning 2597 About Un-installed Codepage
	  Q168077: XFOR: Ccmail Connector Alias Name Rule not Functioning Properly
	  Q168119: OL97: Outlook 8.01 Does Not Include CC:Mail Service License
	  Q168139: XFOR: IMS Inbound Mail Communication Problem
	  Q168188: XADM: Possible Loss of Mail with Move Mailbox
	  Q168189: XADM: Unable to Extract Windows NT Account List
	  Q168216: XADM: DSAMAIN.EXE Maxes CPU When Connecting With a Browser
	  Q168300: XCLN: Err Msg: Cannot Open Attachment - Format is not Consistent
	  Q168356: XFOR: Cannot Reply to SMTP Mail Coming from the ccMail Connector
	  Q168536: XCON: Event ID: 246 An Internal MTA Error has Occurred
	  Q168586: OL97: Lunar New Year Is a Chinese, Not a Japanese, Holiday
	  Q168587: OL97: ALT+I in Find Items Causes Outlook to Stop Responding
	  Q168619: OL97: ErrMsg: Condition is Not Valid Using Timex Wizard
	  Q168621: OL97: Calendar Disappears in Second Window
	  Q168622: OL97: Date Prints in Empty User Defined Date/Time Field
	  Q168623: OL97: ErrMsg: Operation Failed Saving Message with Attachment
	  Q168625: OL97: Items Deleted From a Shared Mailbox Go to Wrong Folder
	  Q168626: OL97: Southern Hemisphere Time Zone Appointments Off One Hour
	  Q168641: OL97: Unable to Resolve Nicknames
	  Q168642: OL97: Unable to Print a Shared Schedule+ Calendar from Outlook
	  Q168656: XCON: Given and Surnames Moved to the Front of FROM: Line
	  Q168767: OL97: Garbled Characters in Imported CC:Mail Bulletin Board
	  Q168771: XFOR: Read Receipt From MSMail Does not Contain Subject Line
	  Q168832: OL97: Spelling Checker Does Not Check Words in the Subject Line
	  Q169060: OL97: Error Occurred While Checking Spelling
	  Q169076: OL97: Mailto Function Includes Only E-mail Address
	  Q169163: XCLN: Changes not Proped When Items Added to Fields Collection
	  Q169167: OL97: Invalid Page Fault Opening Outlook Notes MAPI Folder
	  Q169174: XFOR: IMS Halts if RFC821 Address Over 1k in Size is Received
	  Q169200: XADM: Offline Address Book does not Contain all Users
	  Q169241: OL97: Error in Page Setup Using Acrobat PDFWriter
	  Q169242: OL97: Viewing Other's Schedule+ Calendar Uses Outlook Calendar
	  Q169259: OL97: New Nickname Features in Outlook Service Release 1
	
	5.2 Service Pack 2
	
	  Q146677: XFOR: Host Names Beginning With Digits Not Accepted in IMC
	  Q148234: XCON: Latin-1 Characters May Be Translated Incorrectly
	  Q148272: XADM: Exchange Server Setup Halts Copying MAPI32.DLL
	  Q149780: XFOR: IMC and IMS Do Not Wrap Line Text At Property Page Value
	  Q151249: XFOR: Contents of Attachments Swapped via MS Mail Connector
	  Q151785: XCON: MTA Queue Blocked by NDR or Delivery Receipts
	  Q152937: XADM: Multipart Mime Message with TNEF Causes Store Failure
	  Q153488: XADM: Mail Limits on CR Fail to Stop Delivery of Large Message
	  Q159188: XADM: Content Conversion Errors with Large Recipient Lists
	  Q159188: XADM: Content Conversion Errors with Large Recipient Lists
	  Q159304: XADM: Quoted-Printable Is Used in Mixed DBCS/SBCS Messages
	  Q161887: XFOR: Starting Internet Mail Service, Store Causes Stack Fault
	  Q163085: XCON: MTA Logs Warning Events When Queues Reach Specified Sizes
	  Q163257: XADM: Dr. Watson, AV When You Create X.400 Address
	  Q164863: XFOR: Setting the MSMI to Send SNADS Address as Reply-To
	  Q164960: XFOR: Exchange Store Stops While Converting SMTP Message
	  Q165164: XCLN: Memory Problems After Printing
	  Q166026: XADM: Malformed Message Causes Access Violation in IS
	  Q166152: XFOR: Extended Chars in Attached Filenames not Preserved on Macs
	  Q166153: XFOR: PCMTA May Create *.MAX, *.PX or *.ATX Files
	  Q166154: XFOR: DXA Doesn't Export New Recipients Container During DirSync
	  Q166165: XFOR: ISOCOR MTA May Drop Messages Sent from Exchange Server
	  Q166247: XADM: Inproxy.dll Creates Non-RFC Conformant SMTP Addresses
	  Q166402: XCON: MTA Terminates Unexpectedly With 2110 and 9405 Event IDs
	  Q166500: XCLN: Windows 3.x Client Can't Fully Display or Save Large Msgs
	  Q166501: XADM: NDR from Postmaster Incorrectly Formatted by IS
	  Q166520: XADM: Admin Incorrectly Creates an MS Mail Connector Mailbox
	  Q166524: XADM: Offline Defrag Fails with Error -1605
	  Q166540: XFOR: IMC Appears Hung with Improper DN Format
	  Q166541: XADM: Random Access Violation in Store.exe (Edb.dll)
	  Q166544: XADM: DS Terminates Unexpectedly With Event IDs 1186, 1129, 1171
	  Q166559: XCLN: Setup /q1 Ignores HomeServer & MailboxName in Default.prf
	  Q166578: XADM: KCC Fails with More Than 212 Sites in Organization
	  Q166579: XCLN: Remote Connection Interval Not Constant
	  Q166581: XADM: Exchange-Cc:Mail Dirsync: CR with Corrupt Proxy Addresses
	  Q166585: XADM: Msg with Bad TNEF Causes Store to Access Violate
	  Q166586: XCON: Incoming Attachments Lost from Wang X.400 Connector
	  Q166587: XCON: High Priority Mail Sent from MS Mail Changes Priority
	  Q166588: XCON: MTA Work Queue Backlog when Restrictions used with DL
	  Q166589: XFOR: Microsoft Mail Connector Fails When Sending an Attachment
	  Q166594: XCON: Messages not Being Delivered Over the First Association
	  Q166598: XCON: Wrong Attachment Names in Messages from Mail.D
	  Q166603: XFOR: Messages Rejected by X400 System
	  Q166611: XCON: No Rerouting Needed When OU Field is Empty
	  Q166619: XCON: DR Contains only DN in Non-Replicated Exchange Environment
	  Q166640: XFOR: Unable to Delete Read Receipts from Mail Sent to PROFS
	  Q166642: XFOR: Err Msg: An Unexpected Response (500) Was Received...
	  Q166866: XFOR: SMTP Outbound Mail Transfer Stops After SP1 is Installed
	  Q167207: XADM: Incorrect Status for Storage Limits in Mailbox Resources
	  Q168086: XCLN: MS Schedule+ Time Zones Wrong w/ OEM Service Release 2
	  Q168738: XCON: HP Openmail Users Cannot Reply to SMTP Mail
	  Q169664: XFOR: Unexpected Icon Description for Internet File Attachments
	  Q169666: XADM: POP3 Users may not Receive an Attachment if Part of DL
	  Q169669: XADM: Admin Can't Delete/Return Msgs to MS Mail Postoffice
	  Q169670: XCON: Incoming Messages from HP OpenMail Include Winmail.dat
	  Q169671: XFOR: MSMI Terminates on Bad SMTP Address
	  Q169673: XADM: Remote Procedure Call Fails When Generating Offline AB
	  Q169674: XADM: Read Receipt May Not Be Delivered If Message Read Offline
	  Q169676: XCON: DirRep Messages NDR Due to Connector Restrictions
	  Q169677: XFOR: DXA Reports 249 Error with Error -1201
	  Q169678: XADM: IMS and IS Use Quoted-Printable Encoding For MIME/JIS
	  Q169679: XADM: Messages Sent with MIME/JIS Encoding May Not Be Readable
	  Q169681: XCON: IMS Stops with Access Violation When Using Imcext.dll
	  Q169683: XFOR: New IMS Routing Functionality in Exchange Server 5.0 SP2
	  Q169685: XFOR: When Remote Clients Support MAPI, BP9 not Sent
	  Q169687: XCON: Some Extended Characters Not Correctly Translated
	  Q169689: XADM: Store.exe May Access Violate While Replicating PFs
	  Q169690: XCON: MTA Terminates with 2191, 2198, 2197, and 9405 Events
	  Q169691: XCON: MTA Slow to X.400 Links
	  Q169694: XCON: Content Conversion Fails When MDBEF Formatting Disabled
	  Q169700: XADM: Exception Error Receiving Message from PROFS/OV Connector
	  Q169703: XADM: Error Msg. When Accessing cc:Mail Connector Properties
	  Q169704: XADM: Mailbox Grows Excessively Large
	
	
	  Q169707: XADM: AV in Mad.exe w/ 20 or More IP Addresses for NIC
	  Q170060: XADM: Store Uses 100% of CPU on Incoming MIME Binhex Message
	  Q170137: XFOR: PCMTA Service Stops When Message Sent with Date 00
	  Q170317: XFOR: IMC Stops Responding When VRFY Is Enabled
	  Q170758: XADM: Delivery Restrictions for Custom Recipients Fail
	  Q170911: XADM: Clean Mailbox Utility Deletes Msgs Not Archived
	  Q173123: XCLN: 5.0/SP1 Macintosh Client Drops Three-Letter Extension
	  Q173279: XFOR: IMC Issues Incorrect Event ID
	  Q173303: XADM: 5.0 Administrator Program Stops 4.0 Directory Service
	  Q173343: XFOR: Slow Processing of Internet Messages with MIME Bodyparts
	  Q173344: XFOR: MSMI Can't Process 256+ Character Recipient Names
	  Q173457: XFOR: Information Store Stops in URL Processing RTF to HTML
	  Q173491: XFOR: Message to IMC via Telnet with Year 1900
	  Q173713: XFOR: CR Receives Rich Text Format Information Unexpectedly
	  Q174035: XFOR: Multiple Messages Are Sent When All Mail Is Forwarded
	  Q174039: XCON: Read or Delivery Reports Show OU2 and OU3 Values
	  Q174059: XADM: Cannot Create Custom Recipient with ^ as First Character
	
	
	  Q174165: XADM: Directory Replication Error 1224 After Replacing Server
	  Q174380: XADM: Setup Marks Mapi32.dll and Exchmem.dll as System
	  Q174890: XFOR: Content Conversion Fails with Outbound Internet Message
	  Q174895: XCON: Messages Are Lost When MTA Size Limit Is Exceeded
	  Q175042: XCON: Extended T.61 Translated Wrong in P2/P22 Subject Field
	  Q175235: XCLN: Greek Outlook Client Cannot Send Message to MS Mail User
	  Q175236: XFOR: Failed Message Conversion Error on Inbound Messages
	
	
	  Q175253: XFOR: General Protection Fault in Module Ofwinfil.exe
	  Q175254: XFOR: Messages Misrouted Due to Directory Replication Latency
	  Q175360: XFOR: DirSync Cycle Removes Secondary X.400 Addresses
	  Q175411: XADM: POP3 Client May Cause Exchange Information Store to Crash
	  Q175437: XFOR: Thai Characters not Translated by the MS Mail Connector
	  Q175475: XFOR: Information Store May Incorrectly Stamp Time Zone Info
	  Q175493: XADM: Can't Extract Account List if Similar Domain Name Exists
	  Q175545: XADM: Directory Replication Occurs Five Minutes after Startup
	  Q175578: XFOR: Autoforwarded Messages not Handled Correctly
	  Q175579: XFOR: Systems Using Addresses with DDATYPE=MSXCX500, Will NDR
	  Q175580: XADM: Internet Mail Service Does Not Handle Uudecode Correctly
	  Q175688: XADM: Exact Name Resolution Fails with First and Last Name
	  Q175704: XFOR: IMS Failing to Decode Uuencoded Attachments
	  Q175708: XCON: Gateway Address Routing Table Not Recalculated Correctly
	  Q175733: XADM: Key Normalization Problem Causes Stack Corruption
	  Q175780: XCON: Sending to Nested DLs Fails
	  Q175958: XFOR: NDR When You Send Msg over MS MAIL Connector
	  Q175964: XFOR: MTA Stops Processing Messages and Generates Event ID 210
	  Q175965: XFOR: MSMI Crashes Logging NDR Event, Generates Event ID 2380
	  Q175967: XADM: Cannot Edit the PAB Migration Message in Exchange 5.0
	  Q175968: XCLN: Windows 3.x Client Fails to Send to SMTP Address
	  Q175969: XCLN: NT Client Generates Application Error, Exception Violation
	  Q175982: XFOR: Outbound SMTP Mail Never Leaves Microsoft Exchange Server
	  Q176046: XCON: Routing Issues with Microsoft Exchange Server, Version 5.0
	  Q176125: XADM: Outbound Unicode 2.0 Messages Not Decoded Properly
	  Q176126: XCON: No NDR When You Send Message to Invalid OR Address
	  Q176127: XCON: Read Receipts Looping in the Message Transfer Agent
	  Q176128: XCON: Message to SMTP Address Fails with Reason 0
	  Q176129: XCON: Can't Reply to Messages from User with Dual DDA Address
	  Q176130: XCON: MTA Stops When You Select Items in MTA Queue
	  Q176131: XCON: Recipient Added from PAB Does Not Convert MSXCX500 DDA
	  Q176132: XCON: Signed Message in DMS MTA Not Converted
	  Q176143: XCON: Non-Delivery Report on Empty P772 Messages
	  Q176146: XCON: X.400 Connector Line-Wrap Cuts Msg Line at 80 Chars
	
	
	  Q176148: XCON: No NDR on Malformed X.400 Addresses
	  Q176149: XADM: Store.exe Stops Unexpectedly When Handling Unicode Msg
	  Q176150: XADM: P42 Message Delivery Fails Setting ENTRYID
	  Q176151: XCON: Err Msg: EMS MDB Assert Failure
	  Q176177: XADM: Outlook Client Connects to Remote Public Folder Servers
	  Q176180: XADM: Deferred Delivery Settings Not Effective
	  Q176181: XCON: NDRs Dropped When You Don't Use PRMD and Multiple DDAs
	  Q176182: XADM: Information Store Crash Due to Incorrect Caching
	  Q176183: XADM: NDRs Generated by PF Rules Not Forwarded to the Contacts
	  Q176184: XFOR: Message Format Differs Between POP and MAPI Clients
	  Q176185: XFOR: 1251 Character Sets Not Preserved on Incoming IMS Message
	  Q176187: XCLN: BCC Recipients Not Shown in Sent Items Folder
	
	
	  Q176193: XCON: Outbound Conversion of UTF Messages Causes Infinite Loop
	  Q176194: XFOR: Messages Fail to Process When No PRMD Defined
	  Q176195: XADM: Address Book Views Do Not Replicate Between Sites
	  Q176196: XADM: Some Mailboxes Not Included in Directory Synchronization
	  Q176219: XADM: DXA Objects Do Not Have Support for Hebrew
	  Q176231: XADM: TEXT/PLAIN Bodyparts Discarded in Embedded Messages
	  Q176235: XCON: Cyrillic Characters Not Rendered Correctly
	  Q176375: XFOR: CCMC Shuts Down and Logs Events 82 and 83
	  Q176396: XCON: Long Lines of Text Cause Content Conversion Error
	  Q176397: XFOR: Access Violation Migrating Messages from SFS Postoffice
	  Q176398: XADM: User Count Shows 4294962176
	  Q176425: XFOR: MS Mail Connector NDRs Messsage Due to Malformed Address
	  Q176433: XADM: MIDSET Errors Generated by ISINTEG
	  Q176440: XCON: Large Messages Sent Through MTA Cause CPU Spike
	  Q176453: XCON: Problems with Attachments Using Boldon James Encoding
	  Q176455: XADM: NDR When Attempting to Send to Large Number of Recipients
	  Q176458: XCLN: Misleading Message After Installing Service Pack 1
	  Q176459: XADM: DirRep Bridgehead Errors Modifying Site Naming Contexts
	  Q176465: XFOR: Information Store Stops Unexpectedly with Null Recipient
	  Q176477: XFOR: SMTP Message to More Than 100 Recipients Is Not Delivered
	  Q176538: XADM: Display Name Missing for RFC 822 ""Group:;"" Address
	  Q176622: XADM: User and Group Permissions Granted Automatically
	  Q176627: XADM: Information Store Stops Unexpectedly
	  Q176682: XADM: System Attendant Uses Unusually Large Amount of Memory
	  Q176708: XCON: Memory Leak in Microsoft Exchange Message Transfer Agent
	  Q176709: XADM: Memory Leak in Microsoft Exchange Server Information Store
	  Q176710: XFOR: Japanese Characters in Subject are Corrupted
	  Q176739: XFOR: IMS Uses Incorrect Reply To Address
	  Q177152: XADM: X400 Address with Embedded Slashes Rejected by the Store
	  Q177217: XADM: Store Crashes with NNTP XHDR on Large Number of Articles
	  Q177251: XADM: Disabling PF Replication Status Messages on IS Startup
	  Q177259: XADM: User Count Increments Incorrectly
	  Q177268: XADM: Information Store Crashes Decoding Inbound TNEF Properties
	  Q177308: XADM: Slow Client Logon Due to Missing Addressing Template
	  Q177322: XADM: -1022 or -1026 Error Verifying Consistency of Databases
	  Q177328: XFOR: MTA Terminates Unexpectedly with Event ID 2051 and 9405
	  Q177374: XFOR: Disable BilateralInformation and IternalTraceInformation
	  Q177375: XFOR: Exchange SP1 Embedded Messages Appear as Raw MIME
	  Q177464: XADM: IS Crashes in EcCreateP1 when Starting the MTA
	  Q177491: XADM: Corrupted IPX Packets Cause Information Store to Crash
	  Q177543: XFOR: IMS Provides Maximum Logging When Set to Medium
	  Q177710: XADM: Store Crashes Referencing Parent Attachment Pointer
	  Q177769: XADM: Assert Error When You Extract Windows NT Account List
	  Q177779: XADM: Error Message in Store.exe on Messages Sent from PROFS
	  Q177782: XADM: Home Server Not Updated After a Move Mailbox
	  Q177793: XADM: NDRs Discarded by Internet Mail Service
	  Q177794: XADM: Log Files Are Generated During Backup w/ Circular Logging
	  Q177807: XADM: Online Backup of the IS or Directory may Crash
	  Q177820: XCON: MTA Stops Unexpectedly When Accessing Memory
	  Q177821: XCON: Message Transfer Agent Stops Unexpectedly
	  Q177822: XCLN: Err Msg: General Protection Fault Running Forms Designer
	  Q177823: XADM: Incorrect RPC Operations Cause Information Store to Fail
	  Q177835: XFOR: Extended Characters on Addresses Are Not Recognized
	  Q177836: XCON: Delivery Receipts Display Fields as UNKNOWN
	  Q177862: XCON: Messages Fail Downgrade, Bounce Between X.400 Connectors
	  Q177869: XFOR: Messages with X.400 Address in From Field Not Delivered
	  Q177875: XADM: Memory Leak in Directory Service of Exchange Server
	  Q177886: XCON: MTA Terminates With 218x, 2143, 2171, and 9405 Events
	  Q177942: XADM: MIME Message Text Word Wrap Option Cannot Be Configured
	  Q177944: XFOR: Incorrect Spacing in RTFHTML Messages w/ Outlook Express
	  Q177955: XADM: Information Store Crashes Receiving NDR in UTF Format
	  Q177956: XFOR: Interoperability Between Exchange Server 5.0 and 5.5
	  Q177957: XFOR: Messages with Non-ANSI Characters Arrive with Garbage
	  Q177958: XADM: BCC Recipient Becomes TO Recipient
	  Q177959: XADM: Information Store Does Not Start, Error -1022
	  Q177961: XFOR: Fail to Decode Inbound Messages with 1522 UTF Encoding
	  Q177979: XCON: Internet Message w/Message as Attachment Generates NDR
	  Q177988: XADM: BCC Line Is Viewable from Recipient's Mailbox
	  Q178053: XADM: Store Thread's Processor Use Peaks Indefinitely
	  Q178056: XCLN: One-Off RFC822 Addresses Supported
	  Q178097: XADM: Delete Control Message Does Not Work in NNTP Protocol
	  Q178118: XADM: Inbound Unicode 2.0 Messages Not Decoded Properly
	  Q178163: XADM: Colon in Site Name Breaks Intersite Directory Replication
	  Q178204: XCON: MTA Using 100% CPU on Receiving Message
	  Q178219: XADM: Administrator Can't Specify a Font Size in IMC
	  Q178244: XADM: Store Stops When POP3 Client Retrieves NDR for UTF-7 Msg
	  Q178338: XADM: Information Store Access Violation in hrVerifyAttach
	  Q178344: XADM: IS Uses 100% of CPU and Generates Access Violation
	  Q178378: XCON: IMS Does Not NDR Message When Passed DISP_NDR_ORIG
	  Q178543: XCLN: Err Msg: Can't open this item. Cannot add the attachment.
	  Q178620: XCLN: Client Profile Update Doesn't Update DNS FQDN
	  Q178657: XADM: Hyperlinks Composed in WordMail 97 Do Not Function
	  Q178658: XADM: KCC Uses Increasingly Large Amounts of Memory
	  Q178659: XCON: Asserts Problem When Downloading Messages
	  Q178698: XADM: Calendar Reminders Not Functioning After Move Mailbox
	  Q178757: XADM: Store Logs Error 1203 When You Delete a Mailbox
	  Q178758: XCON: CCMC Stops Randomly with Out of Disk Space Error
	  Q178820: XADM: Collabra Migration Tool Does Not Handle OLE Embedded Docs
	  Q178854: XCLN: When You View Message from Explorer, Client Stops
	  Q178891: XADM: Incorrect Message When Issue Warning Limit Is Reached
	  Q178892: XADM: DMS-Latest Delivery Settings Not Effective
	  Q178939: XADM: Language Not Maintained with Cyrillic (KOI8-R) Messages
	  Q179013: XADM: IS Stops in _mapises\notifysrv.cxx During Shutdown
	  Q179048: XADM: Mailbox Cleanup Deletes Calendar, Contacts, and Notes
	  Q179050: XADM: WinNT Account Becomes Domain\\User When Output by Export
	  Q179056: XADM: Store Stops While Processing Rule for Client
	  Q179058: XADM: Store on Alpha Fails When POP3 User Retrieves Attachment
	  Q179072: XCON: cc:Mail Post Office Gets NFT Error
	  Q179152: XFOR: Mail Retrieved w/ POP3 Client Shows in SJIS Not JIS
	  Q179153: XADM: NDR Not Sent If Allow Rich Text Option Is Selected
	  Q179665: XADM: Message Receipts Generated Even with Option Cleared
	
	Additional query words: servpack bug fix
	
	======================================================================
	Keywords          : kbusage exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange500SP2
	Version           : winnt:5.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
