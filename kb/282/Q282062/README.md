---
layout: page
title: "Q282062: IIS Does Not Authenticate for the /_AuthChangeUrl URL"
permalink: /kb/282/Q282062/
---

## Q282062: IIS Does Not Authenticate for the /_AuthChangeUrl URL

{% raw %}

	Article: Q282062
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) does not authenticate for the /_AuthChangeUrl
	URL, even if Anonymous access is disabled. /_AuthChangeUrl is a special URL that
	is used for the Password Change feature in IIS. When users change their password
	using the Password Change page in IIS, a POST is made to the special
	/_AuthChangeUrl URL. Regardless of the authentication methods on the site, the
	POST request is processed anonymously.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date        Time      Version        Size     File name     
	---------------------------------------------------------
	1/17/2001  04:42p    5.0.2195.3162  357,136  W3svc.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Because of this behavior, Microsoft Internet Explorer does not POST any data to
	/_AuthChangeUrl if the site is configured for Integrated Security. For
	additional information about the problem between Internet Explorer and NTLM
	authentication, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q273573 IISADMPWD Password Change Pages Fail to Change Passwords When Using
	  NTLM Authentication
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbDSupport kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
