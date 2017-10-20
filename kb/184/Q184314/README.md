---
layout: page
title: "Q184314: File Path Error During Setup of Certificate Server"
permalink: /kb/184/Q184314/
---

## Q184314: File Path Error During Setup of Certificate Server

{% raw %}

	Article: Q184314
	Product(s): Internet Information Server
	Version(s): WINNT:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you run Setup for Microsoft Certificate Server version 1.0, the following
	error message may appear:
	
	  You must enter the full path of a directory, starting with a drive letter and
	  :
	
	CAUSE
	=====
	
	A UNC path cannot be used to point to the shared folder. For example:
	
	  \\servername\share
	
	Using this path will elicit the above error message.
	
	WORKAROUND
	==========
	
	In order to resolve this issue, use a path similar to the following:
	
	  C:\winnt\certs
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WINNT:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
