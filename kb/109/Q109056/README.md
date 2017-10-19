---
layout: page
title: "Q109056: Microsoft At Work PC Fax: Top Questions and Answers"
permalink: /kb/109/Q109056/
---

## Q109056: Microsoft At Work PC Fax: Top Questions and Answers

	Article: Q109056
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains commonly asked questions and answers for Microsoft At Work
	PC Fax.
	
	MORE INFORMATION
	================
	
	1. Q. Why does Mail constantly poll for new messages with At Work PC Fax
	  installed?
	
	  A. This behavior occurs only if you are attached to a shared fax modem.
	
	  To correct this problem:
	
	  1. Open Mail.
	
	  2. From the Fax menu, choose Mode.
	
	  3. Select the Work Off-Line check box. (When you are ready to send a fax,
	     remove the check mark and choose View New Messages from the Fax menu.)
	
	2. Q. Sometimes when I try to open a new fax message, Mail generates a general
	  protection fault. This problem seems to occur randomly. How can I correct
	  this problem?
	
	  A. Microsoft is researching this problem and will post new information here in
	  the Microsoft Knowledge Base as it becomes available.
	
	3. Q. When I start Mail and the fax tries to go online, I receive the following
	  error. How can I avoid this error?
	
	  Fax Transport cannot go on-line. Off-Line operation will continue.
	
	  A. This error occurs under the following circumstances:
	
	   - You have an external fax modem, and it is turned off or not correctly
	     connected to the port.
	
	   - You are attached to a shared network fax that is on a server not running
	     Microsoft Mail, or the MAPI engine has not been started.
	
	   - The shared fax user is connecting to the wrong share. Check the
	     EFAXPUMP.INI file to ensure the path to the network fax is correct.
	
	   - The network fax is working offline. (Go to Microsoft Mail on the network
	     fax machine and choose Mode from the Fax menu to ensure the fax is working
	     online.)
	
	4. Q. What causes a fax to render correctly but then appear in my Inbox?
	
	  A. If you send a fax to the same number that was entered during At Work PC Fax
	  Setup in Control Panel, At Work PC Fax recognizes that it cannot call itself;
	  therefore, it renders the fax and places it in your Inbox.
	
	5. Q. Why does my Intel CAS modem fail to render the fax every time I try to
	  send one?
	
	  A. Changing the Image Quality setting from Best Available to Fine should
	  correct this problem. To do this:
	
	  1. Go to Microsoft Mail.
	
	  2. From the Fax menu, choose Options.
	
	  3. Change the Image Quality from Best Available to Fine.
	
	Additional query words: 3.11 Microsoft pc at work fax efax q&a qanda issues tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
