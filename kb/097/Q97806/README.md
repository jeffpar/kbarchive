---
layout: page
title: "Q97806: DoubleSpace Maintenance Program Fails to Modify DBLSPACE.INI"
permalink: /kb/097/Q97806/
---

## Q97806: DoubleSpace Maintenance Program Fails to Modify DBLSPACE.INI

{% raw %}

	Article: Q97806
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If a network drive is mapped over the host drive letter and you attempt to change
	the "Last drive reserved for DoubleSpace's use:" setting, the DoubleSpace
	maintenance program does not change the LastDrive= line in the DBLSPACE.INI
	file, and does not indicate that the operation failed.
	
	CAUSE
	=====
	
	The DoubleSpace maintenance program cannot change the DBLSPACE.INI file on the
	host drive when a network drive is mapped over its drive letter.
	
	WORKAROUND
	==========
	
	To work around this situation, disconnect or log off from the network drive and
	run the DoubleSpace maintenance program to change the "Last drive reserved for
	DoubleSpace's use:" setting.
	
	Additional query words: 6.00 double space manager dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
