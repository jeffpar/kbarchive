---
layout: page
title: "Q255538: Code 19008 (DS_RC_BUFFER_TOO_SMALL) When You Run a Join Search"
permalink: kb/255/Q255538/
---

## Q255538: Code 19008 (DS_RC_BUFFER_TOO_SMALL) When You Run a Join Search

	Article: Q255538
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool MMS
	Last Modified: 02-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The search buffer that is available for Joins is limited to attribute values of
	254 characters or less. If an attribute is listed as a search candidate and a
	candidate record contains a value which exceeds 254 characters, the join
	proposal does not work. Also, the Genlogs file contains the following entry:
	
	  19008 DS_RC_BUFFER_TOO_SMALL
	
	CAUSE
	=====
	
	This problem can occur if the size of the search buffer is set to 255
	characters.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Identify the offending attribute by analyzing the "attributes to search on"
	  area on the "Configure the Join" tab.
	
	2. Use either of the following methods to correct all of the records with
	  instances of the offending attribute that exceed the threshold size:
	
	- Decrease the size of the attribute value until it is below 254 characters.
	
	- Remove the attribute as a search attribute.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript
	
	======================================================================
	Keywords          : kbtool MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbbug
	
	=============================================================================
	
