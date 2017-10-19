---
layout: page
title: "Q259575: XADM:  How to Determine Which User Deleted an Exchange Recipient"
permalink: /kb/259/Q259575/
---

## Q259575: XADM:  How to Determine Which User Deleted an Exchange Recipient

	Article: Q259575
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Diagnostics Logging to determine which
	Administrator account deleted an Exchange Server recipient.
	
	MORE INFORMATION
	================
	
	In a typical production Exchange Server environment, many individuals and groups
	may have Administrator permissions to an Exchange Server site. In some cases,
	recipients may be accidentally or purposely deleted when you use the Microsoft
	Exchange Server Administrator program or the Directory Import feature.
	
	To determine when the recipient was deleted, and which Administrator account
	deleted the recipient, set the Diagnostics Logging level on the
	MSExchangeDS\Security object to Maximum:
	
	1. Start the Administrator program, expand the Site\Configuration\Servers
	  container, and then click a server.
	
	2. On the File menu, click Properties.
	
	3. Click the Diagnostics Logging tab.
	
	4. In the Services section, click MSExchangeDS.
	
	5. In the Category section, click Security.
	
	6. In the Logging Level section, click Maximum, and then click OK.
	
	Use this procedure on every server in the site. If you use the Administrator
	program on one server to change the Diagnostics Logging level, the diagnostic
	information is not logged until the changes are replicated to the other servers
	in the site.
	
	NOTE: If Diagnostics Logging for the Security object is not enabled on every
	server in the site, a user who has Administrator permissions is able to
	establish a connection to a server that does not have the Diagnostics Logging
	level set to Maximum, and delete a mailbox without being detected.
	
	When the Diagnostics Logging level for the Security object is set to Maximum, if
	a mailbox is deleted on the server, an event similar to the following event is
	logged:
	
	  ***BEGIN***
	  Date: <date> Event: 1053
	  Time: <time> Source: MSExchangeDS
	  User: (User who deleted mailbox) Type: Information
	  Computer: Local Exchange server Category: Security
	
	  Description:
	  The security descriptor granted 0x10000 access on object /o=Org Name/ou=Site
	  Name/cn=Recipients Container/cn=Deleted Recipient for this user.
	  ***END***
	
	To use this event to find out more information about the deleted recipient
	mailbox:
	
	- Look for the type of access granted. 0x10000 represents delete access.
	
	- Look in the User section in the header of the event to determine which
	  Administrator account deleted the mailbox.
	
	- Look at the full distinguished name path to the deleted recipient. The
	  distinguished name section begins with "/o=.../ou=...". In this section,
	  "cn=" marks the directory name of the deleted recipient. By default, the
	  directory name is the same as the alias name of the mailbox unless the alias
	  was modified when you created the mailbox.
	
	- Look at the Date and Time headers to determine when the mailbox was deleted.
	
	The server that reports an event ID 1053 that contains a 0x10000 access
	hexadecimal code is the server that the Administrator program was connected to
	when the mailbox was deleted.
	
	An event ID 1053 is also logged when you modify or create a recipient. The
	following list contains a few of the possible hexadecimal codes and the type of
	access each code represents:
	
	- 0x10000: A recipient has been deleted.
	
	- 0x1: A recipient has been created.
	
	- 0x80: Permissions have been added or modified.
	
	- 0x4: Display or alias name has been modified.
	
	Additional query words: custom recipient, distribution list, dl, mailbox, deletion
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
