---
layout: page
title: "Q151254: Duplicate Printer Names on Macintosh Clients"
permalink: /kb/151/Q151254/
---

## Q151254: Duplicate Printer Names on Macintosh Clients

	Article: Q151254
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Windows NT Print Queue for an existing Apple LaserWriter
	printer with the same name as currently shown in Chooser on the Macintosh
	clients, a second instance of the printer appears in Chooser if Services for the
	Macintosh is installed on your Windows NT Server.
	
	NOTE: This problem will not occur if you choose to capture the Appletalk device
	when setting up the Windows NT printer.
	
	CAUSE
	=====
	
	When the Apple LaserWriter Printer is attached directly to the network and not
	captured by an Appletalk print spooler, it announces its name to all the
	Macintosh clients so they can select the printer in Chooser. When the Windows NT
	Server creates a shared printer queue and has Services for the Macintosh
	installed, the Windows NT server will broadcast the printer name to the
	Macintosh clients. If the Windows NT printer name is the same as the original
	printer name, two instances of the printer will appear in Chooser.
	
	RESOLUTION
	==========
	
	There are two resolutions depending on the particular situation.
	
	- To stop broadcasting All Windows NT printers on the AppleTalk network,
	  disable the "Print Server for Macintosh" service using the Services tool in
	  Control Panel.
	
	- Use the following steps to stop broadcasting SELECTED Windows NT printer(s)
	  on the Appletalk network:
	
	  1. Create a user account called "Macprint".
	
	  2. In Control Panel, open the Services tool, select "Print Server for
	     Macintosh" and click STARTUP.
	
	  3. Set up the Print Server for the Macintosh to Log On As, select "This
	     Account" and select the "Macprint" account you created earlier. Enter the
	     password for this account, and click OK. Close the Services dialog box.
	
	  4. Open the Printers (Print Manager) tool in Control Panel, select the
	     instance of the Apple LaserWriter printer, select Security, and select
	     Permissions.
	
	  5. Add the user account "Macprint" and set the type of access for that user
	     to be "No Access." Click OK.
	
	This will prevent Macintosh clients from seeing, and printing to, the instance of
	the printer created on the NT server. Macintosh clients would then be printing
	directly to the printer, and PC clients would be able to print to the same
	printer by means of Windows NT.
	
	Additional query words: prodnt nthowto sfm
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
