---
layout: page
title: "Q150042: Browser Client Sends Multiple Logon Requests"
permalink: kb/150/Q150042/
---

## Q150042: Browser Client Sends Multiple Logon Requests

	Article: Q150042
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a link to a web page, the text in the web page is displayed;
	however, any images on the page are not displayed. Also, you will be prompted
	for your user name and password over and over, until you are denied access.
	
	CAUSE
	=====
	
	You do not have rights to where the image files are stored on the computer.
	
	WORKAROUND
	==========
	
	Check the following:
	
	- Is IIS is using Basic or NT Challenge/Response password authentication?
	
	  If yes, add Allow Anonymous password authentication.
	
	- Is the wwwroot directory is on an NTFS partition? With the group EVERYONE
	  removed?
	
	  If yes, add the EVERYONE group to where the image files are located.
	
	- Are the images used by the server stored in a different directory than the
	  HTML pages? With the group EVERYONE removed?
	
	  If yes, make sure the same user/group that has access to the HTML directories
	  also has rights to where the images are stored on the server.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
