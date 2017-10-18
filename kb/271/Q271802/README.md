---
layout: page
title: "Q271802: Passwords in Metadirectory Services Cannot Be Reset to Null"
permalink: kb/271/Q271802/
---

## Q271802: Passwords in Metadirectory Services Cannot Be Reset to Null

	Article: Q271802
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible to change the password on a metaverse object from the default
	value, null, to an actual value using the Entry Administration button on the
	Operational tab. When you attempt to set the password value back to null on the
	same metaverse object, you may receive the following error message:
	
	  An Authentication error occurred. The password was not changed.
	
	CAUSE
	=====
	
	This behavior can occur because a password cannot be reset to null after it has
	been changed from null to an actual value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
