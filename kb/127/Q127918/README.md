---
layout: page
title: "Q127918: PC Adm: Doc Err: Modifying Template Information"
permalink: /kb/127/Q127918/
---

## Q127918: PC Adm: Doc Err: Modifying Template Information

{% raw %}

	Article: Q127918
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Page 328 of version 3.2 Microsoft Mail "Administrator's Guide" states the
	following:
	
	  If you are modifying only the template information, you can omit the line
	  containing the modified address, as in this example:
	
	  M George Jones
	  - Title:/Sales Rep
	  - Local:/3423
	  - Department:/Sales
	
	The above statement is in error. If you modify template information without the
	complete address, it will cause the Import program (IMPORT.EXE) to display an
	Error 72 when the (M)odify switch is used, and an Error 20 if the (T)emplate
	switch is used.
	
	MORE INFORMATION
	================
	
	When you use the Import program to modify template information, you must include
	the complete address as shown below:
	
	  M George Jones
	
	  PCM:NETWORK/POSTOFFICE/GEORGEJ
	
	  - Title:/Sales Rep
	  - Local:/3423
	  - Department:/Sales
	
	The information on page 328 of the "Administrator's Guide" refers to a
	specification for Mail that was never implemented.
	
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
