---
layout: page
title: "Q182901: XADM: Optimizer Error: One or More File Locations Are Not Valid"
permalink: /kb/182/Q182901/
---

## Q182901: XADM: Optimizer Error: One or More File Locations Are Not Valid

{% raw %}

	Article: Q182901
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Optimizer the following stop error may occur:
	
	  One or more file locations are not valid. Optimizer requires that
	  File locations reside on fixed, local disk drives. - [800FF353]
	
	CAUSE
	=====
	
	The drive setting in the suggested location is invalid.
	
	WORKAROUND
	==========
	
	Point to a valid drive location. An example of an incorrect location is
	D\Exchsrvr\Mdbdata. This should be change to D:\Exchsrvr\Mdbdata.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
