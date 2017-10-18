---
layout: page
title: "Q269202: Join Not Working on First Run of Management Agent"
permalink: kb/269/Q269202/
---

## Q269202: Join Not Working on First Run of Management Agent

	Article: Q269202
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a new Management Agent in Association mode, you can set the
	criteria for joining the Management Agent connectors to metaverse entities by
	using connector space values, such as the following:
	
	$mv.cn = $cs.cn
	
	After you run the Management Agent, the join of the connectors to the metaverse
	entries fails. In addition, most, if not all, of the connector space entries are
	still shown as disconnectors.
	
	CAUSE
	=====
	
	Connector space values such as the $cs.cn attribute are not constructed when the
	Management Agent is run for the first time.
	
	RESOLUTION
	==========
	
	You can resolve this behavior by not using the connector space attributes as
	join criteria. Instead, use the connected directory attributes, such as $cd.cn.
	
	MORE INFORMATION
	================
	
	Microsoft recommends the use of the connector space attributes as metaverse join
	criteria.
	
	Additional query words: metadirectory, mms, via, zoomit, join
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
