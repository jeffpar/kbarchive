---
layout: page
title: "Q120132: Installing an Unlisted RAS Modem"
permalink: /kb/120/Q120132/
---

## Q120132: Installing an Unlisted RAS Modem

{% raw %}

	Article: Q120132
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft does not encourage nor support user changes to .INF files;
	therefore, Microsoft Product Support Services (PSS) does not support the
	procedure in this article. Although we have tested the following procedure
	and it appears to function as described; we strongly recommend that you
	make a backup copy of your .INF file before you proceed.
	
	SUMMARY
	=======
	
	It is possible to install an unsupported modem for use with RAS only, even
	though the modem does not appear on the list of supported communications
	devices. Although not tested by Microsoft, many devices can operate
	satisfactorily. To set up an unsupported modem for RAS, it may be necessary to
	edit the MODEM.INF file or to choose an emulation. This article provides an
	example to guide you through this process.
	
	MORE INFORMATION
	================
	
	The parameters for your modem can be substituted for the parameters in the
	example below.
	
	Example
	-------
	
	You are using a Macronix Stealth 144 modem, which is not included on the list of
	approved modems. After trying to install the Stealth 144 as a different Macronix
	modem (such as the Maxlite Fax 9696 or the VOMAX 2000), the modem still does not
	work correctly.
	
	Because most modems are Hayes compatible, configure your modem as a Hayes
	Compatible 9600. If it works correctly, you can edit the MODEM.INF file to
	include an option for your modem. Use the following steps to do this:
	
	1. Back up the existing MODEM.INF file. Then open the MODEM.INF file in your
	  Windows SYSTEM subdirectory, and search for the heading [Hayes Compatible
	  9600]. Select the entire section and choose Copy from the Edit menu.
	
	  The section appears similar to the following:
	
	        [Hayes Compatible 9600]
	        <speaker_on>=M1
	        <speaker_off>=M0
	        <autodial_on>=ATDT
	        <autodial_off>=ATX3D
	        CALLBACKTIME=10
	        DEFAULTOFF=compression
	        MAXCARRIERBPS=9600
	        MAXCONNECTBPS=9600
	
	        COMMAND_INIT=AT&F&C1&D2 V1 S0=0 S2=128 S7=55<speaker><cr>
	        COMMAND_DIAL=<autodial><phonenumber><cr>
	        COMMAND_LISTEN=ATS0=1<cr>
	
	2. Move to the end of MODEM.INF. From the Edit menu, choose Paste so that the
	  Hayes information can easily be found later. Change the heading on the pasted
	  information from [Hayes Compatible 9600] to [Macronix Stealth 144].
	
	3. The Stealth 144 is a 14,400 baud modem; however, because of software or
	  hardware compression, it is possible to connect at a higher rate. You can
	  modify the information pasted in step 2 so that the modem attempts to connect
	  at 19,200.
	
	  The MAXCARRIERBPS= is the maximum baud rate for this modem. Change this from
	  9600 to 19200. The MAXCONNECTBPS= is the baud rate at which negotiating
	  (training) begins when the modem is connected. If the two modems cannot talk
	  at this rate, lower rates are automatically tried until a baud rate at which
	  both modems can operate is found. Change MAXCONNECTBPS= from 9600 to 19200.
	
	4. Load RAS. Choose Setup, then choose Configuration. The new modem should now
	  appear under Device. Select it and restart RAS to load the information for
	  the new modem.
	
	  When you install a RAS modem, the installation program reads the MODEM.INF
	  file, parses the information for that particular modem, and writes part of it
	  to the SERIAL.INI file. When RAS is loaded, it reads both the SERIAL.INI and
	  MODEM.INF files. Therefore, after making any changes to the MODEM.INF file,
	  reinstall the modem.
	
	If this procedure does not work properly, restore the backup copy of MODEM.INF.
	For more information, search on the word "script" in RAS Help.
	
	Additional query words: 3.11 unsupported modem
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
