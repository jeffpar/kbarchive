---
layout: page
title: "Q298467: Allow Automatic Logging In MSN Explorer 6.1"
permalink: kb/298/Q298467/
---

## Q298467: Allow Automatic Logging In MSN Explorer 6.1

	Article: Q298467
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use MSN Explorer 6.1, you can send and receive e-mail through the
	http://www.hotmail.com Web interface, but you cannot send or receive e-mail
	using MSN Explorer. You have exhausted all troubleshooting steps, and the issue
	requires an escalation. One of the items required for support technicians to
	handle this type of escalation is a file known as a "Spooler Log". With MSN
	Explorer 6.0, obtaining this file required editing a hotmail.ini file. With MSN
	Explorer 6.1, there is a new feature that allows a support technician to get
	this file simply by going to Help and Settings.
	
	CAUSE
	=====
	
	This issue is caused by an unknown problem with MSN Explorer e-mail.
	
	RESOLUTION
	==========
	
	To obtain the Spooler Log with MSN Explorer 6.1
	
	1. Start MSN Explorer and sign in using the account that is causing the e-mail
	  issue.
	
	2. In the upper-right corner of the screen, click Help and Settings.
	
	3. In the Member Center menu on the left, click E-mail.
	
	4. Click the Mail Preferences link.
	
	5. Select the Allow automatic logging (for support purposes) box, and then click
	  the Save Preferences button.
	
	6. In the upper-right corner, click Sign Out.
	
	7. Sign in again with the same user tile.
	
	8. Click the E-mail icon on the top toolbar.
	  If you are having trouble receiving e-mail, this is sufficient. If the issue
	  is with sending e-mail, click Write E-mail and attempt to send an e-mail
	  message.
	
	9. Right-click the Start button, and then click Explore.
	
	10. At the top of the Windows Explorer screen, click Tools.
	
	11. Click Folder Options, and then click the View tab.
	
	12. Under Hidden files, click the option labeled Show all files.
	
	13. Under Hidden files, clear the box next to Hide Protected Operating System
	  Files.
	
	14. Click Apply, and then click OK.
	
	15. Close Windows Explorer.
	
	16. Click Start, point to Search or Find, and then click For Files or Folders.
	
	17. In the Named box, type spooler.log.
	
	18. Select the hard drive (usually "C:").
	
	19. Select Include Subfolders, and then click Find Now.
	  Note: If more than one spooler.log file shows up, use the log with the most
	  recent date. You can copy and paste this file to the desktop to make it
	  easier to find and attach to e-mail. Otherwise, remember the name of the
	  folder that the file is stored in.
	
	20. Go to http://www.hotmail.com, and then send file as an attachment to the
	  escalation team.
	
	21. Right-click the Start button, and then click Explore.
	
	22. At the top of the Windows Explorer screen, click View.
	
	23. Click Folder Options, and then click the View tab.
	
	24. Under Hidden files, select Do not show hidden or system files.
	
	25. Click Apply, click OK, and then close Windows Explorer.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	
