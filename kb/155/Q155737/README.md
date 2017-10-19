---
layout: page
title: "Q155737: StickyKeys Feature Deactivated Without Notice"
permalink: /kb/155/Q155737/
---

## Q155737: StickyKeys Feature Deactivated Without Notice

	Article: Q155737
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbenable kbui kbEnableSight kbEnableMove
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server 
	- Microsoft Windows NT Workstation 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enable the StickyKeys feature by pressing the SHIFT key five times while
	the Accessibility tool is active and then close the tool, the StickyKeys feature
	is turned off, but no audio notification is played.
	
	CAUSE
	=====
	
	When you enable the StickyKeys feature by pressing the SHIFT key five times
	while the Accessibility tool is active, the check box to enable StickyKeys is
	not activated. The fact that the feature was enabled is not recorded when the
	settings information is rewritten from the tool, and a state change is not
	generated. Therefore, no audio notification occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. We are
	researching this problem and will post more information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenable kbui kbEnableSight kbEnableMove 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : winnt:
	
	=============================================================================
	
