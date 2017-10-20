---
layout: page
title: "Q282458: 502 Access Denied Errors Occur When There Are a Large Number of"
permalink: /kb/282/Q282458/
---

## Q282458: 502 Access Denied Errors Occur When There Are a Large Number of

{% raw %}

	Article: Q282458
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbSysAdmin kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A News Reader client may receive "502 Access Denied" error messages when
	attempting to view the contents of a folder for which they have permissions to
	view.
	
	CAUSE
	=====
	
	The NNTP folder contains a large number of security descriptors for users who
	have permissions to view the contents of this folder. The buffer that is set
	aside to hold these security descriptors is not large enough to hold all the
	descriptors, and therefore, none of the security descriptors are retrieved.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time    Version         Size     File name  
	  ------------------------------------------------------
	  5/31/2001  03:31p  5.0.2195.3649  610,576  Nntpsvc.dll
	
	
	WORKAROUND
	==========
	
	To work around this problem, create nested groups that contains more groups and
	individuals. This will reduce the size of immediate permissions on the folder.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	Additional query words: kbMgmtAdmin
	
	======================================================================
	Keywords          : kbSysAdmin kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
