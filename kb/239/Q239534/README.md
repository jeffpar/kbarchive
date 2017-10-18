---
layout: page
title: "Q239534: SMS: Data Loader Cannot Process MIF Date Above Year 2030"
permalink: kb/239/Q239534/
---

## Q239534: SMS: Data Loader Cannot Process MIF Date Above Year 2030

	Article: Q239534
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Data Loader cannot process a MIF when the year in a MIF is above 2030.
	
	You may see the following compilation error in the Dataldr.log file:
	
	  Compilation failed~Time has incorrect format or illegal values. Could not
	  convert file:
	  d:\SMS\site.srv\dataload.box\deltamif.col\PROCESS\X00000000.MIF
	  Cannot process MIF X00000000.MIF, moving it to BADMIFS
	
	CAUSE
	=====
	
	This issue occurs because the maximum Year value for a MIF date attribute is
	hardcoded to 2030. The error is generally seen when software inventory reports a
	file which has a date stamp greater than 2030.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English language version of this fix should have the following file
	attributes or later:
	
	  Date      Time    Size    File name   Platform
	  -----------------------------------------------
	  06/26/99  01:00a  535,632 BASE.DLL    (x86)
	  06/26/99  01:00a  750,352 BASE.DLL    (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	We have extended the date to 2035 which is the documented operational range of
	Systems Management Server 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The following example is a piece of MIF with a bad date (year = 2031):
	
	  Type = Date Value = "20311011051024.000000+000"
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
