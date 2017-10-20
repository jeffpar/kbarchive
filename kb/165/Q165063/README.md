---
layout: page
title: "Q165063: &quot;Filesec.vxd&quot; Error Message When Personal Web Server Installed"
permalink: /kb/165/Q165063/
---

## Q165063: &quot;Filesec.vxd&quot; Error Message When Personal Web Server Installed

{% raw %}

	Article: Q165063
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a,95
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup mspwsw95 osr2
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	- the operating system: Microsoft Windows 95, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Personal Web Server using the Network tool in Control Panel,
	you may receive the following error message when you restart your computer:
	
	  Cannot find a device file that may be needed to run Windows or a Windows
	  application.
	
	  The Windows registry or SYSTEM.INI file refers to this device file, but the
	  device file no longer exists.
	
	  If you deleted this file on purpose, try uninstalling the associated
	  application using its uninstall or Setup program.
	
	  If you still want to use the application associated with this device file, try
	  reinstalling that application to replace the missing file.
	
	  filesec.vxd
	
	  Press a key to continue
	
	NOTE: If you add the Personal Web Server component while you are running Windows
	95 OEM Service Release 2 (OSR2) or 2.5 (OSR2.5) Setup, you may receive the same
	error message with the Mssp.vxd file when you restart your computer.
	
	CAUSE
	=====
	
	This error message can occur if the Filesec.vxd file or Mssp.vxd file is not
	installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, install either of the following network clients:
	
	- Microsoft Client for Microsoft Networks
	
	- Microsoft Client for Netware Networks
	
	- Microsoft Family Logon
	
	NOTE: The Microsoft Family Logon network client is included with Internet
	Explorer 4.0 and 4.01.
	
	To install a network client, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click Add, click Client, and then click Add.
	
	3. In the Manufacturers box, click Microsoft.
	
	4. In the Network Clients box, click either Client For Microsoft Networks,
	  Client For NetWare Networks, or Microsoft Family Logon.
	
	5. If you are prompted for a computer or workgroup name, add the names on the
	  Identification tab.
	
	6. Click OK or Close until you return to Control Panel. If you are prompted to
	  restart your computer, do so.
	
	MORE INFORMATION
	================
	
	When you install Personal Web Server, references to the Filesec.vxd and Mssp.vxd
	files are added to the registry. However, these files are only installed on your
	computer if a Microsoft network client is currently installed or has ever been
	installed. If you remove a Microsoft network client using the Network tool, the
	Filesec.vxd and Mssp.vxd files are not removed. A Microsoft network client is
	installed by default when you install Windows 95 on a computer that contains a
	network card or modem.
	
	
	Additional query words: 1.00 1.00a frontpg
	
	======================================================================
	Keywords          : kberrmsg kbsetup mspwsw95 osr2 
	Technology        : kbOSWin95 kbOSWinSearch kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
