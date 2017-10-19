---
layout: page
title: "Q133721: SNA Error 505: The Host Terminated the Connection Used..."
permalink: /kb/133/Q133721/
---

## Q133721: SNA Error 505: The Host Terminated the Connection Used...

	Article: Q133721
	Product(s): Microsoft SNA Server
	Version(s): MS-DOS:3.0; WINDOWS:2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Network Client for MS-DOS and Microsoft SNA Server DOS
	Client, the 3270 terminal emulator may display communication status 505 and then
	stop responding (hang).
	
	CAUSE
	=====
	
	The incorrect computer name is called up during network initialization. SNA DOS
	Client traces show the following:
	
	  ... ... ... ... Remote box? <SNA_Server>:<Incorrect_SNA_Client>
	  ...
	  ... ... ... ... STAB entry <number> for box <Incorrect_SNA_Client>
	
	where: <SNA_Server> is the Server name in SNA Server Admin,
	<Incorrect_SNA_Client> is the incorrectly specified computer name of SNA
	client, and <number> is the service table entry number.
	
	This situation occurs when both the MS-DOS-based and Windows-based clients are in
	the path. For example, your AUTOEXEC.BAT file contains the following:
	
	  PATH C:\WINDOWS;C:\NET;C:\DOS;C:\;
	  NET INITIALIZE
	  NET START
	
	In this case, the Windows for Workgroups version of NET.EXE is called first. The
	Windows for Workgroups version of NET.EXE uses C:\WINDOWS\SYSTEM.INI, instead of
	C:\NET\SYSTEM.INI. This causes the error to occur.
	
	The SYSTEM.INI contains the following entry for the SNA Client's computer name:
	
	  [Network]
	  ComputerName=<SNA_Client>
	
	RESOLUTION
	==========
	
	Use one of the following two methods to ensure the correct version of NET.EXE is
	used:
	
	- Specify the complete path in the AUTOEXEC.BAT file. For example:
	
	  C:\NET\NET INITIALIZE
	  C:\NET\NET START
	
	  -or-
	
	- Remove Windows from the Path statement. For example:
	
	  :NET
	  PATH C:\NET;C:\;
	  NET INITIALIZE
	  NET START
	
	Additional query words: prodsna client dos applet computer name
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : MS-DOS:3.0; WINDOWS:2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP1
	
	=============================================================================
	
