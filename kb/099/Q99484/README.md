---
layout: page
title: "Q99484: File Functions, Load Procedure, and Resources for XPad"
permalink: /kb/099/Q99484/
---

## Q99484: File Functions, Load Procedure, and Resources for XPad

{% raw %}

	Article: Q99484
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SUMMARY
	=======
	
	This article contains information on XPad software: functional definitions of
	the component files, a loading procedure, and some Eicon telephone and fax
	numbers.
	
	FILE FUNCTIONS
	--------------
	
	ECXPAD.SYS    XPad device driver (emulates OS/2's COM01.SYS)
	ECXPAD.EXE    Starts and stops the pad
	XPAD.EXE      Pad software overlay
	ECXPAD.DLL    XPad dynamic linked library
	ECXPAD.INI    ECXPAD initialization file (contains the X.3 parameters)
	
	INSTALLING AND RUNNING XPAD SOFTWARE
	------------------------------------
	
	1. Insert ECBIOS.SYS and ECXPAD.SYS in your CONFIG.SYS file.
	
	2. Insert ECXPAD.DLL in your \OS2\DLL subdirectory.
	
	3. Configure the card using ECCFG.EXE to set the parameters you want.
	
	4. In the ECXPAD.INI file, set these parameters:
	
	     AUTO_LISTEN=YES (for older XPad versions)
	     AUTO_CONNECT=ANSWER (For the latest XPad version)
	     INITIALPROFILE=6 (this is the transparent profile)
	     X25_ADDRESS=* (accept any address)
	
	5. After the machine boots:
	
	  a. Run ECLOAD. This is in the \BIN subdirectory of wherever you installed the
	     Eicon software; it loads the card software.
	
	  b. Run ECXPAD START. This starts the Pad.
	
	  c. Start Remoteaccess.
	
	If you have problems beyond this point, contact Microsoft. Make copies of your
	configuration files (CONFIG.SYS, ECXPAD.INI, and EC.CFG) to e-mail along with a
	description of the problem.
	
	Make sure you get the latest Xpad drivers and software from Eicon.
	
	SOME EICON NUMBERS
	------------------
	
	Canada:  (514) 631-2592       fax (514) 631-3092
	USA:     (214) 239-3270       fax (214) 239-3304
	Europe:  44 (81) 941-7122     fax 44 (81) 941-0548
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
