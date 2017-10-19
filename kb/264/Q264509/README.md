---
layout: page
title: "Q264509: Management Agent Does Not Update Object Attribute in Metaverse"
permalink: /kb/264/Q264509/
---

## Q264509: Management Agent Does Not Update Object Attribute in Metaverse

	Article: Q264509
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 07-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Metadirectory Services, when you use the Management Agent in
	reflector mode to import objects from the connected directory into the
	metaverse, the objects' attributes are not updated.
	
	CAUSE
	=====
	
	This behavior can occur if attribute flow is not configured to update the user
	object's attribute in the metadirectory. The general attribute flow rule applies
	to all metaverse attributes that are not assigned values by a specific flow
	rule. By default, this value is set to Never. This setting allows you to control
	specific attribute flow. If attribute flow rules are not defined for an
	attribute, the attribute is not updated when you run the Management Agent.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure attribute flow for the affected Management
	Agent. There are several different configuration options.
	
	NOTE: For a description of each option and its impact on the metaverse, refer to
	the Metadirectory System Administration Guide online documentation.
	
	To configure specific attribute flow, follow these steps:
	
	1. Log on to Compass as an Administrator, click Action Panel, and then click the
	  Bookmarks button.
	
	2. Click Management Agent, and then click the Specific Flow Rules tab.
	
	3. Specify both the attribute and the flow direction.
	
	To configure general attribute flow to always update attributes, follow these
	steps:
	
	1. Log on to Compass as an Administrator, click Action Panel, and then click the
	  Bookmarks button.
	
	2. Click Management Agent, click the General Attribute Flow tab, and then click
	  "Always Flow Attributes".
	
	To configure the advanced attribute flow script, follow these steps:
	
	1. Log on to Compass as an Administrator, click Action Panel, and then click the
	  Bookmarks button.
	
	2. Click Management Agent, and then click the "Advanced Flow Script" tab.
	
	3. Type your template rules in the Edit box.
	
	  NOTE: Templates and the template language are described in the Management
	  Agent Toolkit manual.
	
	MORE INFORMATION
	================
	
	For additional information about configuring attribute flow, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q259032 Understanding Attribute Flow in Microsoft Metadirectory Services
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
