---
layout: page
title: "Q122901: Datarace RediModem Modem Error from RAS"
permalink: /kb/122/Q122901/
---

## Q122901: Datarace RediModem Modem Error from RAS

{% raw %}

	Article: Q122901
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbhw
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the internal version of the Texas Instruments Datarace RediModem to
	dial from Remote Access, the following error message appears:
	
	  Error 651: Your modem or other connecting device has reported an error.
	
	The modem returns the following string:
	
	  <cr><lf> ERROR<cr><lf>
	
	The initialization string included in the MODEM.INF that comes with Windows NT is
	incorrect for the internal version of this modem.
	
	RESOLUTION
	==========
	
	Texas Instruments has provided a corrected MODEM.INF section for this modem.
	Simply copy all the lines below into the MODEM.INF file which can be found in
	the %SYSTEMROOT%\SYSTEM32\RAS directory.
	
	  [TI Internal - DataRace]
	  ;Advanced features enabled, MAXCONNECT set to 38400
	  DEVICETYPE=modem
	  CALLBACKTIME=10
	  DEFAULTOFF=compression
	  MAXCARRIERBPS=14400
	  MAXCONNECTBPS=38400
	
	  <speaker_on>=M1
	  <speaker_off>=M0
	  <protocol_on>=\\N7
	  <protocol_off>=\\N0
	  <hwflowcontrol_on>=\\Q3
	  <hwflowcontrol_off>=\\Q0
	  <compression_on>=%C1
	  <compression_off>=%C0
	  <autodial_on>=ATDT
	  <autodial_off>=ATD
	
	  COMMAND_INIT=AT&F&C1&D2&N0 W1 V1 \\J0 S0=0 S2=128 S7=55<cr>
	  COMMAND_INIT=AT<hwflowcontrol><protocol><compression><speaker><cr>
	  COMMAND_DIAL=<autodial><phonenumber><cr>
	  CONNECT=<cr><lf>CONNECT <carrierbps><cr><lf>
	  COMMAND_LISTEN=ATS0=1<cr>
	  CONNECT=<cr><lf>CONNECT <carrierbps><cr><lf>
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
