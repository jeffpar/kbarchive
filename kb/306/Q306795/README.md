---
layout: page
title: "Q306795: Services for UNIX Management Console May Hang"
permalink: /kb/306/Q306795/
---

## Q306795: Services for UNIX Management Console May Hang

	Article: Q306795
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg w2000sfu
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Internet Explorer 5.5 Service Pack 2 (SP2), Internet Explorer
	6, Microsoft Office XP, or Windows Critical Update, the Services for UNIX
	Management Console may stop responding (hang) and you may receive the following
	Dr. Watson error message:
	
	  Application exception occurred:
	  App: obj\i386\mmc.exe (pid=1580)
	  When: 8/21/2001 @ 15:14:22.202
	  Exception number: c0000005 (access violation)
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows 2000 service pack that contains this fix.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  English: DownloadDownload Q306795_SFU_2_X86.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35481)
	
	  Japanese: DownloadDownload Q306795_SFU_2_X86.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35504)
	
	Release Date: January 16, 2002
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time     Version        Size    File name     
	  -------------------------------------------------------
	  09/04/2001  04:40PM  5.2000.328.20  45,056  Sfuwbem.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: sfu
	
	======================================================================
	Keywords          : kbenv kberrmsg w2000sfu 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
