---
layout: page
title: "Q59584: OS/2 Days Seminar: Misc. Communications Server Questions"
permalink: kb/059/Q59584/
---

## Q59584: OS/2 Days Seminar: Misc. Communications Server Questions

	Article: Q59584
	Product(s): Microsoft LAN Manager
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- DCA/Microsoft Communications Server, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OS/2 Days Developer's Conference DCA/Microsoft Communication Server
	
	Questions and Answers Follow-Up Responses
	-----------------------------------------
	
	1. Why is user security data stored in the COM.SEC file? This makes it possible
	  to compromise security by taking the file to another machine. According to
	  the customer, this scheme matches the implementation under IBM EE
	  Communication Manager.
	
	  Answer
	
	  The ability to compromise APPC conversation security requires an APPC
	  Transaction Program (TP) to know the user ID and password when issuing an
	  [MC_]ALLOCATE request to initiate a conversation. Ultimately, the Comm Server
	  administrator must prevent unauthorized access to this file through either of
	  the following:
	
	   - Physical security (limiting physical access to the server machine).
	
	   - Using the LAN Manager 2.00 Local Security feature to limit unauthorized
	     local access to server-based files. This also prevents access to the file
	     when booting the server from a floppy disk.
	
	2. How does Comm Server perform load balancing with LU pools that span multiple
	  connections? Does load balancing only relate to session balancing, or does
	  network traffic play any part in the balancing scheme?
	
	  Answer
	
	  Comm Server allows an administrator to define a pool of 3270 LUs that may span
	  multiple host connections. In this case, one or more Comm Server machines
	  (residing on the same LAN) are supporting more than one link to one or more
	  IBM host machines. If a Comm Server client is configured to have access to
	  the LU pool and a user activates a 3270 session associated with the pool, the
	  Comm Server client machine will randomly select a connection to use.
	
	  While this random selection method for 3270 LU load balancing is very
	  rudimentary under Comm Server 1.00, this will be modified under future
	  versions of the Comm Server to provide more reliable LU load balancing.
	  Factors that are being considered to improve the load balancing algorithms
	  include: link traffic volume, server utilization, server CPU type and clock
	  rate, server LAN I/O performance, and host adapter type.
	
	3. Why isn't Comm Server set up as a LAN Manager service like SQL server?
	
	  Answer
	
	  The LAN Manager Service facility does not currently provide the amount of
	  detailed control required to fully implement Comm Server as a LAN Manager
	  service. Note that SQL Server is implemented as a single LAN Manager service,
	  not as multiple distributed services that require specialized managing
	  facilities that Comm Server supports. This idea was considered in the early
	  design phases of the product, and is still under consideration for future
	  versions of LAN Manager.
	
	  Through the "COMM" command, an effort has been made to manage Comm Server
	  services similar to the way the NET command works under LAN Manager. For
	  example:
	
	      Command                Description
	      -------                -----------
	
	      comm start <service>   Starts a Comm Server service on the
	                             local machine, where <service> is the
	                             name of a Comm Server node or link
	                             service. This includes the Comm Server
	                             network access program (NAP), which is
	                             referred to as the Comm Server
	                             Workstation service (for clients) and
	                             the Server service (for servers).
	
	      comm stop <service>    Stops a Comm Server service on the local
	                             machine.
	
	      comm view              Displays all active Comm Server services
	                             on the LAN (on all Comm Server server
	                             machines).
	
	      comm manage            Start the Comm Server MANAGE interface.
	
	      comm config            Start the Comm Server CONFIGURATION
	                             interface.
	
	      comm browse            Start the Comm Server BROWSE interface.
	
	4. Will Comm Server include any tools to monitor overall throughput performance
	  and session load? The intention here is to provide tools to help an
	  administrator fine-tune performance, or identify potential bottlenecks so
	  that software and/or hardware reconfiguration could lead to increased
	  performance.
	
	  Answer
	
	  The Comm Workstation/Server already supports a full range of Link Tracing,
	  Error and Audit logging messages, and client session monitoring/control
	  facilities provided by the MANAGE utility. While statistical data for
	  throughput analysis is not available in version 1.00, this information can be
	  retrieved at the IBM host using Netview. Microsoft welcomes any comments you
	  have regarding additional tools that that you would like to be included in
	  the Comm Workstation/Server products.
	
	5. How much memory will be left over for DOS applications, once the necessary
	  Comm Server client software is loaded?
	
	  Answer
	
	  This subject is fairly complicated, since the Comm Server DOS client software
	  includes different modules that allow a customer to optimize memory usage
	  depending on the desired functionality at the workstation. For example, there
	  are three versions of the 3270 Emulator (DOS3270S, DOS3270M, DOS3270L) and
	  two versions of the Comm Server Network Access Program (MINNAP, COMXNAP). The
	  following is a brief description of these different modules:
	
	      Module       Description
	      ------       -----------
	
	      DOS3270S     Supports up to five display sessions. Doesn't
	                   support API interface. Only requires MINNAP to
	                   interface to Comm Server. Doesn't support file
	                   transfer options.
	
	      DOS3270M     Supports up to five display sessions, including
	                   API support. Requires COMXNAP. Supports file
	                   transfer, but this requires extra memory.
	
	      DOS3270L     Supports up to five display and printer sessions,
	                   including API support. Requires COMXNAP. Supports
	                   file transfer, but this requires extra memory.
	
	      MINNAP       Limited-function Comm Server Network Access
	                   Program for the DOS client. Only supports
	                   DOS3270S. Doesn't support the DOS client APIs.
	
	      COMXNAP      Full-function Comm Server Network Access Program
	                   for the DOS client. Includes support for APIs and
	                   3270 emulators.
	
	  The following are PRELIMINARY memory usage estimates for different scenarios.
	  Note that these estimates do not include potential memory savings by using
	  64K of expanded memory. DOS LAN Manager 2.00 numbers reflect debug version
	  memory use, which will decrease when the final version is shipped. Also,
	  these estimates assume that the DOS client is only attached to one LAN, and
	  is using Microsoft's NETBEUI protocol over Token Ring.
	
	  Estimated Base Memory Requirements
	  ----------------------------------
	
	       DOS Operating System  ....................  50K  (Minimum DOS 3.30)
	       Enhanced DOS LAN Manager 2.00 ............  60K *
	       DOS LAN Manager Transport & MAC Driver ...  36K
	                                                  ----
	             Estimated Base Memory Requirements = 146K
	
	        * Preliminary version, using minimum settings and without use
	          of high memory.
	
	  Memory Usage Under Different Scenarios
	  --------------------------------------
	
	  a. One DOS 3270 display emulation session, no API support:
	
	         Estimated Base Memory Requirements ....... 146K
	         MINNAP (limited-function NAP) ............  27K
	         DOS3270S (small emulator) ................ 103K
	                                                    ----
	                                            Total = 276K
	
	  b. One DOS 3270 display emulation session with API support:
	
	         Estimated Base Memory Requirements ....... 146K
	         COMXNAP (full-function NAP) ..............  40K
	         DOS3270M (medium emulator) ............... 121K
	                                                    ----
	                                            Total = 307K
	
	  c. Three DOS 3270 display emulation sessions and two printer sessions,
	     including API support and one 3270 Model 2 file transfer session active:
	
	         Estimated Base Memory Requirements ....... 146K
	         COMXNAP (full-function NAP) ..............  40K
	         DOS3270L (large emulator) ................ 263K
	         One file transfer session ................  47K
	                                                    ----
	                                            Total = 493K
	
	  d. APPC API support, with no 3270 functionality:
	
	         Estimated Base Memory Requirements ....... 146K
	         COMXNAP (full-function NAP) ..............  40K
	                                                    ----
	                                            Total = 186K
	
	6. Comm Server 1.10: Will future LU0 support include support for a DOS client?
	
	  Answer
	
	  This is recognized as a valuable extension of the Comm Server/Workstation
	  product for possible inclusion in a future release. While LU0 support has not
	  been formally added to the list of version 1.10 enhancements, Microsoft is
	  planning support for both high-level and low-level LU0 interfaces (known as
	  LUA in the IBM EE 1.2 product) for DOS and OS/2 clients.
	
	7. Comm Server 1.10: Will the 3270 Presentation Manager (PM) client include
	  clipboard (cut-and-paste) capability?
	
	  Answer
	
	  Yes, this is included in Comm Server/Workstation version 1.10.
	
	8. Comm Server 1.10: Will LAT support be included? This is required to support
	  Ethernet communication with DEC/VAX environments.
	
	  Answer
	
	  This is recognized as a valuable extension of the Comm Server/Workstation
	  product for possible inclusion in a future release. However, LAT support has
	  not been formally added to the list of version 1.10 enhancements.
	
	9. Comm Server 1.10: Will IBM 5250 terminals be supported?
	
	  Answer
	
	  This is recognized as a valuable extension of the Comm Server/Workstation
	  product for possible inclusion in a future release. However, IBM 5250 support
	  has not been formally added to the list of 1.10 enhancements.
	
	10. Comm Server 1.10: Will DEC VT100 Async Emulation be supported?
	
	  Answer
	
	  Yes, Comm Server/Workstation version 1.10 will include asynchronous terminal
	  emulation support for the following terminal types:
	
	  DEC VT52, VT100, VT200 and VT220
	  IBM 3101/20 and 3101/40
	  TTY Emulation
	
	11. What releases of OS/2, LAN Manager, and SQL Server are compatible with each
	  other?
	
	  Answer
	
	  Please note the product compatibility matrix below. This matrix identifies
	  different releases of OS/2, LAN Manager, SQL, and Comm Server version
	  compatibilities. Additional information is provided below for certain
	  product versions. With the exception of the "NDK" and "SDK" programs (which
	  have been discontinued by Microsoft), these products are only available
	  through OEM vendors.
	
	                      LAN           SQL         DCA/MS        DCA/MS Comm
	                      Manager       Server      Comm Server   Workstation
	                      -------       ------      -----------   -----------
	
	   OS/2 1.00 SA *     SQL NDK,      SQL NDK,     -             -
	                      1.00,         1.00
	                      SDK 1.07,
	
	   OS/2 1.10          1.00,         1.00         -             -
	                      SDK 1.07
	
	   OS/2 1.10 SA *     1.01, 1.01+   1.00         -             -
	
	   IBM OS/2 1.20 SE   (1)            -           -             -
	
	   OS/2 1.20 (2)      2.00 (3)      (4)         1.00 (5)      1.00 (6)
	
	  * Standard releases of OS/2 1.00 and 1.10 did not support the anticipated
	  capacity requirements of the LAN Manager server and SQL database software
	  products at the server. To overcome some of these limitations, the LAN
	  Manager/SQL releases include a special version of the OS/2 kernel referred
	  to as "OS/2 Server Adaptation" (SA) for OS/2 versions 1.00 and 1.10. The
	  "Server Adaptation" releases were discontinued after the LAN Manager 1.01
	  release, since OS/2 file system capacity has been significantly enhanced in
	  OS/2 versions 1.20 and later.
	
	  LAN Manager/SQL Releases
	  ------------------------
	
	      Release      Description
	      -------      -----------
	
	      SQL NDK      Microsoft's Network Development Kit (NDK) release
	                   for SQL Server. This release included OS/2 1.00
	                   Server Adaptation, LAN Manager 1.00, and an SQL
	                   Server Beta release. The NDK program has been
	                   discontinued by Microsoft.
	
	      SDK 1.07     Microsoft's Software Development Kit release for
	                   LAN Manager. This release included OS/2 1.00
	                   Server Adaptation and LAN Manager 1.00. The SDK
	                   program has been discontinued by Microsoft.
	
	      SQL 1.00     The official SQL Server 1.00 retail version was
	                   released by Ashton-Tate, which was newer than the
	                   SQL Beta version distributed by Microsoft with the
	                   SQL NDK.
	
	      LM 1.00      Microsoft LAN Manager 1.00 release to OEM
	                   customers only. This version was also included in
	                   Microsoft's SDK 1.07 package for software
	                   developers.
	
	      LM 1.01      Microsoft LAN Manager 1.01 release to OEM
	                   customers only. This release included OS/2 1.10
	                   Server Adaptation and LAN Manager 1.01.
	
	      LM 1.01+     Microsoft LAN Manager 1.01 update release to OEM
	                   customers only. This release included some bug
	                   fixes to the LM 1.01 release.
	
	  a. IBM OS/2 1.2 Standard Edition does not provide the necessary support for
	     any version of LAN Manager. Since OS/2 1.2 includes support for
	     installable file systems (IFS), LAN Manager 1.0x versions will not operate
	     on this version. An upcoming version of LAN Manager (version 2.00), which
	     is implemented as an IFS, is designed to run on an upcoming version OS/2
	     1.2, but not earlier versions.
	
	  b. Microsoft has not completed certification of this product (as of March 14,
	     1990), so it is not available through OEM vendors. OS/2 1.2 Standard
	     Edition is available from IBM, corresponding to the most recent Corrective
	     Service Distribution (CSD) release.
	
	  c. Microsoft has not released LAN Manager 2.00 to OEM customers (as of March
	     14, 1990). LAN Manager 2.00 will require the version of OS/2 1.2 referred
	     to in Item 2 above.
	
	  d. This new version of SQL Server, which will be available through
	     Ashton-Tate, has not been released yet (as of March 14, 1990). This
	     release will require the version of OS/2 1.2 referred to in Item 2 above
	     and LAN Manager 2.00 referred to in Item 3 above.
	
	  e. Microsoft and DCA have not completed certification of this product (as of
	     March 14, 1990), so it is not available through DCA or OEM vendors. Comm
	     Server 1.00 requires LAN Manager version 2.00.
	
	  f. Microsoft and DCA have not completed certification of this product (as of
	     March 14, 1990) so it is not available through DCA or OEM vendors. Comm
	     Workstation 1.00 requires OS/2 1.20, but not LAN Manager.
	
	Additional query words: 1.00 prodcs
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbSNAServSearch kbDCAMSCommServ
	Version           : :1.0
	
	=============================================================================
	
