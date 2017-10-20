---
layout: page
title: "Q94412: AUTOEXEC File Is Not Processed Running 3rd-Party Shell"
permalink: /kb/094/Q94412/
---

## Q94412: AUTOEXEC File Is Not Processed Running 3rd-Party Shell

{% raw %}

	Article: Q94412
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
	
	Some third-party command shells (such as NDOS or 4DOS) do not require the /P
	switch (which specifies the command shell is permanent). As a result, if you use
	a third-party shell without the /P switch, and set environment variables from
	your CONFIG.SYS file or use MS-DOS 6 or later startup menus, your AUTOEXEC.BAT
	file is not processed when you start your computer.
	
	MORE INFORMATION
	================
	
	Third-party command shells that do not require the /P switch check to see if an
	environment has been created. If it has, they do not call the AUTOEXEC.BAT file.
	If you use the MS-DOS 6 startup menu feature or you set environment variables
	(such as PATH or PROMPT) in your CONFIG.SYS file, an environment is created and
	the AUTOEXEC.BAT file is not processed.
	
	Additional query words: 6.22 6.00 6.20 NDOS 4DOS norton symantic clean- start f5 f8 multi-start clean-boot multi-boot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
