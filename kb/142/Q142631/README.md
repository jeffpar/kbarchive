---
layout: page
title: "Q142631: Internet Information Server Directory Access Issue Resolved"
permalink: /kb/142/Q142631/
---

## Q142631: Internet Information Server Directory Access Issue Resolved

{% raw %}

	Article: Q142631
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under special circumstances, Internet Information Server (IIS) grants a
	directory view to "secure" directories to clients using the following URL path:
	
	  http://servername/images/../../
	
	The special case may occur if IIS WWW Service properties are set as follows:
	
	1. Directories: A virtual WWW directory is created that is not under the root
	  home directory.
	
	2. Directories: Directory Browsing Allowed -- ENABLED.
	
	3. Services - Password authentication option: Allow Anonymous -- ENABLED.
	
	
	CAUSE
	=====
	
	Client access privileges were not being set correctly.
	
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below. This issue is addressed and resolved in a new
	version of Infocomm.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbiisSearch kbiis100
	Version           : winnt:1.0,3.5,3.51
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
