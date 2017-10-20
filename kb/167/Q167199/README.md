---
layout: page
title: "Q167199: HyperTerminal May Drop Characters When Using Z-Modem"
permalink: /kb/167/Q167199/
---

## Q167199: HyperTerminal May Drop Characters When Using Z-Modem

{% raw %}

	Article: Q167199
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HyperTerminal with Z-modem transfer mode using baud rates of 57,600 or higher
	may cause packets to be dropped or incorrect file transfers to occur.
	Additionally, transfers may be successful only after a large number of retries.
	
	WORKAROUND
	==========
	
	Use baud rates below 38,400 or use a higher baud rate but with a protocol other
	than Z-Modem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	This problem has been reported on modems from several different modem
	manufacturers and does not appear to be modem specific.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
