---
layout: page
title: "Q107754: FFAPI: Default Template Used with IMPORT.EXE and FFAPI"
permalink: /kb/107/Q107754/
---

## Q107754: FFAPI: Default Template Used with IMPORT.EXE and FFAPI

{% raw %}

	Article: Q107754
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.0b,3.2; WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), versions 3.0, 3.0b, 3.2 
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 3.0, 3.0b, and 3.2 of Microsoft Mail for PC Networks, if you use
	the Import program (IMPORT.EXE) to update a user's template information on a
	FFAPI network/postoffice address list but the template information is not
	included, the default template information is used.
	
	CAUSE
	=====
	
	When you use the Import command to modify the user information, the fields that
	are not updated are overwritten with the default information.
	
	RESOLUTION
	==========
	
	Include template information for each entry in the import file in which you do
	not want default template information.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b kbSDKMailFFAPI300
	Version           : :3.0,3.0b,3.2; WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
