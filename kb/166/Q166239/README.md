---
layout: page
title: "Q166239: XCLN: Err Msg: HTTP/1.0 404 Object Not Found"
permalink: /kb/166/Q166239/
---

## Q166239: XCLN: Err Msg: HTTP/1.0 404 Object Not Found

	Article: Q166239
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when attempting to access the Microsoft
	Exchange Outlook Web Access logon screen via a browser by entering
	http://servername/exchange:
	
	  HTTP/1.0 404 Object Not Found
	
	CAUSE
	=====
	
	One or more of the following conditions may exist:
	
	- There is no virtual directory called /Exchange specified in the IIS WWW
	  Service Properties.
	
	- The virtual directory has been changed from /Exchange to another alias name
	  such as /Mail
	
	WORKAROUND
	==========
	
	It is sometimes necessary to remove the Microsoft Exchange Outlook Web Access
	components and reinstall them to allow Microsoft Exchange Outlook Web Access to
	function correctly.
	
	If the <drive>:\exchsrvr\webdata directory exists but no Directory or
	Virtual Directory exists for the <drive>:\exchsrvr\webdata directory in
	the IIS WWW Service Properties then the best option is to remove and re-install
	the Microsoft Exchange Outlook Web Access Components.
	
	Another option is to try to re-create the Directory and Alias in the IIS WWW
	Service Properties.
	
	Steps to take for IIS 3.0
	
	1. In Internet Service Manager, double-click the service for which you want to
	  add a virtual directory to display its property sheets.
	
	2. Click the Directories tab.
	
	3. Click Add.
	
	4. Click Browse to select the <drive>:\exchsrvr\webdata directory in the
	  Directory box.
	
	5. Click Virtual Directory, then type the name of the /Exchange virtual
	  directory in the Alias box.
	
	6. Set the Access permissions to Read and Execute.
	
	7. Click OK.
	
	8. Click Apply and then click OK.
	
	Steps to take for IIS 4.0
	
	1. In the Microsoft Management Console Internet Information Server object,
	  select the DEFAULT Web site to add a directory.
	
	2. Click the Action button, point to New, and select Virtual Directory. Use the
	  New Virtual Directory wizard to complete the task.
	
	3. In the Alias to be used to access this virtual directory dialog box type:
	
	  Exchange
	
	4. In the Enter the physical path of the directory containing the content, you
	  want to publish dialog box choose the Browse button and select:
	
	  <drive>\exchsrvr\webdata
	
	5. In the What access permissions to you want to set for this virtual directory
	  dialog box Check:
	
	  Allow Read Access and Allow Execute Access
	
	6. Select the Finish button.
	
	MORE INFORMATION
	================
	
	You may need to stop and restart the World Wide Web Publishing Service for these
	changes to take effect.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
