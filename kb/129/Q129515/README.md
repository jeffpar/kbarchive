---
layout: page
title: "Q129515: File Transfer Using Zmodem Protocol Hangs HyperTerminal"
permalink: /kb/129/Q129515/
---

## Q129515: File Transfer Using Zmodem Protocol Hangs HyperTerminal

{% raw %}

	Article: Q129515
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
	
	When you transfer a file to another computer in HyperTerminal using the Zmodem
	protocol, HyperTerminal seems to stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are met:
	
	- The filename begins with a backslash (\).
	
	- The filename is "C:" (without the quotation marks).
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Use another protocol, such as Xmodem, to transfer the file in Hyper-
	  Terminal.
	
	- Rename the file.
	
	MORE INFORMATION
	================
	
	When the situation described in the "Symptoms" section occurs, Hyper- Terminal
	generates a fault that is passed to the Windows 95 exception handler. The
	Windows 95 exception handler determines that the fault should be handled by
	HyperTerminal and passes the fault back. The fault is passed back and forth in
	an internal loop until there is a stack overflow.
	
	Additional query words: upload ymodem ymodemg ymodem-g hyperterm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
