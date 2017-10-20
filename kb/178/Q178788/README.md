---
layout: page
title: "Q178788: WD97: Cannot &quot;Search the Web&quot; After Canceling Connection to ISP"
permalink: /kb/178/Q178788/
---

## Q178788: WD97: Cannot &quot;Search the Web&quot; After Canceling Connection to ISP

{% raw %}

	Article: Q178788
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a dial-up Internet Service Provider (ISP), if you click Search The
	Web and then click Cancel before you connect to the Internet, you will see one
	of the following messages:
	
	  Internet Explorer cannot open the Internet site
	  http://home.microsoft.com/access/autosearch.asp?p=.
	
	  -or-
	
	  Unable to open http://home.microsoft.com/access/allinone.asp. Cannot locate
	  the Internet server or proxy server.
	
	  -or-
	
	  Internet Explorer cannot open the Internet site http://www.microsoft.com
	  isapi/redir.dll?msft&SBP=&PLCID=1033&PVER=&OS=Win&OVER=4&OLCID=1033&CLCID=1033&AR=search&SBA=&01=Office8&02=&03=.
	  The system cannot find the file specified.
	
	If you attempt to search the Web after receiving one of these messages, you may
	not be prompted to connect to the Internet and the error message will be
	immediately shown again.
	
	CAUSE
	=====
	
	This functionality is by design. Once you cancel the connection process to a
	dial-up Internet Service Provider, Word assumes that you do not want to complete
	a connection to the dial-up ISP during the current session of Word.
	
	NOTE: This problem will also occur when you manually connect to your ISP after
	initially canceling a dial-up connection from the current session of Word.
	
	WORKAROUND
	==========
	
	To work around this behavior, shut down any connection to the Internet or any
	session of Internet Explorer, and then restart Word.
	
	MORE INFORMATION
	================
	
	To search the Web from Word, use one of the following methods.
	
	Method 1: Using the Web Toolbar
	-------------------------------
	
	To use the Web toolbar, follow these steps:
	
	1. On the View menu, point to Toolbars, and then click Web.
	
	  The Web toolbar should be displayed.
	
	2. On the Web toolbar, click Search The Web (the toolbar button with the globe
	  and magnifying glass).
	
	Method 2: Using the Help Menu
	-----------------------------
	
	On the Help menu, point to "Microsoft on the Web", and then click "Search the
	Web".
	
	Method 3: Right-Clicking Selected Text
	--------------------------------------
	
	NOTE: This method is available only when you have installed the Word Internet
	LookUp Template.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q172629 WD97: Information About the Word Internet LookUp Template
	
	To right-click the selected text, follow these steps:
	
	1. Select the text you want to search for on the Internet.
	
	2. Right-click the selected text.
	
	3. On the shortcut menu, point to Look Up, and then click "On the Internet".
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
