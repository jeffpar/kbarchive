---
layout: page
title: "Q158917: Err Msg: MAPI Spooler Has Shut Down Unexpectedly"
permalink: kb/158/Q158917/
---

## Q158917: Err Msg: MAPI Spooler Has Shut Down Unexpectedly

	Article: Q158917
	Product(s): Microsoft Windows NT
	Version(s): 4.0 95
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a message using Windows Messaging, you may receive the
	following error message:
	
	  Microsoft Windows Messaging Subsystem
	  The MAPI Spooler has shut down unexpectedly. Close all mail-enabled
	  applications before attempting to log on again.
	
	CAUSE
	=====
	
	This error can occur if the personal message store (.pst) file is damaged and
	has a message stuck in the Outbox.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Create a new Windows Messaging profile and a new .pst file. To do so, follow
	  these steps:
	
	  a. Use the right mouse button to click Inbox on the desktop, and then click
	     Properties on the menu that appears.
	
	  b. Click Show Profiles, and then click Add.
	
	  c. Click the appropriate information services to add them to the profile.
	
	  d. Type a name in the Profile Name box, and then click Next.
	
	  e. Follow the instructions in any wizards that run to configure the
	     information services.
	
	  f. When you are prompted for the Personal Folders file, make sure to specify
	     a new file name. For example, instead of Mailbox.pst, you could use
	     Mailbox2.pst.
	
	  g. Click Finish, and then click the new profile in the "When starting Windows
	     Messaging, use this profile" box.
	
	  h. Click Close.
	
	2. Copy the messages from your original .pst file to the new .pst file. To do
	  so, follow these steps:
	
	  a. Start Windows Messaging, click Tools, and then click Services.
	
	  b. Click Add, click Personal Folders, and then click OK.
	
	  c. Locate the original .pst file, and then click Open.
	
	  d. Click OK, and then click OK.
	
	  e. Copy all of the messages from the original set of Personal Folders to the
	     new Personal Folders, except for the Outbox.
	
	Additional query words: prodnt exchange msmail client Outlook OL97
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 4.0 95
	
	=============================================================================
	
