---
layout: page
title: "Q90206: WFWG Setup Hangs If Cabletron E2000 Series Active"
permalink: /kb/090/Q90206/
---

## Q90206: WFWG Setup Hangs If Cabletron E2000 Series Active

{% raw %}

	Article: Q90206
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups Setup stops responding (hangs) immediately after
	displaying the initial blue screen if you are using a Cabletron E2000 series
	network adapter and the I/O address is anything other than 300.
	
	This problem occurs when Setup attempts to perform network card detection. To
	work around this problem, run Setup /I to ignore hardware detection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. We are researching this problem and will post new information here as it
	becomes available.
	
	Additional query words: 3.10 hang hung stop stops stopped freeze frozen 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
