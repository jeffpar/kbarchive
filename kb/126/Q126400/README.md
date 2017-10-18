---
layout: page
title: "Q126400: SNA Server-AS/400 Connection Active, But No Sessions Negotiated"
permalink: kb/126/Q126400/
---

## Q126400: SNA Server-AS/400 Connection Active, But No Sessions Negotiated

	Article: Q126400
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsna211sp1 sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect from an SNA Server client using a 5250 emulator, you
	will get the following error message:
	
	  There is a problem with the configuration of the connection to the AS/400
	
	  Primary return code = 0003
	  Secondary return code = 00000005
	
	When you look in SNA Server Admin (SNA Server 2.11), you find the AS/400
	connection is active; however, it has not negotiated any sessions.
	
	NOTE: You can identify how many sessions have been negotiated by starting the
	Local APPC LU icon and selecting the Status button.
	
	You will see something similar to the following:
	
	  Partner LU    Mode       Connection          Sessions   Limit
	  -------------------------------------------------------------
	  <remote LU>   QPCSUPP    <connection_name>   0          64
	  <remote LU>   SNASVCMG   <connection_name>   0          2
	
	NOTE: In SNA Server Manager 3.0 and 4.0 there is no Status button.
	
	The value is commonly 64, but may be different if the QPCSUPP mode has been
	modified in SNA Server Admin and on the AS/400. If the limit on the QPCSUPP mode
	is 0, then the SNA Server has failed to negotiate any sessions. The maximum
	Parallel Session Limit that QPCSUPP supports on the AS/400 is 512. This limit
	was imposed by IBM.
	
	CAUSE
	=====
	
	The following configurations cause 0 sessions to be negotiated:
	
	- The local APPC LU is not partnered with a Remote APPC LU in SNA Server Admin.
	
	- The LU-LU pairing is not using QPCSUPP mode. SNA Server AS/400 connections
	  require that this mode be used. However, LU6.2 connections configured to
	  other SNA devices do not necessarily require this mode.
	
	- The LU-LU pairing is using the QPCSUPP mode, but the mode has been modified
	  in SNA Server or on the AS/400 so they no longer match. For instance, the
	  Parallel Session Limit parameter is not the same on the SNA Server and on the
	  AS/400.
	
	- The APPC remote LUs LU name does not match the AS/400 Local Control Point
	  Name as defined in the AS/400's Network Attribute screen.
	
	If this is an SDLC connection to the AS/400, force the AS/400 to become the
	primary Link Station. There are two ways to force the AS/400 to become the
	primary link station.
	
	- Create a SDLC Line Description specifying *PRI for the Data Link Role
	  parameter.
	
	- Create a Controller Description for the SNA Server specifying *SEC for the
	  Data Link Role parameter.
	
	RESOLUTION
	==========
	
	Reconfigure to correct the problem.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsna211sp1 sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,4.0
	
	=============================================================================
	
