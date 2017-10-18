---
layout: page
title: "Q231462: IIS 3.0 Remote Computer May Fail after Applying Service Pack 4"
permalink: kb/231/Q231462/
---

## Q231462: IIS 3.0 Remote Computer May Fail after Applying Service Pack 4

	Article: Q231462
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer running IIS 4.0 is configured to remotely administer a computer
	running IIS 3.0 from the IIS 4.0 MMC (as described in Q183736), the
	configuration may fail and the ability to remotely administer the remote IIS 3.0
	computer may be lost after applying Windows NT Service Pack 4.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  5/3/99    1:13PM               128kb   Infocomm.dll  x86
	  5/3/99    1:13PM               15kb    Infoadmn.dll  x86
	  5/5/99    9:13PM               219kb   Infocomm.dll  alpha
	  5/5/99    9:14PM               23kb    Infoadmn.dll  alpha
	
	Note: Apply the above files to the IIS 3.0 computer.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 SP 4.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
