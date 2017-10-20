---
layout: page
title: "Q91201: WFWG Setup Does Not Warn That PC-NFS is Not Supported"
permalink: /kb/091/Q91201/
---

## Q91201: WFWG Setup Does Not Warn That PC-NFS is Not Supported

{% raw %}

	Article: Q91201
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of Windows for Workgroups (WFWG), there is no warning
	that the SUN PC-NFS network operating system is not supported.
	
	
	CAUSE
	=====
	
	Versions of the SUN PC-NFS network prior to version 5.0 are not supported by
	Windows for Workgroups version 3.1. If the references to the SUN client software
	are not removed before rebooting, the system may stop responding (hang) as the
	conflicting network device drivers attempt to load.
	
	Normally, Windows for Workgroups issues a warning during setup if the currently
	installed networking software is not compatible with Windows for Workgroups.
	Windows for Workgroups version 3.1 setup is not able to detect the presence of a
	PC-NFS network.
	
	WORKAROUND
	==========
	
	To run Windows for Workgroups properly on a SUN PC-NFS workstation, remove all
	references to PC-NFS connectivity from the CONFIG.SYS and AUTOEXEC.BAT files or
	upgrade to PC-NFS version 5.0.
	
	For more information on running PC-NFS version 5.0 with Windows for Workgroups
	version 3.1, query on the following words here in the Microsoft Knowledge Base:
	
	  Sun and PC-NFS and 5.0 and NDIS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of Windows for Workgroups as
	later versions support PC-NFS.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
