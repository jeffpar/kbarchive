---
layout: page
title: "Q161965: FP: Java Applet Doesn't Function if Class File Is Moved"
permalink: /kb/161/Q161965/
---

## Q161965: FP: Java Applet Doesn't Function if Class File Is Moved

{% raw %}

	Article: Q161965
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view a page that contains a Java applet in a web browser you receive
	the following error message:
	
	  Load: Class <applet name> not found.
	
	where <applet name> is the name of the Java applet that cannot be found.
	
	CAUSE
	=====
	
	The location of the Java applet was changed in the FrontPage Explorer after you
	inserted it in the FrontPage Editor.
	
	When you save the page in FrontPage Editor, the location of the Java applet is
	saved relative to the location of the page. When you move the Java applet to a
	different directory, this reference is no longer valid. When you browse the
	page, the Java applet does not load.
	
	RESOLUTION
	==========
	
	If you need to move a Java applet after it has been inserted on a page, you must
	also change the reference to the applet. To change the reference, use these
	steps:
	
	1. Open the page in FrontPage Editor.
	
	2. Right-click the Java applet, and then click Properties.
	
	3. In the Applet Base URL box, type the correct path to the Java applet. Note
	  that the path should be relative to the saved location of the page on which
	  you inserted the Java applet.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	
	Additional query words: front page class object
	
	======================================================================
	Keywords          : kb3rdparty kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
