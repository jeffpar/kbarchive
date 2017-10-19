---
layout: page
title: "Q269215: Cannot Import or Export Null Attribute Value to or from Netscape"
permalink: /kb/269/Q269215/
---

## Q269215: Cannot Import or Export Null Attribute Value to or from Netscape

	Article: Q269215
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbtool
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import a Null attribute value from the Netscape directory,
	the metaverse attribute is not cleared.
	
	When you attempt to export a Null value to the Netscape directory, no changes are
	made to the Netscape directory.
	
	CAUSE
	=====
	
	In the case of an import, the import file does not include the attribute
	assignment, and therefore the attribute is not changed in the metaverse.
	
	In the case of an export, the create file does not include the attribute
	assignment, and therefore no changes are passed to the connected directory.
	
	RESOLUTION
	==========
	
	This problem is resolved in Microsoft Metadirectory Services version 2.2.
	
	MORE INFORMATION
	================
	
	The Null value could be the result of deleting or removing information, such as
	a phone number or other user attribute, from the user information in the
	directory. The desired change is not reproduced to or from the metaverse.
	
	Additional query words: ldap
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
