---
layout: page
title: "Q118539: Windows 95 Err Msg: This Application Has Performed an Illegal..."
permalink: /kb/118/Q118539/
---

## Q118539: Windows 95 Err Msg: This Application Has Performed an Illegal...

{% raw %}

	Article: Q118539
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run an MS-DOS-based application, Windows 95 reports the
	following error message:
	
	  This application has performed an illegal operation and will be terminated.
	  Quit all applications and then restart your computer.
	
	  The application attempted to execute an invalid instruction. Fault location:
	  2067:0127.
	
	CAUSE
	=====
	
	Some MS-DOS-based applications load a DOS extender to provide access to memory
	above the 1-megabyte (MB) range for executable code. Older MS-DOS- based
	applications may load incompatible versions of DOS extenders and cause the above
	error.
	
	The following applications are known to exhibit this problem:
	
	  Abraxas versions of Yacc and Lex: PCYACC 3.01 and PCLEX 2.05
	
	RESOLUTION
	==========
	
	Contact the manufacturer of your application to obtain an updated DOS extender.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
