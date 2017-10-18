---
layout: page
title: "Q264284: What to Do When You Receive &quot;The Page Cannot be Found&quot; Error"
permalink: kb/264/Q264284/
---

## Q264284: What to Do When You Receive &quot;The Page Cannot be Found&quot; Error

	Article: Q264284
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	NOTE: This article is written for end-users (non-administrators) who need suggestions on what to do when they encounter the "The page cannot be found" error message. This article does not assume that the reader of the article knows the technical aspects of Web servers.
	
	SYMPTOMS
	========
	
	When you attempt to browse a Web site, the following error message is displayed
	at the top of the browser:
	
	  
	
	  The page cannot be found
	  ------------------------
	
	  The page you are looking for might have been removed, had its name changed, or
	  is temporarily unavailable.
	
	CAUSE
	=====
	
	This error message occurs when the Web server cannot locate the Web page that
	your browser has requested. This error message is not caused by a problem on
	your computer.
	
	RESOLUTION
	==========
	
	NOTE: Be sure to also read the "Workaround" section in this article for
	suggestions on how you can immediately work around this error message by using
	your Web browser.
	
	To assist in fixing the problem, so that the error message doesn't continue to
	occur, you may want to contact the Web server's administrator. There is usually
	an e-mail link on the Web page that lists the administrator's e-mail address
	(for example, WebMaster@Microsoft.com).
	
	Provide the administrator with the exact address (also known as the URL) that
	your browser was attempting to use when the error message occurred.
	
	TIP: To ensure that you provide the correct address, highlight the entire text of
	the Web address in the browser, and then copy and paste the address into the
	e-mail message that you send to the Web server's administrator.
	
	WORKAROUND
	==========
	
	When you receive the "The page cannot be found" error message in your browser,
	the following suggestions are also provided:
	
	- If you typed the page address in the Address bar, make sure that it is
	  spelled correctly.
	- Open the <Web-Site> home page, and then look for links to the
	  information you want.
	- Click the Back button to try another link.
	
	See the following sections for more information on each of these suggestions.
	
	Verify the Spelling of the Address:
	
	The first suggestion states:
	
	  If you typed the page address in the Address bar, make sure that it is
	  spelled correctly.
	
	If the address has any errors, no matter how small, the Web server cannot locate
	the Web page.
	
	For example, if the correct address is "http://www.microsoft.com/test.htm"
	(without the quotation marks), but you typed
	"http://www.microsoft.com/test.html" (without the quotation marks) (note the
	extra letter "l" at the end of the address), you will receive the error
	message.
	
	NOTE: Microsoft Internet Information Services is not case sensitive, which means
	that you do not have to worry about whether you type upper- or lower-case
	letters in the address. However, other Web servers may be case sensitive.
	
	Open the Home Page:
	
	The second suggestion states:
	
	  Open the <Web-Site> home page, and then look for links to the
	  information you want.
	
	By opening to the home page, you may find an alternative valid link to the Web
	page.
	
	Use the Back Button:
	
	The third suggestion states:
	
	  Click the Back button to try another link.
	
	This suggestion is similar to the second suggestion, in that if you return to the
	previous Web page, you may find an alternative link that is valid.
	
	Use the Web Site's Search Feature
	---------------------------------
	
	Many Web sites provide a way to search for information on the Web site. By using
	the search function, you may be able to locate the Web page, even if the link
	you previously used is broken.
	
	Usually, the search feature is provided by a link labeled either Search or Find.
	The search link is usually located near the top or bottom of the Web page, or in
	the left or right-hand margins on some Web sites.
	
	MORE INFORMATION
	================
	
	Near the bottom of the error message, the following text is displayed in the
	browser:
	
	  HTTP 404 - File not found
	
	This is the error message that most Web administrators usually refer to (rather
	than the "friendly" error message "The page cannot be found" that is displayed
	at the top of the browser).
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: iis 5 internet explorer ie netscape navigator opera mosaic aol broken link enduser end-user end user newbie akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
