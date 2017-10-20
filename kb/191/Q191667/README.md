---
layout: page
title: "Q191667: How to Use ScriptIt to Install FPNW via Unattended Installation"
permalink: /kb/191/Q191667/
---

## Q191667: How to Use ScriptIt to Install FPNW via Unattended Installation

{% raw %}

	Article: Q191667
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: This is a ScriptIt file that has been used to successfully install FPNW on
	a computer running Windows NT Server 4.0. This is for reference.
	
	     ---- FPNW.SCR -----
	     ;
	     ; File:    FPNW.SCR
	     ; Author:  DJP-UPS
	     ; Date:
	     ;
	     ; Purpose: Microsoft ScriptIt installation script for FPNW.
	     ;
	     ; RevInfo:
	     ;
	
	     [SCRIPT]
	     ; Open the control panel screen.
	
	       RUN = %SystemRoot%\System32\Control.exe ncpa.cpl
	
	     ; This assumes that you are doing this only on Windows NT 4 systems.
	     ; However, using Windows NT 3.51, the name changes from "ncpa.cpl" to
	     ; "network.cpl".
	
	     ; When the "Network" screen appears, TAB three times to get to the
	     ; "Identification" tab and then ARROW RIGHT once to get to the"Services"
	     ; tab.
	
	       Network+Computer Name = {TAB}{TAB}{TAB}{RIGHT}
	
	     ; When the "Services" tab is displayed, TAB two times to get to the
	     ; "Add" button and press ENTER to add a new service to the system.
	
	       Network+Network Services = {TAB}{TAB}{ENTER}
	
	     ; When the "Select Network Service" screen appears we have to wait a few
	     ; seconds for the list box to update.
	
	       Select Network Service+Have Disk = ~wait
	
	     ; TAB once to get to the "Have Disk" button and press ENTER to specify
	     ; the location of the files to install.
	
	       Select Network Service+Have Disk = {TAB}{ENTER}
	
	     ; When the "Insert Disk" screen appears, type in the appropriate
	     ; location of the files to be installed and press ENTER.
	
	       Insert Disk = E:\Images\FPNW{ENTER}
	
	     ; When the "Select OEM Option" appears, press ENTER to install the
	     ; entire FPNW package.
	
	       Select OEM Option+Choose a software = {ENTER}
	
	     ; When the "Install File and Print Services for Netware" screen appears,
	     ; delete the drive letter for the SYS Volume and type in "D" to have
	     ; this directory created on the D: drive.
	
	       Install File and Print Services for NetWare = {DEL}D
	
	     ; TAB once to get to the "Server Name" field and enter in the
	     ; appropriate FPNW Server Name.
	
	       Install File and Print Services for NetWare = {TAB}FPNW_SERVER_NAME
	
	     ; TAB once to the "Supervisor Account - Password" field and enter
	     ; the appropriate password.
	
	       Install File and Print Services for NetWare = {TAB}SUPERVISOR_PW
	
	     ; TAB once to the "Supervisor Account - Confirm Password" field and
	     ; enter the appropriate password again.
	
	       Install File and Print Services for NetWare = {TAB}SUPERVISOR_PW
	
	     ; TAB twice to the "OK" button and press ENTER.
	
	       Install File and Print Services for NetWare = {TAB}{TAB}{ENTER}
	
	     ; When the "File and Print Services for NetWare" screen appears
	     ; asking to enter a password for the account to run the FPNW service,
	     ; enter the appropriate password.
	
	       File and Print Services for NetWare = FPNW_SERVICE_PW
	
	     ; TAB once to the "Confirm Password" screen and enter the appropriate
	     ; password again and press ENTER.
	
	       File and Print Services for NetWare = {TAB}FPNW_SERVICE_PW{ENTER}
	
	     ; When the "Network" screen appears with the "Services" tab displayed,
	     ; TAB three times to get to the CLOSE button and press ENTER.
	
	       Network+Services = {TAB}{TAB}{TAB}{ENTER}
	
	     ; When the "Network Settings Change" screen appears asking to restart
	     ; the computer, press ALT+N to press the "NO" button.
	
	       Network Settings Change+restart your computer now = !n
	
	     ; At the Control Panel, press "F" twice to get to the FPNW tool
	     ; and press ENTER.
	
	       Control Panel = ff{ENTER}
	
	     ; When the "Windows NT" message is displayed asking to start FPNW,
	     ; press ALT+Y to press the "YES" button.
	
	       Windows NT+File and Print Services = !y
	
	     ; When the "File and Print Services for NetWare" screen appears,
	     ; press ALT+R to disable the respond to nearest server requests.
	
	       File and Print Services for NetWare = !r
	
	     ; TAB four times to the "OK" button and press ENTER.
	
	       File and Print Services for NetWare = {TAB}{TAB}{TAB}{TAB}{ENTER}
	
	     ; When the "Windows NT" screen appears stating the changes will not
	     ; take effect until FPNW is restarted, press ENTER.
	
	       Windows NT = {ENTER}
	
	     ; Press ALT+F4 to close the Control Panel window and then exit the
	     ; script.
	
	       Control Panel = !{F4}~exit
	
	Note: Documentation for ScriptIt can be found at the web site listed below.
	ScriptIt is a free utility provided "as is" from Microsoft and scripts written
	for use with Scriptit.exe should be tested thoroughly before applying to
	production systems.
	
	MORE INFORMATION
	================
	
	ScriptIt is provided free of charge by Microsoft and can be downloaded from:
	
	  http://www.microsoft.com/windows/downloads/bin/nts/scriptit3.exe.
	
	Additional query words: scriptit fpnw unattended tool utility unattend
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
