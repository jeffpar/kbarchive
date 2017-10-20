---
layout: page
title: "Q255589: Common Name Connector Space Is Not Synchronized with the Connect"
permalink: /kb/255/Q255589/
---

## Q255589: Common Name Connector Space Is Not Synchronized with the Connect

{% raw %}

	Article: Q255589
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): metadirectory Zoomit MMS
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The connector space common name is not synchronized with the connected directory
	and metaverse common names.
	
	For example, when you use the Account Joiner to join an unconnected connector
	space object to a metaverse object, if you search the metaverse (by common
	name), you may not receive the hits you expect because the common name attribute
	has not been populated in the connector space.
	
	CAUSE
	=====
	
	This issue occurs because the attribute assignment rules for the common name
	have not been implemented in the connector space construction template. The
	common name attribute is not assigned to the connector space record in the
	connector space construction template (zcDsiAliasThingConstruction) by default.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to MMS 2.2.
	
	To work around this issue, ensure that the following assignments are made in the
	connector space construction template (zcDsiAliasThingConstruction):
	
	  $cs.cn = $cd.cn
	
	This workaround sets the common name attribute of the connector space object to
	the connected directory's common name attribute.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Metadirectory Services
	2.1.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : metadirectory Zoomit MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
