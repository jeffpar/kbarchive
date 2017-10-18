---
layout: page
title: "Q296458: IIS Disregards Host Headers When Using Keep-Alives"
permalink: kb/296/Q296458/
---

## Q296458: IIS Disregards Host Headers When Using Keep-Alives

	Article: Q296458
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Host Headers to configure IIS to host multiple sites using the same
	IP address, if the client is using HTTP/1.1 Keep-Alives and issues a request to
	Host Site A on the IIS server, and then issues a request over the same HTTP
	keep-alive connection to Host Site B by changing the Host Header, IIS disregards
	this Host Header and attempts to fulfill the request on the original host site.
	
	RESOLUTION
	==========
	
	IIS 5.0:
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time        Version        Size      File name    
	-------------------------------------------------------------
	  5/8/2001  07:00p     5.0.2195.3589   357,648   W3svc.dll
	
	
	IIS 4.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Time    Version        Size    File name     Platform
	  ---------------------------------------------------------------
	  06/07/2001   20:09   4.2.766.1     214,544   Adsiis.dll      x86
	  06/07/2001   20:09   4.2.766.1     330,672   Asp.dll         x86
	  06/07/2001   20:08   4.2.766.1      55,392   Httpodbc.dll    x86
	  06/07/2001   20:09   4.2.766.1      98,912   Iischema.dll    x86
	  06/07/2001   20:07   4.2.766.1      63,472   Iislog.dll      x86
	  06/07/2001   20:07   4.2.766.1     185,792   Infocomm.dll    x86
	  06/07/2001   20:07   4.2.766.1      29,520   Iscomlog.dll    x86
	  06/07/2001   20:08   4.2.766.1      38,256   Ssinc.dll       x86
	  06/07/2001   20:08   4.2.766.1      25,360   Sspifilt.dll    x86
	  06/07/2001   20:08   4.2.766.1     229,536   W3svc.dll       x86
	  06/07/2001   20:08   4.2.766.1      88,032   Wam.dll         x86
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	4.0 and Internet Information Services 5.0. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
