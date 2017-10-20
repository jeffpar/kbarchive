---
layout: page
title: "Q135996: External Cache Enabled in CMOS May Hang Computer"
permalink: /kb/135/Q135996/
---

## Q135996: External Cache Enabled in CMOS May Hang Computer

{% raw %}

	Article: Q135996
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT may fail to shut down on some computers if the external cache options
	are not set correctly in the CMOS settings. If you do not have external cache on
	your motherboard, but the option is enabled in the CMOS settings, you may
	experience this problem.
	
	
	RESOLUTION
	==========
	
	To correct this problem, turn off your external cache option in CMOS by entering
	your computer's setup program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Please notice that information contained in the SETUP.TXT file on the Windows NT
	3.51 Server CD-ROM is misleading with regard to this problem. The SETUP.TXT file
	states:
	
	  Digital Venturis Systems with S3 Based Video
	  --------------------------------------------
	  The Digital Venturis line of computers with S3 based
	  video may experience problems when attempting to
	  restart. When selecting Shutdown/Restart, the
	  system may freeze when attempting to reset the S3
	  video. This is in no way detrimental to the system,
	  simply restart via the reset button or power off the
	  computer. This issue will be addressed in the near
	  future.
	
	This statement does not address the real issue: the problem occurs because the
	cache option is enabled in CMOS. Furthermore, current versions of the DEC
	Venturis have no reset button.
	
	
	Additional query words: prodnt video s3 hang venturis
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
