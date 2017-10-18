---
layout: page
title: "Q151227: IBM CA/400 ODBC Driver Result in Communication Link Failure"
permalink: kb/151/Q151227/
---

## Q151227: IBM CA/400 ODBC Driver Result in Communication Link Failure

	Article: Q151227
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the IBM Client Access/400 ODBC driver V3r1m1 on the SNA Server 2.11
	Windows 3.x client, you may get the following error message:
	
	  [IBM] [Client Access/400 ODBC v2 Driver]
	  [DBC/400 SQL] Communication Link Failure
	  APPC RC=0x1c
	
	
	CAUSE
	=====
	
	IBM has defined a new mode called QSERVER when you use their CA/400 ODBC driver.
	The following SNA Server Window 3.x client APPC API trace shows the ALLOCATE
	request where mode QSERVER is being sent and a PARAMETER_CHECK /
	AP_UNKNOWN_PARTNER_MODE error being returned by the SNA Server Windows APPC
	interface.
	
	| 69.59 APPC   ---------------------------------------------- 08:38:21.67
	| 69.59 APPC   ALLOCATE request
	| 69.59 APPC
	| 69.59 APPC   Type:Sync                                  VerbID:0000143F
	| 69.59 APPC
	| 69.59 APPC   ---- Verb Parameter Block at address 1A9F:97B6 ----
	| 69.59 APPC   01000000 00000000 00000F00 01005D16     <..............].>
	| 69.59 APPC   FF2C3B5A FF2C0000 00000000 00000000     <.,;Z.,..........>
	| 69.59 APPC   00000000 52454D4F 54452020 D8E2C5D9     <....REMOTE  QSER>
	| 69.59 APPC   E5C5D940 D8C9E6E2 61D8E9C4 C1C9D5C9     <VER@QIWSaQZDAINI>
	| 69.59 APPC   E3404040 40404040 40404040 40404040     <T@@@@@@@@@@@@@@@>
	| 69.59 APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	| 69.59 APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	| 69.59 APPC   40404040 02000000 00000000 00000000     <@@@@............>
	| 69.59 APPC   C2D3C9C3 F0F54040 4040D4C3 C3D6D5C5     <BLIC05@@@@MCCONE>
	| 69.59 APPC   C8C44040 00000000 00000000 00000000     <HD@@............>
	| 69.59 APPC   00000000 00000000 00000000 00000000     <................>
	| 69.59 APPC   00000000                                <....            >
	| 69.59 APPC   ---------------------------------------------- 08:38:21.72
	| 69.59 APPC   ALLOCATE response, result = PARAMETER_CHECK
	| 69.59 APPC
	| 69.59 APPC   Type:Sync                                  VerbID:0000143F
	| 69.59 APPC
	| 69.59 APPC   ---- Verb Parameter Block at address 1A9F:97B6 ----
	| 69.59 APPC   01000000 00010000 00180F00 01005D16     <..............].>
	| 69.59 APPC   FF2C3B5A FF2C0000 00000000 00000000     <.,;Z.,..........>
	| 69.59 APPC   00000000 52454D4F 54452020 D8E2C5D9     <....REMOTE  QSER>
	| 69.59 APPC   E5C5D940 D8C9E6E2 61D8E9C4 C1C9D5C9     <VER@QIWSaQZDAINI>
	| 69.59 APPC   E3404040 40404040 40404040 40404040     <T@@@@@@@@@@@@@@@>
	| 69.59 APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	| 69.59 APPC   40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	| 69.59 APPC   40404040 02000000 00000000 00000000     <@@@@............>
	| 69.59 APPC   C2D3C9C3 F0F54040 4040D4C3 C3D6D5C5     <BLIC05@@@@MCCONE>
	| 69.59 APPC   C8C44040 00000000 00000000 00000000     <HD@@............>
	| 69.59 APPC   00000000 00000000 00000000 00000000     <................>
	| 69.59 APPC   00000000                                <....            >
	
	RESOLUTION
	==========
	
	You can define or add the QSERVER mode on the SNA Server as outlined in step 2
	under Steps for Adding the QSERVER mode.
	
	For additional information on setting up CA/400 to work over the SNA Server 2.11
	Windows 3.x client, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q135318 How to Setup IBM CA/400 to Work Over the SNA 2.11 Win 3.x Client
	
	MORE INFORMATION
	================
	
	The IBM Client Access/400 ODBC driver enables applications to access data in an
	AS/400 database through the Open Database Connectivity (ODBC) interface. This
	driver specifies an APPC mode name of "QSERVER" that is not configured by
	default in SNA Server 2.11, causing the above error to occur. Manually adding
	this mode name to the SNA Server configuration solves the problem.
	
	The IBM Client Access ODBC driver uses the following parameters when
	communicating over the SNA Server Windows 3.x client.
	
	APPC Local LU
	-------------
	
	The APPC Local LU alias is configured in the SNA Server EHNAPPC interface, in the
	following location:
	
	  WIN.INI
	  [SnaServerEHNAPPC]
	  LocalLU = <LocalLU>
	
	
	APPC Mode Name = QSERVER
	------------------------
	
	When you use the IBM ODBC driver, it will always specify a mode name of QSERVER.
	It will not use any other mode name including QPCSUPP.
	
	Because SNA Server versions 2.0, 2.1, 2.11, and 2.11.sp1 does not recognize the
	QSERVER mode name by default, you can configure SNA Server to support the
	QSERVER mode by adding and then partnering it with the local and remote LU
	aliases being used on SNA Server.
	
	
	Steps for Adding the QSERVER Mode
	---------------------------------
	
	1. You can add the QSERVER mode on either the local or remote LU. After you
	  select either the local or remote LU, click the Partners button.
	
	2. In the LU6.2 Partner LUs dialog box, click the Modes button and select the
	  existing mode name.
	
	3. In the Mode Name dialog box, type in "QSERVER" (without the quotation marks).
	  The following parameters will vary depending upon how the AS/400 is
	  configured for this mode. Check with your local AS/400 Administrator for
	  configuration details. A typical configuration will be similar to the
	  following:
	
	  Mode Name: QSERVER
	  Comments: QSERVER Mode for AS/400
	  Parallel Session Limit: 8
	  Minimum Contention Winner Limit: 4
	  Partner Min Contention Winner Limit: 0
	  Automatic Activation Limit: 0
	  Max Send/Receive RU Size: 4096
	  All other fields can be left as default.
	
	APPC Remote LU Name
	-------------------
	
	The APPC Remote LU name = configured in IBM CA ODBC configuration as the System
	Name.
	
	A typical Odbc.ini file may be similar to the following, where the System
	parameter specifies the APPC Remote LU name:
	
	     [JDET for CA/400]
	     Driver=c:\cawin\ehnodbc3.dll
	     Description=Client Access/400 ODBC Driver
	     System=REMOTE
	     UserID=MONTEB
	     CommitMode=0 ; *NONE (Commit Immediate)
	     DefaultLibraries=JDET
	     Naming=0 ; *SQL  (SQL Naming Convention .)
	     DateFormat=5 ; *ISO (date format yyyy-mm-dd)
	     DateSeparator=1 ; *Date separator -(dash)
	     TimeFormat=0 ; *HMS (time format hh:mm:ss)
	     TimeSeparator=0 ; *Time separator :(colon)
	     Decimal=0 ; *Decimal format .(period)
	     ExtendedDynamic=1 ; *Extended dynamic enabled
	     RecordBlocking=2 ; *Block except for FOR UPDATE OF specified
	     BlockSizeKB=32  ; *Blocking size from 1 to 512 KBytes
	     LazyClose=1 ; *LazyClose enabled
	     LibraryView=0 ; *Library list
	     ForceTranslation=0 ; *No translate for CCSID 65535
	     ODBCRemarks=0 ; *OS/400 object description
	     AlwaysScrollable=0 ; *No scrollable cursor if row set is 1
	     PackageSQLIBM=QGPL/SQLIBM(FBA),2,0,1
	     IsolationLevel=0
	     PackageMSQUERY=QGPL/MSQUERY(FBA),2,0,1
	
	KBCategory: kb3rdparty kbinterop
	KBSubcategory: snaprod
	
	Additional query words: host
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbprb
	
	=============================================================================
	
