---
layout: page
title: "Q170312: FP: Java Applets Fail if Case Is Incorrect in Codebase"
permalink: /kb/170/Q170312/
---

## Q170312: FP: Java Applets Fail if Case Is Incorrect in Codebase

{% raw %}

	Article: Q170312
	Product(s): Word Front Page
	Version(s): windows:97,macintosh:1.0
	Operating System(s): 
	Keyword(s): kbole kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q207567.
	
	For a Microsoft FrontPage 98 version of this article, see Q194052.
	
	SYMPTOMS
	========
	
	When you insert a Java Applet into an HyperText Markup Language (HTML) document,
	the Java Applet may not function if you do not use the same case for the class
	file in the Web when you enter the file name for the class file in the codebase.
	
	CAUSE
	=====
	
	According to the Java programming specification, file names are case sensitive.
	For example, if the original class file name is MyJavaApplet.class and you
	entered myjavaapplet.class into the codebase, the Java applet will not load
	because Java considers these two files to be different.
	
	RESOLUTION
	==========
	
	When you specify a class name for a Java applet in the codebase, verify that the
	upper- and lower-case characters you type exactly match the file name.
	
	Java is manufactured by Sun Microsystems, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbole kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97,macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
