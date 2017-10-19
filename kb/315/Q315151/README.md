---
layout: page
title: "Q315151: FP: Error Message: Cannot Establish Secure Connection Using SSL"
permalink: /kb/315/Q315151/
---

## Q315151: FP: Error Message: Cannot Establish Secure Connection Using SSL

	Article: Q315151
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to open a FrontPage Web on a Web server using Secure Sockets
	Layer (SSL), the FrontPage client stops responding (hangs) or you receive an
	error message similar to the following:
	
	  FrontPage is unable to establish a secure connection with the server, because
	  the server's SSL certificate is either invalid, or issued by an untrusted
	  certificate authority.
	
	
	CAUSE
	=====
	
	This problem can occur if the wecctlflags registry value on the FrontPage client
	computer is configured to bypass the connectivity features of Microsoft Internet
	Explorer. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q250376 FP2000: FrontPage Repeatedly Prompts for User Name and Password When
	  You Open a Web
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor. To do this, click Start and then click Run. In the
	  Open box, type "regedit" (without the quotation marks) and click OK.
	
	2. Select the wecctlflags value located in the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Shared Tools\Web Server Extensions\Web
	  Extender Client
	
	3. On the Edit menu, click Modify. In the Value box, type "0" (without the
	  quotation marks) and then click OK.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	When you set the wecctlflags value to 2, it configures the FrontPage client to
	bypass the connectivity features of Internet Explorer and use it's native
	functionality, which is limited to 40-bit SSL.
	
	
	
	REFERENCES
	==========
	
	For additional information about when to configure the wecctlflags value to
	bypass Internet Explorer functionality, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q287402 Troubleshooting Web Folders
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
