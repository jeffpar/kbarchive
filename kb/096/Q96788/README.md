---
layout: page
title: "Q96788: Problems and Solutions with UPS Service"
permalink: kb/096/Q96788/
---

## Q96788: Problems and Solutions with UPS Service

	Article: Q96788
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article summarizes the difficulties and unexpected occurrences in using the
	UPS service that were resolved by Product Support Services in the past 15
	months.
	
	MORE INFORMATION
	================
	
	Workstations Don't Receive UPS Messages
	---------------------------------------
	
	In order for a workstation to receive a message from a server's UPS service it
	must actually be using a resource on that server and be running the messaging
	service.
	
	UPS Stops Working After a Server Reconfiguration
	------------------------------------------------
	
	If any special settings need to be made to the UPS entry in CONFIG.SYS (such as
	the "/port:com_" part of the line "DEVICE=C:\<lanman>\DRIVERS\UPSDRV.OS2")
	then they need to be checked after using the LAN Manager Setup program. Setup
	resets some non-default entries back to the defaults when it saves the
	configuration files. This can cause a previously functioning UPS to stop working
	if a COM port other than COM1 was specified on the UPS entry in CONFIG.SYS.
	
	UPS Service Failures or COM Port Problems
	-----------------------------------------
	
	Interrupt conflicts between hardware used by the UPS service and other devices
	can manifest themselves in a number of ways. Trying to share the COM port may
	return an "Invalid device" error. The UPS service itself may fail to start. A
	NET 2480 error may be returned, indicating that the driver couldn't be accessed
	or was misconfigured.
	
	If the load order of the drivers in CONFIG.SYS is incorrect, it can also cause
	symptoms similar to a hardware conflict (COM port doesn't exist when it really
	does). See Appendix B of the "Installation and Configuration Guide" for
	information on the load order.
	
	If an "Error opening device" is reported for the UPS driver, it may be corrupted.
	Expand the driver off of the installation disks and replace the file to test
	this.
	
	Invalid parameters in the [UPS] section of LANMAN.INI may prevent the UPS service
	from starting.
	
	There are reported problems with an IBM dual asynchronous board where using the
	UPS service on a port other than COM1 either prevents the use of COM3 (when the
	UPS is on COM2) or does not work at all (UPS on COM3).
	
	
	No Indication of UPS Shutdown on the Server
	-------------------------------------------
	
	This is normal behavior. During shutdown three messages are displayed: NET5150,
	NET 5152, and NET 5153 (if power is restored before shutdown, a NET 5151 will be
	sent). After the last message, the server screen returns to the one that was
	showing before power failure. No further visual notification of shutdown is
	given. If it was at an OS/2 command prompt, then you can still type on that
	line; however, once you press ENTER, no further actions can be taken. Once power
	is restored the server is rebooted automatically.
	
	In one instance, intermittent machine shutdowns with no apparent reason have been
	traced to the use of an unshielded UPS data cable.
	
	Auto-shutdown on Startup
	------------------------
	
	A mismatch between the signal polarity settings ("voltlevels" in LANMAN.INI) for
	the UPS service and what the UPS actually supplies can cause the server to shut
	down at startup and continuously cycle through the reboot process.
	
	Data Corruption on UPS Shutdown
	-------------------------------
	
	If the UPS service is run on a server when there is no UPS attached, a detected
	power loss can initiate an attempted orderly shutdown and corrupt files.
	
	Additional query words: 2.00 2.10 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
