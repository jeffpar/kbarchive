---
layout: page
title: "Q241564: XWEB: Logon.asp Displays Script Text Instead of Running Script"
permalink: /kb/241/Q241564/
---

## Q241564: XWEB: Logon.asp Displays Script Text Instead of Running Script

	Article: Q241564
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access Outlook Web Access (OWA) by using a Web browser, your Web
	browser may display the actual active server script for the Logon.asp file
	instead of running the script. You do not receive an error message. You can also
	run other non-OWA .asp pages directly from the same folder.
	
	CAUSE
	=====
	
	The application mapping properties for Active Server Pages (.asp files) in
	Microsoft Internet Information Server (IIS) 4.0 have been overwritten. This can
	occur when third-party tools are installed that add application mappings. In the
	metabase for IIS 4.0, there is a fixed amount of memory for application
	mappings. If you exceed this fixed amount of memory, it begins to overwrite the
	current application mapping settings.
	
	WORKAROUND
	==========
	
	To work around this problem, re-enter the application mapping for Active Server
	Pages manually. To modify the application mappings for all Web sites, modify the
	master properties. To modify application settings for a specific Web site:
	
	1. Click Start, point to Programs, point to Windows NT 4.0 Option Pack, point to
	  Microsoft Internet Information Server, and then click Internet Service
	  Manager.
	
	2. Go to the default Web site folder, right-click the folder, and click
	  Properties.
	
	3. Click the Home Directory tab.
	
	4. Click the Configuration button in the lower right-hand corner.
	
	5. On the App Mappings tab, click the Add button. In the Add/Edit Application
	  Extension Mapping dialog box, set the Executable field value by clicking the
	  Browse button to locate the Asp.dll file. The default location should be the
	  <SystemRoot>\System32\Inetsrv folder.
	
	6. In the Extension: field, type ".asp" (without the quotation marks).
	
	7. In the Method Exclusions field, type "PUT, DELETE" (without the quotation
	  marks).
	
	8. Click to select the Script Engine check box.
	
	9. Click OK to save the settings.
	
	10. Repeat steps 7 through 10 for the Extension type of .asa. Be sure the
	  settings include the entries for PUT, DELETE and the Script Engine check box
	  is selected as well. Click OK when you are done.
	
	11. Stop and restart the Web site by right-clicking the default Web site folder,
	  and clicking Stop. Then right-click the Web site folder again, and click
	  Start.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbExchange550SP1 kbExchange550SP2
	Version           : WINDOWS:5.5; winnt:5.5,5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
