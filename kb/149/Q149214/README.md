---
layout: page
title: "Q149214: Windows NT Server Stops Responding To Macintosh Clients"
permalink: /kb/149/Q149214/
---

## Q149214: Windows NT Server Stops Responding To Macintosh Clients

{% raw %}

	Article: Q149214
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Macintosh computers may temporarily stop responding when you access information
	from a Windows NT Server that is running Services for Macintosh (SFM). If the
	double network arrows displayed in the upper left corner no longer flash, this
	may indicate that the Macintosh client is trying to access the Windows NT
	Server. The Macintosh client will usually start communicating within 30 to 40
	seconds. This has only occurred in production servers with large Macintosh
	volumes, (for example, more than 5 GB and more than 100 Macintosh clients). When
	you run large programs and files off the server, these same symptoms may appear
	due to the bandwidth required to carry the information across the network.
	
	CAUSE
	=====
	
	Windows NT Server rebuilds an index related to each of the Macintosh volumes,
	based on the number of changes to the volume (usually 1,000 changes),or the time
	since the previous re-index (usually 10 minutes). This process may take up to a
	minute to accomplish, depending on the size of the database, and is directly
	dependent on the number of files and directories in the volume. During this
	operation,a request from a Macintosh client is put on hold; this causes the
	Windows NT Server to appear to stop responding.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt Hung Mac busy slow Mail
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
