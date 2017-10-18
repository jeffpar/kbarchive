---
layout: page
title: "Q128586: SNADS: Lotus-Softswitch SNADGET.EXE Version 3.04.6"
permalink: kb/128/Q128586/
---

## Q128586: SNADS: Lotus-Softswitch SNADGET.EXE Version 3.04.6

	Article: Q128586
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SNADS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lotus-SoftSwitch has implemented SNADGET.EXE version 3.04.6 into the latest
	patch version of the SNADS gateway. This patch permits the use of the gateway
	mailer disable switch (-MD) in the gateway setup. This switch must be enabled
	when the External Mail program is servicing the gateway postoffice. There are
	two methods to enable this at the gateway:
	
	- Run Setup on the gateway. When you are asked "Is EXTERNAL running with the
	  local postoffice (Y/N)?," answer Yes.
	
	  The DISMAIL=Y entry is then added by Setup to the PARM.DAT file on the
	  gateway. The PARM.DAT file contains the Gateway configuration information and
	  is opened each time the gateway is started.
	
	- Edit the PARM.DAT and add the DISMAIL=Y entry. If the DISMAIL=N entry already
	  exists, change N to Y. Restart the gateway for the changes to take effect.
	
	If the SNADS gateway postoffice is not using the External Mail program to deliver
	mail between other postoffices, do not use the gateway mailer disable, or mail
	will not be delivered from SNADS.
	
	Contact Lotus-Softswitch to confirm that your patch level supports the mailer
	disable switch.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSNADS300
	Version           : :3.0
	
	=============================================================================
	
