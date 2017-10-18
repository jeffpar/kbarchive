---
layout: page
title: "Q246729: Access Violations in Spooler Service Printing Long Named Job"
permalink: kb/246/Q246729/
---

## Q246729: Access Violations in Spooler Service Printing Long Named Job

	Article: Q246729
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Server spooler process may generate "Access violation" error
	messages and stop responding (hang) intermittently. When this occurs, an error
	message may be displayed, indicating that the print job was not finished
	successfully because the printer is out of paper or another hardware problem has
	occurred.
	
	CAUSE
	=====
	
	This behavior can occur with a print job with a long name. If the print job name
	is longer than 200 bytes and the printer also has a hardware problem, the
	spooler service may not generate an error message. This behavior can occur even
	if you are logged on locally.
	
	RESOLUTION
	==========
	
	To correct this behavior, apply the Service Pack 6 Terminal Edition fix, which
	is included in the security patch on the following web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms99-047.asp
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Q243649.exe now
	  (http://download.microsoft.com/download/winntsrv40/Patch/Spooler-fix/NT4/EN-US/Q243649.exe)
	  (Intel)
	
	  DownloadDownload Q243649.exe now
	  (http://download.microsoft.com/download/winntsrv40/Patch/Spooler-fix/ALPHA/EN-US/Q243649.exe)
	  (Alpha)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	NOTE: You must be running Service Pack 4 (SP4) or later to apply this fix.
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, you can use either of the following methods:
	
	- Do not print jobs with very long names.
	
	- Keep the printer online and add paper.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For information about setting up a debug session using a modem, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q243649 Unchecked Print Spooler Buffer May Expose System Vulnerability
	
	
	Additional query words: spoolss
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
