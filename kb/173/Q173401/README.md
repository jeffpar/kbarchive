---
layout: page
title: "Q173401: Netscape Navigator Starts When You View Internet Newsgroups"
permalink: /kb/173/Q173401/
---

## Q173401: Netscape Navigator Starts When You View Internet Newsgroups

{% raw %}

	Article: Q173401
	Product(s): The Microsoft Network
	Version(s): 1.0,2.0,2.5,2.51,4.0
	Operating System(s): 
	Keyword(s): kbtool kbmsn
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5, 2.51 
	- Microsoft Internet Mail and News version 1.0 for Windows 95 
	- Microsoft Outlook Express version 4.0 for Windows 95 
	- Microsoft Outlook Express version 4.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view forums or Internet newsgroups on MSN, The Microsoft
	Network, Netscape Navigator may start instead of Internet News or Outlook
	Express.
	
	CAUSE
	=====
	
	This behavior can occur if the file association for the News protocol has
	changed.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the method appropriate for your newsreader:
	
	Internet News
	-------------
	
	1. Right-click Start, and then click Explore.
	
	2. On the View menu, click Folder Options (if you are using Microsoft Internet
	  Explorer version 4.0 with the Active Desktop installed) or Options.
	
	3. Click the File Types tab.
	
	4. In the list of registered file types, click "URL:News Protocol," and then
	  click Edit.
	
	5. Under Actions, click Open, and then click Edit.
	
	6. In the Application Used To Perform Action box, type the following line:
	
	  "Rundll32.exe C:\windows\system\mailnews.dll,News_RunDLL" (without the
	  quotation marks)
	
	7. Click OK or Close until you return to Windows.
	
	Outlook Express
	---------------
	
	1. Right-click Start, and then click Explore.
	
	2. On the View menu, click Folder Options (if you are using Microsoft Internet
	  Explorer version 4.0 with the Active Desktop installed) or Options.
	
	3. Click the File Types tab.
	
	4. In the list of registered file types, click "URL:News Protocol," and then
	  click Edit.
	
	5. Under Actions, click Open, and then click Edit.
	
	6. In the Application Used To Perform Action box, type the following line,
	  including the quotation marks:
	
	  "C:\PROGRAM FILES\OUTLOOK EXPRESS\MSIMN.EXE" /newsurl:%1
	
	7. Click OK or Close until you return to Windows.
	
	Additional query words: 1.0 4.0 msn inetnewsw95 outexw95
	
	======================================================================
	Keywords          : kbtool kbmsn 
	Technology        : kbMSNSearch kbOutlookExpressSearch kbIMNSearch kbZNotKeyword3 kbOutlookExpressNT400Search kbOutlookExpress95Search kbOutlookExpress400Win95 kbMSN200 kbMSN251 kbMSN250 kbIMN100Win95 kbOutlookExpress400NT400
	Version           : :1.0,2.0,2.5,2.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
