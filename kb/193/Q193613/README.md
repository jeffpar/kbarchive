---
layout: page
title: "Q193613: ADSI Paths Greater than 80 Characters Causes Access Violation"
permalink: kb/193/Q193613/
---

## Q193613: ADSI Paths Greater than 80 Characters Causes Access Violation

	Article: Q193613
	Product(s): Internet Information Server
	Version(s): winnt:2.5,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix kbADSI kbiis400
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Active Directory Service Interfaces, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using paths that are greater than 80 characters with the Microsoft Active
	Directory Services Interface (ADSI) causes an access violation error to occur.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: pathnames path-names path names eighty akz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix kbADSI kbiis400 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbAudDeveloper kbADSISearch kbiis400 kbADSI250
	Version           : winnt:2.5,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
