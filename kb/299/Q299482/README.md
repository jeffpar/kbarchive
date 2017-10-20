---
layout: page
title: "Q299482: Index Server Interprets Three-Digit Numbers as Years"
permalink: /kb/299/Q299482/
---

## Q299482: Index Server Interprets Three-Digit Numbers as Years

{% raw %}

	Article: Q299482
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 09-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you search for strings that are interpreted as dates by Microsoft Indexing
	Server, unexpected results may be returned. For example, "124.01.02" might be
	interpreted as 2 January 124.
	
	CAUSE
	=====
	
	Microsoft Index Server and Site Server Search interpret three-digit numbers as
	years if they are in the format of a date string.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version        Size     File name
	  --------------------------------------------------------
	  21-May-2001  16:31  5.0.2195.3631  205,584  Infosoft.dll
	
	NOTE: Because of file dependencies, this fix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbSiteServSearch kbIdxServSearch kbAudDeveloper kbIdxServ200 kbSiteServ300
	Version           : :2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
