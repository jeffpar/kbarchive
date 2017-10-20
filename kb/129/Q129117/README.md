---
layout: page
title: "Q129117: Unable to Print Landscape with PostScript After Installing SP2"
permalink: /kb/129/Q129117/
---

## Q129117: Unable to Print Landscape with PostScript After Installing SP2

{% raw %}

	Article: Q129117
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Microsoft Windows NT U.S. Service Pack 2, you are unable to
	print to a PostScript printer in landscape mode.
	
	WORKAROUND
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	To work around this problem:
	
	1. Change the default setting in job defaults dialogue box and choose OK.
	
	2. Choose OK to exit out of the Details and Properties dialog boxes.
	
	The new setting is saved.
	
	You can also work around this problem, by using the Postscript files from build
	807:
	
	1. Replace the following files in the \SYSTEM32 directory with the files from
	  your original Windows NT 3.5 installation media:
	
	  PSCRIPT.DLL
	  PSCRPTUI.DLL
	
	  The files should be dated 9/4/94.
	
	2. Restart the Spooler service to load the drivers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.5. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K 5
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
