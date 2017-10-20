---
layout: page
title: "Q271456: IIS 4.0 Causes Heap Corruption in CGI Application"
permalink: /kb/271/Q271456/
---

## Q271456: IIS 4.0 Causes Heap Corruption in CGI Application

{% raw %}

	Article: Q271456
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a CGI application in Microsoft Internet Information Server
	(IIS) 4.0, the HTTP data returned by the CGI application may get corrupted. An
	Access Violation error message may occur in the WWW Service or in the W3Svc.dll.
	This can occur when the CGI application adds additional HTTP headers to return
	to the client.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version      Size    File name
	  ------------------------------------------------
	  10/04/2000 12:03a  4.02.0752    214,544 Adsiis.dll
	  10/04/2000 12:03a  4.02.0752    330,080 Asp.dll
	  10/04/2000 12:02a  4.02.0752    55,904  Httpodbc.dll
	  10/04/2000 12:03a  4.02.0752    98,912  Iischema.dll
	  10/04/2000 11:13p  4.02.0752    28,851  Iiscnfg.h
	  10/04/2000 12:01a  4.02.0752    185,792 Infocomm.dll
	  10/04/2000 12:02a  4.02.0752    38,256  Ssinc.dll
	  10/04/2000 12:02a  4.02.0752    25,360  Sspifilt.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
