---
layout: page
title: "Q233168: Err Msg: The System Could Not Find the File Specified"
permalink: kb/233/Q233168/
---

## Q233168: Err Msg: The System Could Not Find the File Specified

	Article: Q233168
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Web Site server bindings information written to metabase is corrupted when you
	use the Internet Information Server (IIS) HTML Administration tool to change
	Site logging properties for a Web site. This can render the site unreachable
	because of an incorrect value for the host header name. The following error
	message may occur:
	
	  The system could not find the file specified.
	
	CAUSE
	=====
	
	Bindings properties are stored in session variables. Entering the Web Site
	logging dialog in the HTML Admin resets the session variables, which causes
	incorrect information to be written for the bindings.
	
	WORKAROUND
	==========
	
	To work around this issue, use the Microsoft Management Console to correct the
	Web Site bindings information.
	
	RESOLUTION
	==========
	
	Windows NT Server, Internet Information Server, or Workstation 4.0
	------------------------------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
