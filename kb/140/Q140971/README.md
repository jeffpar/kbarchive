---
layout: page
title: "Q140971: WINS Service Generates a System Error 1 Incorrect Function"
permalink: /kb/140/Q140971/
---

## Q140971: WINS Service Generates a System Error 1 Incorrect Function

{% raw %}

	Article: Q140971
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the WINS service, the following error message appears:
	
	  A System error has occurred
	  System Error 1 has occurred
	  Incorrect Function
	
	CAUSE
	=====
	
	Possible causes of this error message are:
	
	- A corrupt WINS database.
	
	  -or-
	
	- You are attempting to start the WINS Service with a WINS.MDB file that was
	  built from a WINS Server with a different IP Address.
	
	
	RESOLUTION
	==========
	
	If your WINS database is corrupted, rebuild the WINS database.
	
	If you are attempting to start the WINS Service with a WINS.MDB file that was
	built from a WINS Server with a different IP Address, make sure the IP Address
	of the WINS Server is identical to the WINS Server that the database originally
	came from.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q171927
	  TITLE : Missing WINS Directory Causes Missing/Corrupt Error
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
