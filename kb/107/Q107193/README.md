---
layout: page
title: "Q107193: Running IBM PC Support/400 on SNA Server"
permalink: kb/107/Q107193/
---

## Q107193: Running IBM PC Support/400 on SNA Server

	Article: Q107193
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbtool sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SNA Server for Windows NT includes a APPC router for MS-DOS which supports
	the IBM PC Support/400 product. When loaded, IBM PC Support/400 users may
	access their AS/400 through SNA Server, using an SNA Server MS-DOS client.
	This article describes configuration changes to use IBM PC Support/400
	through SNA Server.
	
	MORE INFORMATION
	================
	
	To use IBM PC Support/400 through SNA Server, do the following:
	
	Do the following from SNA Server Admin/Manager:
	
	1. Configure a connection to the AS/400 (see the SNA Server "Administration
	  Guide" or Help for details on configuring a connection for each link service
	  type).
	
	2. Add a Remote APPC LU to the connection:
	  a. Highlight the connection and press Insert Select: APPC (Remote).
	
	     If you are using SNA Server 3.0 or later, point to APPC on the Insert menu,
	     and then click Remove LU on the SNA Server Manager menu bar.
	
	  b. Add Remote LU Properties LU Alias:
	
	     Control Point Name of the AS/400 Network Name: AS/400 network name LU Name:
	     same as LU Alias Uninterpreted LU Name: same as LU Name or blank Supports
	     Parallel Sessions: Yes Enable Automatic Partnering: Yes/No (optional)
	
	     Choose OK. (Partners will be set up later.)
	
	3. Add a Local APPC LU to the Server
	  a. Highlight the Server (the computer name running SNA Server) and press
	     Insert; in the New Logical Unit field, select APPC (Local).
	
	     If you are using SNA Server 3.0 or later, point to APPC on the Insert menu,
	     and then click Remove LU on the SNA Server Manager menu bar.
	
	  b. Add Properties:
	
	  "LU 6.2 Type: Independent
	  LU Alias: User name (or any unique LU name)
	  Network Name: Same as network name on node definition for this server
	  (usually APPN)
	  LU Name: same as LU Alias" (without the quotation marks)
	
	  c. Partners (select):
	
	     Select Add and the select the correct Partner LU (created in step 2 above)
	     and partner with the "QPCSUPP" Mode (this is partnered by default), then
	     select Close on the Partner dialog box and choose OK on the Properties
	     dialog box.
	
	     NOTE: SNA Server 3.0 and 3.0 SP1 do not allow APPC partnerships to be
	     configured using the SNA Server Manager interface. SNA Server 3.0 SP2 and
	     later add APPC partnering using Manager under the APPC Mode definition.
	
	  d. Save the new configuration and activate SNA Server and connection.
	
	Do the following on the SNA Server client workstation:
	
	1. Install the SNA Server MS-DOS client software (run the SETUP program off the
	  \\<server>\CLIENTS\MSDOS directory)
	
	2. Copy the SNA Server MS-DOS client ROUTER.EXE and INITRTR.EXE into your PCS
	  directory.
	
	3. In the CONFIG.PCS file, change the Network.LUName on the RTLN line to match
	  the Network.LUName configured at the server. The network name should match
	  the network name of the server and the LUName should match the Local APPC LU
	  name.
	
	4. Start SNABASE and ROUTER
	
	Once they have started, you should be able to use IBM PC Support/400.
	
	Also, per the SNA Server Installation Guide (p. 88), if you are running the real
	mode MS-DOS redirector provided with Windows for Workgroups or the Microsoft
	Network Client over the named pipes interface, your computer may stop responding
	(hang) unless you add the following entry to the [networks] section of
	SYSTEM.INI:
	
	  "maxcmds=10" (without the quotation marks)
	
	and start the redirector using the "NET START FULL" command.
	
	NOTE: IBM PC Support/400 runs on the SNA Server MS-DOS client. In order to use
	the Windows 3270 or 5250 applet included with SNA Server, you must load the SNA
	Server Windows client software. The SNA Server MS-DOS client software does not
	operate concurrently with the SNA Server Windows client software--only one can
	be loaded at one time.
	
	5. Using the Enhanced version of IBM PC Support
	
	  If you are using the Enhanced version of IBM PC Support (instead of the Basic
	  version), the Enhanced functions will not be able to find the real- mode SNA
	  Server MS-DOS router. To solve this, the RTRMAP.EXE utility must be
	  downloaded from the AS/400 shared folders drive (by default, located in the
	  I:\FL2 directory), copied to the client workstation and loaded after the
	  ROUTER utility is loaded.
	
	  NOTE: There are known problems running the enhanced mode shared folders
	  function over the real mode MS-DOS router. There is no solution for this
	  problem, except to revert to the Basic version of PC Support, or to upgrade
	  to IBM Client Access/400 and the SNA Server 2.11 Windows client software.
	
	  Please see the Microsoft SNA Server 2.1 Installation Guide, Chapter #3, pg.
	  82-89 for detailed instructions on installing and configuring the SNA Server
	  MS-DOS router to support IBM PC Support, and for special considerations when
	  running on a Windows or Windows for Workgroups client machine. For SNA Server
	  3.0 and 4.0, these instructions are in the Getting Started manual.
	
	Additional query words: wfw wfwg prodsna DOS PCSupport/400
	
	======================================================================
	Keywords          : kbtool sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
