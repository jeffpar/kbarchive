---
layout: page
title: "Q188070: List of Bugs Fixed in SNA Server 4.0 Service Packs 1 and 2"
permalink: /kb/188/Q188070/
---

## Q188070: List of Bugs Fixed in SNA Server 4.0 Service Packs 1 and 2

{% raw %}

	Article: Q188070
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is a current listing of the article numbers for bugs that were
	fixed in SNA Server 4.0 Service Packs. Use the Qxxxxxx number that precedes the
	title of the bug fix to query the Microsoft Knowledge Base to find an article
	about that bug.
	
	NOTE: If an article appears in the Readme.txt file for the Service Pack, but does
	not appear in the following list, it is because the article was mistakenly added
	to the Readme.txt file
	
	MORE INFORMATION
	================
	
	SNA Server 4.0 Service Pack 2 is a cumulative build of all fixes to Microsoft
	SNA Server version 4.0. The bug fixes in this article are listed according to
	the SNA Server 4.0 Service Pack in which they were first included.
	
	Service Pack 2
	--------------
	
	- Q178074 RUI_TERM Fails to Return When lua_resv56[2] Is Set in RUI_INIT
	- Q180788 Changing User Rights Isn't Recognized Until Snabase is Restarted
	- Q180862 Single Form Feed Sent by Host on LU3 Print Session Is Ignored
	- Q180864 Print Sessions Stop with Host Print Service
	- Q182265 Print Server Adds Space After Form Feed
	- Q182264 5250 or 3270 Applet Will Hang When Started
	- Q186054 SLI_SEND/SLI_RECEIVE Can Send/Receive A Maximum Of 65 KB Of Data
	- Q186710 FEEDIGNOREFINAL is Not a Valid Option
	- Q188238 SNA MngAgent Trap in Function CManage::GetNotify
	- Q188689 Converting From ASCII-EBCDIC Using CPICs CMCNVI and CMCNVO
	- Q188893 SnaBase Hangs When 256th Process Added to Internal Process Table
	- Q188990 Application Exception in Snamanag!CSISend
	- Q188991 5250 Print Session May Be Hung in Stuck State, Show Spooling
	- Q189053 SNA Server Access Violation in Function Snaservr!s1prfpda
	- Q189308 Manager Fails to Detect Installed Link Service
	- Q189324 SNA Server Manager Shows Incorrect DLC t1 Timer Value
	- Q189474 Mngcli Traps When Opening a Subdomain \\XXX\
	- Q189475 Max BTU Size Limit Increased for SNA Server Connections
	- Q189476 SNA Server Error 0352 - Unable To Open Configuration File,rc=618
	- Q189477 Linkutil.exe May Display Link Service Properties Incorrectly
	- Q189501 X.25 PU Passthrough Drops Transmission Header
	- Q189621 Print Server Overrides Paper Source Parameters When Using HPT
	- Q190444 Memory Leak when Reading Configuration File
	- Q190445 Performance Monitor SNA Adapter Counters Are Missing
	- Q190739 Print Session Does Not Prompt for Filter DLL
	- Q190745 Manager Does Not Show Details View for TN3270 and Print Server
	- Q191169 SNA Windows NT Client Does Not Detect The SNA Web Client
	- Q191394 SNA Server Access Violation in Function S1psineg
	- Q191395 SNA Client APPC and RUI/SLI Applications May Seem Slow
	- Q191610 Assigning LUs/Pools to Workstation MAC Addresses Not Supported
	- Q191625 TN3270 Server Rejects Valid BIND with 0821 Sense Code
	- Q191699 XID Type for PU Passthrough May Cause Failed Connection
	- Q192711 Users Unable to Update Their Host Cache Using UDConfig
	- Q192807 SNABase Service Fails to Start on SNA Server
	- Q193487 SNACFG Displays APPC Session Security Key in Clear Text
	- Q193659 SNA Server Access Violation in s1prfrcb()
	- Q193684 APPC/CPI-C Apps May Hang When Allocating LU 6.2 Sessions
	- Q193729 SNA Distributed Link Service Access Violation in sbpbputh()
	- Q193811 SNA Manager Does Not Show Local Domain Window
	- Q193813 Multiple NVRunCmd Commands May Cause Unpredictable Results
	- Q193814 Performance Improvements for APPC/CPIC Applications
	- Q193815 Improved APPC/CPIC Performance on SNA Client Computer
	- Q193816 SNA Server 4.0 Always Checks for Remote APPC LU Security
	- Q193817 SNA Server Event ID 11 Missing Description Information
	- Q193827 FMH Bit Not Set in Query Reply with Function Management Header
	- Q193829 SNAPMP Memory Leak After Host-Initiated Password Change
	- Q193908 SNA Server Application Exception When Using SET_TP_PROPERTIES
	- Q193986 Enable OtherServers Function In The Firewall Environment
	- Q193987 Win95 Client May Trap When Client/Server Encryption is Enabled.
	- Q193988 APPC/CPIC Application May Fail When Using Remote APPC LU Name
	- Q193989 Opening Subdomain in SNA Manager Fails on Every Other Attempt
	- Q194081 Unable to Cancel TEST_RTS_AND_POST if Verb Issued Synchronously
	- Q194082 TEST_RTS_AND_POST Does Not Work When Using WinAsyncAppc Call
	- Q194316 TN3270 Access Violation Occurs When 15,000 Sessions Configured
	- Q194324 Data not Compressed from SNA Server to Host
	- Q194365 SNA Server Access Violation in DestroyUser()
	- Q194367 Assigning LUA LUs to a 3270 Display Pool Results in a Drwatson
	- Q194552 Client SNA Manager Traps after Removing Host Account Manager
	- Q194553 First SLI_OPEN is Not Traced When LUA API Tracing Enabled
	- Q194558 Print Server Translates Characters Below 0x40 to Spaces (0x20)
	- Q194593 Print Sessions May Fail to Start When Using Host Print Service
	- Q194594 Snaservr.exe Traps While Starting More Than 50 Connections
	- Q194598 Print Server Overrides Font ID Parameter When Using HPT
	- Q194619 Host Security Group Inadvertently Removed From Start Menu
	- Q194620 I_DOTLESS_SMALL in PDF Always Maps to Space
	- Q194621 Print Screen in 3270 Applet Does Not Support Greek Code Page
	- Q194622 No SNA Manager Status Changes When TN3270 Session Load Under 30K
	- Q194624 TN3270 Server Traps When TN3270 Session Load Is Under 30K
	- Q194626 Shared Folders Unable to Copy Files With Compression Enabled
	- Q194648 High CPU Usage Using SNA Server Performance Monitor Counters
	- Q194741 StarQuest ODBC Sessions Through SNA Server Fail When Using IIS
	- Q194763 SNA Print Server PDF Fails to Support Macros Exceeding 127 Chara
	- Q194764 Print Screen in 5250 Applet Does Not Support Greek Code Page
	- Q194848 SDLC Connection Fails with Event 23, Qualifier X'002E'
	- Q194931 Incorrect Number of Active Users Displayed in SNA Manager
	- Q194932 Implicit Incoming Remote LU Cannot Be Set to None with SNACFG
	- Q194933 Problems Displaying Underscored Greek Characters in 3270 Applet
	- Q194934 Shared Folders Gateway Doesn't Support S/36 or AS/36
	- Q195012 Queued 3270 Print Jobs May Intermittently Print Incorrectly
	- Q195063 Common User ID Problem when Using Associated Printer Feature
	- Q195116 SNA Server Logs Event 3 (1106) Node Configuration Error
	- Q195121 SNA Server Fails With Access Violation in S1pnsuns()
	- Q195125 Stopping MngAgent Service May Cause Trap in Mngcli.exe
	- Q195165 SNA Print Server FMH5 ATTACH PIP Data is Corrupted
	- Q195166 NVAlert Service Logs Event 3006(ReadEventLog Returns 122)
	- Q195167 SLI Application Fails with LUA_DATA_SEG_LENGTH_ERROR
	- Q195168 SNACFG Doesn't Output Complete Data for the ADDPARTNER Option
	- Q195169 NvRunCmd Hangs When it Receives Data with a Certain Length
	- Q195170 SNA Server Sends an Incorrect Sequence Number in BIND Response
	- Q195354 LU3 Print Sessions Don't Support Transparent Print Sections
	- Q195355 TN5250 Logs an Event 15 For Every Configuration Change
	- Q195399 SNA Print Service Access Violation in S3pcsctl()
	- Q195401 ACTPU(ERP)/ACTLU(ERP) Requests Not Sent To Downstream Systems
	- Q195402 Absolute Vertical Move Command Handled Incorrectly if PDT Used
	- Q195522 Host Password May Be Revealed By Manipulating SSCP-LU Session
	- Q195746 Print Server Sends a Continuous Stream of Formfeeds to Printer
	- Q195747 Implicit Incoming LU Not Used After Saving Configuration Change
	- Q195769 Events 38 and 92 Logged When Closing 5250 Applet Session
	- Q195770 Print Margins Not Properly Configured When Using SNACFG.EXE
	- Q195771 Print Server Uses 100% CPU If No Line Formatting Option Enabled
	- Q195816 RandomSponsor Setting Does Not Work on SNA Server Client for NT
	- Q195818 Windows NT 4.0 SP4 Breaks SNA Encrypted Client Connectivity
	- Q195819 AS/400 APPC Printing Lost Spool File Attributes
	- Q195883 3270 EIS/FMI Applications Fail if RU size in BIND Set To 32 KB
	- Q195889 SnaBase Fails To Start When Using Novell's IntraNetware Client
	- Q195892 Client Logon Fails When Password Change Required in User Mngr
	- Q195987 Snatrace Won't Start if "Background Thread" = "Below normal"
	- Q195996 SNA Server Incorrectly Handles Cancelled Allocate Requests
	- Q195997 Strict "No Response" Protocol Check Causes TN3270 Session Hang
	- Q195998 SNA Server Fails With Access Violation in Routine s1pxsnd()
	- Q195999 [MC_]ALLOCATE Contention Winner Request Never Completes
	- Q196000 SNA Print Server Rejects FMH-1 With Sense Code 1005
	- Q196038 Date Subvector of NVAlert Major Vector Incorrectly Set in Yr 2K
	- Q196077 SNARAS Ports Become Unavailable after Network Outage
	- Q196078 No Error Message when Remote Link Services is Wrong for DLS
	- Q196079 API Tracing May Cause Access Violation With CMETPN() Function
	- Q196191 SNABASE Unable to Update the BackupSponsor Registry Key
	- Q196193 PU Passthru Connection Fails To Activate During XID Negotiation
	- Q196230 SLI Does Not Reset Lua_flag2.async
	- Q196237 SDLC Multiport Connection Only Works with One DSPU at a Time
	- Q196238 SNARAS Goes Into Infinite Loop When Invalid Msg Type Is Received
	- Q196239 SNA Client for Windows NT Hangs When Receiving PID > '0x8000'
	- Q196240 Characters Above 127 Were Incorrectly Mapped By NvRunCmd
	- Q196241 Event ID 205 Does Not Include Source SAP Information
	- Q196242 SNA Print Server May Leak Memory
	- Q196243 Host Print Sessions Using GDI May Stop Printing
	- Q196245 Snabase Displays Garbage String for Backupsponsor Server Name
	- Q196259 Access Violation in snaservr!snpugeti When Using PU Passthrough
	- Q196298 Characters May Print Over Each Other When Using Print Server
	- Q196327 Access Violation When 2 LUs have Same Name & Same Connection
	- Q196390 SNA Server Refuses New User Connection after Server Restarted
	- Q196392 MngAgent Access Violation In Function CStdAgentProxy::SetPending
	- Q196571 NVRunCmd Does Not Return More Than 32 KB of Data Per Command
	- Q196572 Assign LU Dialog Box May Not Show All Available Connections
	- Q196604 SNA Server Manager May Not Find Subdomain When Started
	- Q196605 LU-LU Test Tool Generates Invalid Event 96
	- Q196921 SNA Server Access Violation in Function S1PWLUSE()
	- Q196945 Host Account Manager May Display User Password In Clear Text
	- Q196957 Using SFGW to Save Files May Cause Task Dump on S/36 or AS/36
	- Q197085 Heap Corruptions Cause Access Violations in SNA Server and SnaBa
	- Q197436 Remote Link Service Doesn't Answer Incoming Calls
	- Q197437 Print Server Data Filter DLL causes Access Violation in SNAPRINT
	
	Service Pack 1
	--------------
	
	- Q166529 APPC Applications Fail to Connect to SNA Server 3.0 and 4.0
	- Q169142 Unable To Change 3270 Printer LU Name
	- Q174644 Perfmon Degrades SNA Server When Many 3270 LUs in Use
	- Q177899 Dependent LU6.2 Bind Rejected with Sense Code 0835
	- Q178315 APPC or CPIC Programs Stop Working
	- Q178493 SNA Server Status Shows "Off Line" Even Though It's Active
	- Q180052 SNA Server Access Violation in Function s1pucosp
	- Q180053 SNA Server Access Violation in Function S1pimcrc
	- Q180054 Perfmon Trap or Winlogon STOP C000021A When Running Perfmon
	- Q180148 French Support for Host Security
	- Q180149 LU3 Print Jobs May Fail to Print After Initial Job Completes
	- Q180150 LU3 Print Job Fails If Data Includes X'27' Control Codes
	- Q180415 Sense Code in FMH-7 Message Is Not Returned to APPC Application
	- Q180416 APPC or CPI-C TPs May Fail When Using Dependent LU 6.2 Sessions
	- Q180467 SNA Client Does Not Retry Other Sponsors After Error Response
	- Q180469 Print Server Access Violation When Starting First Session
	- Q180470 Scale Font Option Not Working for SNA Server Print Server
	- Q180537 TPs Can't Be Invoked On Windows 95/NT Clients if One TP Ends
	- Q180538 SNA Server SDLC Connection Fails to Reactivate After Host IPL
	- Q180636 Can Still Move Up and Down If All LUs Selected for User
	- Q180665 SNA Server Code Conversion Between 037 And 932 does not work
	- Q180692 Start Button Not Disabled Using Snap-in Interface
	- Q180701 CPIC Application CMINIT May Stop on SNA Windows NT Client
	- Q180702 Deleting LUA Pool from TN3270 May Delete Pool
	- Q180703 SLI_BID May Return LUA_CANCELLED/LUA_TERMINATED
	- Q180704 SLI_CLOSE May Hang if CICS Doesn't Respond to SHUTC
	- Q180705 APPC DISPLAY Call May Return AP_COMM_SUBSYSTEM_ABENDED
	- Q180706 Incoming X.25 Host Connection Indicates Primary Link Role
	- Q180708 SLI_OPEN May Fail With LUA_STATE_CHECK/LUA_NO_SLI_SESSION
	- Q180729 Handle Leak in SNAUDB.EXE
	- Q180788 Changing User Rights Isn't Recognized Until Snabase is Restarted
	- Q180792 Print Server Logs Event 4103 as a Stop Event
	- Q180862 Single Form Feed Sent by Host on LU3 Print Session Is Ignored
	- Q180863 Print Server May Experience Occasional Performance Degradation
	- Q180865 Print Server Adds Space After Form Feed
	- Q180868 SFGW May Trap When Creating New Devices in SQL Manager
	- Q180869 Unable to Start Print Sessions Until Print Service Restarted
	- Q180929 TN3270 Client Ignoring Keyboard Lock
	- Q180931 MicroGate SDLC Adapter is Not Being Allowed Time to Reset DSR
	- Q180935 Distributed Link Service Reactivation Fails with Event 77,x0AFF
	- Q180938 Multisap Link Services Only Allows 2 Connections per Local SAP
	- Q180941 APPC Printing Misinterprets ASCII Data
	- Q180949 Windows 95 Client Retrieves Wrong Password from the Cache
	- Q180954 Allocation of Print Server Threads May Cause Delays
	- Q181025 Print Server Doesn't Support Vertical Channel Select SCS Code
	- Q181027 Closing Subdomain Causes Dr. Watson in CSnaItem::Terminate
	- Q181028 Print Server Resets LPI During Print Job
	- Q181030 SNAPRINT Ignores SCS Codes, Print Job Ignores SCS Formatting
	- Q181099 Some SNACFG Options Fail using a German version of Windows NT
	- Q181100 Print Server Incorrectly Handles DBCS Codes in SCS Datastream
	- Q181122 Event ID 627 Running SNA Services Under WinNT User Account
	- Q181132 Configuring Host Print Transform May Cause an Extra Form Feed
	- Q181133 Win95 Host Account Manager on WinNT Fails to Copy UDSUPPNT.DLL
	- Q181745 LU # Heading in MMC Snap-in List View Is Incorrect
	- Q181803 5250 Demo Screens Scroll with No User Input
	- Q181976 Windows 95 Client Fails to Connect After Forced Password Change
	- Q181977 Application Exception in Snanmvt.exe
	- Q182063 SNA API Traces May Fail to Capture CMALLC or Allocate Failures
	- Q182064 APPC Program May Stop or Fail with SNA Server 4.0 on DEC Alpha
	- Q182065 SNA Client Traps When MMC Snap-in Is Chosen During Installation
	- Q182066 Application Exception in PPD5250 When Set Line Density Is Zero
	- Q182139 LUA Pool Cannot Be Assigned to Two TN3270 Servers
	- Q182140 DSPU and PU Passthrough Available in SNA Workstation Product
	- Q182250 Can't Start Multiple Nodes Simultaneously in MMC Snap-in
	- Q182252 HPLJ 4000N Printer Name Missing from Properties Printing Window
	- Q182262 Manager Traps When Switching Domains in 3270 LU Range Wizard
	- Q182265 APPC Display Call Fails With AP_STATE_CHECK (Primary_rc = 0002)
	- Q182266 SNA APPC Event 93 Should Log Fully Qualified PLU Name
	- Q182267 [MC_]ALLOCATE May Return Sense 00000805 Instead of 08050000
	- Q182268 SNA Server Event 60 Should Log Local APPC LU Name
	- Q182269 TN3270 Incorrectly Logs Event 902 - TCPRecv Internal Error
	- Q182303 Twinax Connections Should Be Restricted To Secondary DLC Role
	- Q182331 Default 802.2 DLC Pacing Values May Result In Slow Performance
	- Q182332 SNA Clients Experience Delay Connecting to Multihomed Server
	- Q182374 TN5250 Event ID 16 Error Causing APPC Session To Fail
	- Q182375 API or Message Tracing May Cause SNA Server Process to Hang
	- Q182415 Access Violation with Multiple PU Passthrough Connections
	- Q182421 APPC UserID & Password in CPIC Side Info Converted to Capitals
	- Q182422 Services on SNA Server Are Incorrectly Enumerated
	- Q182531 Problems with the Windows NT Client Configuration Tool
	- Q182544 Host Security: Memory Leaks, Database Corruption, Event Logging
	- Q182564 Maintenance Mode Windows Client Installs to Wrong Directory
	- Q182574 SNA Server Stops Forwarding FMH-5 Attach Messages
	- Q182575 IBM PComm AS/400 Data Transfer Doesn't Display Remote APPC LUs
	- Q182576 NT Client Doesn't Support Dynamic Definition of Invokable TPs
	- Q182577 Dynamic Definition of Dependent APPC LUs Doesn't Work Properly
	- Q182578 MC_CONFIRMED Stops Following what_rcvd=AP_CONFIRM_DEALLOCATE
	- Q182634 BUG: JCL Present in COBOL Import File Causes Error
	- Q182635 BUG: Paste in Label Edit Mode Shows Name Conflict Message Box
	- Q182636 BUG: COMTI Reserved Words Erroneously Allowed for Method Name
	- Q182637 SNA Server Notifies Windows NT Clients of All Invokable TPs
	- Q182638 BUG: Admin: Snap-in Does Not Recognize the Local Machine Name
	- Q182639 Host Security Domain Listed When Installed on NT Workstation
	- Q182640 Application Exception in Snaservr.exe in Function SNPUPUTI
	- Q182641 5250 App Doesn't Support Accelerator Keys from Sign-on Box
	- Q182651 Error Msg. When Editing Properties for Multiple Print Servers
	- Q182652 BUG: Memory Leak When Transactional Method Fails Before Connect
	- Q182653 BUG: Component Builder Title Bar Shows MS-DOS Filename
	- Q182657 SNA Server May Use Max BTU Larger Than Connection Can Support
	- Q182667 BUG: Cannot Use Return Value as OCCURS DEPENDING ON Index
	- Q182668 BUG: Help File Inconsistent with Adv. Method Properties Window
	- Q182678 BUG: COBOL FILLER Generated Incorrectly After Recordset Array
	- Q182683 BUG: Windows Taskbar Unavailable During IMS COBOL Import
	- Q182691 Event 730 Can Return Garbled Characters for Local LU Name
	- Q182703 ODBC Demo for AS/400 Fails with MS Query Version 8.0
	- Q182706 Application Exception in Snaexp.exe After Deleting LUA Pool
	- Q182707 MMC Component Does Not Prompt for Restart After Installation
	- Q182714 StartDoc and OpenPrinter Fail to Return Correct Error Codes
	- Q182832 BUG: Error in COBOL Export After Moving Type Library
	- Q182834 BUG: Missing Error Messages When Using Diagnostic Capture
	- Q182835 BUG: Decimal Type Doesn't Allow Scale for COBOL DISPLAY Types
	- Q182836 BUG: Numeric Edit Fields Allow Non-numeric Input
	- Q182915 3270 Emulator Hangs and Returns X'1003' Error to Mainframe
	- Q183181 BUG: COBOL PIC X(32768) or Larger Causes an Error
	- Q183238 SNARAS Logs Events 101, 102, and 201 When Dialing Out
	- Q183239 Application Exception in Rasman.exe in Function SnaRasUnbind()
	- Q183240 Master and Backup Host Account Databases Not in Sync
	- Q183241 Host Account Cache Database Shows High CPU Utilization
	- Q183548 BUG: Update to Diag. Capture Remote Environment Not Recognized
	- Q183549 BUG: DBCS Parameters Not Allowed When Importing COBOL
	- Q183550 BUG: Administrative Snap-in Allows Duplicate Names of HCD Files
	- Q183552 BUG: SNA DDM Service Terminates
	- Q183553 BUG: OLE DB Hangs Trying to Access Field Over 32,745 Bytes Long
	- Q183554 BUG: Incorrect Error Message When Data Source Is Missing
	- Q183555 BUG: Size Of Dynamic Output Array Always Set to Maximum
	- Q183556 BUG: SNADDM Service Fails If Install Directory Path Is Too Long
	- Q183557 BUG: MVS Invalid Conversion of String Data
	- Q183559 BUG: IDBSchemaRowset::GetSchemas Returns No Information
	- Q183560 BUG: OpenSchema Method Fails for DBSCHEMA_PROVIDER_TYPES
	- Q183561 BUG: Excessive Non-paged Pool Memory At SNA DDM Service Startup
	- Q183562 BUG: No Help File For Microsoft Management Console Snap-in
	- Q183563 BUG: Error Msg: "Invalid Bookmark" Accessing Mainframe Files
	- Q183564 BUG: Start Parameter of Find Method Produces Error Message
	- Q183565 BUG: Underlyingvalue Property Incorrect for Certain Characters
	- Q183566 BUG: Error Message: "Record Not Found" for Certain Dates
	- Q183567 BUG: GetChunk/AppendChunk Error: Not Allowed In This Context
	- Q183568 BUG: CCSID In The Data Source Does Not Override Driver's Value
	- Q183569 BUG: AS/400 RDB Name Cannot Exceed Eight Characters
	- Q183570 BUG: AM/PM Handled Improperly Executing 'Find'
	- Q183571 BUG: Finding a File Keyed By a Timestamp Fails
	- Q183572 BUG: ADO Definedsize Values Incorrect for Certain Data Types
	- Q183573 Report.ASP Fails with SNA 4.0 OLE DB Off-line Demo Script
	- Q183574 BUG: Off-line Demo Script Fails in Non-US Locales
	- Q183575 BUG: IDBSchemaRowset::GetSchemas Returns Inaccurate Information
	- Q183576 BUG: Problems Using Visual Basic Sample Program (ado_vb)
	- Q183577 BUG: Access Violation in Snaoledb.dll File
	- Q183578 BUG: SNA DDM Service Fails to Release Handles
	- Q183791 APPC/CPI-C Program Unexpectedly Hangs Through SNA Server 4.0
	
	
	- Q184549 Service Fails Unexpectedly with Access Violation in s1ppcass()
	- Q184576 SNAPRINT: 3270 Order, Program Tab Randomly Prints Two Spaces
	- Q185446 TN3270 Server LUA Pool Use Should Load Balance Across Servers
	- Q185447 LUA Program Access Violation Occurs If SnaBase Fails to Start
	- Q185448 Dbview Fails to Display SNA Server 4.0 Message Database
	- Q185449 DLC 802.2 Connection Stays Pending After Remote System Restart
	- Q185503 APPC Security Information Sent Even If Host Doesn't Support It
	- Q185540 APPC/5250 Hot Backup Fails If Connection Is Inactive or Pending
	- Q185604 Windows 3.x Client Returns One Local APPC LU Using Display Verb
	- Q185630 3270 Sessions May Hang When Emulator Rejects Host Bind
	- Q185676 FEEDIGNOREINITIAL Option Not Working in Snaprint
	- Q185685 TN5250 Event ID 9 Causes TN5250 Server to Stop Responding
	- Q185687 CPU Utilization Randomly Goes to 100 Percent on SNA Print Server
	- Q185689 Snaserver.exe May Trap in Function S1PXSND()
	- Q185690 SNA Server Manager Not Reflecting Correct Status
	- Q185691 X.25 Link Service May Hang When Using IBM's ARTIC Driver
	- Q185705 TCP/IP Address Changes to NetBIOS Name on Windows 95 SNA Client
	- Q185706 FTP-AFTP Gateway Does Not Work with IIS 4.0
	- Q185707 Allow Assignment of an LU to a User and Workstation
	- Q185710 STOP 0x3F Error When SFGW Fails to Create DBCS Folder
	- Q185711 Stop 0x50 When Shared Folders Gateway (Sffsd.sys) Is Stopped
	- Q185715 CPI-C Side Information Does Not Allow "." (period) in TP Name
	- Q185716 Snalink.exe May Trap If the SNA Server Service Is Autostarted
	- Q185719 Removing Host Security Option Causes Trap in SNA Manager
	- Q185737 TN3270 Server May Cause Dr. Watson Error to Occur
	- Q185743 Performance Monitor Errors When Running on SNA Server 4.0
	
	Additional query words: servpack
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP1 kbSNAServ400SP2
	Version           : WINDOWS:4.0SP1,4.0SP2
	
	=============================================================================
	

{% endraw %}
