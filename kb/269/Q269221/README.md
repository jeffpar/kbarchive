---
layout: page
title: "Q269221: Alias Is Not Deleted When  Associated Metaverse Object Deleted"
permalink: /kb/269/Q269221/
---

## Q269221: Alias Is Not Deleted When  Associated Metaverse Object Deleted

	Article: Q269221
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a user and an alias to the user in a group, and then create an
	alias from that alias, the second alias does not follow the same deletion rules
	as the first alias. When you delete the user, the first alias is deleted at the
	same time. However, the second alias is not deleted. When you click the second
	alias object, the following error message appears:
	
	  The Object member = Member=aliasname,list=listname,ou=OU,dc=domain,dc=dom is
	  not available: 32
	
	If the alias object is deleted, the second alias object is deleted automatically.
	
	RESOLUTION
	==========
	
	To resolve this issue, manually delete the second alias.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbprb
	
	=============================================================================
	
