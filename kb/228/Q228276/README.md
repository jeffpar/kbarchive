---
layout: page
title: "Q228276: SMS: Foreground App Performance Degrades During SW Inventory"
permalink: kb/228/Q228276/
---

## Q228276: SMS: Foreground App Performance Degrades During SW Inventory

	Article: Q228276
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If an on-demand virus scanner is running when Systems Management Server software
	inventory (SINV) executes, performance of the foreground applications may
	degrade significantly for the duration of the inventory scan. To reduce the
	severity of the problem consider the following suggestions:
	
	- Carefully choose which files will be scanned on-the-fly by the on-demand
	  virus scanner. Some types of files are less susceptible to virus infection
	  than others, and it may be possible to scan those on a scheduled basis rather
	  than on demand.
	
	- Carefully choose which types of files SINV will scan for inventory. The more
	  overlap between the files scanned for inventory and the files scanned for
	  viruses, the more work the virus scanner will have to do.
	
	- Review the scanning options for the virus scanner. It may allow for scanning
	  on "run" separately from scanning on "open", and so on. It may also have
	  options for fast scans versus full scans, or options for yield times.
	
	When considering changes to your virus scanning implementation, always follow the
	guidelines of your corporate virus/security policy and consult the vendor of
	your virus scanning software for advice.
	
	CAUSE
	=====
	
	This occurs because as SINV opens each file to read its header information, the
	virus scanner scans it. Scanning a file for a virus signature is a
	processor-intensive operation. Because SINV may open several hundred files in a
	short period of time, the virus scanner may become CPU bound as it attempts to
	scan them all.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To specify the sleep interval, create a DWORD value called "Reserved" in the
	following registry key on each client computer:
	
	  HKLM\SOFTWARE\Microsoft\SMS\Client\Client Components\Software Inventory Agent\ 
	
	Set this value to the desired time in milliseconds (ms). The default is 1 ms and
	the maximum is 500 ms. You may need to adjust this value for your specific
	environment. Start with a small value and work up until you get acceptable
	foreground application performance.
	
	Additional query words: prodsms mcafee vshield checker anti antivirus smsinv sw inv smsfaqtop
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
