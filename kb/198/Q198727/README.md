---
layout: page
title: "Q198727: SMS: Remote Control Setting Registry Values Provided"
permalink: /kb/198/Q198727/
---

## Q198727: SMS: Remote Control Setting Registry Values Provided

	Article: Q198727
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the client-side Remote Control icon (Smsrc.cpl) in Control Panel is the
	preferred method for changing client-side Remote Control settings, it is still
	useful to know where the registry settings are located and what the default
	settings are.
	
	The following table includes settings for all the switches that direct Remote
	Control features available for a client computer. In nearly all cases, a value
	of 1 means that the feature is enabled; a value of 0 means that the feature is
	disabled.
	
	Registry Setting    Default Value          Notes
	
	Allow Chat                1
			
	Allow File Transfer       1	
		
	Allow Ping Test           1	
		
	Allow Reboot              1	
		
	Allow Remote Execute      1	
		
	Allow Takeover            1	
		
	Allow DOS Diagnostics     1           Not used with Windows NT.
	
	Allow Windows Diagnostics 1           Not used with Windows NT.
	
	Audible Signal            1
		
	CommandLine              -IP          -IP, -TCP, -IPX, -Lx
	
	CompressionType           0           0 = RLE, 1 = LZ, 2 = Auto
	
	Control Level             1
	
	LanaNum                   0
	
	LogToFile                 1           Not set by default, but can be
	                                     added to start logging.
	
	Permission Required       0
		
	PermittedViewers   "Administrators"  User Groups permitted to RC.
		
	Use IDIS                  1           Screen acceleration, 0 [OFF] by                                            default.
	 
	Use Local Settings        0
		
	Visible Signal            1
	
	MORE INFORMATION
	================
	
	If the changes to the settings are made using Control Panel Remote Control, the
	new values are forcefully inserted into WUSER or WUSER32 (the running client
	Remote Control agent). Conversely, if the changes are made to the registry, ONLY
	WUSER32 on Windows NT systems will poll the changes and actively insert them
	into the agent. All other clients must be restarted for the changes to take
	effect.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
