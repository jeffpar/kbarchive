---
layout: page
title: "Q225066: WD97: Application Error When Document Embedded in Lotus Notes"
permalink: /kb/225/Q225066/
---

## Q225066: WD97: Application Error When Document Embedded in Lotus Notes

{% raw %}

	Article: Q225066
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you embed a Word document in Lotus Notes, when you open the Word document and
	then return to Lotus Notes, Microsoft Word may display an error message similar
	to the following:
	
	  WINWORD.exe - Application Error
	
	  The instruction at 0xXXXXXXXX referenced memory at 0x00000000.
	
	  The memory could not be 'read'.
	
	  Click ok to terminate the application.
	
	CAUSE
	=====
	
	This problem only occurs when bookmarks are present in the header or footer of
	the document.
	
	RESOLUTION
	==========
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove the bookmark that is in the header or footer
	of the Word document before you embed the document into Lotus Notes.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	Office 2000 SR-1/SR-1a.
	
	Additional query words: crash qfe
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
