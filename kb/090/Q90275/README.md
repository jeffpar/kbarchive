---
layout: page
title: "Q90275: Network Printing in Windows for Workgroups"
permalink: /kb/090/Q90275/
---

## Q90275: Network Printing in Windows for Workgroups

	Article: Q90275
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network printing in Windows for Workgroups is nearly identical to printing under
	Microsoft Windows version 3.1. The following information is based on a default
	configuration:
	
	- Print Manager is enabled.
	
	- Send Documents Directly To Network check box is selected.
	
	- Background Printing check box is selected. (3.1 only)
	
	- Printing to a Windows for Workgroups server with a shared printer resource is
	  enabled(3.1 only).
	
	MORE INFORMATION
	================
	
	Printing from an MS-DOS-Based Application
	-----------------------------------------
	
	When an MS-DOS-based application writes data to a printer port connected to a
	network printer, the network redirector intercepts the data and sends it across
	the network to the appropriate server. For most server types, including Windows
	for Workgroups and Microsoft LAN Manager, the server writes the data into a
	spool file on disk as the data is received.
	
	Because MS-DOS-based applications do not generally close the port they print to,
	the redirector on the client machine decides when the job is finished based on
	the amount of time the application has allowed to elapse without printing. In
	Windows for Workgroups 3.1, if the application does not print any data for the
	number of seconds specified by the PRINTBUFTIME= entry in the [Network] section
	of SYSTEM.INI (45 seconds by default), then the redirector assumes the print job
	is done. (Note that in Windows for Workgroups 3.11, the PRINTBUFTIME= entry is
	in both the [network] section and the [ifsmgr] section of SYSTEM.INI file on the
	client machine). Care is taken so that the time in which the printing
	application is in a suspended state within Windows for Workgroups is not counted
	against the timeout value.
	
	
	When the print job is done, the network redirector tells the server to begin
	closing it. At this point, the server can close the spool file and begin sending
	its contents directly to the printer hardware.
	
	Printing from a Windows-Based Application
	-----------------------------------------
	
	When a Windows for Workgroups client prints from a Windows-based application,
	Windows (GDI.EXE) passes the application data to the appropriate printer driver,
	which converts it into a data stream that is fully formatted and ready to send
	to the printer hardware. If Windows determines that the target printer is a
	network printer, then it passes this data to the network driver. The network
	driver calls the redirector to send the data to the server, and close the print
	job when completed.
	
	Note that in both of these cases, the data sent across the network has been fully
	formatted for the target printer, and the client computer must have a printer
	driver correctly configured for the printing device attached to the server
	computer. Once the print job has arrived at the server, it is sent to the
	physical printer without modification.
	
	Separator Pages Handled Differently
	-----------------------------------
	
	There is an exception to the above information. If a print server is configured
	to print a separator page and a job is received from the network, the server's
	printer driver is used for the formatting of the separator page's data. All
	other formatting is done in advance at the client machine.
	
	Additional query words: 3.10 non-windows 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	
