---
layout: page
title: "Q182656: New Security Feature in SNA 4.0 May Prevent Access to APPC LUs"
permalink: kb/182/Q182656/
---

## Q182656: New Security Feature in SNA 4.0 May Prevent Access to APPC LUs

	Article: Q182656
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, a remote APPC LU that is correctly defined in SNA Server Manager
	may not be visible to a transaction program (TP) requesting use of the APPC LU.
	The APPC LU may post Event an 93 in the Windows NT system event log (for
	example, 5250 emulator), indicating that the local conversation failed to start
	successfully.
	
	You may observe other symptoms too, such as an application message indicating
	that the remote LU name specified for the session is invalid or not known to the
	TP.
	
	CAUSE
	=====
	
	The APPC LU access permission has been enabled in SNA Server Manager, but the
	APPC remote LU has not been explicitly assigned to the user or group.
	
	MORE INFORMATION
	================
	
	With SNA Server version 4.0 and later, it is possible to provide user level
	security permissions to all LU types defined (for example, 3270, LUA, and APPC).
	Previous versions of SNA Server did not allow user-level access permissions to
	be applied to APPC and LUA LUs; only 3270 LUs had this capability.
	
	Users and applications will have the appropriate permissions to use all remote
	APPC LU resources defined in the SNA Server subdomain by default because the
	APPC LU security featured is disabled. If an SNA Server administrator enables
	the APPC LU security feature in SNA Server Manager, then all users will be
	*denied* access to *all* remote APPC Lus, unless the LUs are explicitly assigned
	to the user. This behavior is similar to the way that 3270 display LUs have
	traditionally operated in SNA Server.
	
	An SNA Server administrator can adjust LU security settings for the SNA Server
	subdomain by using the SNA Server Manager utility and selecting the security tab
	for the subdomain properties. A list of LU types (3270, LUA, APPC) will be
	presented, indicating the current security settings. By default, APPC and LUA
	will be unchecked.
	
	For more details concerning security and rights assignment, please see the online
	Help information.
	
	The following trace fragment is an LU6.2 message trace that details the message
	activity between the client TP and SNA Server. An application that fails to
	access a remote TP because of security permissions will fail with following
	return qualifier(s):
	
	----------------------------------------------- 07:27:16.0712
	081F0001->01020000 OPEN  LU62 REQUEST
	
	---- Header at address 015C4724, 2 elements ----
	01240000 1D000000 0000AC58 01003301     <.$.........X..3.>
	
	---- Element at address 01FB2918, start 1, end 80 ----
	00000000 00000000 00000000 00000000     <................>
	00000000 01000000 00000002 4C4F4341     <............LOCA>
	4C202020 5448494E 47202020 D8D7C3E2     <L   THING   QPCS>
	E4D7D740 00000000 00000000 00000000     <UPP@............>
	00000000 00000000 00000000 603C2500     <............`<%.>
	
	---- Element at address 01FBEF90, start 1, end 127 ----
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 000000       <............... >
	----------------------------------------------- 07:27:17.0363
	01020000->081F0001 OPEN  LU62 RSP ERROR
	                  Err1:0000 Err2:0004
	
	---- Header  at address 015C4724, 2 elements ----
	03240000 1D000000 0004AC58 01003301     <.$.........X..3.>
	
	---- Element at address 01FB2918, start 1, end 80 ----
	00000000 00000000 00000000 00000000     <................>
	00000000 01061300 00000002 4C4F4341     <............LOCA>
	          ^^^^
	4C202020 5448494E 47202020 51504353     <L   THING   QPCS>
	55505020 00000000 00000000 00000000     <UPP ............>
	00000000 00000000 00000000 603C2500     <............`<%.>
	
	---- Element at address 01FBEF90, start 1, end 89 ----
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00000000 00000000 00000000     <................>
	00000000 00060814 00                    <.........       >
	
	The 0613 above suggests a parameter check with a bad remote LU alias specified by
	the TP. This error message would, in fact, be accurate for this particular
	problem, because the security credentials under which the TP is running do not
	have permission to use the LU. So you don't see the TP. To correct this problem,
	the SNA Server administrator can assign the remote LU to the user, or turn off
	the APPC LU security in the SNA Server Manager if it is not needed.
	
	For more details on SNA Server tracing, please see the SNA Server Administration
	guide.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
