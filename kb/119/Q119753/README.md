---
layout: page
title: "Q119753: ADT2: ADT Repair/Compact Documentation Error"
permalink: /kb/119/Q119753/
---

## Q119753: ADT2: ADT Repair/Compact Documentation Error

{% raw %}

	Article: Q119753
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	The Microsoft Access Developer's Toolkit "Advanced Topics" manual page 17 reads
	as follows:
	
	  Also be aware that if your application is secured, the user running the
	  repair or compact operation must have Open Exclusive permission for the
	  database.
	
	This information is incorrect.
	
	RESOLUTION
	==========
	
	The user running the repair operation does not need to have Open Exclusive
	permission for the database. Any user validated by the database's SYSTEM.MDA
	file can run the repair operation, even if that user has no explicit or implicit
	permissions for the database. However, in order to compact the database, the
	user must have Open/Run as well as Open Exclusive permissions for the database.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 1,
	"Developing Run-Time Applications: an Overview," page 17
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
