---
layout: page
title: "Q269272: Mail Client Address List Truncated Using &quot;Mailto:&quot; Link"
permalink: kb/269/Q269272/
---

## Q269272: Mail Client Address List Truncated Using &quot;Mailto:&quot; Link

	Article: Q269272
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a hyperlink that uses a "Mailto" Uniform Resource Locator (URL)
	with a recipient list that exceeds 260 characters, a truncated address list may
	be created in the e-mail program that is started (such as Microsoft Outlook or
	Microsoft Outlook Express).
	
	CAUSE
	=====
	
	This is a Windows NT 4.0 limitation. The URL is passed to a Windows NT 4.0 shell
	function (ShellExecute) to create a process for the mail client to run under.
	The Shell function passes the address list as a parameter and the variable used
	for that parameter is declared as a fixed size buffer (260 bytes). When the mail
	client is started and the address list is passed as a parameter, the address
	list is limited to 260 bytes.
	
	RESOLUTION
	==========
	
	One possible workaround is to place the members of the recipient list in a
	distribution list and reference the distribution list alias in the "Mailto" URL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This issue does not occur in Microsoft Windows 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
