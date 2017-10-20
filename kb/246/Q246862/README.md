---
layout: page
title: "Q246862: How to Install Microsoft Metadirector Services on a Windows 2000"
permalink: /kb/246/Q246862/
---

## Q246862: How to Install Microsoft Metadirector Services on a Windows 2000

{% raw %}

	Article: Q246862
	Product(s): Microsoft Windows NT
	Version(s): 2.1; WINDOWS:2000
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides detailed steps about how to install and uninstall
	Microsoft Metadirectory Services (MMS) on a Windows 2000 Server-based computer.
	
	MORE INFORMATION
	================
	
	To install and uninstall Microsoft Metadirectory Services (MMS) on a Windows
	2000 Server-based computer:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. Click Add New Programs, and then click the CD-ROM drive or the floppy disk
	  drive to permit your computer to search for a setup executable (.exe) file.
	
	3. Under "Install Program From Floppy Disk or CD-ROM", click Next.
	
	4. The Run Installation program should find the correct media and path to the
	  Setup.exe file. If the path is correct, click Finish.
	
	5. Run the INSTALL OR UPGRADE TO ZOOMIT VIA 2.1 program from the Setup
	  interface.
	
	6. Click Installation Drive, click A NEW INSTALLATION, and then click YES when
	  you receive the Zoomit VIA license agreement.
	
	7. Read the information regarding Context Prefix to understand the structure you
	  will create, and then click Next.
	
	8. In the "assign a context prefix to your organization" area, fill in the
	  appropriate boxes to define your context prefix that will serve as the root
	  of your organization.
	
	9. Confirm your MMS server name in the "Enter your server's Metadirectory
	  application name" box. Note that it should be populated automatically with
	  the name of the server you are using.
	
	10. Click Next. It is recommended that you position your server under the
	  Applications OU, but you can choose another. The box is populated with
	  "OU=Applications." Confirm it or change it, and then click Next.
	
	11. Click Preview Names, note the assigned names, and then click OK. VIA server
	  will copy installation files.
	
	12. Click Setup Service. A command box will open and the service will be set up.
	
	13. Note the logon information, administrator account and password when the
	  installation is complete. This will specify how to log on to the MMS.
	
	  IMPORTANT: Because the password is automatically generated based on your
	  server name, it is important to remember to change your administrator
	  password immediately.
	
	14. Click Next, click Done, and then quit the Add/Remove Programs tool. The
	  product is installed.
	
	
	After installing, you must change the administrator password:
	
	  Q250888 How to change the Administrator Password in Microsoft Metadirectory
	  Services
	
	For information about how to uninstall MMS, see the following article:
	
	  Q246392 How to Uninstall Microsoft Metadirectory Services
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbMMSSearch kbWinAdvServSearch kbWinDataServSearch kbMMS210
	Version           : :2.1; WINDOWS:2000
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
