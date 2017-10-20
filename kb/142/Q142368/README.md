---
layout: page
title: "Q142368: ERD Fails on SNA Directory Entries in SETUP.LOG"
permalink: /kb/142/Q142368/
---

## Q142368: ERD Fails on SNA Directory Entries in SETUP.LOG

{% raw %}

	Article: Q142368
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you reboot the Windows NT Server and try to perform an emergency repair by
	booting up with the Setup disks, selecting all repair options, and providing the
	Emergency Repair Disk, Setup reports that it is checking the SETUP.LOG file and
	returns the following error message:
	
	  Line xxxx contains a syntax error
	
	If SETUP.LOG is examined with a text editor, one of the following entries will be
	found at the line number stated:
	
	  \SNA\system\hwsetup\snaclasp\3270 Logon Demo.dem = "3270log.scr", ...
	  \SNA\system\hwsetup\snaclasp\AS400 Demo.dem = "5250log.scr", ...
	  \SNA\system\hwsetup\snaclasp\3270 Continuous Demo.dem = "3270flsh.scr",
	  ...\SNA\system\3270 File Transfer Demo.dem = "3270 File Transfer Demo.dem",
	  ...
	
	CAUSE
	=====
	
	SNA Server Demo Scripts directory entries in SETUP.LOG have spaces within them,
	and lack quotation marks around the text for the actual entry.
	
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Open SETUP.LOG using a text editor.
	
	2. Place quotation marks (") around the string preceding the "=" sign.
	
	  For example:
	
	  "\SNA\system\hwsetup\snaclasp\3270 Logon Demo.dem" = "3270log.scr", ...
	  "\SNA\system\hwsetup\snaclasp\AS400 Demo.dem" = "5250log.scr", ...
	  "\SNA\system\hwsetup\snaclasp\3270 Continuous Demo.dem" ="3270flsh.scr",...
	  "\SNA\system\3270 File Transfer Demo.dem" = "3270 File Transfer Demo.dem", ...
	
	3. Save the file, and retry the operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11; winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
