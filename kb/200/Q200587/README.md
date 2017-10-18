---
layout: page
title: "Q200587: XADM: Cannot Restrict Mailbox Administration by Server"
permalink: kb/200/Q200587/
---

## Q200587: XADM: Cannot Restrict Mailbox Administration by Server

	Article: Q200587
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to limit Exchange Server administrative permissions for
	mailbox management on a per-server basis.
	
	Administrative permissions flow down the Exchange Server directory tree, and
	servers and users, despite appearances, are located in different sections of the
	directory tree.
	
	MORE INFORMATION
	================
	
	An Exchange Server system uniquely identifies every object, which includes every
	user, in the Exchange Server directory with a Distinguished Name (DN). The DN is
	in the following format:
	
	  /o=organization name/ou=<site name>/cn=<recipients
	  container>/cn=<object directory name>
	
	The DN identifies a unique path in the Exchange Server directory tree to locate a
	user. Administrative permissions also flow down the structure of the DN, which
	reflects the structure of the directory tree.
	
	Notice that a user's DN includes the user's organization, site, and Recipients
	containers, but not the user's home server.
	
	The home server is merely an attribute of a user, in the way that a user's
	department or phone number is an attribute of that user. You can no more assign
	administrative access based on different home servers than you can based on
	different phone numbers.
	
	It is very easy to move users from one server to another server in a site because
	the home server is treated as an attribute of the user.
	
	NOTE: The Server Recipients object that is displayed in the Exchange Server
	Administrator program under each server is not an actual container, but a
	"virtual container" that is displayed for administrative convenience. Because it
	is not an actual directory object, it has no directory properties or associated
	permissions.
	
	To approximate management of users on a server-by-server basis, use one of the
	following two methods, but be aware that both methods greatly limit your
	flexibility if you need to move users:
	
	- Create custom recipients containers for each server in the site, and create
	  all of the users on a given server in the appropriate container. Grant each
	  administrator View Only Administrator permissions for the Site object and
	  Administrator permissions only for the appropriate Recipients container.
	
	  This method restricts your freedom to move users between servers and
	  containers without breaking the container-based administrative model. You can
	  still move a mailbox to another server, but if you do, you disconnect the
	  mailbox from the appropriate administrative permissions, unless you change
	  the container at the same time.
	
	  To move a user to a different container, you must actually delete and
	  re-create the user. You can preserve user data in a personal folder file
	  (.pst) during this process, but replies from the user to outstanding messages
	  from other Exchange Server users are non-deliverable, because the user's DN
	  changes. Replies to messages from foreign mail systems remain deliverable in
	  most cases, because foreign e-mail proxy addresses need not change.
	
	-or-
	
	- Isolate each server or administrative group in its own site. In most cases,
	  this results in an organization that is composed of many sites that each
	  contain a single server.
	
	  The Exchange Server administrative model defines the fundamental unit of
	  administration as the site, not the server. This method of managing users on
	  a server-by-server basis conforms with the design and intent of Exchange
	  Server administration, and this makes it more secure and simpler to implement
	  than the first method. It is also less likely that security will be
	  inadvertently breached because permissions were mistakenly granted. The
	  following are the major drawbacks of this method:
	
	   - You cannot move users unless you delete and re-create accounts. The
	     current version of Exchange Server (Exchange Server 5.5) does not support
	     the movement of users between sites, because when users move between sites
	     the user's Distinguished Name must be changed.
	
	   - You must manually configure messaging connectivity and directory
	     replication between each site. In a site, these functions are automatic.
	
	Additional query words: allow per server create change
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
