---
layout: page
title: "Q142267: SMS: Netspeed Returns False Speed Over Compression-Capable Link"
permalink: /kb/142/Q142267/
---

## Q142267: SMS: Netspeed Returns False Speed Over Compression-Capable Link

	Article: Q142267
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbInventory kbMaintMan smsinv smsmaintman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When a client computer connects to a Systems Management Server logon server
	using Remote Access Service (RAS), the inventory runs even though it is a slow
	network connection.
	
	CAUSE
	=====
	
	When Netspeed.com reads Netspeed.dat through a hardware or software
	compression-capable link, the contents of the file may be compressed which
	causes Netspeed to return a false speed reading.
	
	For additional information about Netspeed errorlevels and troubleshooting, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q131011 SMS: Netspeed.com Internals
	
	WORKAROUND
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	It may be possible to work around this problem by making the following adjustment
	in the registry:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry key:
	
	     HKEY_LOCAL_MACHINE \SOFTWARE\Microsoft\SMS\Components
	     \SMS_MAINTENANCE_MANAGER
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Select the following entry: Slow Net Threshold Speed.
	
	3. On the Edit menu, select DWORD.
	
	4. Change the Data to 150 (decimal) (see paragraph below).
	
	5. Click OK and quit Registry Editor.
	
	6. At the next watchdog cycle, the Maintenance Manager service will generate a
	  new Netspeed.com in the \SMS\Site.srv\Maincfg.box\client.src directory. This
	  file will not be built in the Netlogon share and will not be copied there.
	
	7. If necessary, copy the file to the login scripts directory.
	
	The value that works best will depend on your network environment. This should be
	tested in two ways:
	
	- Make certain that the Systems Management Server script still runs for clients
	  not dialing in to your network. This is especially important in a wide area
	  network (WAN) environment, make sure that remote sites are still being
	  inventoried.
	
	  -and-
	
	- Test the fastest dial-up client so they are not inventoried. It may take
	  several adjustments to locate the ideal threshold speed for your network
	  environment.
	
	
	MORE INFORMATION
	================
	
	When Smsls.bat or Smsls.cmd runs from a logon script, Netspeed.com and
	Netspeed.dat are used to determine if the network link is above a pre- defined
	speed threshold. Depending on the threshold speed set in the registry and the
	policy set in the Systems Management Server Administrator Tool, Smsls.bat or
	Smsls.cmd prompts the user to confirm whether they want inventory performed when
	a slow link is detected.
	
	You can use the command
	
	     netspeed.com /v
	
	to determine the link speed that Systems Management Server is using. The possible
	return values are as follows:
	
	  0 - Net is fast
	  1 - Net is slow
	  2 - Net is slow, prompts user
	
	NOTE: Because of file caching on some operating systems, netspeed.com /v will
	only return a valid result the first time it is run. Disconnecting and
	reestablishing the dial-up connection clears the file cache.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbInventory kbMaintMan smsinv smsmaintman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
