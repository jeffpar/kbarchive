---
layout: page
title: "Q237813: Err: &quot;INF Install Failure&quot; When Non-administrator Logs On"
permalink: /kb/237/Q237813/
---

## Q237813: Err: &quot;INF Install Failure&quot; When Non-administrator Logs On

	Article: Q237813
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Microsoft Windows NT 4.0 Service Pack 4 and then install
	Internet Explorer 5 on a Terminal Server computer, a non-administrative user
	receives the following error message multiple times when logging on for the
	first time:
	
	  Advanced INF install.
	
	  INF install failure. Reason: Access is denied.
	
	After the user clicks OK in all of the pop-up messages, the personalized settings
	process continues, and the user's desktop is then displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem, the administrator should set the Terminal server to
	Install mode by typing the following at a command prompt:
	
	  "change user /install" (without the quotation marks)
	
	Then run the Microsoft Internet Explorer 4.0 Application Compatibility script.
	The Msie40.cmd file is located in %SystemRoot%\Application Compatibility
	Scripts\Install\ folder.
	
	After the script is complete, return to Execute mode by typing the following at a
	command prompt:
	
	  "change user /execute" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0,
	Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
