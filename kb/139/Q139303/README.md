---
layout: page
title: "Q139303: Cannot Send Attachments with E-mail on MSN"
permalink: kb/139/Q139303/
---

## Q139303: Cannot Send Attachments with E-mail on MSN

	Article: Q139303
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbmsnkbfaq
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send an e-mail message with an attachment, you may receive one
	of the following error messages:
	
	- Could not locate DLL or could not find entry point.
	
	- This icon could not be sent, the task could not be completed. (MS Exchange
	  client 9997.)
	
	CAUSE
	=====
	
	These errors may occur if your Microsoft Exchange Inbox is damaged.
	
	RESOLUTION
	==========
	
	Repair your Inbox with the Inbox Repair Tool. To do so, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click Inbox Repair Tool.
	
	2. Type the full path and filename of your mail (.pst) file. Or, click Browse,
	  click your mail file, and then click Open.
	
	3. Click Start.
	
	If running the Inbox Repair Tool does not solve the problem, run ScanDisk on the
	hard disk to check for errors.
	
	If running ScanDisk does not solve the problem, remove all your Microsoft
	Exchange profiles and create a new profile containing only The Microsoft Network
	Online Service. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Mail And Fax.
	
	3. Click Show Profiles.
	
	4. Click each profile and then click Remove. Repeat until all profiles have been
	  removed.
	
	5. Click Add.
	
	6. Click The Microsoft Network Online Service check box to select it, and then
	  click Next.
	
	7. Type a name for the new profile, click Next, and then click Next again.
	
	8. Type the full path and filename of your personal address book (.pab) file,
	  and then click Next.
	
	9. Type a new name for the .pst file. You must type a new, unused name. You
	  cannot use the default name of Mailbox.pst. Make sure to give the file a .pst
	  extension (for example, Mymail.pst).
	
	10. Follow the instructions on the screen to finish creating the profile.
	
	Additional query words: msn email
	
	======================================================================
	Keywords          : kberrmsg kbtool kbmsn kbfaq
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	
