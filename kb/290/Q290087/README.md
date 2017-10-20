---
layout: page
title: "Q290087: HOWTO: Administer SMTP and NNTP Services from Remote Workstation"
permalink: /kb/290/Q290087/
---

## Q290087: HOWTO: Administer SMTP and NNTP Services from Remote Workstation

{% raw %}

	Article: Q290087
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Management Console administration snap-ins for the Microsoft
	Network News Transfer Protocol (NNTP) and Simple Mail Transfer Protocol (SMTP)
	services that are included with Internet Information Server (IIS) version 4.0
	allow administration from Microsoft Windows NT Server computers only. With the
	extensions that are included in the IIS Resource Kit, you can administer these
	services from a remote Windows NT Workstation computer as well.
	
	NOTE: Microsoft Product Support Services does not support Resource Kit utilities.
	
	MORE INFORMATION
	================
	
	To install these components on a Windows NT Workstation computer, follow these
	steps:
	
	1. Ensure that the Windows NT Workstation computer is running Windows NT
	  Workstation 4.0 with Service Pack 3 or later.
	
	2. Ensure that Internet Explorer 4.01 or later is installed.
	
	3. Run Setup for IIS 4.0. For the installation type, select Custom.
	
	4. On the Start menu, point to Settings, point to Control Panel, and click
	  Add/Remove Programs. Select Personal Web Server and click Show Subcomponents.
	
	5. Click Internet Service Manager.
	
	6. Complete the IIS 4.0 installation.
	
	7. Run Setup from one of the following locations:
	
	   - The IIS Resource Kit\Utility\SMTP-NNTP Admin\NNTP folder
	
	   - The IIS Resource Kit\Utility\SMTP-NNTP Admin\SMTP folder of the IIS
	     Resource Kit CD
	
	   - The \IIS Resource Kit folder of the computer on which you have installed
	     the IIS Resource Kit
	
	8. For the installation type, select Typical.
	
	9. Open the Microsoft Management Console (MMC). To do this, on the Start menu,
	  point to Programs, and then click Microsoft Management Console.
	
	10. Click Windows NT 4.0 Option Pack, Microsoft Personal Web Server, and
	  Internet Service Manager. In the left pane, expand the Console Root and
	  Internet Information Server nodes.
	
	11. Right-click the icon for the current Personal Workstation and click Connect.
	  Type the name of the remote NNTP or SMTP server you want to administer. When
	  the connection to the remote server is made, a node for the server appears
	  in the tree. If you expand this node, you expose the NNTP or SMTP
	  administration snap-ins.
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK 
	Component         : InternetServices ResKit
	Technology        : kbiisSearch kbiis400 kbPersWebServSearch kbZNotKeyword3 kbPersWebServ400NTW400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
