---
layout: page
title: "Q129724: Macintosh Client Has Slow Access to Windows NT 3.5x SFM Volume"
permalink: /kb/129/Q129724/
---

## Q129724: Macintosh Client Has Slow Access to Windows NT 3.5x SFM Volume

{% raw %}

	Article: Q129724
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Services for Macintosh (SFM) is installed on a Windows NT 3.5 Server,
	Macintosh clients periodically appear to stop responding, even if they are not
	directly accessing a mounted volume (the client is waiting for a response from
	the Windows NT server). The amount of time that a client waits for a response
	from the server depends on the volume layout and how many files are in each
	directory.
	
	CAUSE
	=====
	
	When a shared directory is initially accessed by a Macintosh client, SFM must
	read the entire contents of the directory and update the sub-section of the
	volume catalog. If there are many files in the directory (several thousand), the
	volume is exclusively locked until the catalog is updated. This causes other
	Macintosh clients to wait for their requests to be satisfied.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	Microsoft has modified the Windows NT version 3.51 file, SFMSRV.SYS, to correct
	these problems. SFM Servers configured with large Macintosh Accessible Volumes
	will still have large amounts of disk activity when the server starts or when a
	volume is created. This may go on for several minutes depending on how large and
	complex directory structures are.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
