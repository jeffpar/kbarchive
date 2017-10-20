---
layout: page
title: "Q65014: Mail Slots Must Be Active to Support DOS LAN Manager APIs"
permalink: /kb/065/Q65014/
---

## Q65014: Mail Slots Must Be Active to Support DOS LAN Manager APIs

{% raw %}

	Article: Q65014
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Question:
	
	Is it necessary to keep mail slots active (that is, specify MAILSLOTS=YES in
	LANMAN.INI) if I want to use the DOS LAN Manager APIs?
	
	Response:
	
	If you specify MAILSLOTS=NO, you will lose DOS LAN Manager API support
	(KEEPAPIS=YES and MAILSLOTS=NO is considered to be inconsistent).
	
	Additional query words: 2.00 api mailslots
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
