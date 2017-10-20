---
layout: page
title: "Q93654: Using the &#91;common&#93; Section with Multiple Configurations"
permalink: /kb/093/Q93654/
---

## Q93654: Using the &#91;common&#93; Section with Multiple Configurations

{% raw %}

	Article: Q93654
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use multiple configurations in your CONFIG.SYS file, you should use a
	[common] section for the device drivers and environment statements you would
	normally use for all of your configurations.
	
	If you place the [common] section at the end of your CONFIG.SYS file, you greatly
	increase the chances that a setup or installation program will correctly update
	your CONFIG.SYS file.
	
	For example, when you install a CD-ROM drive, the installation software adds the
	device driver to the CONFIG.SYS file. It will probably add the device driver at
	the bottom, in the [common] section. If you had [Development] as your last
	section, the CD-ROM driver would be available only under that configuration,
	instead of every configuration.
	
	Additional query words: 6.22 6.00 6.20 multi config multi-configuration
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
