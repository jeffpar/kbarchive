---
layout: page
title: "Q249151: SMS: Getsfwr.exe Does Not Report the File Date During Inventory"
permalink: /kb/249/Q249151/
---

## Q249151: SMS: Getsfwr.exe Does Not Report the File Date During Inventory

{% raw %}

	Article: Q249151
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbYear2000 kbsms120 kbsms120bug kbInventory
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of an inventoried software (in Properties, click
	the Packages icon), the Date attribute is empty. The verbose output of the
	inventory phase also reports the following information:
	
	  Found PACKAGE_NAME, at X:\DIR #1 Date 01/01/100 09:18 Size 256 Len = 283
	
	The date (year) is incorrect.
	
	This issue occurs when Getsfwr.exe (16-bit clients) inventories files with a date
	equal to or greater than 2000.
	
	RESOLUTION
	==========
	
	A supported software update that corrects this problem is now available from
	Microsoft, but it has not been fully regression tested and should be applied
	only to systems experiencing this specific problem. If you are not severely
	affected by this specific problem, Microsoft recommends that you wait for the
	next Systems Management Server service pack that contains this software update.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the software update. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English-language version of this software update should have the following
	file attributes or later:
	
	  Date      Time   Version    Size     File name     Platform
	  -----------------------------------------------------------
	  03/09/00  xx:xx  786        33,632   Getsfwr.exe   x86
	
	NOTE: Because of file dependencies, the most recent update or feature that
	contains the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Systems Management Server version
	1.2.
	
	MORE INFORMATION
	================
	
	To install this software update site-wide, replace the existing version of the
	Getsfwr.exe file on the Systems Management Server site server, in the following
	folder:
	
	  Sms\Site.srv\Maincfg.box\Client.src\X86.bin
	
	The files are replicated at the next Maintenance Manager work cycle to all
	Systems Management Server logon servers to the Sms\Logon.srv\X86.bin folder.
	After the files are replicated, the clients can be updated. Then you can open
	and save the System.map file in the Sms folder. For additional information about
	this procedure, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbYear2000 kbsms120 kbsms120bug kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
