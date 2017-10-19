---
layout: page
title: "Q89517: Accessing Microsoft LAN Manager Servers with WFWG"
permalink: /kb/089/Q89517/
---

## Q89517: Accessing Microsoft LAN Manager Servers with WFWG

	Article: Q89517
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups (WFWG) enables you to connect to and use files,
	directories, and printers that are shared on a Microsoft LAN Manager server. In
	addition, if you use LAN Manager, you can connect to and use the resources
	shared on Windows for Workgroups machines.
	
	To browse a LAN Manager server appearing in the Windows for Workgroups Connect
	Network and Connect Network Printers dialog boxes, at least one computer on the
	network must have a Workgroup name that matches the name of the primary domain
	of the LAN Manager server.
	
	MORE INFORMATION
	================
	
	Use Control Panel to set options for LAN Manager. Options include logging onto a
	LAN Manager domain when logging into Windows for Workgroups, and changing
	passwords for various LAN Manager servers and domains. (Logon scripts run when
	your LAN Manager password is validated by the logon server.)
	
	Setting LAN Manager Options
	---------------------------
	
	To set LAN Manager options, do the following:
	
	1. In the Control Panel window, double-click the Network icon, or use the arrow
	  keys to select the Network icon, and then press ENTER.
	
	2. Choose the Networks button.
	
	3. If Microsoft LAN Manager appears in the Other Networks In Use list, select it
	  and then choose the Settings button.
	
	  If Microsoft LAN Manager is not in the Other Networks In Use list select it
	  and then choose the Add button. If a dialog box appears asking you to insert
	  a disk, insert the disk and choose the OK button. Then choose the Settings
	  button in the Network Settings dialog box.
	
	4. If you want to log on to a LAN Manager domain when you log on to Windows for
	  Workgroups, select the Log On To LAN Manager Domain check box and then type
	  the name of the domain you want to log on to in the Domain Name box.
	
	5. If you want to change your passwords for LAN Manager servers or domains,
	  choose the Set Password button.
	
	6. In the LAN Manager Settings dialog box, choose the OK button.
	
	7. In the Compatible Networks dialog box, choose the OK button.
	
	8. In the Network Settings dialog box, choose the OK button.
	
	A message appears prompting you to restart Windows. Choose the Restart Windows
	button for your changes to take effect.
	
	If you select the Log On To LAN Manager Domain option when you start Windows for
	Workgroups, a dialog box appears asking you to type your password for the
	domain. (You can also specify a different domain to log on to.) If you do not
	want to be prompted for your domain password eac h time you start Windows for
	Workgroups, select the Save This Password In Your Password List check box.
	
	NOTE: You can also use the LMAnnounce= parameter if you have existing LAN Manager
	clients that need to see a WFWG server (for example, a print server) in the
	server lists under Windows or from the NET VIEW command.
	
	REFERENCES
	==========
	
	"Microsoft Windows for Workgroups User's Guide," Appendix B
	
	Microsoft Windows for Workgroups Resource Kit
	
	Additional query words: 3.10 3.11 lm
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
