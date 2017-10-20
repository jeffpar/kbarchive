---
layout: page
title: "Q86985: X400: How Changing a Network Name Affects X.400 Gateway"
permalink: /kb/086/Q86985/
---

## Q86985: X400: How Changing a Network Name Affects X.400 Gateway

{% raw %}

	Article: Q86985
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Changing a network or postoffice name is a complex task. When a network or
	postoffice name changes in the Admin program, several files within the X.400
	gateway must also be modified.
	
	Changes must be made to the mapping table, conversion table, and ROUTE.CFG table,
	if applicable. Changes to the conversion table can be made from the
	Administration program; however, the changes to the mapping table and the
	ROUTE.CFG table must be made using an editor. Failure to make changes to these
	tables can result in a loss of incoming data for the particular postoffice that
	had the name change.
	
	
	Additional query words: pcmail
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
