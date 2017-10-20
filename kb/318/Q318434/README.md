---
layout: page
title: "Q318434: SMS: How to Use SMS 2.0 to Silently Install  .NET Framework"
permalink: /kb/318/Q318434/
---

## Q318434: SMS: How to Use SMS 2.0 to Silently Install  .NET Framework

{% raw %}

	Article: Q318434
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	- Microsoft.NET Framework 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to perform a silent installation of .NET Framework by
	using Systems Management Server (SMS) 2.0.
	
	MORE INFORMATION
	================
	
	Consider the following issues before you use SMS to distribute .NET Framework:
	
	- You must obtain the redistributable components for installation. The
	  Microsoft .NET Framework Redistributable package is currently available at
	  the following Microsoft Web site:
	
	  http://msdn.microsoft.com/downloads/default.asp?url=/downloads/sample.asp?url=/msdn-files/027/001/829/msdncompositedoc.xml
	  (http://msdn.microsoft.com/downloads/default.asp?url=/downloads/sample.asp?url=/msdn-files/027/001/829/msdncompositedoc.xml)
	
	- You must identify a group of computers that meet the minimum requirements to
	  successfully install .NET Framework. The following list describes the
	  operating system requirements, the software requirements, and the server
	  installation requirements:
	
	   - Operating system requirements:
	
	      - Microsoft Windows 98
	      - Microsoft Windows NT 4.0 (Service Pack 6a [SP6a] is required)
	      - Microsoft Windows Millennium Edition (Me)
	      - Microsoft Windows 2000 (Service Pack 2 [SP2] is recommended)
	      - Microsoft Windows XP Professional
	      - Microsoft Windows XP Home Edition
	
	   - Software requirements:
	
	      - Microsoft Internet Explorer 5.01 or later (it is recommended that you
	        install Internet Explorer 6.0)
	
	   - Server installation requirements:
	
	      - Microsoft Data Access Components 2.6
	
	        NOTE: Microsoft Data Access Components 2.7 is recommended (for
	        applications that use Data Access).
	
	      - Internet Information Services (IIS) 5.0
	
	        NOTE: To access the features of Asp.net, you must install IIS with the
	        latest security updates before you install .NET Framework.
	
	Note: If you perform a typical installation, you can ignore these requirements.
	If you are unsure of the type of installation that you want to perform, make
	sure that you meet the typical installation requirements. For more information,
	refer to documentation at the following Microsoft Developer Network (MSDN) Web
	site:
	
	  http://msdn.microsoft.com
	
	After you ensure that you meet the basic requirements, you may proceed to create
	an SMS package from the .NET Framework Redistributable package. For more
	information about SMS software distribution and package creation options, refer
	to the SMS Online Help file.
	
	How to Perform a Silent Installation of .NET Framework
	------------------------------------------------------
	
	To perform a silent installation of .NET Framework, run the following command:
	
	  dotnetfx.exe /q:a /c:"install /q"
	
	If you do not want to install .NET Framework silently, run the following
	command:
	
	  dotnetfx.exe
	
	After you ensure that the program is set to run with administrative rights, you
	can create an advertisement for the package to a collection of your choice.
	
	REFERENCES
	==========
	
	For additional information about .NET Framework, refer to the following MSDN Web
	site:
	
	  http://msdn.microsoft.com/netframework/
	
	For more information about software distribution by using Systems Management
	Server 2.0, refer to the Systems Management Server 2.0 Administrator's Guide,
	Chapter 12, "Distributing Software."
	
	Additional query words: prodsms .net package silent
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbAudDeveloper kbSMS200 kbNETFrame
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
