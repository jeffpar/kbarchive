---
layout: page
title: "Q243655: Trust Relationships Return &quot;STATUS_TRUSTED_DOMAIN_FAILURE&quot;"
permalink: kb/243/Q243655/
---

## Q243655: Trust Relationships Return &quot;STATUS_TRUSTED_DOMAIN_FAILURE&quot;

	Article: Q243655
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to a trusted domain, you may receive the following error
	message:
	
	  The trust relationship between the primary domain and the trusted domain
	  failed.
	
	This error message can occur if the LMCompatibilityLevel setting is set to 4 on
	your domain controllers.
	
	CAUSE
	=====
	
	This behavior can occur if the domain controller is not accepting the logon
	request over the secure channel.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/11/99  6:16p                191,760  Netlogon.dll  Intel
	  10/11/99  6:15p                310,544  Netlogon.dll  Alpha       
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
