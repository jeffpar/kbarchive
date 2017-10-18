---
layout: page
title: "Q225255: Some Share Names May Not Work Correctly"
permalink: kb/225/Q225255/
---

## Q225255: Some Share Names May Not Work Correctly

	Article: Q225255
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, used with:
	   - Microsoft Cluster Server 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use one of the following names as a share name, some API operations on
	this share will fail:
	
	  M, MA, MAI, MAIL, MAILS, MAILSL, MAILSLO, MAILSLOT
	
	While MAILSLOT is a reserved name, the other share names are legal regardless of
	case.
	
	A known API call is FindFirstFile(). It may fail with an error 1 "Incorrect
	function". Unfortunately, Microsoft Cluster Server uses this API call to verify
	if the share name is alive.
	
	CAUSE
	=====
	
	The share name was compared against the string "MAILSLOT" and found identical,
	even if the share name was shorther than eight characters.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT Server version 4.0 Service Pack 6.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
