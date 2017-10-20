---
layout: page
title: "Q195037: XFOR: Exchange Server NNTP Event ID 11214"
permalink: /kb/195/Q195037/
---

## Q195037: XFOR: Exchange Server NNTP Event ID 11214

{% raw %}

	Article: Q195037
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The application event log of Microsoft Exchange Server version 5.5 may contain
	frequent occurrences of the following event:
	
	  Event ID: 11214
	  Source: MSExchange NNTP
	  Category: Client Action
	  Description:
	  An unexpected error occurred while handling an NNTP protocol command.
	  Error 0x80070005 was returned by procedure EcNNTPPost while executing
	  procedure EcSaveNntpArticle.
	
	MORE INFORMATION
	================
	
	This event may occur if a user is connected to the Exchange Server NNTP host as
	an anonymous user, and attempts to post to a newsgroup root folder, or one of
	its subfolders, when an anonymous user does not have the appropriate rights for
	the folder.
	
	To allow clients to post anonymously to Exchange Server public folders using
	NNTP, the following steps must be taken:
	
	1. In the Microsoft Exchange Server Administrator program, confirm that
	  anonymous access has been enabled at the site level by selecting the Protocol
	  container.
	
	2. On the File menu, select "NNTP (News) Site Defaults," then select Properties.
	
	3. On the Anonymous tab, select the "Allow anonymous access" check box, and
	  click OK.
	
	4. Then check that the anonymous user category has been granted the appropriate
	  permissions. In the Exchange Server Administrator program, select the
	  newsgroup folder in question, and on the File menu, click Properties.
	
	5. Click the General tab, and then click Client Permissions.
	
	6. In the list of users and permissions, ensure that the anonymous user category
	  has the correct permissions. Confirm that the default role, "Nonediting
	  Author," is set for anonymous users.
	
	NOTE: The permission "Nonediting Author" for the anonymous user category should
	also be assigned for the subfolders under the Internet Newsgroup root folder so
	anonymous users can post to them as well.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
