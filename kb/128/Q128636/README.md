---
layout: page
title: "Q128636: HOWTO: Set Up SourceSafe for Replication Under Windows NT"
permalink: /kb/128/Q128636/
---

## Q128636: HOWTO: Set Up SourceSafe for Replication Under Windows NT

{% raw %}

	Article: Q128636
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can set up Visual SourceSafe for replication under Windows NT to allow a
	database to be mirrored on a backup server, and thus increase network
	reliability. This article explains how to do it for SourceSafe.
	
	MORE INFORMATION
	================
	
	1. Follow the directions for setting up a replication directory as presented in
	  the following article in the Microsoft Knowledge Base:
	
	  Q101602 Configuring Windows NT for Replication
	
	2. Set up the permissions for SourceSafe, which can be a bit tricky. There are
	  two sets of permissions that must be reviewed: Share permissions and
	  Directory permissions. The directory permissions override the settings of the
	  share permissions. Because of this, setting up a share in this directory is a
	  two-step process; you must set both sets of permissions. After setting up the
	  share in the normal fashion, the NT administrator must also change the
	  Security..Permissions to include SS users.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe310NT
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
