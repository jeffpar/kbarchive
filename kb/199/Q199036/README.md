---
layout: page
title: "Q199036: Error When Deleting External Post Office - Notice 1"
permalink: /kb/199/Q199036/
---

## Q199036: Error When Deleting External Post Office - Notice 1

{% raw %}

	Article: Q199036
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete an external postoffice definition in the Admin program, you will
	see the following error:
	
	  Notice 1 - Reserved Network Name.
	
	This also may be observed when you try to modify the same postoffice definition.
	
	CAUSE
	=====
	
	If the postoffice you are trying to delete was created by a third-party gateway,
	you must use the third-party gateway to remove the definition.
	
	
	RESOLUTION
	==========
	
	Uninstall the postoffice definition for the gateway by following the
	instructions included with the third-party gateway.
	
	
	MORE INFORMATION
	================
	
	
	REFERENCES
	==========
	
	For more information, please refer to "File Format API for Gateways and
	Applications Microsoft Mail Software Development Kit".
	
	Additional query words: FFAPI Gateway
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
