---
layout: page
title: "Q280426: Cannot Put a File with a Name That Ends with &quot;ABOR&quot;"
permalink: /kb/280/Q280426/
---

## Q280426: Cannot Put a File with a Name That Ends with &quot;ABOR&quot;

{% raw %}

	Article: Q280426
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use FTP to transfer a file to an Internet Information Server or
	Internet Information Services server, the put does not work if the file name
	meets all of the following conditions:
	
	- The file name uses all uppercase letters.
	
	- The file name contains the string "ABOR".
	
	- The file name has no extension.
	
	The FTP server sees such a file name as an FTP "abor" command and responds with
	"Quit." This issue occurs with with Microsoft Windows NT 4.0-based computers as
	the FTP client to Internet Information Server or Internet Information Services.
	
	WORKAROUND
	==========
	
	To work around the problem, rename the file or do not send all uppercase
	letters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: iis capital caps
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
