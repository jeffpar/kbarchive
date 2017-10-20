---
layout: page
title: "Q259032: Understanding Attribute Flow in Microsoft Metadirectory Services"
permalink: /kb/259/Q259032/
---

## Q259032: Understanding Attribute Flow in Microsoft Metadirectory Services

{% raw %}

	Article: Q259032
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbtool MMS
	Last Modified: 02-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Attribute flow is utilized in Microsoft Metadirectory Services (MMS) to flow
	attributes between the connector space, the hologram, and the metaverse.
	Attribute flow scripts have five vectors available. These vectors provide MMS
	with the ability to co-manage attributes from different source directories to a
	single joined metaverse object.
	
	The following list contains the five vectors that are available in attribute flow
	scripts:
	
	- CD: Used to specify the Connected Directory.
	
	- CSP: Used to specify the potential value for the Connector Space built by the
	  connector space construction template.
	
	- MVP: Used to specify the potential value for the metaverse built by the
	  metaverse construction template.
	
	- CS: Used to specify the Connector Space.
	
	- MV: Used to specify the metaverse.
	
	Also, there are four kinds of assignments available in the attribute flow
	scripts:
	
	   
	    =    This assignment replaces the attribute.
	   +=    This assignment appends additional values to a multivalued attribute.
	   -=    This assignment removes a specific value from the attribute.
	   <<    This assignment merges all values in one multivalued attribute.  
	
	MORE INFORMATION
	================
	
	These operators are especially important for managing multivalued attribute
	ownership, for example:
	
	John Doe's $mv.colors has 4 values:
	
	- Purple
	
	- Red
	
	- Orange
	
	- Green
	
	John Doe's $cd.colors has 3 values:
	
	- Blue
	
	- Yellow
	
	- Purple
	
	+------------------------------------------------------------------------------------+
	| Flow Rules                | Result                                                 | 
	+------------------------------------------------------------------------------------+
	| 
	$mv.colors += $cd.colors | 
	$mv.colors = Purple, Red, Orange, Green, Blue, Yellow | 
	+------------------------------------------------------------------------------------+
	| 
	$mv.colors -= $cd.colors | 
	$mv.colors = Red, Orange, Green                       | 
	+------------------------------------------------------------------------------------+
	| 
	$cd.Colors = $mv.Colors  | 
	$cd.colors = Blue, Yellow, Purple                     | 
	+------------------------------------------------------------------------------------+
	| 
	$mv.colors << $cd.colors | 
	$cd.colors = Purple, Red, Orange, Green, Blue, Yellow | 
	+------------------------------------------------------------------------------------+
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
