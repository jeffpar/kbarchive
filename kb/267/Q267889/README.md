---
layout: page
title: "Q267889: SMS: SMS_EXECUTIVE Service Not Installed During Setup"
permalink: /kb/267/Q267889/
---

## Q267889: SMS: SMS_EXECUTIVE Service Not Installed During Setup

{% raw %}

	Article: Q267889
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbServer kbsms200 kbsms200bug kbsms120 kbsms120bug kbSiteComp kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you successfully complete a Systems Management Server (SMS) site setup,
	the SMS Site Component Manager may not install the SMS_EXECUTIVE service. If
	logging is enabled for the SMS Site Component Manager, the Sitecomp.log file may
	log the following error message:
	
	  Could not install the performance counters.
	
	  $$<SMS_SITE_COMPONENT_MANAGER><Mon Jul 03 12:25:46.750 2000 GMT Daylight Time><thread=43 (0x2B)>
	
	  Installation failed and will be retried in the next polling cycle.
	
	  $$<SMS_SITE_COMPONENT_MANAGER><Mon Jul 03 12:25:46.750 2000 GMT Daylight Time><thread=43
	
	  (0x2B)>
	
	In some cases, the SMS Site Component Manager log may not show an error. However,
	the SMS Site Component Manager stops running after approximately two minutes and
	a CrashDump folder is created in the <drive>\SMS\Logs folder. The
	Crash.log file in the CrashDump folder may report the following information:
	
	  EXCEPTION INFORMATION
	
	  Service name = SMS_SITE_COMPONENT_MANAGER
	  Thread name = SMS_SITE_COMPONENT_MANAGER
	  Executable = E:\SMS\bin\i386\sitecomp.exe
	
	  STACK TRACE FOR SMS_SITE_COMPONENT_MANAGER THREAD 221 (0xdd) AT 10/19/2000
	  18:43:15.911
	
	  Module        Address   Offset    Function + Displacement 
	  ==========================================================
	  baseobj.dll   1428b985  0004b985 
	  RemoveBrokenPerfCounterStringsFromRegistry() + 949 bytes
	
	CAUSE
	=====
	
	This issue can occur if the Perfc009.dat and Perfh009.dat files that are located
	in the \Winnt\System32 folder have been corrupted or are missing. If these files
	are not available, the following registry setting may be deleted or disabled
	(grayed-out):
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Perflib\009
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, modify the Perflib registry key.
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	The following steps can be used to correct the Perflib key.
	
	Note: These steps would wipe out all performance counters, and enable only the NT
	counters that are installed with the operating system.
	
	1. Stop the Site component Manager.
	
	2. Expand perfc009.da_ and perfh.009.da_ from an NT4 Server source to
	  \winnt\system32 as perfc009.dat and perfh009.dat respectively
	
	You can expand these files from a command prompt by typing either
	
	"expand perfc009.da_ perfc009.dat " (without the quotation marks)
	
	-or-
	
	"expand perfh009.da_ perfh009.dat" (without the quotation marks)
	
	3. In "HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Perflib",
	  set the value of Last Counter to 0x736 and Last Help to 0x737
	
	4. The Perflib\009 key should now be re-populated. Run performance monitor and
	  verify that NT counters are available.
	
	5. Restart the SMS Site Component Manager. It should successfully re-install the
	  SMS Executive.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbConfig kbServer kbsms200 kbsms200bug kbsms120 kbsms120bug kbSiteComp kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS120 kbSMS200SP2
	Version           : :1.2,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
