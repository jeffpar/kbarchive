---
layout: page
title: "Q271602: SMS: MSI Packages May Not Work When Distributed by SMS"
permalink: /kb/271/Q271602/
---

## Q271602: SMS: MSI Packages May Not Work When Distributed by SMS

	Article: Q271602
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200preSP3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Systems Management Server (SMS) Advertised Package Manager (APM)
	attempts to start a local Microsoft Installer (MSI) package installation on a
	Windows 2000 Professional-based client computer, if the program that starts is
	local to the client and the source files are on a distribution point, the
	program may not be installed successfully.
	
	CAUSE
	=====
	
	This issue occurs because the working folder (source file location) is at a
	remote location. If the installation is launched from a Setup.exe or Msiexec.exe
	file that is located on the client computer, if the file needs to retrieve files
	from a distribution point, the connection may not be available and the
	installation then does not succeed.
	
	The following command line indicates how MSI packages work:
	
	  c:\winnt\msiexec.exe /i \\svr001\sms$\smspkg\package.msi /qr
	
	Msiexec.exe is stored on the client computer under the C:\Winnt folder by
	default. This program file is called on in addition to the path to the MSI
	package that the file then installs. Because the files are located in a remote
	location, the APM drops the connection to the distribution point after it starts
	to install the program file locally on the client computer. The MSI then
	generates error messages with an error code 1619 that state that the MSI could
	not access the package file.
	
	Because MSI (Msiexec.exe) resolves to a local path, the APM does not maintain the
	connection to the distribution point. When the connection to the distribution
	point is released, the working folder is no longer accessible and the APM does
	not succeed.
	
	WORKAROUND
	==========
	
	To work around this issue, ensure that the connection remains and runs properly.
	To do this, specify the path to the distribution point in the package by using a
	custom share point or by manually specifying the complete path including the
	package identification (ID) for the package.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200bug kbAdvertisement kbPackage kbSoftwareDist kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
