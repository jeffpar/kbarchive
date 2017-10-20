---
layout: page
title: "Q231616: INFO: Terminal Server Console-Directed Pop-Up Print Error Box"
permalink: /kb/231/Q231616/
---

## Q231616: INFO: Terminal Server Console-Directed Pop-Up Print Error Box

{% raw %}

	Article: Q231616
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbOSWinNT400 kbPrinting kbWinNT4sp6fix kbGrpDSNTDDK
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to print from a Terminal Server (TS) version 4.0 client to a printer
	(on LPT1) on a TS server, the Printers Folder error dialog box pops up with the
	following message on the server side, and not on the client side:
	
	  Error writing to LPT1: for Document test page: The device is not ready. Do
	  you wish to retry or cancel the job?
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Configuration:
	
	- Windows Terminal Server version 4.0, build 419: SP3.
	
	- Terminal Server Client for Windows NT x86, Windows NT 4, SP3.
	
	- Printer installed on Terminal Server: Any.
	
	1. Open the Terminal Server client session and log on.
	
	2. Unhook the printer cable from the machine (Terminal Server).
	
	3. Print a test page from the Terminal Server client.
	
	4. Wait for a while.
	
	5. Notice that Printers Folder error dialog box, with the following message, is
	  on the Terminal Server, and NOT on the client:
	
	  Error writing to LPT1: for Document test page: The device is not ready. Do
	  you wish to retry or cancel the job?
	
	Explanation:
	
	The above situation could be a problem for the following reasons:
	
	- The error dialog box coming from the spooler goes to the TS console, and
	
	- It would seem that the print queue would get paralyzed until an Administrator
	  takes care of the error dialog box on the console.
	
	The error dialog box displays on the TS Console by design in Terminal server
	version 4.0, because the general rule was to display the error where the printer
	is attached.
	
	Client Printers:
	
	This case is handled similar to the local printers. The error dialog box goes to
	the client, which owns that printer; otherwise, it goes to the console. The
	reasons for this design are as follows:
	
	- The printer problems can be easily fixed by the person sitting near the
	  printer instead of the user who initiates the job.
	
	- MS-DOS programs, which must NET USE a shared printer, do not transmit a
	  WinStation Logon ID. Therefore, it is impossible to determine the initiator
	  of the print job.
	
	- Systems on the network do not have WinStation Logon IDs.
	
	The error dialog box could be sent to the initiator if the information is
	available, or sent to the owner if the information is not available. However,
	this would be inconsistent from the user's viewpoint.
	
	Local (System) Printers:
	
	This case is the same as the standard Windows NT Server printer handling. Both
	the multiuser environments and the "server in a closet" case are handled.
	
	A Windows NT Server alert is sent to the printer Administrators. This alert,
	however, is sent only once per job if the dialog box keeps timing out, to
	prevent the overnight flooding of the error messages. If the dialog box is
	answered, then the ALERT is re-armed in case the job hangs up again.
	
	The local printer pop-up dialog box is sent to the console. This error dialog box
	times out in 5 minutes if the server is enclosed. If this message is not
	answered in 5 minutes, however, the job is not deleted. This is to prevent
	spooler threads from getting buried in the message box, preventing the printer
	Administrators from deleting the job and/or the printer.
	
	Because the spooler relies on blocking in a message box until an answer is
	received, the message box is still created on the console with the standard
	5-minute timeout. This allows for the correction of the printer problem in less
	than 5 minutes, or an automatic retry of the job occurs in 5 minutes if the
	server is "in the closet". If someone purges the job from the Print
	Administrator during the 5-minute wait, the job is deleted when the message box
	times out. This keeps the printers from locking up when there is no console
	access, but still allows resuming faster when someone fixes the printer problem
	and answers the console.
	
	This is not the "ideal" way to handle the printer error pop-up dialog box for the
	remote logon user because the client doesn't receive any notification about this
	event and is left in the dark. This problem has been rectified in Windows 2000
	where the error dialog box goes to the correct client session.
	
	Additional query words: Terminal Server
	
	======================================================================
	Keywords          : kbprint kbOSWinNT400 kbPrinting kbWinNT4sp6fix kbGrpDSNTDDK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
