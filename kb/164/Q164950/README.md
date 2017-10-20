---
layout: page
title: "Q164950: INFO: LIBMOTO for PowerPC May Improve Application Performance"
permalink: /kb/164/Q164950/
---

## Q164950: INFO: LIBMOTO for PowerPC May Improve Application Performance

{% raw %}

	Article: Q164950
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbCRT kbVC kbHWPowerPC
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Motorola has made available a static library, LIBMOTO, which may improve
	performance of some PowerPC applications built using Microsoft Visual C++.
	Linking with LIBMOTO replaces the following C Runtime Functions:
	
	  * cos                    * pow
	  * exp                    * sin
	  * log                    * sqrt
	  * log10                  * strcmp
	  * memcpy                 * strlen
	  * memmove                * strncmp
	
	The memory and string functions have been hand-tuned in PowerPC assembly language
	for high performance. The math functions contain some tables and algorithms that
	are proprietary to Motorola. Applications that make heavy use of the above CRT
	functions may see an improvement in performance.
	
	MORE INFORMATION
	================
	
	LIBMOTO was originally released as part of the Motorola C/C++ SDK. Motorola is
	making LIBMOTO available as a stand-alone product free of charge to encourage
	PowerPC development. LIBMOTO may be downloaded from Motorola's Website at:
	
	  http://www.mot.com/SPS/PowerPC/library/fact_sheet/libmoto.html
	
	Additional query words: PowerPC CRT
	
	======================================================================
	Keywords          : kb3rdparty kbCRT kbVC kbHWPowerPC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
