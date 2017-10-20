---
layout: page
title: "Q89302: Erratic Behavior with Enhanced Mode Windows and LANtastic 4.x"
permalink: /kb/089/Q89302/
---

## Q89302: Erratic Behavior with Enhanced Mode Windows and LANtastic 4.x

{% raw %}

	Article: Q89302
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your system may behave erratically while running Windows in 386 enhanced mode
	while set up for LANtastic 4.x. When you attempt to access the network, (for
	example, by clicking on a network drive in File Manager), the system may stop
	responding (hang) or exit to the MS-DOS command prompt.
	
	RESOLUTION
	==========
	
	To resolve this problem, make the following changes to the [386Enh] section of
	your SYSTEM.INI file:
	
	- Decrease the NetAsynchTimeOut= value from 50 to 5.
	
	- Add the line "device=LANTASTI.386" (without the quotation marks)
	
	You should also confirm that your LANtastic directory is in your path.
	
	MORE INFORMATION
	================
	
	If you installed the LANtastic 4.x driver that ships with Windows 3.1, then
	NetAsynchTimeOut=50 was placed in the [386Enh] section of the SYSTEM.INI file.
	Installing the LANtastic 4.1 driver from the [drive]:\LANTASTI directory
	correctly adds NetAsynchTimeOut=5. Changing the NetAsynchTimeOut= setting from
	50 to 5 seems to resolve the erratic problems encountered when accessing the
	network.
	
	The LANtastic product included here is manufactured by Artisoft, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 Artisoft 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
