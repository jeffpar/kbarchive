---
layout: page
title: "Q90008: Low Memory Makes Voice Pilot Slow"
permalink: /kb/090/Q90008/
---

## Q90008: Low Memory Makes Voice Pilot Slow

{% raw %}

	Article: Q90008
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although the Microsoft Windows Sound System only requires approximately 1 MB of
	memory (640K of conventional plus 256K extended), Voice Pilot may recognize
	commands very slowly in low memory situations.
	
	CAUSE
	=====
	
	Voice Pilot alone uses 800K of memory and does not load unless there is at least
	1 MB of free memory (physical or virtual RAM).
	
	RESOLUTION
	==========
	
	If Voice Pilot seems slow, the best way to increase performance is to increase
	the amount of physical RAM.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	

{% endraw %}
