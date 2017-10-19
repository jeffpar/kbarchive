---
layout: page
title: "Q257619: Access Violation When Path/File Name Is More Than 260 Characters"
permalink: /kb/257/Q257619/
---

## Q257619: Access Violation When Path/File Name Is More Than 260 Characters

	Article: Q257619
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a long path or file name (more than 260 characters) is used in the
	<!--#include virtual | file ="filename"--> directive in an ASP page, IIS
	generates an Access Violation error message.
	
	CAUSE
	=====
	
	The buffer allocated for the file name is 260 characters long. Therefore, a file
	name that is more than 260 characters causes a buffer overflow and an Access
	Violation error message to occur.
	
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix for Windows NT 4.0 should have the following file
	attributes or later:
	
	  Date      Time    Version  Size     File name  Platform
	  -------------------------------------------------------
	  01/03/00  01:45p  4.2.737  329,024  Asp.dll    x86
	  01/03/00  01:45p  4.2.737  550,160  Asp.dll    Alpha
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed that this is a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	A fix has been added to check the file-name length. If the file name is more
	than 260 characters, a "Include file not found" error message is returned to the
	browser.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
