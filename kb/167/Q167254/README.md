---
layout: page
title: "Q167254: WD97: Invalid Page Fault Applying Font Animation to Footer Text"
permalink: /kb/167/Q167254/
---

## Q167254: WD97: Invalid Page Fault Applying Font Animation to Footer Text

{% raw %}

	Article: Q167254
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply any font animation text effect to the word "Confidential" in the
	footer of a document based on the Contemporary Memo template, you receive one of
	the following error messages.
	
	Windows 95
	----------
	
	  This program has performed an illegal operation and will be shutdown.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, the following error message appears:
	
	  WINWORD caused an invalid page fault in module MSO97.DLL at 0137:307ecfe9.
	
	Windows NT 4.0
	--------------
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  WINWORD.exe
	  Exception: access violation (0xc0000005), Address: 0x307c97c2
	
	RESOLUTION
	==========
	
	Do not apply font animation text effects to the word "Confidential."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 8.0 shimmer sparkle marching red ants black las vegas lights blinking background
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
