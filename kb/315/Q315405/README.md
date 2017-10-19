---
layout: page
title: "Q315405: SEND State Error When Using ODBC/OLEDB DB2 Providers with Two-Ph"
permalink: /kb/315/Q315405/
---

## Q315405: SEND State Error When Using ODBC/OLEDB DB2 Providers with Two-Ph

	Article: Q315405
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): Kbhostintegserv2000
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COM+ components that use ActiveX Data Objects (ADO) and connection pooling to do
	two-phase commit (2PC) transactions with either the Open Database
	Connectivity(ODBC) Driver for DB2 or with OLE DB provider for DB2 (DB2OLEDB) may
	receive the following SEND state error under load:
	
	  -2147567259
	  [Microsoft][ODBC DB2 Driver][DB2EDP] The conversation was not in SEND state.
	  Microsoft OLE DB Provider for ODBC Drivers
	
	CAUSE
	=====
	
	The underlying code that implements the 2PC transactions has a timing problem,
	which can become evident under load. During the timing problem, a transaction is
	marked as complete and is returned to the connection pool. However, all of the
	Syncpoint commands have not yet finalized the transaction on the host system. If
	another client uses this connection again before the Syncpoint commands have
	completed, the error occurs.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Product Name service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel:
	
	  Date         Time   Version             Size   File name
	  --------------------------------------------------------------
	  03-Jun-2002  12:33  5.0.0.836         221,456  Wappc32.dll
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable either ODBC Connection pooling or OLE DB
	Resource pooling, depending on which technology is being used by the COM+
	component.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	If you examine the DB2APIx.atf trace file to find the symptoms, you see that the
	DB2 provider that is in use tries to issue a distributed data management (DDM)
	architecture command, which results in a STATE_CHECK error response:
	
	APPC  ----------------------------------------------- 12:48:35.0234
	APPC  SEND_DATA request
	APPC
	APPC  Type:Sync                                  VerbID:013D4002
	APPC
	APPC  ---- Verb Parameter Block at address 0148EDC0 ----
	APPC  0F000000 00000000 00000000 02000000     <................>
	APPC  10AF1D01 70501601 00004E00 5A00EB0E     <....pP....N.Z...>
	APPC  00000000                                <....            >
	APPC  ---- Data at address 0EEB005A ----
	APPC  004ED051 00010048 200A0044 2113C4C2     <.N.Q...H ..D!.DB>
	APPC  F2C5C4D7 40404040 40404040 40404040     <2EDP@@@@@@@@@@@@>
	APPC  C4C2F2E2 C1D2C9E2 40404040 40404040     <DB2AARON@@@@@@@@>
	APPC  4040D4E2 E4D9F0F0 F1404040 40404040     <@@MSAMG01@@@@@@@>
	APPC  40404040 F5F0F0F0 F0F0F0F2 0001         <@@@@50000002..  >
	APPC  ----------------------------------------------- 12:48:35.0234
	APPC  SEND_DATA response, result = STATE_CHECK
	APPC
	APPC  Type:Sync                                  VerbID:013D4002
	APPC
	APPC  ---- Verb Parameter Block at address 0148EDC0 ----
	APPC  0F000000 00020000 000000F2 02000000     <...........2....>
	APPC  10AF1D01 70501601 00004E00 5A00EB0E     <....pP....N.Z...>
	APPC  00000000                                <....            >
	
	You can also identify this problem by looking up the return codes in the Host
	Integration Server (HIS) 2000 SDK. Note the following:
	
	- A primary return code of 0x0002 indicates AP_STATE_CHECK.
	- A secondary return code of 0x000000F2 indicates AP_SEND_DATA_NOT_SEND_STATE.
	
	Although the last request that was issued by the DB2 provider was a
	RECEIVE_AND_POST request, the final asynchronous response has not yet been
	received. You can see this by following the APPC Conversaton ID in the trace:
	
	APPC  ----------------------------------------------- 12:48:35.0218
	APPC  RECEIVE_AND_POST request
	APPC
	APPC  Type:Sync                                  VerbID:013B4002
	APPC
	APPC  ---- Verb Parameter Block at address 01122AE8 ----
	APPC  0D000000 00000000 00000000 02000000     <................>
	APPC  10AF1D01 70501601 00000101 00000002     <....pP..........>
	APPC  00000000 84FDA70E FEFFFFFF 00000000     <....d.x.........>
	APPC  ----------------------------------------------- 12:48:35.0218
	APPC  RECEIVE_AND_POST response, result = OK
	APPC
	APPC  Type:Sync                                  VerbID:013B4002
	APPC
	APPC  ---- Verb Parameter Block at address 01122AE8 ----
	APPC  0D000000 00000000 00000000 02000000     <................>
	APPC  10AF1D01 70501601 00040101 00000002     <....pP..........>
	APPC  00000000 84FDA70E FEFFFFFF 00000000     <....d.x.........>
	
	The correct final response, which is the Syncpoint Forget command from the host,
	is received almost immediately after the SEND_STATE error occurs, therefore
	demonstrating the timing problem:
	
	APPC  ----------------------------------------------- 12:48:35.0250
	APPC  RECEIVE_AND_POST response, result = OK
	APPC
	APPC  Type:Async   Method:Post   Hwnd:FFFFFFFE   VerbID:013B4002
	APPC
	APPC  ---- Verb Parameter Block at address 01122AE8 ----
	APPC  0D000000 00000000 00000000 02000000     <................>
	APPC  10AF1D01 70501601 01020101 00000002     <....pP..........>
	APPC  06000000 84FDA70E FEFFFFFF 00000000     <....d.x.........>
	APPC  ---- Data at address 0EA7FD84 ----
	APPC  0001040A 0008                           <......          >
	
	For more information about DDM commands, see the documentation on the following
	The Open Group Web site:
	
	  Database Interoperability Consortium
	  http://www.opengroup.org/dbiop/
	
	For more information about Syncpoint and 2PC with IBM host systems, see the
	following IBM documentation:
	
	  Sync Point Services Architecture Reference
	  IBM document number SC31-8134-00
	
	Additional query words:
	
	======================================================================
	Keywords          : Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
