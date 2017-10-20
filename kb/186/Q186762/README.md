---
layout: page
title: "Q186762: WD97: Advanced Power Management Causes Data Loss"
permalink: /kb/186/Q186762/
---

## Q186762: WD97: Advanced Power Management Causes Data Loss

{% raw %}

	Article: Q186762
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use advanced power management software on a computer with a document
	open in Microsoft Word, you may lose data when the computer goes into suspend
	mode.
	
	CAUSE
	=====
	
	This problem occurs if your document is opened from the network when the
	advanced power management software is on. When the computer is not in use for a
	specified time, the advanced power management software will activate suspend
	mode which will cause possible data loss.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	MORE INFORMATION
	================
	
	Office 97 SR-2 will prevent your advanced power management (APM) software from
	suspending the system with a document opened in Word. If your APM software tries
	to activate the suspend mode, you will receive the following message:
	
	  Word cannot suspend while you have documents open from a network location. To
	  allow your machine to suspend, close open documents or quit Word.
	
	NOTE: If the file is opened locally, rather than from the network, the suspend
	mode will activate without the message and no data loss will occur.
	
	Additional query words: APM
	
	======================================================================
	Keywords          : kb3rdparty kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
