---
layout: page
title: "Q173574: WD97: Cannot Use Visual Fox Pro ODBC Driver in Word Mail Merge"
permalink: /kb/173/Q173574/
---

## Q173574: WD97: Cannot Use Visual Fox Pro ODBC Driver in Word Mail Merge

{% raw %}

	Article: Q173574
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta winword word97 kbmerge
	Last Modified: 11-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a mail merge in Microsoft Word 97 with a data file from Visual
	Fox Pro, Visual Fox Pro is not available in the Files Of Type list; and if Word
	finds the file, it does not open it.
	
	This problem applies to files with the .dbc or .dbf file name extensions.
	
	CAUSE
	=====
	
	In order for Word to list a file type in the Files Of Type list during a mail
	merge, Word needs an installable Indexed Sequential Access Method (ISAM) file
	for the product.
	
	Because there is no installable ISAM file for Visual Fox Pro, the Visual Fox Pro
	option is not available in the Files Of Type list.
	
	RESOLUTION
	==========
	
	To resolve this problem in Microsoft Word 97 for Windows, install the latest
	version of Microsoft Data Access Components (MDAC). To obtain the latest version
	of MDAC, please browse to the following Microsoft Web site:
	
	  http://www.microsoft.com/data/download.htm
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem does not occur in
	Microsoft Word 2000.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q237284 WD97: Error Message: "Cannot Find Installable ISAM"
	
	  Q110093 WD: ODBC--Open Database Connectivity Overview
	
	Additional query words: 8.0 8.00 foxpro
	
	======================================================================
	Keywords          : kb3rdparty kbdta winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
