---
layout: page
title: "Q105000: RESTACC Fails with &quot;SYS0111 File Name Too Long&quot; Error"
permalink: /kb/105/Q105000/
---

## Q105000: RESTACC Fails with &quot;SYS0111 File Name Too Long&quot; Error

{% raw %}

	Article: Q105000
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When restoring file system access control lists, RESTACC fails and returns the
	error message "SYS0111 File Name Too Long."
	
	CAUSE
	=====
	
	The calculation of the memory required to store LAN Manager extended attributes
	was performed incorrectly for directories with only these access control/audit
	entries set:
	
	NET ACCESS some-directory /ADD /FAILURE:ALL /SUCCESS:anything
	
	NET ACCESS some-directory /ADD /FAILURE:anything /SUCCESS:ALL
	
	RESOLUTION
	==========
	
	A corrected calculation algorithm is in LAN Manager 2.2 Patch A.
	
	Additional query words: 2.20 netapi restacc 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
