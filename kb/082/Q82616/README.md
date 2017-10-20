---
layout: page
title: "Q82616: SoundBlaster Pro Card Emits Noise Upon Windows Exit"
permalink: /kb/082/Q82616/
---

## Q82616: SoundBlaster Pro Card Emits Noise Upon Windows Exit

{% raw %}

	Article: Q82616
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When the Microsoft Windows operating system version 3.1 is exited, the
	SoundBlaster Pro card sometimes emits a screeching noise.
	
	The noise can be temporarily stopped by running the FMOrgan program that comes
	with the SoundBlaster card. FMOrgan is an MS-DOS application utilizing the
	synthesizer that comes with the SoundBlaster card.
	
	To ensure proper use of the SoundBlaster Pro card, do not use the Ad Lib driver.
	
	MORE INFORMATION
	================
	
	The noise is caused by setting the Ad Lib chip into "Wave-Select" mode.
	
	
	The Ad Lib driver will set the synthesizer in Wave-Select mode each time a
	"warm-reset" is issued. This occurs each time the Ad Lib driver is enabled and
	opened. On some machines (Gateway 486/33 with the SoundBlaster Pro), the Ad Lib
	chip causes random voices to make noise.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
