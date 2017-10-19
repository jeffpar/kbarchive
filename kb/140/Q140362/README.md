---
layout: page
title: "Q140362: BUG: PVCS_SS Does Not Work with PVCS for Windows NT"
permalink: /kb/140/Q140362/
---

## Q140362: BUG: PVCS_SS Does Not Work with PVCS for Windows NT

	Article: Q140362
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbFAQ kbDSupport kbSsafe600FAQkbbuglist
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the PVCS_SS conversion utility, you may receive an error telling
	you that a PVCS log file may be corrupt. PVCS_SS then causes the MS-DOS session
	to hang (stop responding to input).
	
	CAUSE
	=====
	
	PVCS for Windows NT uses a different data/time scheme in the log files. The
	PVSC_SS utility was written to accept the date from the old PVCS log files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: 4.00 5.00
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbFAQ kbDSupport kbSsafe600FAQ kbbuglist
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
