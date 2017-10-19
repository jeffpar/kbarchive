---
layout: page
title: "Q141191: File &amp; Print Services for NetWare Volume Disappears After Reboot"
permalink: /kb/141/Q141191/
---

## Q141191: File &amp; Print Services for NetWare Volume Disappears After Reboot

	Article: Q141191
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you reboot your Windows NT computer running File & Print Services for
	NetWare (FPNW), after creating FPNW volumes the new volumes disappear. In some
	cases you may also lose existing volumes after reboot.
	
	CAUSE
	=====
	
	If the FPNW Service Account does not have at least minimum access rights to the
	directory, then after rebooting, the FPNW volumes will be inaccessible to the
	NetWare clients.
	
	If you attempt to create an FPNW volume on a directory with a very 'limited'
	access, FPNW will allow you to create the volume, but after reboot the volume
	will disappear.
	
	In a different scenario, if you attempt to restrict the directory permissions on
	an NTFS volume, which is also configured as an FPNW volume, it may become
	inaccessible to the NetWare clients after you reboot your machine or stop and
	start the FPNW service.
	
	WORKAROUND
	==========
	
	To workaround this problem, give the local Administrators group, Everyone or
	FPNW Service Account at least "List" rights to the directory where you want to
	create an FPNW volume.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT File & Print
	Services for NetWare version 3.51. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	
	=============================================================================
	
