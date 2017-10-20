---
layout: page
title: "Q95115: WFWG: Using Two Network Cards with the SMCMAC.DOS Driver"
permalink: /kb/095/Q95115/
---

## Q95115: WFWG: Using Two Network Cards with the SMCMAC.DOS Driver

{% raw %}

	Article: Q95115
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	The Standard Microsystems Corporation (SMC) network interface card driver
	(SMCMAC.DOS), which is included with Windows for Workgroups version 3.1, does
	not support using two SMC network cards at the same time. Windows for Workgroups
	does not display a warning message and will allow setup for two SMC network
	cards. If two SMC network cards are set up with the SMCMAC.DOS driver, the
	following error message appears when you start the machine:
	
	  Error 5733: The protocol manager has reported an incomplete binding.
	
	CAUSE
	=====
	
	This is a limitation with the SMCMAC.DOS NDIS driver and applies to both
	Microsoft LAN Manager and Windows for Workgroups. SMC has a workaround for this
	limitation for Microsoft LAN Manager, and it should also work with Windows for
	Workgroups.
	
	WORKAROUND
	==========
	
	To work around the limitation, use the following steps.
	
	1. Obtain the self extracting archive file NDS119.EXE, from either the SMC forum
	  on CompuServe or directly from SMC. This file contains another NDIS driver
	  for the second network card.
	
	2. Run the NDS119.EXE file and once the files have been extracted, copy the file
	  SMCMAC2.DOS to your Windows for Workgroups directory.
	
	3. Start Windows for Workgroups and open the Control Panel from the Main group
	  and select Network, Adapters.
	
	4. If there are already two drivers installed for the SMC network cards, then
	  exit Windows and skip to step 6. Otherwise, choose Add.
	
	5. Select an appropriate network card driver for the second SMC network card,
	  configure the correct settings for the card, and choose Restart Computer when
	  prompted.
	
	6. Edit the CONFIG.SYS file and add any of the following lines if they are not
	  present, or modify any lines that need to be, so they match the below lines:
	
	        DEVICE=<Windows Path>\PROTMAN.DOS /I:<Windows Path>
	        DEVICE=<Windows Path>\SMCMAC.DOS
	        DEVICE=<Windows Path>\SMCMAC2.DOS
	        DEVICE=<Windows Path>\WORKGRP.SYS
	
	7. Restart the computer by turning it off and on.
	
	  NOTE: The SMCMAC2.DOS driver is written so that it may require the computer be
	  restarted to properly initialize.
	
	For additional information, contact SMC Technical Support.
	
	The SMC products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
