---
layout: page
title: "Q323064: Access Violation in NotifySendHeader"
permalink: /kb/323/Q323064/
---

## Q323064: Access Violation in NotifySendHeader

{% raw %}

	Article: Q323064
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under stress, Internet Information Server (IIS) may fail with an access
	violation if an Internet Server Application Programming Interface (ISAPI) filter
	is installed and the server is stressed with HTTP 0.9 requests.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
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
	
	  Date         Time   Version         Size  File name      Platform
	  -----------------------------------------------------------------
	  03-Jun-2002  15:47  4.2.777.1    214,544  Adsiis.dll     x86  
	  03-Jun-2002  15:47  4.2.777.1    330,672  Asp.dll        x86  
	  03-Jun-2002  15:47  4.2.777.1     34,384  Clusiis4.dll   x86  
	  03-Jun-2002  15:46  4.2.777.1     55,392  Httpodbc.dll   x86  
	  03-Jun-2002  15:47  4.2.777.1     98,912  Iischema.dll   x86  
	  03-Jun-2002  15:45  4.2.777.1     63,984  Iislog.dll     x86  
	  03-Jun-2002  15:45  4.2.777.1    185,792  Infocomm.dll   x86  
	  03-Jun-2002  15:45  4.2.777.1     29,520  Iscomlog.dll   x86  
	  03-Jun-2002  15:46  4.2.777.1     38,256  Ssinc.dll      x86  
	  03-Jun-2002  15:46  4.2.777.1     25,360  Sspifilt.dll   x86  
	  03-Jun-2002  15:46  4.2.777.1    231,104  W3svc.dll      x86  
	  03-Jun-2002  15:46  4.2.777.1     88,032  Wam.dll        x86  
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server.
	
	
	Additional query words: IIS hotfix hot fix qfe quick engineering patch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
