---
layout: page
title: "Q173658: XWEB: Mailbox Access via OWA Depends on IIS Token Cache"
permalink: /kb/173/Q173658/
---

## Q173658: XWEB: Mailbox Access via OWA Depends on IIS Token Cache

	Article: Q173658
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you remove the Log on Locally right for a user on a computer running
	Microsoft Internet Information Server (IIS), the user may still be able to log
	on to his or her Microsoft Exchange Server mailbox via Microsoft Outlook Web
	Access. This behavior is temporary and depends on the length of time that user
	tokens are cached on the server.
	
	CAUSE
	=====
	
	For performance reasons, user tokens are cached by IIS and updated at 15- minute
	intervals. The first time a user logs on via a Web browser, the user's user
	token is created. If the Log on Locally right is subsequently revoked, the user
	can still access the mailbox for approximately 15 minutes.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Restart all the IIS services (Gopher, FTP, and WWW). This will refresh the
	  token cache on the IIS computer. For performance reasons, this is the
	  preferred method if updates are infrequent.
	
	-or-
	
	- Change the default interval for the token cache by editing the Microsoft
	  Windows NT registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     SYSTEM\CurrentControlSet\Services\InetInfo\Parameters
	
	3. Select Edit.
	
	4. Click Add Value, and add the following:
	
	  " Value Name: UserTokenTTL
	  Data Type: REG_DWORD
	  Data: (Number of seconds for token to be cached - 30 second min) " (without
	  the quotation marks)
	
	5. Stop and restart all three IIS services (WWW, FTP, and Gopher).
	
	For information about changing the UserTokenTTL value, refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q152526 Changing the Default Interval for User Tokens in IIS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbOWASearch
	Version           : WINDOWS:5.0
	
	=============================================================================
	
