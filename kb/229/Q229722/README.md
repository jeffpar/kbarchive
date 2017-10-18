---
layout: page
title: "Q229722: German Compound Word Not Found if Part Is in Noise Word List"
permalink: kb/229/Q229722/
---

## Q229722: German Compound Word Not Found if Part Is in Noise Word List

	Article: Q229722
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Index Server version 2.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If German language support is installed for Index Server 2.0 and used to index
	German documents containing compound words, the following problem may occur. If
	one part of the compound word has an entry in the noise word list of Index
	Server 2.0, the queried word is not found in queries.
	
	For example, if the queried word is "Dreiklang," which is composed of "Drei" and
	"klang," "Drei" is listed in the German noise word list. Therefore, "Dreiklang"
	as a whole is not found. If "Drei" is deleted from the German noise word list,
	"Dreiklang" as a whole word is found, but other words like "Dreikanal" are also
	found.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, upgrade to Windows 2000 Indexing Service.
	
	-OR-
	
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
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	This problem has also been corrected in Windows 2000 Indexing Service.
	
	Additional query words: index compound german
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
