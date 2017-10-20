---
layout: page
title: "Q294379: Addressees Appear in Body of SMTP Message Instead of the Header"
permalink: /kb/294/Q294379/
---

## Q294379: Addressees Appear in Body of SMTP Message Instead of the Header

{% raw %}

	Article: Q294379
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbSysAdmin kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Collaboration Data Objects (CDO) to generate a Simple Mail Transfer
	Protocol (SMTP) message, if you specify many addressees on the To line, the
	addressees appear in the body of the message on the receiving end instead of the
	message header.
	
	CAUSE
	=====
	
	This problem occurs because the process that obtains these messages from the
	Pickup directory and queues them for delivery removes the carriage return line
	feed-linear white space (CRLF-LWSP). As a result, the addressee field appears as
	a very long line.
	
	RESOLUTION
	==========
	
	To resolve this problem, either obtain the hotfix referenced in this section or
	Windows 2000 Security Rollup Package 1 (SRP1). For additional information about
	SRP1, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date         Time       Version        Size     File name 
	--------------------------------------------------------------
	5/31/2001   03:31p    5.0.2195.3649   245,520   Adsiis.dll
	5/31/2001   03:31p    5.0.2195.3649   332,560   Asp.dll
	5/29/2001   04:37p    4.0.2.4701      593,976   Fp4autl.dll
	5/31/2001   03:31p    5.0.2195.3649   246,032   Httpext.dll
	5/31/2001   03:31p    5.0.2195.3649    56,592   Httpodbc.dll
	5/31/2001   03:31p    5.0.2195.3649   122,640   Iisrtl.dll
	5/31/2001   03:31p    5.0.2195.3649    13,584   Infoadmn.dll
	5/31/2001   03:31p    5.0.2195.3649   245,520   Infocomm.dll
	5/31/2001   03:31p    5.0.2195.3649    62,736   Isatq.dll
	5/31/2001   03:31p    5.0.2195.3649    46,352   Ism.dll
	5/30/2001   03:40p    5.0.2195.3651      6928   Schmupd.exe
	5/30/2001   03:40p    5.0.2195.3651      7952   Spiisupd.exe
	5/31/2001   03:32p    5.0.2195.3649    41,232   Ssinc.dll
	5/31/2001   03:32p    5.0.2195.3649      7440   W3ctrs.dll
	5/31/2001   03:32p    5.0.2195.3649   353,040   Wsvc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbMgmtAdmin kbWin2000srp1
	
	======================================================================
	Keywords          : kbSecurity kbSysAdmin kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
