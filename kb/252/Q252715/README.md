---
layout: page
title: "Q252715: Error 14064 Attempting to Change an Attribute Value Type"
permalink: kb/252/Q252715/
---

## Q252715: Error 14064 Attempting to Change an Attribute Value Type

	Article: Q252715
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 05-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change an attribute value type (for example, Single, Multi,
	or Collective), you may receive the following error message:
	
	  An error occurred processing your request
	  The server reported [Server error value [14064]]
	
	The error code translates to:
	
	  (DB5_RC_INVALID_ATTRIBUTE_PROCESSING)
	
	CAUSE
	=====
	
	Some attributes are treated as a "special cases" within the database. If you
	attempt to change a special-case attribute, the error message is generated.
	
	The list of current special-case attributes includes:
	
	  aliasedObjectName
	  description
	  DSEType
	  lastVerifiedTime
	  structuralObjectClass
	  telephoneNumber
	
	RESOLUTION
	==========
	
	Do not attempt to change the attribute type for these special-case attributes.
	Choose a different attribute to populate as multi-valued or collective.
	
	MORE INFORMATION
	================
	
	To view or change an attribute's value type:
	
	1. Search the directory for the attribute you want to change. In Compass, click
	  Search, and then type the name of the attribute you want to change. For
	  example, try searching for GivenName.
	
	2. When the attribute is found, double-click it to display its properties.
	
	3. On the Definition tab, click one of the three attribute value types: Single,
	  Multi, or Collective. This value specifies whether an attribute is
	  single-valued, multi-valued, or collective. Collective attributes cannot be
	  multi-valued.
	
	Additional query words: MMS Zoomit VIA
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
