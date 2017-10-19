---
layout: page
title: "Q307633: IIS Does Not Return HTTP 304 Not Modified for Compressed Content"
permalink: /kb/307/Q307633/
---

## Q307633: IIS Does Not Return HTTP 304 Not Modified for Compressed Content

	Article: Q307633
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use HTTP compression, Internet Information Services (IIS) sends the
	complete HTML page instead of responding with an HTTP status code "304 Not
	Modified" message. This occurs even if the HTML page has not been modified.
	
	CAUSE
	=====
	
	If a browser includes the length attribute in the GET request, IIS compares the
	length of the compressed page with the length that is submitted by the browser.
	Because the browser sends the size of the uncompressed page, IIS submits the
	page again.
	
	WORKAROUND
	==========
	
	Do not use HTTP compression.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Version        Size    File name 
	  ----------------------------------------------------
	  11-Oct-2001 15:16  5.0.2195.43   337,680  Asp.dll
	  11-Oct-2001 15:16  5.0.2195.36   299,792  Fscfg.dll
	  11-Oct-2001 15:16  5.0.2195.43     8,464  Ftpctrs2.dll
	  11-Oct-2001 15:16  5.0.2195.43     6,416  Ftpmib.dll
	  11-Oct-2001 15:16  5.0.2195.43     9,488  Httpmib.dll
	  11-Oct-2001 15:16  5.0.2195.44    13,584  Infoadmn.dll
	  11-Oct-2001 15:16  5.0.2195.44   245,520  Infocomm.dll
	  11-Oct-2001 15:16  5.0.2195.44    62,736  Isatq.dll
	  30-May-2001 00:03  5.0.2195.36     3,584  Spmsg.dll
	  11-Oct-2001 15:16  5.0.2195.43     7,440  W3ctrs.dll
	  11-Oct-2001 15:16  5.0.2195.44   348,432  W3svc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in IIS 5.0. This problem was
	first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
