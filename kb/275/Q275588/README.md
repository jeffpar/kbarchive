---
layout: page
title: "Q275588: Err Msg: Event ID: 3101 - Unable to Read Control Information..."
permalink: kb/275/Q275588/
---

## Q275588: Err Msg: Event ID: 3101 - Unable to Read Control Information...

	Article: Q275588
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you collect performance data and the network adapter is disabled, the
	following error message may be logged in the Application event log:
	
	  Event ID: 3101 - Unable to read control Information from NBT device.
	
	CAUSE
	=====
	
	This problem can occur if Windows NT 4.0 recognises the network card as always
	present and always active. If you do not receive the error message that is
	mentioned in the "Symptoms" section, the level was changed so that the problem
	is reported as a warning (yellow) and not an error (red).
	
	
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
	
	The English-languare version of this fix should have the following file
	attributes or later:
	
	  Date      Time     Size    File name     Platform
	  -------------------------------------------------
	  10/11/00  2:55 PM  44,304  Perfctrs.dll  NT 4.0
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Perfctrs
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTW400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
