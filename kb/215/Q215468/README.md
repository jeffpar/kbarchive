---
layout: page
title: "Q215468: SMS: Systems Management Server 2.0 Release Notes"
permalink: /kb/215/Q215468/
---

## Q215468: SMS: Systems Management Server 2.0 Release Notes

	Article: Q215468
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information contained in this article is from the Systems Management Server
	2.0 Release Notes. You can find the Release Notes on the Systems Management
	Server CD through the Taskpad or by opening Readme.htm in your browser.
	
	MORE INFORMATION
	================
	
	Microsoft Systems Management Server Version 2.0 Release Notes
	-------------------------------------------------------------
	
	The release notes contain late-breaking information about Systems Management
	Server (SMS) version 2.0 functionality that is not available in the product
	documentation. Please read the release notes thoroughly before installing the
	SMS software.
	
	If you have comments or suggestions about SMS 2.0, please send them to
	smswish@microsoft.com. We value your feedback.
	
	Additional Online Resources for SMS
	-----------------------------------
	
	For more information about SMS, see the following online resources:
	
	Visit the Systems Management Server Web site at http://www.microsoft.com/smsmgmt/
	to locate white papers and information about related products.
	
	Visit the Microsoft Support Online Web site at http://msdn.microsoft.com/support/
	to search the Microsoft Knowledge Base and other technical resources for fast,
	accurate answers to SMS questions.
	
	Access the microsoft.public.sms news group on the msnews.microsoft.com news
	server to participate in unmonitored discussions about SMS.
	
	WARNING: If you plan to upgrade from SMS 1.2 to SMS 2.0 and also upgrade from SQL
	Server 6.5 to SQL Server 7.0, read DO NOT Upgrade to SQL Server 7.0 Before
	Upgrading to SMS 2.0: Documentation Error.
	
	New Terminology
	---------------
	
	SMS 2.0 introduces a number of new terms, and it slightly changes the meanings of
	others. New and changed terminology is documented in the SMS 2.0 Administrator's
	Guide, in Chapter 2, "Understanding Changes to SMS Features and Functionality"
	and Appendix B, "SMS 1.2 to SMS 2.0 Changes." For a complete list of SMS terms,
	see the glossaries in the SMS documentation. SMS 2.0 Help, Network Monitor Help,
	and Software Metering Help each include a glossary, as does the SMS 2.0
	Administrator's Guide.
	
	The following new terms are not in the glossaries:
	
	Refresh
	An administrative command used in software distribution to replace corrupted
	package source files on distribution points or to copy package source files to
	newly installed distribution points. When a refresh occurs, the current package
	source files are recopied or newly copied from the site server to one or more
	distribution points.
	
	Update
	Used in software distribution to recopy package source files when a file is
	changed. When an update occurs, the package source version is incremented and
	the package source files are recopied from the site server to all distribution
	points currently specified for the package.
	
	The following terminology changes are not in the glossaries:
	
	WBEM and Windows Management Instrumentation
	Windows Management Instrumentation (WMI) is the Microsoft implementation of the
	Web Based Enterprise Management (WBEM) standard developed by the Desktop
	Management Task Force (DMTF) for identifying and manipulating managed objects.
	In the SMS 2.0 documentation, certain components that actually use WMI might be
	documented as using WBEM (an earlier name for WMI). In these cases, however, the
	process flow and functionality are essentially unchanged.
	
	Windows 2000
	All references in the documentation to Windows NT version 5.0 refer to the
	Windows 2000 family of products, built on Windows NT technology.
	
	Additional query words: prodsms relnotes
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
