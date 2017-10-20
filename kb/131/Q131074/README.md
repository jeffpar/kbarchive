---
layout: page
title: "Q131074: Printing Over LocalTalk Bridge Produces IOError"
permalink: /kb/131/Q131074/
---

## Q131074: Printing Over LocalTalk Bridge Produces IOError

{% raw %}

	Article: Q131074
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a print job from a computer running Windows NT 3.5 Server to a
	LocalTalk-connected print device on the far side of a LocalTalk bridge, the job
	does not print correctly. Instead, the job is truncated and a PostScript IOError
	message appears on an additional page.
	
	Print jobs may be effected differently. Some print jobs rarely encounter the
	problem while others encounter it nearly every time. If you send the same job
	several times and the problem occurs several times, the truncation may appear at
	slightly different points in the document.
	
	CAUSE
	=====
	
	The Windows NT 3.5 Services For Macintosh print monitor (SFMMON.DLL) fails to
	set the EOM bit after sending the last frame of print job data, before sending
	the Close Connection Request.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT Server version 3.51.
	
	
	Additional query words: prodnt end of message I/o
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
