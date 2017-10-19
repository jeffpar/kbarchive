---
layout: page
title: "Q258870: How to Use TAMA Agent to Add Resources to Directory Objects"
permalink: /kb/258/Q258870/
---

## Q258870: How to Use TAMA Agent to Add Resources to Directory Objects

	Article: Q258870
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 06-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Metadirectory Services (MMS) 2.1, you can use a Together
	Administration Management Agent (TAMA) to add resources to directory objects
	with dynamic rather than static processes.
	
	In a static configuration, when the TAMA resource is attached to a particular
	object in the metaverse, it applies to all subordinate objects.
	
	As an alternative, the dynamic configuration does not attach the resource to any
	point in the tree. Instead, you configure the rules on the Rules form. To use
	this form, click "Operate the Together Administration MA", click Configuration
	Settings, and then click the Rules form. These rules allow multiple conditions
	to be evaluated against each metaverse entry, resulting in the possibility of
	coincident multiple resource assignments. This is the add or hire scenario. The
	opposite is the remove or fire scenario.
	
	You cannot implement the remove or fire scenario with these resource assignments
	by using the -= scripting language operator in the Rules template.
	
	The target attribute, zcTaAccountResourceDNs, is multi-valued, therefore the -=
	operator is normally required. However, if the operator is used, the user
	typically receives the following results:
	
	- An error (14014) if the zcTaAccountResourceDNs attribute contains no values.
	
	- The object is not deleted in the connected directory.
	
	MORE INFORMATION
	================
	
	MMS version 2.1 does not support fire abilities in the hire-fire scenario.
	
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
