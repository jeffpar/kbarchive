---
layout: page
title: "Q159602: &quot;The Path Specified...Does Not Contain A Valid....&quot;"
permalink: /kb/159/Q159602/
---

## Q159602: &quot;The Path Specified...Does Not Contain A Valid....&quot;

{% raw %}

	Article: Q159602
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Workgroup Postoffice Admin (that is, using the
	Microsoft Mail Postoffice icon found in Control Panel) to administer an existing
	workgroup postoffice, you may receive the following error:
	
	  Mail
	  The path specified does not exist or does not contain a valid workgroup
	  postoffice.
	
	When you click OK in this error message dialog box, Microsoft Workgroup
	Postoffice Admin immediately terminates.
	
	CAUSE
	=====
	
	The directory permissions on the postoffice are not set to allow full control to
	you or to the group to which you belong.
	
	
	RESOLUTION
	==========
	
	Set the directory permissions such that you are allowed full control to both the
	postoffice directory and its subdirectories.
	
	MORE INFORMATION
	================
	
	This can also be caused by files being held open (locked) by clients. If the
	permissions are correct, log all clients off and reboot the computer on which
	the WGPO files are stored. If you cannot reboot the server, you can create a new
	WGPO, and then copy the old WGPO files into the new WGPO directory structure.
	You will be able to administer the WGPO until you reshare the new directory and
	users start connecting again.
	
	Additional query words: exchange ends exits quits quit WGPO
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
