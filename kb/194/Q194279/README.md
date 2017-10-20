---
layout: page
title: "Q194279: FP: Cannot Open Pages or Webs After Installing FrontPage"
permalink: /kb/194/Q194279/
---

## Q194279: FP: Cannot Open Pages or Webs After Installing FrontPage

{% raw %}

	Article: Q194279
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdtakbbuglist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 97 version of this article, see Q189446.
	
	SYMPTOMS
	========
	
	If you install Microsoft FrontPage while you are connected to the Internet, you
	may not be able to open pages or Webs in FrontPage after you disconnect your
	computer from the Internet.
	
	CAUSE
	=====
	
	This problem can occur if FrontPage cannot write the localhost alias to the
	Hosts file when you install FrontPage while the computer is connected to the
	Internet. When you close your connection to the Internet, FrontPage cannot
	resolve the computer name to the local loopback address, 127.0.0.1.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods.
	
	Method 1
	--------
	
	Terminate your connection to the Internet before you install FrontPage.
	
	Method 2
	--------
	
	Add the fully qualified domain name to the Hosts file.
	
	1. Open the Hosts file located in the System folder.
	
	2. Add the folowing line to the end of the file:
	
	  "127.0.0.1 localhost <machinename>" (without the quotation marks)
	
	  NOTE: The <machinename> is the DNS name assigned to the local machine.
	  To set the <machinename>, double-click the Network Control Panel and
	  then click the Identification tab.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta kbbuglist
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage2000Search kbFrontPage98Search kbZNotKeyword3 kbZNotKeyword5
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
