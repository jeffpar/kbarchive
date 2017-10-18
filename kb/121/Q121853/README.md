---
layout: page
title: "Q121853: Downlevel Print Jobs Not Redirected Correctly"
permalink: kb/121/Q121853/
---

## Q121853: Downlevel Print Jobs Not Redirected Correctly

	Article: Q121853
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT 3.1 computer is sharing a printer that is redirected to a
	Windows NT 3.5 computer, downlevel clients (like MS-DOS or Windows for
	Workgroups) print jobs get stuck in the Windows NT 3.1 print queue.
	
	CAUSE
	=====
	
	When a Windows NT 3.1 computer sends a downlevel print job, it sends the job as
	a null session. Null sessions are those where the user credentials are blank
	during the request to setup a session. Because the downlevel client may not have
	an account or because of a conflicting account on the second print server,
	downlevel jobs are sent as a null sessions. Security is up to the first computer
	in this scenario.
	
	Windows NT version 3.1 supports null sessions by default. However, Windows NT
	version 3.5 does not provide this support unless specifically configured to do
	so. This change was made in order to provide a higher default level of security.
	
	RESOLUTION
	==========
	
	This problem can be resolved by modifying the registry on the computer running
	Windows NT 3.5 to allow null sessions to the print share.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Registry Editor and locate the following Registry subkey in the
	  HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	2. Select the NullSessionShares value.
	
	3. From the Edit menu, select Multi String.
	
	  NOTE: values will already exist and should not be replaced. If the values are
	  accidentally deleted, just click Cancel and try again.
	
	4. Select the first blank line after the values that currently exist. (The lines
	  above should not be highlighted.) Add the name of the print share on Windows
	  NT 3.5 you want to accept null sessions. This needs to be done for each share
	  individually.
	
	5. Click OK and exit Registry Editor.
	
	6. Either shut down and restart Windows NT or from a command prompt type:" NET
	  STOP SERVER" (without the quotation marks). Then type: "NET START SERVER"
	  (without the quotation marks).
	
	
	MORE INFORMATION
	================
	
	For a Windows NT LPD server to support print jobs that are redirected to a
	second Windows NT shared print queue through a UNC name, NullSessionShares must
	be used. The UNC name of the printer share must be added as a null share on the
	second Windows NT print server. For example, if \\Server1 is the LPD server and
	it's port is redirected to \\Server2\Printer, the UNC name \\SERVER2\Printer
	must be added to NullSessionShares on \\Server2.
	
	For additional information on using LPD, please see the following resource:
	
	Windows NT Resource Kit 3.51 Volume 2, Networking Guide; Chapter 18,
	"Internetwork Printing with TCP/IP," page 357.
	
	Additional query words: wfw wfwg prodnt print lpr lpd stuck null shares Unix local port UNC
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
