---
layout: page
title: "Q293131: &quot;HTTP 400 - Bad Request&quot; Err Msg if Content Length Header is 0"
permalink: /kb/293/Q293131/
---

## Q293131: &quot;HTTP 400 - Bad Request&quot; Err Msg if Content Length Header is 0

{% raw %}

	Article: Q293131
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Internet Information Server (IIS) and you browse a Web
	site, you may receive the following error message in the browser:
	
	  HTTP 400 - Bad Request
	
	Refreshing the page in the browser may make the error message disappear.
	
	CAUSE
	=====
	
	Under certain conditions, IIS may misinterpret a Content-Length header of 0
	(zero) as a bad HTTP request.
	
	RESOLUTION
	==========
	
	Internet Information Services 5.0
	---------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time    Version        Size     File name
	  -----------------------------------------------------
	  4/11/2001   05:46p  5.0.2195.3492  357,648  W3svc.dll 
	
	
	Internet Information Server 4.0
	-------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version    Size     File name     Platform
	  --------------------------------------------------------------
	  17-Apr-2001  10:30  4.2.765.1  214,544  Adsiis.dll    x86
	  17-Apr-2001  10:30  4.2.765.1  330,672  Asp.dll       x86
	  17-Apr-2001  10:29  4.2.765.1   55,392  Httpodbc.dll  x86
	  17-Apr-2001  10:30  4.2.765.1   98,912  Iischema.dll  x86
	  17-Apr-2001  10:28  4.2.765.1   63,472  Iislog.dll    x86
	  17-Apr-2001  10:29  4.2.765.1  185,792  Infocomm.dll  x86
	  17-Apr-2001  10:28  4.2.765.1   29,520  Iscomlog.dll  x86
	  17-Apr-2001  10:30  4.2.765.1   38,256  Ssinc.dll     x86
	  17-Apr-2001  10:30  4.2.765.1   25,360  Sspifilt.dll  x86
	  17-Apr-2001  10:29  4.2.765.1  229,024  W3svc.dll     x86
	  17-Apr-2001  10:29  4.2.765.1   88,032  Wam.dll       x86
	
	  17-Apr-2001  10:27  4.2.765.1  307,984  Adsiis.dll    Alpha
	  17-Apr-2001  10:27  4.2.765.1  552,720  Asp.dll       Alpha
	  17-Apr-2001  10:27  4.2.765.1   89,360  Httpodbc.dll  Alpha
	  17-Apr-2001  10:27  4.2.765.1  107,280  Iischema.dll  Alpha
	  17-Apr-2001  10:26  4.2.765.1  112,912  Iislog.dll    Alpha
	  17-Apr-2001  10:26  4.2.765.1  305,424  Infocomm.dll  Alpha
	  17-Apr-2001  10:26  4.2.765.1   46,352  Iscomlog.dll  Alpha
	  17-Apr-2001  10:27  4.2.765.1   60,688  Ssinc.dll     Alpha
	  17-Apr-2001  10:27  4.2.765.1   39,696  Sspifilt.dll  Alpha
	  17-Apr-2001  10:27  4.2.765.1  385,296  W3svc.dll     Alpha
	  17-Apr-2001  10:26  4.2.765.1  150,288  Wam.dll       Alpha
	
	
	
	STATUS
	======
	
	Internet Information Services 5.0
	---------------------------------
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	4.0.
	
	MORE INFORMATION
	================
	
	This error may occur anytime the Content-Length header is 0 (zero), but this
	error occurs most often when you search an IBM Lotus Domino Server. If you are
	searching a Lotus Domino Server, after you apply this hotfix you may see the
	following error message in the browser (instead of the "HTTP 400 - Bad Request"
	error message):
	
	  HTTP Web Server: Lotus Notes Exception - Query is not understandable
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
