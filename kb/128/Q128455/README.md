---
layout: page
title: "Q128455: SMSRUN16 Fails to Create SMS Client Group on Installation"
permalink: /kb/128/Q128455/
---

## Q128455: SMSRUN16 Fails to Create SMS Client Group on Installation

	Article: Q128455
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOM
	-------
	
	On your Windows 3.x NetWare client, if NETWARE.DRV and VNETWARE.386 are
	referred to with a full path in the SYSTEM.INI, SMSRUN16 fails to create
	the Systems Management Server Client Group during installation.
	
	CAUSE
	=====
	
	There is directory path information for VNETWARE.386 and NETWARE.DRV in the
	SYSTEM.INI file.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Place the NETWARE.DRV and VNETWARE.386 in the \WINDOWS\SYSTEM directory and
	  remove the path information from the "network.drv=" and "network=" lines in
	  the SYSTEM.INI file.
	
	  -or-
	
	- Follow these steps:
	
	  1. Keep the NETWARE.DRV and VNETWARE.386 in the NWCLIENT directory.
	
	  2. Add the NWCLIENT directory to the path in AUTOEXEC.BAT.
	
	  3. Remove the path information from the "netware.drv=" and "network=" lines
	     in the SYSTEM.INI.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. A fix to this problem is in development, but has not been
	regression-tested and may be destabilizing in production environments. Microsoft
	does not recommend implementing this fix at this time. Contact Microsoft Product
	Support Services for more information on the availability of this fix.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
