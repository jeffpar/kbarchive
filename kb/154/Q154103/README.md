---
layout: page
title: "Q154103: Cannot Access Shared Folders with CA/400"
permalink: /kb/154/Q154103/
---

## Q154103: Cannot Access Shared Folders with CA/400

{% raw %}

	Article: Q154103
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the IBM CA/400 client, and if Shared Folders is configured to
	automatically create a mapped drive to the AS/400, the conversation ends
	abnormally. The Shared Folders will not be available through File Manager.
	
	If the drive letter is manually assigned in Shared Folders and the window is
	minimized, the Shared Folders can be accessed. However, if you close the Shared
	Folders application, the drive is lost.
	
	CAUSE
	=====
	
	In order to support IBM Client Access Shared Folders, the SNA Server Windows 3.x
	client must allow shared folders to share an APPC conversation and TCP/IP socket
	handle between different Windows tasks, which is not normally supported by
	Windows APPC or the Windows sockets interface. However, the SNA Server Windows
	3.x client software treats CA/400 Shared Folders as a special application;
	however it was not handling all conditions properly.
	
	To prevent a Shared Folders drive from being shut down, verify that the following
	line is in the WIN.INI file:
	
	  CA400SHAREDFOLDERS=YES
	
	Then add a new parameter called PersistentTasks under the [WNAP] section:
	
	  [WNAP]
	  PersistentTasks=WSTRPCS SFANSW
	
	NOTE: The WSTRPCS parameter takes care of automatically mapping the connections,
	and the SFANSW parameter resolves the issue with closing the CA/400 Folders
	dialog box without losing the drives you created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11.sp1. This problem was corrected in the latest Microsoft SNA Server 2.11
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sp1
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
