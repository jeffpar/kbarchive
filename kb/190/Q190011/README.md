---
layout: page
title: "Q190011: Perl Script Mappings Converted to Uppercase During Upgrade"
permalink: /kb/190/Q190011/
---

## Q190011: Perl Script Mappings Converted to Uppercase During Upgrade

	Article: Q190011
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading to Internet Information Server (IIS) 4.0, Perl script mappings,
	which are case sensitive, are converted to uppercase.
	
	Specifically, the "%s" string is converted to "%S" UPPERCASE (without the
	quotation marks).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To work around this problem, change the "%S" text back to "%s" (without the
	quotation marks). To do this, perform the following steps:
	
	1. In the Microsoft Management Console, right-click your Internet Information
	  Server name and click Properties on the shortcut menu.
	
	2. In the Properties dialog box, click the Edit button next to Master
	  Properties.
	
	3. In the Application Settings section of the Home Directory tab, click
	  Configuration.
	
	4. Double-click the entry for the extension .PL to edit the Perl mapping.
	
	5. In the Executable box, you will see a path followed by "%S %S" (note that %S
	  is uppercase). For example, you will see something similar to:
	
	     C:\perl\bin\perl.exe %S %S
	 
	
	6. Change %S %S to lowercase %s %s and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
