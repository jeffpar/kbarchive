---
layout: page
title: "Q173771: WD97: Check Links Reports Broken Links If Connection Lost or Bad"
permalink: /kb/173/Q173771/
---

## Q173771: WD97: Check Links Reports Broken Links If Connection Lost or Bad

	Article: Q173771
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbnetwork word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Check Links command on a Web Page, Word may be slow to respond.
	When Word does respond, it may prompt you to fix previously valid hyperlinks
	that are now shown as broken hyperlinks.
	
	CAUSE
	=====
	
	The Check Links command may provide slow response time or report valid
	hyperlinks as broken, when any of the following conditions are true:
	
	- You have no network connection.
	
	  -or-
	
	- You have a bad network connection, for example, Internet proxy server
	  problems.
	
	  -or-
	
	- There is high network traffic.
	
	  -or-
	
	- The location that the hyperlink points to is currently inaccessible.
	
	WORKAROUND
	==========
	
	To work around this issue, use either of the following methods:
	
	- Validate network connections before running the Check Links command.
	
	  -or-
	
	- Click Ignore when prompted to fix a hyperlink that you know is valid.
	
	NOTE: If you click Cancel to stop the Check Links process, and try again later,
	the network may have less traffic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	The new Check Links feature in the Web Authoring Tools Update checks each
	hyperlink or linked image in a Word 97 Hypertext Markup Language (HTML) document
	to verify that the target destination exists. For each broken hyperlink, Word
	prompts you to update the hyperlink.
	
	For additional information about the Web AutoUpdate feature in Word, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q172747 WD97: What's New in the Web Page Authoring Tools Update
	
	  Q163299 WD97: Web Page Authoring Tools AutoUpdate
	
	  Q172502 WD97: Troubleshooting Setup for the Web AutoUpdate Feature
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbnetwork word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
