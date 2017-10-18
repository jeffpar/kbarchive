---
layout: page
title: "Q245083: Telephony Properties for New Swedish International Call Prefix"
permalink: kb/245/Q245083/
---

## Q245083: Telephony Properties for New Swedish International Call Prefix

	Article: Q245083
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Swedish International Call Prefix, which is used to call another country
	from Sweden, was changed in September 1999 from "009" to "00".
	
	When you use Dial-Up Networking with a location of Sweden, and you view a
	phonebook entry or create a new phonebook entry that uses Telephony Dialing
	properties, the resulting Phone Number Preview generates a phone number that
	includes the "009" prefix, which is no longer valid.
	
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
	
	  Date      Time    Size      File name     Platform
	  --------------------------------------------------
	  29/10/99  19:08   152,848   tapisrv.exe   x86
	  29/10/99  19:08   243,472   tapisrv.exe   Alpha
	
	
	
	To work around this issue, manually edit the Swedish International Dialing Prefix
	from "009" to "00", before you dial.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
