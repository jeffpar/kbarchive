---
layout: page
title: "Q194248: FP98: Errors w/ Ismaps, Searches After Moving Content to Server"
permalink: kb/194/Q194248/
---

## Q194248: FP98: Errors w/ Ismaps, Searches After Moving Content to Server

	Article: Q194248
	Product(s): Word Front Page
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205655.
	
	For a Microsoft FrontPage 97 and earlier version of this article, see Q147443.
	
	SYMPTOMS
	========
	
	If you browse a form, such as the Feedback.htm file by opening the form as a
	local file, and then click the Submit button, you receive the following error
	message:
	
	  Could not open file
	  C:\content\<webname>\_vti_bin/shtml.exe/feedback.htm.
	
	CAUSE
	=====
	
	The file is opened as a file; that is, it is not being accessed on the server.
	Since it is not being accessed on the server, the server extensions (shtml.exe)
	are not accessible to the local files and they cannot be processed. The
	background processing will occur only for files located on a Web were the
	personal Web server or the FrontPage extensions are installed.
	
	RESOLUTION
	==========
	
	Instead of clicking Open on the File menu and then clicking Open File in your
	browser, specify the URL to your Web server. For example:
	
	  http://<machinename>/<webname>/feedback.htm
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: front page copy content apache unix cern ncsa hp-ux sun solarix irix netscape open market vermeer personal Web server pws
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:98
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
