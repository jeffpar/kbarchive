---
layout: page
title: "Q171717: FP: Cannot Create Web Using .com, .dll, or .exe Extension"
permalink: kb/171/Q171717/
---

## Q171717: FP: Cannot Create Web Using .com, .dll, or .exe Extension

	Article: Q171717
	Product(s): Word Front Page
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 23-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft Internet Information Server 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205518.
	
	For a Microsoft FrontPage 98 version of this article, see Q194292.
	
	SYMPTOMS
	========
	
	When you create a Web with a name that ends with an extension, such as .com,
	.dll, or .exe, you will experience the following:
	
	- You are prompted repeatedly to enter your password.
	
	  -or-
	
	- You receive an HTTP 500 error message repeatedly.
	
	  -and-
	
	- An empty Web is created.
	
	In contrast, this problem does not occur if your Web ends with an extension, such
	as .bat or .asp.
	
	CAUSE
	=====
	
	The Web server interprets the Web name as a command that it cannot execute.
	
	RESOLUTION
	==========
	
	When you receive the Password prompt, click Cancel. You may need to click Cancel
	as much as six times. If you receive the HTTP 500 error message, click OK. You
	may need to click OK as much as three times. Delete the empty Web. Create a new
	Web that does not use the .com, .dll, or .exe file extension.
	
	MORE INFORMATION
	================
	
	The password dialog box may prompt you for administrator, author, or end-user
	permission.
	
	If you open another Web before you delete the empty Web you will not be able to
	open the empty Web again. In this case, you will need to delete the Web in
	Windows Explorer and you will need to edit the Services.cnf configuration file
	to remove it from the list of Webs that appear in FrontPage Explorer.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q159239 FP: How to Remove a Web from the List of Webs
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbiisSearch kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
