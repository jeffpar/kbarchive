---
layout: page
title: "Q90341: WFWG Err Msg: Server VM Terminated Abnormally"
permalink: /kb/090/Q90341/
---

## Q90341: WFWG Err Msg: Server VM Terminated Abnormally

{% raw %}

	Article: Q90341
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message while running MS-DOS-based
	applications on a Windows for Workgroups server:
	
	  The Server VM Terminated Abnormally
	
	CAUSE
	=====
	
	This means that the server virtual device driver (VxD) did not terminate the
	server virtual machine (VM). Instead, Windows terminated the server VM because
	an illegal instruction was executed inside the server VM. This situation is
	usually caused by real-mode components, such as network card drivers, real-mode
	transports, or any other real-mode device drivers.
	
	WORKAROUND
	==========
	
	The server is not operational until you restart Windows.
	
	MORE INFORMATION
	================
	
	When you install a device driver or a terminate-and-stay-resident (TSR) program
	(such as a transport or net card driver) before starting Windows, the driver or
	TSR becomes available to all VMs under 386 enhanced mode Windows. If the device
	driver or TSR is active inside the server VM and attempts to use a piece of
	memory that doesn't belong to it, it can start executing invalid instructions.
	
	In such a situation, Windows terminates the server VM and issues the error above.
	(This error would be a system integrity violation for any non-server VM.)
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
