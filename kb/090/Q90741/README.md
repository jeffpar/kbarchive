---
layout: page
title: "Q90741: System Hangs with Zenith Z-Note"
permalink: /kb/090/Q90741/
---

## Q90741: System Hangs with Zenith Z-Note

	Article: Q90741
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On the Zenith Z-Note laptop, the system may stop responding (hang) if you move
	the mouse quickly (for example, if you rapidly select and delete text). The
	problem is not application-specific and may also occur in MS- DOS. A BIOS
	upgrade from Zenith is required to correct the problem.
	
	MORE INFORMATION
	================
	
	It usually takes several repeated actions to cause the problem.
	
	A BIOS problem may cause the mouse driver to hook IRQ 0, the system timer
	interrupt. This can be confirmed by using the Microsoft Diagnostic utility
	(MSD.EXE) supplied with Windows 3.1 to check IRQs. IRQ 0 will be shown correctly
	as the system timer interrupt, but will be handled by MOUSE.COM.
	
	Zenith has confirmed this to be a problem with BIOS versions earlier than 4.1E in
	its Z-Note laptop computers. The problem is only known to occur with Windows 3.1
	and Microsoft mouse driver versions 8.20- 8.20a.
	
	Zenith Z-Note computers use an EPROM flash BIOS. Upgrades are available from
	CompuServe or Zenith's End User BBS. The upgrade BIOS revision is version 4.1E.
	
	For further information contact Zenith technical support.
	
	The Zenith Z-Note is manufactured by a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: winboot 3.10 znote portable notebook
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
