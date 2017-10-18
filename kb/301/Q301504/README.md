---
layout: page
title: "Q301504: Printer Problems After You Apply SP6a"
permalink: kb/301/Q301504/
---

## Q301504: Printer Problems After You Apply SP6a

	Article: Q301504
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbprint kbtool kbui
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 6a (SP6a) to your computer that is running the
	Japanese-language version of Windows NT Server 4.0, Terminal Server Edition, you
	may experience one or more of the following symptoms:
	
	- When you try to view printer properties, you may receive the following error
	  message:
	
	  The binding handle is invalid.
	
	  Note that this symptom does not occur if you are a member of the
	  administrators group.
	
	- You may not be able to install a new printer.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version         Size     File name   Platform
	  ---------------------------------------------------------------
	  11-Jul-01  11:13  4.0.1381.39770  362,240  Rpcrt4.dll  Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a, Terminal Server Edition.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint kbtool kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
