---
layout: page
title: "Q177940: Message: Details Are Not Available on This Entry"
permalink: /kb/177/Q177940/
---

## Q177940: Message: Details Are Not Available on This Entry

{% raw %}

	Article: Q177940
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click properties for any local group while in the 16-bit Windows
	client, you receive the following message:
	
	  Details are not available on this entry.
	
	CAUSE
	=====
	
	This problem is because Alias.tpl is missing.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Copy Alias.tpl from a working postoffice.
	
	-or-
	
	- If another postoffice is not available, install a dummy postoffice and copy
	  Alias.tpl from there.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350 kbMail320
	Version           : WINDOWS:3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
