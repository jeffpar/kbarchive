---
layout: page
title: "Q200545: SMS: Client Configuration Setter - Setclcfg.exe"
permalink: /kb/200/Q200545/
---

## Q200545: SMS: Client Configuration Setter - Setclcfg.exe

	Article: Q200545
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120
	Last Modified: 09-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setclcfg.exe directs the SMS_Client_Config_Manager to install SMS Client
	Services on a computer running Windows NT, or it can retrieve or set values in
	the Client Services portion of a client's registry.
	
	MORE INFORMATION
	================
	
	Setclcfg.exe runs on Alpha, MIPS, and 386 MHz or faster computers.
	
	Setclcfg Syntax
	---------------
	
	The following describes appropriate Setclcfg syntax:
	
	  setclcfg client {/c | /r} "component" ["state"]
	  setclcfg client /f logon_server request_ID
	  setclcfg client /p parameter [value]
	  setclcfg client /u remote_computer
	
	  NOTE: For any computer name, an asterisk (*) specifes the computer running
	  Setclcfg.
	
	  client - The client to act on.
	
	  /c - Displays the Current Installation State of "component" or sets the
	  component's Current Installation State to "state".
	
	  /r - Displays the Requested Installation State of "component" or sets the
	  component's Requested Installation State to "state".
	
	  component - Remote Control, Client Inventory, or SNMP Trap Translator. The
	  specified component must be typed within quotation marks (such as "Remote
	  Control").
	
	  state - "Installed", "Not Installed", "Started", or "Disabled" (must be typed
	  within quotation marks).
	
	  /f logon_server request_ID - Creates a Client Configuration Request (CCR) on
	  the logon_server. The CCR is named request_ID. An asterisk (*) for request_ID
	  causes the request ID to be site_code00001.CCR (such as site_APE00001.CCR).
	
	  /p parameter [value] - Displays the value of the parameter or sets "parameter"
	  to value; "parameter" is a ClientServices parameter, such as
	  ClientArchitecture or Language ID. If the parameter contains spaces, enclose
	  it in quotation marks (for example, "Log Directory".)
	
	  /u remote_computer - Unlocks an access token on remote_computer.
	
	  /? - Provides a usage statement.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
