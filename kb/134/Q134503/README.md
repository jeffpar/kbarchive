---
layout: page
title: "Q134503: Parity Error Messages May Indicate Bad Memory"
permalink: /kb/134/Q134503/
---

## Q134503: Parity Error Messages May Indicate Bad Memory

{% raw %}

	Article: Q134503
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw win95 kbHardwarekbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running Windows 95, you may receive frequent (every 10 or 20
	minutes) "Parity Error" messages on a blue screen. When you receive such a
	message, you must restart the computer.
	
	CAUSE
	=====
	
	Parity errors are usually caused by defective memory chips in the computer. For
	more information about parity errors, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q93521 Parity Errors in Windows 3.x
	
	Parity errors can also be caused by:
	
	- Mismatched RAM. That is, mixing different types of SIMMs (such as parity and
	  non-parity RAM) on the motherboard.
	
	- Incorrect RAM for the motherboard. For example, non-parity RAM on a
	  motherboard requiring parity RAM.
	
	- Non-proprietary RAM on a motherboard that required proprietary RAM.
	
	RESOLUTION
	==========
	
	There are two methods you can use to identify whether defective memory chips are
	causing the problem:
	
	- Remove or replace memory chips in the computer to see if the problem is
	  resolved.
	
	- Try limiting the amount of memory that Windows 95 uses. To do so, follow
	  these steps:
	
	  1. Use any text editor (such as Notepad) to edit the System.ini file.
	
	  2. Add the following line in the [386Enh] section of the file
	
	  MaxPhysPage=<nnn>
	
	     where <nnn> determines the amount of memory you want Windows 95 to
	     use.
	
	     To limit Windows 95 to the first 16 MB of memory, add the following line:
	
	  MaxPhysPage=FFF
	
	     To limit Windows 95 to the first 8 MB of memory, add the following line:
	
	  MaxPhysPage=7FF
	
	     To limit Windows 95 to the first 4 MB of memory, add the following line:
	
	  MaxPhysPage=3FF
	
	  3. Save and then close the System.ini file.
	
	  4. Restart your computer.
	
	For more information on troubleshooting memory, please see the following
	article(s) in the Microsoft Knowledge Base:
	
	  Q142546 How to Use a RAM Drive to Troubleshoot Memory
	
	MORE INFORMATION
	================
	
	Defective memory chips may not be detected by memory checking tools. Some memory
	checking programs are not adequate tests because they do not test RAM in the
	same way that Windows uses RAM. Most memory checkers use read/write cycles when
	scanning memory. Since Windows is executing code from memory, it uses execute
	cycles. Execute cycles are different from read/write cycles and are more
	vulnerable to parity errors. It is possible for memory checking programs to find
	parity errors if the memory is extremely faulty. Bad memory chips can also cause
	the following situations:
	
	- Fatal Exception errors
	
	- Himem.sys load failures in normal or Safe mode
	
	- Random lockups
	
	- The computer may stop responding (hang) as soon as you turn it on
	
	
	
	Additional query words: w95hw
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw win95 kbHardware kbfaq
	Technology        : kbWin95search kbWin95
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
