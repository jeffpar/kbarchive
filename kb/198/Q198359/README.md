---
layout: page
title: "Q198359: WD97: Err Msg: &quot;MergeField Was Not Found...&quot; When Mail Merging"
permalink: /kb/198/Q198359/
---

## Q198359: WD97: Err Msg: &quot;MergeField Was Not Found...&quot; When Mail Merging

{% raw %}

	Article: Q198359
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to run a mail merge using a main document and data source that were
	created in Word version 5.x for Macintosh, the following error message may
	appear:
	
	  Error! MergeField was not found in header record of data source.
	
	CAUSE
	=====
	
	This problem occurs if the Word 5.x document contains a MERGEFIELD field with a
	division (/) symbol. This symbol is not converted correctly in later versions of
	Word.
	
	For example:
	
	In a converted Word 5.x main document, you may have a MERGEFIELD that resembles
	one of the following examples:
	
	  <<Zip/10>>
	
	  -or-
	
	  { MergeField Zip/10 }
	
	WORKAROUND
	==========
	
	To work around this problem, change the MERGEFIELD so that it resembles the
	following:
	
	  { = { MergeField Zip } / 10 }
	
	NOTE: To change field codes in the Word versions listed at the beginning of this
	article, use the ALT+F9 shortcut keys.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
