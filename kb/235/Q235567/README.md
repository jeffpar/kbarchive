---
layout: page
title: "Q235567: QUERY USER Command Does Not Query Information from Remote Server"
permalink: kb/235/Q235567/
---

## Q235567: QUERY USER Command Does Not Query Information from Remote Server

	Article: Q235567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the QUERY USER command to obtain information from a remote server,
	it reports that the user does not exist.
	
	For example:
	
	  "query user username /<server:remoteserver>" (without the quotation
	  marks)
	
	The following error may also be displayed:
	
	  No user exists for <username>
	
	CAUSE
	=====
	
	This problem occurs when you use the QUERY USER command and specify a user name.
	The Query command assumes this to be local and only looks at the local server
	for this user.
	
	Using QUERY USER /<SERVER:REMOTESERVER> does report this information but
	lists all users currently logged on to the remote server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	WORKAROUND
	
	To work around this problem, use one of the following methods:
	
	- Query the remote server and do not type "username" (without the quotation
	  marks). This command lists all users on that server.
	
	  "query user" (without the quotation marks) /"<server:remoteserver>"
	  (without the quotation marks)
	
	- To obtain a single user listing, you could send the output of the above
	  command through find:
	
	  "query user /<server:remoteserver> | find "username"" (without the
	  quotation marks)
	
	- Create a batch file to query for a single user.
	
	  Batch File Name: Q.bat
	
	  Type the following text in the batch file, and then save the file:
	
	  "query user /<server>:%1 | find "%2"" (without the quotation marks)
	
	  Type the following at a command prompt:
	
	  "q <remoteserver username>" (without the quotation marks)
	
	  NOTE: REMOTESERVER and USERNAME are the respective server and user that you
	  are are trying to query.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows NT Server
	versions 4.0, 4.0 SP, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0, Terminal Server
	Edition, Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
