---
layout: page
title: "Q168416: WD97: Using ActiveX Control in Mail Merge Causes Page Fault"
permalink: /kb/168/Q168416/
---

## Q168416: WD97: Using ActiveX Control in Mail Merge Causes Page Fault

{% raw %}

	Article: Q168416
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbdta word8 word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click an ActiveX control in a document created by a mail merge, and
	then you click in the document, you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at 0137:address.
	
	NOTE: The actual memory address may vary.
	
	CAUSE
	=====
	
	This problem may occur when you do the following during a mail merge:
	
	- Insert an ActiveX control into a mail merge main document.
	
	  -and-
	
	- In the Merge To list, click New Document to set the type of mail merge.
	
	  -and-
	
	- Click the ActiveX control in the merged document, and then click in the
	  document.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q141077 WD97: "Invalid Page Fault" During Mail Merge
	
	Additional query words: 8.00 8.0 word97 gpfault general protection IPF
	
	======================================================================
	Keywords          : kberrmsg kbtool kbdta word8 word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
