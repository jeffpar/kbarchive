---
layout: page
title: "Q114257: BUG:Index Tag Not Found w/SET COMPATIBLE ON &amp; DELETE TAG ALL"
permalink: kb/114/Q114257/
---

## Q114257: BUG:Index Tag Not Found w/SET COMPATIBLE ON &amp; DELETE TAG ALL

	Article: Q114257
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,2.5b,2.6,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbDSupport k
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SET COMPATIBLE is ON and the command DELETE TAG ALL is issued, the error
	message "Index tag not found" is returned even though DISPLAY STATUS reveals
	that an index is open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, issue the following command:
	
	  USE <table_name>
	
	2. If this table does not have an index, create one by issuing the following
	  command in the Command window:
	
	  INDEX ON <field_name> TAG <tag_name>
	
	3. In the Command window, issue the following commands:
	
	  SET COMPATIBLE ON
	  DELETE TAG ALL
	
	The error "Index tag not found" is returned.
	
	Additional query words: errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbDSupport kbvfp250bug 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :2.0,2.5,2.5a,2.5b,2.6,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
