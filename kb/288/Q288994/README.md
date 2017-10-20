---
layout: page
title: "Q288994: Data Corruption or AV in ContinueRawRead"
permalink: /kb/288/Q288994/
---

## Q288994: Data Corruption or AV in ContinueRawRead

{% raw %}

	Article: Q288994
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a ReadRaw data filter returns a status of SF_STATUS_REQ_READ_NEXT several
	times consecutively (before returning a status of
	SF_STATUS_REQ_NEXT_NOTIFICATION) and is also calling ServerSupportFunction with
	SF_REQ_SET_NEXT_READ_SIZE to specify the amount of data to be read, you may
	encounter data corruption and/or an access violation (AV).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of the Internet Information Server (IIS) 5.0 fix should have
	the following file attributes or later:
	
	  Date      Time     Version        Size     File name    Platform
	  --------------------------------------------------------------
	  3/21/2001 7:26AM   5.0.2195.3393  357,648  W3svc.dll    x86
	
	The English version of the IIS 4.0 fix should have the following file attributes
	or later:
	
	  Date      Time      Version     Size      File name     Platform
	  ----------------------------------------------------------------
	  3/22/2001 8:26:52PM 4.2.762.1   214,544   Adsiis.dll    x86
	  3/22/2001 8:27:11PM 4.2.762.1   330,672   Asp.dll       x86
	  3/22/2001 8:26:14PM 4.2.762.1   55,904    Httpodbc.dll  x86
	  3/22/2001 8:26:53PM 4.2.762.1   98,912    Iischema.dll  x86
	  3/22/2001 8:25:10PM 4.2.762.1   63,472    Iislog.dll    x86
	  3/22/2001 8:25:25PM 4.2.762.1   185,792   Infocomm.dll  x86
	  3/22/2001 8:25:13PM 4.2.762.1   29,520    Iscomlog.dll  x86
	  3/22/2001 8:26:21PM 4.2.762.1   38,256    Ssinc.dll     x86
	  3/22/2001 8:26:30PM 4.2.762.1   16,384    Sspifilt.dll  x86
	  3/22/2001 8:26:09PM 4.2.762.1   229,024   W3svc.dll     x86
	  3/22/2001 8:25:52PM 4.2.762.1   88,032    Wam.dll       x86
	
	  3/22/2001 8:45:56PM 4.2.762.1   307,984   Adsiis.dll    alpha
	  3/22/2001 8:46:17PM 4.2.762.1   552,720   Asp.dll       alpha
	  3/22/2001 8:45:27PM 4.2.762.1   89,872    Httpodbc.dll  alpha
	  3/22/2001 8:46:00PM 4.2.762.1   107,280   Iischema.dll  alpha
	  3/22/2001 8:44:26PM 4.2.762.1   112,912   Iislog.dll    alpha
	  3/22/2001 8:44:39PM 4.2.762.1   305,424   Infocomm.dll  alpha
	  3/22/2001 8:44:28PM 4.2.762.1   46,352    Iscomlog.dll  alpha
	  3/22/2001 8:45:33PM 4.2.762.1   60,688    Ssinc.dll     alpha
	  3/22/2001 8:45:38PM 4.2.762.1   39,696    Sspifilt.dll  alpha
	  3/22/2001 8:45:22PM 4.2.762.1   385,296   W3svc.dll     alpha
	  3/22/2001 8:45:06PM 4.2.762.1   150,288   Wam.dll       alpha
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	4.0 and 5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbDSupport kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
