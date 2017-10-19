---
layout: page
title: "Q123995: Mitsumi Driver Does Not Support Sound Blaster 16 Multi-CD-ROM"
permalink: /kb/123/Q123995/
---

## Q123995: Mitsumi Driver Does Not Support Sound Blaster 16 Multi-CD-ROM

	Article: Q123995
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mitsumi CD-ROM driver supplied with Windows NT version 3.5 does not support
	the Creative Labs Sound Blaster 16 Multi-CD-ROM board (CT2230).
	
	CAUSE
	=====
	
	The Mitsumi CD-ROM driver requires an I/O base address above 300H. The CT2230
	automatically configures the I/O base address below 300H by adding 10H to the
	audio settings. Valid audio settings for the Sound Blaster 16 board are 220H,
	240H, 260H, or 280H. Therefore, the maximum I/O base address that can be
	configured for the Mitsumi interface is 290H. This address does not work with
	the Mitsumi CD-ROM driver.
	
	The older version of the Sound Blaster Multi-CD-ROM board (CT1750) includes
	additional jumpers to configure the Mitsumi interface separately and works with
	the driver that is currently available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: sb16 prodnt mcd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
