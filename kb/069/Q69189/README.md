---
layout: page
title: "Q69189: EGA.SYS Added to CONFIG.SYS with OEM Video Driver"
permalink: /kb/069/Q69189/
---

## Q69189: EGA.SYS Added to CONFIG.SYS with OEM Video Driver

{% raw %}

	Article: Q69189
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing a third party video driver for Microsoft Windows version 3.00,
	the line DEVICE=C:\WINDOWS\EGA.SYS is added to the CONFIG.SYS file if Windows is
	allowed to modify this file. Windows does not copy over the EGA.SYS file when
	installing some third party drivers, so the error message
	
	  Bad or Missing C:\WINDOWS\EGA.SYS
	
	will appear when the system is booted.
	
	The EGA.SYS file should be copied from the Windows disks and expanded if the
	graphics display is EGA. If not, the DEVICE=C:\WINDOWS\EGA.SYS is not necessary
	and can be deleted from the CONFIG.SYS. For more information on expanding files,
	query on the following words:
	
	  expanding and original
	
	Microsoft has confirmed this to be a problem in Microsoft Windows version 3.00.
	This problem was corrected in Microsoft Windows 3.00a.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
