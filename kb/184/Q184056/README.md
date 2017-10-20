---
layout: page
title: "Q184056: Font Substitution List Is Not Loaded from Vendor PPD File"
permalink: /kb/184/Q184056/
---

## Q184056: Font Substitution List Is Not Loaded from Vendor PPD File

{% raw %}

	Article: Q184056
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install a PostScript printer with a vendor-supplied PPD file and notice
	there is an incomplete list of fonts available for substitution. This list
	appears when you select a font from the font substitution table in Device
	Settings under properties for a PostScript printer.
	
	CAUSE
	=====
	
	This problem is a result of the limited number of PostScript device fonts
	supported by the Windows NT 4.0 PostScript driver. If the PPD file specifies a
	device font that is not part of the approximately 80 fonts known to the driver,
	the driver cannot use that font.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
