---
layout: page
title: "Q196096: Client Application Can Use a Modem on SBS for Incoming Calls"
permalink: kb/196/Q196096/
---

## Q196096: Client Application Can Use a Modem on SBS for Incoming Calls

	Article: Q196096
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to run an application on the client computer that monitors a
	modem on SBS for incoming calls, such that, when a call comes in, the SBS server
	does not answer it but instead the software on the Modem Sharing client senses
	it as a call to a directly connected modem and answers it.
	
	MORE INFORMATION
	================
	
	Essentially, with the Modem Sharing service, the COM port on the server is being
	shared. The client piece simulates an extra communications port on the above
	specified clients. Any calls to that simulated local port on the client are
	redirected to the Modem Sharing service on the server and subsequently sent to
	the shared COM port on the server.
	
	Any application trying to directly access such a port on the client using
	hardware calls will fail as this is a simulated COM port available through the
	windows environment only. So, only applications that access the port using
	windows API calls will work.
	
	Please keep the following in mind:
	
	- Only one client can monitor the modem as it is locked for exclusive use as
	  long as the client application is waiting to receive calls. All other
	  applications will report this modem as "busy" or "in use" until the client
	  application releases it.
	
	- For this reason, the shared modem on the server should not be used for any
	  other service except the Modem Sharing service.
	
	To test for proper functioning:
	
	NOTE: The following steps require the Dial-Up Server component of Windows 9x be
	installed. This requires Windows 95 Plus! for Windows 95 clients.
	
	1. Set up a modem sharing client on a Windows 9x computer and a shared modem on
	  the server.
	
	2. Make sure that the modem is not configured for RAS or fax service on the
	  server.
	
	3. Enabled Windows 9x's DialUp Server piece as follows:
	
	  a. Open My Computer.
	
	  b. Open Dial Up Networking.
	
	  c. From the Connections drop down menu, select Dial-Up Server. The shared
	     modem should show up as a tab in the Dial-Up Server dialog box.
	
	  d. Select the shared modem.
	
	  e. Configure the modem to receive calls by selecting the Allow Caller Access
	     option.
	
	4. Call in to the shared modem's phone line. You should hear modem tones trying
	  to negotiate the connection.
	
	5. Set the dial-up server back by clicking to clear the Allow Caller Access
	  check box so that it does not answer any calls on the client.
	
	If your application still does not find the COM port, contact the manufacturer to
	find out if there is a Windows compliant version of the application.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbAudDeveloper kbWin95search kbWin98search kbSBServSearch kbZNotKeyword3 kbWin98 kbSBServ400 kbSBServ400a kbSBServ450
	Version           : WINDOWS:95; winnt:4.0,4.0a,4.5
	Issue type        : kbinfo
	
	=============================================================================
	
