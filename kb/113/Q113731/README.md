---
layout: page
title: "Q113731: WD97: ODBC Error Opening a DBF File with Hyphen in the File Name"
permalink: /kb/113/Q113731/
---

## Q113731: WD97: ODBC Error Opening a DBF File with Hyphen in the File Name

{% raw %}

	Article: Q113731
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbualink97 kbmerge kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you try to access a dBASE or FoxPro database file using ODBC as the
	conversion method, you may receive the following error message:
	
	  Word was unable to open the data source
	
	CAUSE
	=====
	
	This error message occurs if the file you are trying to use contains a hyphen in
	the file name. (To access a dBASE or FoxPro file, use the Database command on
	the Insert menu or the Mail Merge feature.)
	
	
	WORKAROUND
	==========
	
	Rename the dBASE or FoxPro database file so that it does not contain a hyphen.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: ODBC database dash winword 8.0 word8 word97
	
	======================================================================
	Keywords          : kbprint kbualink97 kbmerge kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
