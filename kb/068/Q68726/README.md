---
layout: page
title: "Q68726: Windows Setup with EtherLink MC"
permalink: /kb/068/Q68726/
---

## Q68726: Windows Setup with EtherLink MC

{% raw %}

	Article: Q68726
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an EtherLink MC (Micro Channel) network card is detected during setup, the
	DMAbuffersize switch entry is placed in the SYSTEM.INI [386Enh] section.
	
	MORE INFORMATION
	================
	
	The DMAbuffersize switch is set when EtherLink MC is detected during setup. No
	modifications should be made to this section. For example:
	
	     [386Enh]
	     DMAbuffersize=32
	
	DMAbufferSize specifies the amount of memory (in kilobytes) to be reserved for
	buffered direct memory access (DMA). This memory is allocated above 640K, if
	possible. Windows in 386 enhanced mode defaults to a DMA buffer size that can
	handle disk access. The default setting size is 16.
	
	REFERENCES
	==========
	
	SYSINI2.TXT, Windows 3.00, Windows directory.
	
	Additional query words: 3.00 win30 3.00a setup inf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
