---
layout: page
title: "Q148472: SMC Ultra 8216 Is Supported by Selecting SMC EtherEZ (8416)"
permalink: /kb/148/Q148472/
---

## Q148472: SMC Ultra 8216 Is Supported by Selecting SMC EtherEZ (8416)

{% raw %}

	Article: Q148472
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The SMC EtherCard Elite Ultra (8216) is not an option to choose when you install
	the SMC16 network card driver that is available from the DRVLIB subdirectory.
	The HCL clearly identifies that the Driver Library on the compact disc is a
	source for this driver.
	
	If you select the "SMC EtherEZ Adapter (8416)" option, the driver installs and
	works correctly.
	
	MORE INFORMATION
	================
	
	When you try to use the SMC driver located in the DRVLIB\NETCARD\X86\SMC16
	directory on the NT 3.51 Server or Workstation disc, you are presented with the
	following options:
	
	  SMC 8003E/A MCA EtherCard Plus
	  SMC 8003W/A MCA EtherCard Plus
	  SMC 8013EP/A MCA EtherCard Plus Elite
	  SMC 8013WP/A MCA EtherCard Plus Elite
	  SMC EtherEZ Adapter (8416)
	
	If you examine the OEMSETUP.INF file in the DRVLIB\NETCARD\X86\SMC16 directory,
	the comment shows that this driver is for the SMC Ultra 8216 network adapter.
	However, the Options section in the INF file does not define an entry for the
	8216 as seen by the available options listed above.
	
	After choosing the SMC EtherEZ Adapter (8416) option, you are prompted for the
	port address the adapter is using. Once this is entered, the driver will install
	and function correctly for the SMC EtherCard Elite Ultra (8216).
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
