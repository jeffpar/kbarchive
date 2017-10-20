---
layout: page
title: "Q171068: WD97: Word Uses 100 Percent of the CPU During Typing"
permalink: /kb/171/Q171068/
---

## Q171068: WD97: Word Uses 100 Percent of the CPU During Typing

{% raw %}

	Article: Q171068
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are working in Microsoft Word 97, a central processing unit (CPU)
	usage monitor may show the CPU running at near 100 percent on some computers.
	
	This symptom occurs even while you are performing operations that are not
	perceived as CPU intensive, such as typing, running the proofing tools, or other
	similar common word processing tasks.
	
	CAUSE
	=====
	
	The Word 97 program generates many low-priority requests which keep the CPU at
	near 100-percent usage. Note, however, that because these requests are
	low-priority, they will yield CPU time to any process that requests it.
	Therefore, this behavior will not affect your computer's performance.
	
	WORKAROUND
	==========
	
	Word 97 Service Release 1 (SR-1) does correct some causes of 100-percent CPU
	usage and will prevent 100-percent CPU usage from happening in some cases.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	If you are running the Intel Power Monitor software, you can force Word to cut
	back on CPU usage by using the Fix button on the Intel Power Monitor.
	
	
	MORE INFORMATION
	================
	
	Running at 100-percent CPU usage does not make Word or other programs run
	slowly, because Microsoft Windows will preempt Word and give CPU time to other
	programs.
	
	If you are running Word 97 on a laptop computer, your computer may consume less
	power if you use Microsoft Word 97, Service Release 1. This version of Word
	allows the CPU in your computer to return to an idle state more quickly, thus
	conserving battery power.
	
	NOTE: Word will still hit 100-percent CPU usage when performing complex tasks.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
