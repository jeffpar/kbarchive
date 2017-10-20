---
layout: page
title: "Q269623: Printers Missing from Print Dialog Box with Roaming Profiles"
permalink: /kb/269/Q269623/
---

## Q269623: Printers Missing from Print Dialog Box with Roaming Profiles

{% raw %}

	Article: Q269623
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document, the Print dialog box may not list some or all of the
	network printers that are installed on the computer. This problem occurs only on
	Windows NT Workstation-based computers that have a shared local printer.
	
	CAUSE
	=====
	
	When you are using roaming profiles, a locally attached printer is mapped on the
	computer as a network printer. However, the spooler does not increase the size
	of a buffer when it enumerates printers after you add the local printer. This
	causes the list in the Print dialog box not to contain all of the installed
	printers.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size    File name     Platform
	  --------------------------------------------------
	  07/26/2000  09:17p  80,144  Win32spl.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem occurs when one workstation has a local printer installed and
	shared. If a user logs on to another workstation, connects to the printer on the
	first workstation, and then logs off, the profile is saved with the printer
	connection to the first workstation. The problem occurs if the same user then
	logs onto the first workstation and the roaming profile contains that connection
	to the workstation's shared printer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
