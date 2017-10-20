---
layout: page
title: "Q281403: CGI Can't Load DLL in Directory with Extended ASCII Characters"
permalink: /kb/281/Q281403/
---

## Q281403: CGI Can't Load DLL in Directory with Extended ASCII Characters

{% raw %}

	Article: Q281403
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
	
	When a DLL is in a directory with extended ASCII characters in its name, if a
	CGI application in a different directory tries to load the DLL, the following
	error message may occur, even if the directory (containing the DLL) name is in
	the PATH system environment variable:
	
	  The specified CGI application misbehaved by not returning a complete set of
	  HTTP headers. The headers it did return are:
	
	NOTE: This error message can occur for other reasons than the one described in
	this article.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	For Windows 2000:
	
	  Date        Time      Version         Size      File name
	  ---------------------------------------------------------
	  1/3/2001   05:48p	5.0.2195.3101   357,136	   W3svc.dll
	
	For IIS 4.0:
	
	  Date        Time      Version         Size       File name
	  ----------------------------------------------------------
	  02/16/2001  09:30a    4.2.760.1       214,544    adsiis.dll
	  02/16/2001  09:30a    4.2.760.1       330,672    asp.dll
	  02/16/2001  09:29a    4.2.760.1        55,904    httpodbc.dll
	  02/16/2001  09:30a    4.2.760.1        98,912    iischema.dll
	  02/16/2001  09:28a    4.2.760.1        63,472    iislog.dll
	  02/16/2001  09:29a    4.2.760.1       185,792    infocomm.dll
	  02/16/2001  09:28a    4.2.760.1        29,520    iscomlog.dll
	  02/16/2001  09:30a    4.2.760.1        38,256    ssinc.dll
	  02/16/2001  09:30a    4.2.760.1        25,360    sspifilt.dll
	  02/16/2001  09:29a    4.2.760.1       229,024    w3svc.dll
	  02/16/2001  09:29a    4.2.760.1        88,032    wam.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
