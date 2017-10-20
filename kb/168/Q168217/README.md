---
layout: page
title: "Q168217: FIX: Unattended Setup May Fail with 3Com 3C619B Tokenlink III A"
permalink: /kb/168/Q168217/
---

## Q168217: FIX: Unattended Setup May Fail with 3Com 3C619B Tokenlink III A

{% raw %}

	Article: Q168217
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT version 4.0 may fail during an unattended
	installation of the 3Com 3C619B Tokenlink adapter with the following error:
	
	  Badly formed setup script command
	
	This problem is only encountered if you explicitly specify the 3C619B in an
	Unattend.txt file. Using the DetectAdapers = "" entry does not exhibit the
	problem.
	
	CAUSE
	=====
	
	This error is caused by an incorrect entry in the Oemsetup.inf file of the
	3C619B network adapter.
	
	RESOLUTION
	==========
	
	The Oemsetup.inf file for the 3C619B is located in the I386\Drvlib.nic\Tlnk3
	directory on your installation source.
	
	To correct the problem, follow the instructions listed below:
	
	NOTE: The Oemsetup.inf file is read only. Be sure to change the attributes of the
	file before editing.
	
	1. Edit the Oemsetup.inf file located in the I386\Drvlib.nic\Tlnk3 directory.
	
	2. Search for the string of STF_GUI_UNATTENDED. You should see the following
	  entry:
	
	     ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	                      NetworkAddress = ""
	                      goto WriteNetworkAddr
	              endif
	
	3. Place a semi-colon at the beginning of the NetworkAddress = "" line to
	  comment it out.
	
	4. On the File menu, click Save the File, and then exit the program.
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	For additional information on Windows NT 4.0 deployment/unattended installation
	consult the Microsoft Knowledge Base at http://www.microsoft.com/kb and download
	the Windows NT 4.0 Deployment Guide from
	http://www.microsoft.com/ntworkstation.
	
	NOTE: The deployment guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	
	Additional query words: prodnt Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
