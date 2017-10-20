---
layout: page
title: "Q202333: Printer Codes from MS-DOS-based Programs Do Not Function"
permalink: /kb/202/Q202333/
---

## Q202333: Printer Codes from MS-DOS-based Programs Do Not Function

{% raw %}

	Article: Q202333
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print jobs from an MS-DOS-based program within Windows NT, Windows NT
	does not pass the printer control codes to the printer.
	
	WORKAROUND
	==========
	
	To work around this problem, you can obtain certain third-party programs that
	allow print jobs to be sent directly to the printer without any processing by
	Windows NT.
	
	MORE INFORMATION
	================
	
	Setting the printer processor to RAW (click Start, point to Settings, click
	Printers, right-click the non-network printer, click Properties, and then click
	the General tab) or a using a custom separator page does not solve the issue.
	For additional information about using a separator page, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q131714 Custom PCL Separator File Example
	
	Perilous Software manufactures a product called RawPrint, which seems to
	correctly pass the control codes. RawPrint is available for download from the
	following third-party Web site:
	
	  http://www.perilous.com/
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
