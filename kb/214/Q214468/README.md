---
layout: page
title: "Q214468: WD97: &quot;Print to File&quot; Option Set After Printing from Binder"
permalink: /kb/214/Q214468/
---

## Q214468: WD97: &quot;Print to File&quot; Option Set After Printing from Binder

{% raw %}

	Article: Q214468
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta word8 word97
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you print a binder that contains two or more files (at least one of them is a
	Word document), and then print from a separate session of Word, the Print to
	file option is turned on automatically.
	
	NOTE This problem occurs when the binder is left open after printing and then you
	start Word.
	
	CAUSE
	=====
	
	The Print binder as a single job option is selected (default) in Microsoft
	Binder. With this option selected, Binder prints to a file before sending the
	file to the printer. Thus, the Print to file option remains selected when you
	start Word.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods appropriate for
	your situation:
	
	Method 1: Turn Off the Print Binder as a Single Job Option
	----------------------------------------------------------
	
	1. In Microsoft Binder, click Binder Options on the File menu.
	
	2. Under Apply to all binders, clear the Print binder as a single job check box.
	
	3. Click OK.
	
	Method 2: Quit Binder
	---------------------
	
	Before you start Word, quit Microsoft Binder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
