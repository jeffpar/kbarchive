---
layout: page
title: "Q115932: Class 2.0 Modems Unsupported with At Work PC Fax"
permalink: /kb/115/Q115932/
---

## Q115932: Class 2.0 Modems Unsupported with At Work PC Fax

	Article: Q115932
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During installation of Microsoft At Work PC Fax on a Class 2.0 fax modem, the
	following error message is displayed:
	
	  Cannot find AWCL2_0.DLL
	
	If you choose Ignore, the installation process continues, but Microsoft At Work
	PC Fax is disabled.
	
	If you choose the Fax and Mail options during the Microsoft At Work PC Fax
	installation process, this error message also appears when you enter Windows for
	Workgroups Mail.
	
	CAUSE
	=====
	
	This error message occurs because Microsoft At Work PC Fax does not provide
	support for Class 2.0 fax modems. "Class 2.0" fax modems are not the same as
	"Class 2" fax modems, which are supported under Microsoft At Work PC Fax. During
	installation of Microsoft At Work PC Fax, the fax modem class is detected and
	the correct dynamic link library for that fax modem class is loaded:
	
	  AWCAS.DLL    = CAS fax modem detected
	  AWCLASS1.DLL = Class 1 fax modem detected
	  AWCLASS2.DLL = Class 2 fax modem detected
	
	If Microsoft At Work PC Fax asks for AWCL2_0.DLL, the fax modem has been
	identified as a Class 2.0 fax modem.
	
	RESOLUTION
	==========
	
	Type "AT+FCLASS=?" (without the quotation marks) in Windows for Workgroups
	Terminal to determine if additional fax modem classes are supported by the fax
	modem.
	
	- If the fax modem reports only 2.0, it is not possible to run Microsoft At
	  Work PC Fax on this fax modem. No workarounds are available.
	
	- If the fax modem reports it is also Class 1 compatible, you can enable the
	  fax modem by editing the FIXMODEMCLASS= line in the [COMn] section of the
	  EXFAXPUMP.INI file to read:
	
	  FIXMODEMCLASS=1.
	
	
	Additional query words: 3.11 1.0 1.00 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
