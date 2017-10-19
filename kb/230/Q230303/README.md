---
layout: page
title: "Q230303: Contents of Internet Authentication Services Release Notes"
permalink: /kb/230/Q230303/
---

## Q230303: Contents of Internet Authentication Services Release Notes

	Article: Q230303
	Product(s): Internet Information Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 12-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Authentication Service 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "More Information" section of this article contains a copy of the Internet
	Authentication Services (IAS) Release Notes included with the Windows NT 4.0
	Option Pack. It is listed here so that the issues it covers are included in
	queries that are performed against the Knowledge Base.
	
	The file containing these Release Notes is located at:
	
	  <%SystemRoot%>\Help\iis\htm\core\iasread.htm
	
	NOTE: Knowledge Base articles may be distributed in either ASCII-text or HTML
	form. If you are viewing the ASCII-text version of this article, some formatting
	may have been lost when it was converted from the original HTML form of
	Iasread.htm.
	
	MORE INFORMATION
	================
	
	Internet Authentication Services Readme Before installing this product, please review this entire document and read Microsoft Internet Authentication Server (IAS) Administration Guide. The document contains critical information for ensuring proper installation and use of the product.
	
	IMPORTANT: This readme contains important, late-breaking information about this product.
	
	Important issues for Beta 3 Customers:
	Your configuration information, stored in Adminui.mdb will be left alone. This release will use a new file _Adminui.mdb. To ensure the safety of your current data please copy Adminui.mdb to another location. 
	Before you install this release of IAS on a computer running the Beta 3 version, you must stop Internet Authentication Services and then uninstall it. (If you have to reinstall the release version of IAS at any point, you will also have to stop IAS and then uninstall it first.) 
	Known Issues with Internet Authentication Services
	
	In the setup program, Internet Authentication Service appears as a subcomponent of Internet Connection Services for Remote Access Services under Windows NT 4.0 Option Pack. You will have to enable the Internet Authentication Service checkbox to install this service. 
	If you are installing IAS for the first time, the IAS cannot start until it is configured using the Internet Authentication Service Properties administration tool. 
	
	To configure the Internet Authentication Service: 
	Click Start, point to Programs, then point to Windows NT 4.0 Options Pack, then point to Microsoft Internet Information Server, and then click Internet Service Manager. The Microsoft Management Console (MMC) appears. 
	In MMC's left pane, double-click IIS, and then double click the local machine name. Below that machine, the RADIUS appears. 
	Right-click RADIUS, and then click Properties 
	Configure the server, and then click OK or Apply to save the changes. 
	Some Network Access Servers do not support passwords of greater than 16 bytes when using Password Authentication Protocol (PAP) from the client. Microsoft cannot guarantee that passwords longer than 16 bytes will authenticate correctly with all access equipment. 
	Remote administration of IAS will not work if the installation paths for IAS are different on the local server and the remote server. If you will be using remote administration on your network, make sure all your IAS servers have the same installation paths for IAS. 
	IAS will support either the Password Authentication Protocol (PAP) or Microsoft CHAP (similar to the Challenge Handshake Authentication Protocol (CHAP)). A future release will include CHAP support as well. 
	If you uninstall Microsoft(R) Access 97 or Visual Basic(R) from a computer running Internet Authentication Services, you must reinstall Internet Authentication Services after the uninstallation is finished. 
	To uninstall IAS: 
	Click Start, point to Programs, then point to Windows NT 4.0 Options Pack, then point to Microsoft Internet Information Server, and then click Internet Service Manager. The Microsoft Management Console (MMC) appears. 
	In MMC's left pane, double-click IIS, and then double-click the local machine name. Below that machine, the RADIUS appears. 
	Right-click RADIUS, and then click Stop. 
	Start Windows NT 4.0 Option Pack Setup, then click Next, and then click Add/Remove. 
	In the Components list, click Remote Access Services, and then click Show Subcomponents. 
	Select Internet Authentication Services, then click the check box to clear it. 
	Click OK, then click Next, and then follow the directions on the screen. 
	When Setup has finished removing IAS, restart your computer. 
	To reinstall IAS: 
	Start Windows NT 4.0 Option Pack Setup, the click Next, and then click Add/Remove. 
	In the Components list, click Remote Access Services, and then click Show Subcomponents. 
	Click the Internet Authentication Services check box. 
	Click OK, then click Next, and then follow the directions on the screen. 
	When Setup has finished installing IAS, restart your computer. 
	For More Information
	
	For information on using the Internet Authentication Server, read the Microsoft Internet Authentication Server (IAS) Administration Guide.
	
	Return to top
	--------------------------------------------------------------------------------
	(C) 1997 by Microsoft Corporation. All rights reserved.
	
	Additional query words: ntop ias iis kbreadme readme iasread.htm iasread akz
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbZNotKeyword6 kbZNotKeyword2 kbWinNT400OptionPack kbIASSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
