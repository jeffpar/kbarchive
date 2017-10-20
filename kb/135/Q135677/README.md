---
layout: page
title: "Q135677: FIX: Accessing the Internet via MSN causes a crash in VFP"
permalink: /kb/135/Q135677/
---

## Q135677: FIX: Accessing the Internet via MSN causes a crash in VFP

{% raw %}

	Article: Q135677
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Accessing the Internet through Microsoft Network in Windows 95 causes Visual
	FoxPro to quit (crash).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	This problem occurs only in Windows 95 with the Plus Pack installed.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install the Plus Pack.
	
	2. Start Visual FoxPro.
	
	3. Minimize Visual FoxPro.
	
	4. Start Microsoft Network.
	
	5. Go to the Full Internet Trial Area.
	
	6. Click the World Wide Web (WWW) links.
	
	This automatically starts the WWW browser. Wait for the whole page to be
	displayed. At this point, you will see a "An illegal operation ..." dialog box
	with VFP in the title bar.
	
	If Visual FoxPro has not quit yet, return to Microsoft Network, and click another
	WWW link. Again, wait for the whole page to be displayed.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
