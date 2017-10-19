---
layout: page
title: "Q126437: Using Communications Applications When RAS Server is Running"
permalink: /kb/126/Q126437/
---

## Q126437: Using Communications Applications When RAS Server is Running

	Article: Q126437
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may be unable to access a serial port in a communication application while
	the Windows NT Remote Access Service (RAS) server software is running. For
	example, if the RAS server service is running, and you have configured RAS so
	that your modem on COM1 accepts RAS dial-in, the following error message appears
	if you attempt to use COM1 in Windows NT Terminal:
	
	  The selected COM port is either not supported or is being used by another
	  device.
	
	  Select another port.
	
	You can temporarily disable the RAS server service, so you can use the COM port
	to dial out using another communications application, by writing a simple batch
	file.
	
	MORE INFORMATION
	================
	
	Use the following batch file to temporarily stop the RAS server service and run
	Windows NT Terminal:
	
	  net stop remoteaccess
	
	c:\winnt\system32\terminal.exe
	
	  net start remoteaccess
	
	Save the batch file and create an icon for it. The batch file disables the RAS
	server service, making the port available for dial- out, and then restarts the
	RAS server service once you quit your communications application.
	
	NOTE: This procedure is not necessary if you dial-out using the RAS client
	software. The RAS client temporarily disables the RAS server service so that the
	port can be used for dialing-out.
	
	Stopping the RAS server service stops the service for all serial ports that have
	been configured to allow dial-in. If you have multiple ports configured for
	dial-in, you may want to reserve one of the ports for dial- out by not
	configuring it to allow RAS dial-in, rather than disabling the RAS server
	service.
	
	Only user accounts that have permission to start and stop a service can use this
	workaround.
	
	Additional query words: 3.10 prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
