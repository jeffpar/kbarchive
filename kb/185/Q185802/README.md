---
layout: page
title: "Q185802: Using Site Server 2.0 with Windows NT Option Pack (IIS 4.0)"
permalink: /kb/185/Q185802/
---

## Q185802: Using Site Server 2.0 with Windows NT Option Pack (IIS 4.0)

{% raw %}

	Article: Q185802
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Site Server version 2.0 
	- Microsoft Content Replication System 
	- Microsoft Personalization System 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are known issues in using Site Server 2.0 with Internet
	Information Server version 4.0 (IIS).
	
	NOTE: Each of these issues may occur if you install Microsoft Site Server 2.0 on
	the Microsoft Internet Information Server. The issues regarding the Microsoft
	Content Replication System WebAdmin Interface and Microsoft Personalization
	Server are specific to installations in which IIS is installed over an existing
	Site Server 2.0 installation.
	
	MORE INFORMATION
	================
	
	Installing Internet Locator Service
	-----------------------------------
	
	To install the Internet Locator Service on the same server as the Windows NT
	Option Pack 4.0, you must first stop the IISADMIN service. Perform the following
	steps to install the Locator Service:
	
	1. From Control Panel, double-click Services.
	
	2. Select IIS Administrator Service, and click Stop.
	
	3. Install Internet Locator Service.
	
	4. Start the IIS Administrator Service through Control Panel.
	
	NOTE: If these steps are not followed, the following error message may appear:
	
	  Error: Unable to start Internet Locator Service. Use the Event Viewer
	  to determine the reason for the failure.
	
	Installing Commerce Server 2.0
	------------------------------
	
	Before installing Commerce Server 2.0, you must first ensure that you have ADO
	1.0 installed on the server. If you installed the Windows NT Option Pack 4.0
	over an existing Internet Information Server 3.0 installation, ADO 1.0 is
	already installed. If you did not have IIS 3.0 installed, you can obtain ADO 1.0
	from the OLE DB SDK or from the Microsoft Web site at:
	
	  http://www.microsoft.com/ado
	
	Choose the Custom installation option when installing Commerce Server 2.0, and
	install one starter store at a time. The starter stores that ship with Commerce
	Server 2.0 are Clockped, Volcano Coffee (VC), Adventure Works (AW), and
	Microsoft Press.
	
	NOTE: You can install all the required components, SDK, documentation, Store
	Foundation and Store Builder wizards, and one starter store in one step, and
	then install the remaining starter stores one at a time by running the custom
	installation repeatedly.
	
	Using Content Replication System Web Administrator Interface
	------------------------------------------------------------
	
	The Content Replication System 2.0 Web Administrator dialog boxes are sized
	incorrectly when viewed with Internet Explorer 4.0. The OK, Cancel, and Help
	buttons are not visible, and the dialog box window is not resizable.
	
	The only way to click the buttons is to use the TAB key, which then scrolls the
	buttons into view.
	
	Using Personalization Server
	----------------------------
	
	To use the Personalization Server with IIS 4.0 and use Anonymous Authentication,
	you must disable automatic password synchronization.
	
	For more information about how to disable automatic password synchronization in
	IIS, see the following article in the Microsoft Knowledge Base:
	
	  Q166773 : Using the Personalization Service with IIS 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbMCISSearch kbCRS kbPersonalizSys kbSiteServ200
	Version           : WINNT:2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
