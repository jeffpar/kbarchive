---
layout: page
title: "Q87241: Crash or Inappropriate Sounds Occur with Sound Blaster and 486"
permalink: /kb/087/Q87241/
---

## Q87241: Crash or Inappropriate Sounds Occur with Sound Blaster and 486

{% raw %}

	Article: Q87241
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS-based applications that use the Sound Blaster family of cards may crash
	or produce inappropriate sounds when used with Windows version 3.1 on some 386DX
	and 486 machines.
	
	CAUSE
	=====
	
	Creative Labs does not recommend running MS-DOS-based applications that use the
	Sound Blaster cards from within Windows.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem in the following ways:
	
	- Turn off the turbo button on the 486.
	
	- Set the DMABufferSize to 64 in the [386Enh] section of the SYSTEM.INI file.
	
	- Set the data bus speed of the 486 to 8 MHz.
	
	MORE INFORMATION
	================
	
	The problem apparently occurs because data is being delivered too quickly to the
	Sound Blaster cards. Turning off the turbo button slows down the data transfer
	rates and, thus, may solve the problem.
	
	Setting DMABufferSize to 64 reserves more space for the DMA channel to perform
	its buffering function and, thus, allows room for the increased data.
	
	Another possible solution is to check the bus speed setting in the CMOS setup. If
	it is higher than 8 MHz, you may need to reduce it to 8 MHz. The bus speed of
	some 486 machines may be set as high as 10 MHz. Slowing this down may alleviate
	the transfer speed problem.
	
	Additional query words: 3.10 i486 80486 386 dx
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
