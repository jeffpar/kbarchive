---
layout: page
title: "Q257267: Unable to Serve ASP or HTML Pages"
permalink: /kb/257/Q257267/
---

## Q257267: Unable to Serve ASP or HTML Pages

{% raw %}

	Article: Q257267
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0; winnt:5.0,6.5,7.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Data Engine (MSDE), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Internet Information Services (IIS) 5.0, and you browse ASP or
	HTML pages from the console of the Web server or another workstation on the
	network, the Web service may return the following error message:
	
	  HTTP 500 - Server Application Error
	
	The Default Web Site may be in a Running state. If you run the netstat -an
	command from a command prompt, you may notice that the Web server's IP address
	is listening on TCP port 80, which is the default HTTP port.
	
	NOTE: When you are troubleshooting problems using the Advanced Internet Options
	in Internet Explorer 5.0, more descriptive error messages are usually returned
	by disabling the Show friendly HTTP error messages option. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q218155 Description of Hypertext Transport Protocol Error Messages
	
	The following items may appear in the Event Viewer on the IIS 5.0 computer:
	
	- Application Log: COM+ error with Event ID 4099
	- System Log: W3SVC error with Event ID 59
	- System Log: W3SVC warning with Event ID 36.
	
	The Iis5.log file (located in the WINNT folder) may contain the following error
	message:
	
	  0x8004e00f=COM+ was unable to talk to the Microsoft Distributed Transaction
	  Coordinator
	
	When you try to open the Component Services snap-in, which is used for COM+
	administration, the Microsoft Management Console (MMC) may stop responding.
	
	CAUSE
	=====
	
	Internet Information Services 5.0 relies on COM+, which in turn relies on the
	Distributed Transaction Coordinator (DTC) service for functionality. The DTC
	version-checking feature, included in versions of SQL Server that were developed
	prior to Windows 2000, does not recognize the version properties used by Windows
	2000. As a result, the SQL Server DTC Setup utility removes the DTC service
	installed by Windows 2000. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q249310 BUG: Installing SQL Server on Windows 2000 Uninstalls DTC Service
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Verify that the version number of the Dtcsetup.exe application (located in
	  the c:\Winnt\System32 directory by default) is 1999.9.3422.24 or later.
	
	2. Run the Dtcsetup.exe application to install the DTC service.
	
	3. Start the DTC service.
	
	4. In Control Panel, double-click the Add/Remove Programs icon.
	
	5. Select Add/Remove Windows Components, remove Internet Information Services
	  (IIS) 5.0, and then reinstall it from the Windows 2000 CD.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in SQL Server versions 6.5 and
	7.0 and MSDE version 1.0.
	
	MORE INFORMATION
	================
	
	The Microsoft Data Engine (MSDE) 1.0 is a fully functional version of SQL Server
	7.0, but is limited to five concurrent connections. Because MSDE and SQL Server
	7.0 share the same code base, when you install MSDE 1.0 on a computer running
	Windows 2000, the DTC service is removed. MSDE is available from the following
	locations:
	
	- Downloadable from the Microsoft Visual Studio site.
	
	- Downloadable from the MSDN Universal Subscription site or on the MSDN
	  Universal Subscription CD.
	
	- Installed with the Office Server Extensions, included with the Microsoft
	  Office 2000 Premium and Developer Editions.
	
	The following Knowledge Base articles provide more information related to the
	topics discussed in this article:
	
	  Q249310 BUG: Installing SQL Server on Windows 2000 Uninstalls DTC Service
	
	  Q218155 Setup Logging in IIS 5.0
	
	  Q242969 HOWTO: Microsoft DTC Installation Sequence
	
	  Q218155 Description of Hypertext Transport Protocol Error Messages
	
	The following white paper provides an overview of the Application services in
	Windows 2000, and covers topics such as IIS 5.0, COM+, and DNA:
	
	<A0><A0><A0><A0><A0><A0><A0><A0>Application Services Technical Overview
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbAudDeveloper _IKkbbogus kbiis500 kbMSDE
	Version           : WINDOWS:1.0; winnt:5.0,6.5,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
