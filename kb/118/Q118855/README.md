---
layout: page
title: "Q118855: PC DB: How to Reset the MODEM.GLB File"
permalink: /kb/118/Q118855/
---

## Q118855: PC DB: How to Reset the MODEM.GLB File

{% raw %}

	Article: Q118855
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MODEM.GLB file is used by the Microsoft Mail for PC Networks message
	transfer agent, EXTERNAL.EXE, and contains the local serial port information for
	the postoffice. When corruption in the MODEM.GLB file is suspected, the file
	should be reset with the Mail Administrator program (ADMIN.EXE).
	
	MORE INFORMATION
	================
	
	If the MODEM.GLB file becomes corrupt, EXTERNAL.EXE may have difficulty
	initializing and controlling the modem when transferring mail via asynchronous
	communications. To reset the MODEM.GLB file:
	
	1. Locate MODEM.GLB in the GLB subdirectory of MAILDATA and rename it to
	  MODEMGLB.SAV.
	
	2. Start ADMIN.EXE and select Config, Serial to set the appropriate baud rate,
	  dialing mode, and COM port for the local modem. Exiting this screen will
	  create another MODEM.GLB file in the GLB subdirectory.
	
	NOTE: Choosing the Serial command from the Config menu in ADMIN.EXE allows the
	administrator to define the parameters that control data communications with
	postoffices on external networks and Microsoft Mail Remote for Windows users.
	These settings determine how the local modem and serial port will be initialized
	by EXTERNAL.EXE.
	
	The functions available under the Serial command are:
	
	Baud Rate
	---------
	
	  Choose the baud rate or transmission speed for the COM port utilized by the
	  local modem. The default baud rate is 1200 baud.
	
	Mode
	----
	
	  Choose the telephone dialing mode that the local modem is using. Normally the
	  dialing mode will be touch tone.
	
	COM Port
	--------
	
	  Choose the communication port to which the local modem is connected. The
	  default is COM1.
	
	When you have finished setting the serial parameters, press ESC to return to the
	Config menu.
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
