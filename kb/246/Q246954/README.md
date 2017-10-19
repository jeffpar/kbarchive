---
layout: page
title: "Q246954: Unattended RAS Installation Prompts for New IP Address"
permalink: /kb/246/Q246954/
---

## Q246954: Unattended RAS Installation Prompts for New IP Address

	Article: Q246954
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an unattended Setup with the following information
	
	  [RASParamSection]
	  ...
	  StaticAddressBegin = 10.0.0.1
	  StaticAddressEnd = 10.0.0.10
	  ...
	
	you receive the following error message:
	
	  RAS unattended install failed because you specified an invalid IP address in
	  the StaticAddressBegin value. Do you want RAS setup to continue in the
	  attended mode?
	
	This error message occurs only when a zero is specified in the second or third
	octet.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time                 Size     File name     Platform
	  --------------------------------------------------------------
	  11/18/1999  07:19p             153,872  Rascfg.dll    x86
	  11/18/1999  07:18p             231,696  Rascfg.dll    Alpha
	
	
	
	1. Rename the Rascfg.dl_ file to Rascfg.org on the distribution server.
	
	2. Copy the Rascfg.dll file from this hotfix to the distribution server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q159203 PRB: Unattended Install Prompts for New IP If Zero Is in Address
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
