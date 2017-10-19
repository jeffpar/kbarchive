---
layout: page
title: "Q233388: SNA Server 3.0 Service Pack 4 Fix List"
permalink: /kb/233/Q233388/
---

## Q233388: SNA Server 3.0 Service Pack 4 Fix List

	Article: Q233388
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP4
	Operating System(s): 
	Keyword(s): kbsna300sp4
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is a current listing of the article numbers for bugs that were
	fixed in SNA Server 3.0 Service Pack 4. Use the Qxxxxxx number that precedes the
	title of the bug fix to query the Microsoft Knowledge Base to find an article
	about that bug.
	
	NOTE: SNA Server service packs are cumulative and contain all fixes included in
	earlier service packs. For example, SNA Server 3.0 Service Pack 4 contains all
	fixes included in SNA Server 3.0 Service Pack 1, 2, and 3. You do not need to
	install an earlier service pack before you install SNA Server 3.0 Service Pack
	4.
	
	For information about bug fixes included in earlier SNA Server 3.0 service packs,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q184296 List of Bugs Fixed in SNA Server 3.0 Service Pack 3
	
	  Q168655 List of Bugs Fixed in SNA Server 3.0 Service Pack 2
	
	  Q165458 List of Bugs Fixed in SNA Server 3.0 Service Pack 1
	
	MORE INFORMATION
	================
	
	  Q180052 SNA Server Access Violation in Function s1pucosp
	  Q180788 Changing User Rights Not Recognized Until Snabase is Restarted
	  Q180862 Single Form Feed Sent by Host on LU3 Print Session Is Ignored
	  Q180864 Print Sessions Stop with Host Print Service
	  Q180865 Print Server Adds Space After Form Feed
	  Q182252 HPLJ 4000N Printer Name Missing from Properties Printing Window
	  Q182264 5250 or 3270 Applet Will Hang When Started
	  Q182268 SNA Server Event 60 Should Log Local APPC LU Name
	  Q182332 SNA Clients Experience Delay Connecting to Multihomed Server
	  Q182374 TN5250 Event ID 16 Error Causing APPC Session To Fail
	  Q182574 SNA Server Stops Forwarding FMH-5 Attach Messages
	  Q182575 IBM PComm AS/400 Data Transfer Doesn't Display Remote APPC LUs
	  Q182577 Dynamic Definition of Dependent APPC LUs Doesn't Work Properly
	  Q182637 SNA Server Notifies Windows NT Clients of All Invokable TPs
	  Q182714 StartDoc and OpenPrinter Fail to Return Correct Error Codes
	  Q182915 3270 Emulator Hangs and Returns X'1003' Error to Mainframe
	  Q183966 SNA PrintServer Fails to Establish Session with Custom Object
	  Q184549 Service Fails Unexpectedly with Access Violation in s1ppcass()
	  Q184576 SNAPRINT: 3270 Order
	  Q185447 LUA Program Access Violation Occurs If SnaBase Fails to Start
	  Q185449 DLC 802.2 Connection Stays Pending After Remote System Restart
	  Q185503 APPC Security Information Sent Even If Host Doesn't Support It
	  Q185540 APPC/5250 Hot Backup Fails If Connection Is Inactive or Pending
	  Q185630 3270 Sessions May Hang When Emulator Rejects Host Bind
	  Q185676 FEEDIGNOREINITIAL Option Not Working in Snaprint
	  Q185685 TN5250 Event ID 9 Causes TN5250 Server to Stop Responding
	  Q185687 CPU Utilization Randomly Goes to 100 Percent on SNA Print Server
	  Q185690 SNA Server Manager Not Reflecting Correct Status
	  Q185710 STOP 0x3F Error When SFGW Fails to Create DBCS Folder
	  Q185715 CPI-C Side Information Does Not Allow "." (period) in TP Name
	  Q185737 TN3270 Server May Cause Dr. Watson Error to Occur
	  Q188238 SNA MngAgent Trap in Function CManage::GetNotify
	  Q188689 Converting From ASCII-EBCDIC Using CPICs CMCNVI and CMCNVO
	  Q188893 SnaBase Hangs When 256th Process Added to Internal Process Table
	  Q188990 Application Exception in Snamanag!CSISend
	  Q188991 5250 Print Session May Be Hung in Stuck State
	  Q189053 SNA Server Access Violation in Function Snaservr!s1prfpda
	  Q189476 SNA Server Error 0352 - Unable To Open Configuration File
	  Q191394 SNA Server Access Violation in Function S1psineg
	  Q191395 SNA Client APPC and RUI/SLI Applications May Seem Slow
	  Q191625 TN3270 Server Rejects Valid BIND with 0821 Sense Code
	  Q192711 Users Unable to Update Their Host Cache Using UDConfig
	  Q192807 SNABase Service Fails to Start on SNA Server
	  Q193487 SNACFG Displays APPC Session Security Key in Clear Text
	  Q193659 SNA Server Access Violation in s1prfrcb()
	  Q193684 APPC/CPI-C Apps May Hang When Allocating LU 6.2 Sessions
	  Q193729 SNA Distributed Link Service Access Violation in sbpbputh()
	  Q193813 Multiple NVRunCmd Commands May Cause Unpredictable Results
	  Q193817 SNA Server Event ID 11 Missing Description Information
	  Q193827 FMH Bit Not Set in Query Reply with Function Management Header
	  Q193986 Enable OtherServers Function In The Firewall Environment
	  Q193988 APPC/CPIC Application May Fail When Using Remote APPC LU Name
	  Q193989 Opening Subdomain in SNA Manager Fails on Every Other Attempt
	  Q194620 I_DOTLESS_SMALL in PDF Always Maps to Space
	  Q194624 TN3270 Server Traps When TN3270 Session Load Is Under 30K
	  Q194630 SnaBase May Get Access Violation if Over 255 TPs in Subdomain
	  Q194763 SNA Print Server PDF Fails to Support Macros Exceeding 127 Chara
	  Q194848 SDLC Connection Fails with Event 23
	  Q194858 SNA Server Manager Shows Incorrect Status For Print Sessions
	  Q194932 Implicit Incoming Remote LU Cannot Be Set to None with SNACFG
	  Q194933 Problems Displaying Underscored Greek Characters in 3270 Applet
	  Q195012 Queued 3270 Print Jobs May Intermittently Print Incorrectly
	  Q195063 Common User ID Problem when Using Associated Printer Feature
	  Q195121 SNA Server Fails With Access Violation in S1pnsuns()
	  Q195125 Stopping MngAgent Service May Cause Trap in Mngcli.exe
	  Q195165 SNA Print Server FMH5 ATTACH PIP Data is Corrupted
	  Q195166 NVAlert Service Logs Event 3006(ReadEventLog Returns 122)
	  Q195167 SLI Application Fails with LUA_DATA_SEG_LENGTH_ERROR
	  Q195168 SNACFG Doesn't Output Complete Data for the ADDPARTNER Option
	  Q195169 NvRunCmd Hangs When it Receives Data with a Certain Length
	  Q195170 SNA Server Sends an Incorrect Sequence Number in BIND Response
	  Q195354 LU3 Print Sessions Don't Support Transparent Print Sections
	  Q195399 SNA Print Service Access Violation in S3pcsctl()
	  Q195401 ACTPU(ERP)/ACTLU(ERP) Requests Not Sent To Downstream Systems
	  Q195402 Absolute Vertical Move Command Handled Incorrectly if PDT Used
	  Q195746 Print Server Sends a Continuous Stream of Formfeeds to Printer
	  Q195747 Implicit Incoming LU Not Used After Saving Configuration Change
	  Q195770 Print Margins Not Properly Configured When Using SNACFG.EXE
	  Q195771 Print Server Uses 100% CPU If No Line Formatting Option Enabled
	  Q195818 Windows NT 4.0 SP4 Breaks SNA Encrypted Client Connectivity
	  Q195945 Traced version of the x.25 link service doesn't provide output
	  Q195987 Snatrace Won't Start if "Background Thread" = "Below normal"
	  Q195996 SNA Server Incorrectly Handles Cancelled Allocate Requests
	  Q195997 Strict "No Response" Protocol Check Causes TN3270 Session Hang
	  Q196000 SNA Print Server Rejects FMH-1 With Sense Code 1005
	  Q196037 AFTP Server Displays Incorrect Date for Files after 1999
	  Q196038 Date Subvector of NVAlert Major Vector Incorrectly Set in Yr 2K
	  Q196077 SNARAS Ports Become Unavailable after Network Outage
	  Q196079 API Tracing May Cause Access Violation With CMETPN() Function
	  Q196237 SDLC Multiport Connection Only Works with One DSPU at a Time
	  Q196238 SNARAS Goes Into Infinite Loop When Invalid Msg Type Is Received
	  Q196239 SNA Client for Windows NT Hangs When Receiving PID > '0x8000'
	  Q196240 Characters Above 127 Were Incorrectly Mapped By NvRunCmd
	  Q196242 SNA Print Server May Leak Memory
	  Q196243 Host Print Sessions Using GDI May Stop Printing
	  Q196298 Characters May Print Over Each Other When Using Print Server
	  Q196392 MngAgent Access Violation In Function CStdAgentProxy::SetPending
	  Q196571 NVRunCmd Does Not Return More Than 32 KB of Data Per Command
	  Q196604 SNA Server Manager May Not Find Subdomain When Started
	  Q197085 Heap Corruptions Cause Access Violations in SNA Server and SnaBa
	  Q197436 Remote Link Service Does Not Answer Incoming Calls
	  Q197437 Print Server Data Filter DLL causes Access Violation in SNAPRINT
	  Q197629 SLI Application Fails With LUA_RESERVED_FIELD_NOT_ZERO
	  Q197903 Access Violation in SNASERVR!SNPUGETI if Invalid Frame Received
	  Q198180 Unable to Correlate SLI_OPEN Request With SLI BIND Routine
	  Q198398 Access Violation in Snalink.exe Activating Numerous Connections
	  Q214491 SNA Server Access Violation in Function S1PWHSES()
	  Q214521 Multithreaded SLI Application May Deadlock within WINSLI32.DLL
	  Q214571 Duplicate Remote APPC LUs Can Be Created On A Connection
	  Q214614 APPC Application Works on SNA 2.11
	  Q214656 Absolute Horizontal Move Command Handled Incorrectly if PDT Used
	  Q216047 Activating Numerous DLC Connections Results in Inactive LUs
	  Q216558 Recycling Server Causes Invalid RPC Binding for Host Security
	  Q216711 After SDLC Outage
	  Q216713 SNA Server Access Violation in S1PXSND
	  Q218165 WAPPC32 Ignores User ID Provided By APPC App On Consecutive Allo
	  Q218170 APPC Application Receives AP_ALLOCATION_FAILURE_RETRY In Error.
	  Q218178 Access Violation in SNASERVR!SNPUGETC
	  Q222119 SNA Server Fails With Event 686 Using Persistent Verification
	  Q222121 Enhanced Security When Using Persistent Verification
	  Q224303 SNA Server Allows Range of IP Ports w/Distributed Link Service
	  Q229636 NvRunCmd Terminates if SNA Application Internal Trace Is Enabled
	  Q229719 NvRunCmd Passes Wrong Data When Certain Programs Are Started
	  Q229727 Display Problems Occur with NvRunCmd
	
	Additional query words: servpack
	
	======================================================================
	Keywords          : kbsna300sp4 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0SP4
	Issue type        : kbinfo
	
	=============================================================================
	
