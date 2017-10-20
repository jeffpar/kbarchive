---
layout: page
title: "Q252941: No &quot;NTLM&quot; Authentication Method Available in IIS 5.0"
permalink: /kb/252/Q252941/
---

## Q252941: No &quot;NTLM&quot; Authentication Method Available in IIS 5.0

{% raw %}

	Article: Q252941
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Internet Information Server (IIS) 4.0, "Windows NT Challenge/Response" (also
	known as NTLM) was listed as an authentication method on the Directory Security
	tab of a Web site. In IIS 5.0, however, this authentication method is not
	listed.
	
	CAUSE
	=====
	
	In IIS 5.0, NTLM is referred to instead as "Integrated Windows authentication".
	
	RESOLUTION
	==========
	
	Use "Integrated Windows authentication" as you would have used NTLM in IIS 4.0.
	
	MORE INFORMATION
	================
	
	For more information, refer to the following:
	
	- In the IIS 5 Documentation, refer to the following topic:
	
	 Administration
	   Server Administration
	     Security
	       Authentication
	         About Authentication
	
	- IIS 4.0 and 5.0 Authentication Methods Chart
	  (http://www.microsoft.com/technet/iis/authmeth.asp)
	
	Additional query words: iis 5 challenge-response Challenge\Response nt lanman akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
