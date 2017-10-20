---
layout: page
title: "Q170830: Learn Java Now Overwrites Later Version Of Internet Explorer"
permalink: /kb/170/Q170830/
---

## Q170830: Learn Java Now Overwrites Later Version Of Internet Explorer

{% raw %}

	Article: Q170830
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbdocerr
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual J++ 1.0, Publisher's Edition, Learn Java Now 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Publisher's Edition of Visual J++ from Learn Java Now, ISBN
	1-57231-428-1, one or more of the following symptoms may occur:
	
	- you may lose the security features of Internet Explorer 3.02
	
	- your copy of a later version of Internet Explorer may be replaced by Internet
	  Explorer 3.0
	
	CAUSE
	=====
	
	The Setup program for the Publisher's Edition of Visual J++ will automatically
	install Internet Explorer 3.0 with Java functionality onto your computer. If you
	had a later version of Internet Explorer previously installed, the Visual J++
	Setup program will overwrite the later version and replace it with Internet
	Explorer 3.0.
	
	WORKAROUND
	==========
	
	To prevent Visual J++ from installing the older version of Microsoft Internet
	Explorer, follow these steps.
	
	1. Insert the Learn Java Now disc into your CD-ROM drive. If the Master Setup
	  screen appears, close the Master Setup window.
	
	2. Click the Start button, point to Programs, and click MS-DOS Prompt (in
	  Windows 95) or Command Prompt (in Windows NT).
	
	3. Type the following command:
	
	  " D:\msdev\setup /novm " (without the quotation marks)
	
	  Change the drive letter to match your CD-ROM drive if necessary.
	
	4. Follow the directions in the Setup program to install Microsoft Visual J++,
	  Publisher's Edition.
	
	MORE INFORMATION
	================
	
	When Microsoft Internet Explorer 3.0 is installed to your computer, any items
	previously saved to your Favorites folder or Microsoft Internet Explorer cache
	should remain unaffected. However, you will lose the extra security features of
	Microsoft Internet Explorer 3.02, including Authenticode.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in Microsoft Visual J++ 1.0,
	Publisher's Edition. We are researching this problem and will post new
	information as soon as it becomes available.
	
	Additional query words: mspress ms_press press bookbug java
	
	======================================================================
	Keywords          : kbinterop kbdocerr 
	Technology        : kbVJsearch kbAudDeveloper kbVJ100
	Version           : :
	
	=============================================================================
	

{% endraw %}
