---
layout: page
title: "Q269219: TAMA Cannot Create Objects Directly Under Active Directory MA"
permalink: /kb/269/Q269219/
---

## Q269219: TAMA Cannot Create Objects Directly Under Active Directory MA

	Article: Q269219
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The follow error message is generated in the operator's log when running the
	Together Administration Management Agent (TAMA) program to populate Active
	Directory:
	
	  ERROR 14083: DB5_RC_COULD_NOT_SET_STR_OBJ_CLASS
	
	  >> DEBUG[A connector cannot be created directly under the AD MA.]: [A
	  connector cannot be created directly under the AD MA.]
	  >> DEBUG[It must be created under an NC connector:
	  CN=x,NC=abc.com,MA=abc,...]: [It must be created under an NC connector:
	  CN=x,NC=abc.com,MA=abc,...]
	  0028-META MODIFICATION FAILED[14083]: cn=Catarina
	  Dzierzanowski,ou=Accounting,ou=metaverse,dc=juggernaut,dc=microsoft,dc=com
	
	CAUSE
	=====
	
	You must specify a location under the Active Directory Management Agent where
	TAMA will create connectors for the metaverse objects. The user interface, under
	"Location Under the MA", states that this parameter is optional in general,
	however, it is not optional for the Active Directory Management Agent.
	
	RESOLUTION
	==========
	
	To specifiy a location, follow these steps:
	
	1. Double-click Together Administrator Management Agent.
	
	2. Double-click the resource that you are using for the provisioning of Active
	  Directory.
	
	3. In "Location Under the MA", select a naming-context container connector under
	  the Active Directory Management Agent, such as company.com, or an area deeper
	  in the tree, such as the Users container.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbprb
	
	=============================================================================
	
