---
layout: page
title: "Q273877: IIS Shuts Down and Restarts for No Apparent Reason"
permalink: /kb/273/Q273877/
---

## Q273877: IIS Shuts Down and Restarts for No Apparent Reason

{% raw %}

	Article: Q273877
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Services (IIS) 5.0 or Internet Information Server (IIS) 4.0
	shuts down and restarts for no apparent reason.
	
	CAUSE
	=====
	
	IIS 5.0:
	
	This problem can occur because of a known vulnerability. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q300972 Unchecked Buffer in Index Server ISAPI Extension Can Enable Web
	  Server Compromise
	
	Alternatively, this problem can occur when .htm documents are mapped to the
	Ssinc.dll file and IIS receives a request with the "HEAD" verb to process. This
	is not supported on default documents, and therefore, IIS returns a 403 error
	message. However, IIS fails when it handles this error condition, which causes
	it to shut down and then restart the IIS services.
	
	IIS 4.0:
	
	This problem can occur because of a known vulnerability. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q300972 Unchecked Buffer in Index Server ISAPI Extension Can Enable Web
	  Server Compromise
	
	RESOLUTION
	==========
	
	IIS 5.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows 2000 service pack that contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version       Size    File name   Platform
	  -------------------------------------------------------------
	  09/12/2000 07:37p  5.0:2195.2194 357,136 W3svc.dll   x86
	
	
	
	IIS 4.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems that are determined to be at risk of attack. Please evaluate your
	computer's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your computer. Please see the
	associated Microsoft Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/MS01-033.asp) to help make
	this determination. This fix may receive additional testing at a later time, to
	further ensure product quality. If your computer is sufficiently at risk,
	Microsoft recommends that you apply this fix now.
	
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
	
	  DownloadDownload Q300972i.exe now
	  (http://www.microsoft.com/ntserver/nts/downloads/critical/q300972/default.asp)
	
	Release Date: Monday, June 18, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time  Version     Size     File name
	  -------------------------------------------------
	  May-25-2001  1436  5.0.1781.3  193,296  Idq.dll
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: HTTP Error 403 Authorization Forbidden denied win2k sp2
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
