---
layout: page
title: "Q131689: Postscript Jobs Do Not Print Correctly Over SFM and AppleTalk"
permalink: /kb/131/Q131689/
---

## Q131689: Postscript Jobs Do Not Print Correctly Over SFM and AppleTalk

{% raw %}

	Article: Q131689
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
	
	Postscript print jobs sent to shared AppleTalk printers through Services for
	Macintosh (SFM) may not print correctly, or may not get printed.
	
	CAUSE
	=====
	
	The Services for Macintosh printer monitor incorrectly removes Postscript
	printer reset characters (0x04) from the end of each print buffer when it sends
	print data to a shared AppleTalk printer. Both valid printer resets and 0x04
	occurrences in binary-encoded data are removed. This keep valid printer resets
	from executing, and corrupts binary data streams, preventing the job from
	printing correctly.
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
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
