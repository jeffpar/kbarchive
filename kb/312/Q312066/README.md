---
layout: page
title: "Q312066: Computer Does Not Boot Without a Video Adapter with the SAK"
permalink: /kb/312/Q312066/
---

## Q312066: Computer Does Not Boot Without a Video Adapter with the SAK

	Article: Q312066
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Server Appliance Kit (SAK), version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Server Appliance Kit (SAK) version 2.0 to configure a target
	computer to be "headless" (to be operated without a video adapter), the computer
	may not be able to boot.
	
	CAUSE
	=====
	
	This behavior occurs because SAK 2.0 includes the Ntldr file from Microsoft
	Windows 2000, which does not support booting without a video adapter.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Size     File name
	  -------------------------------------
	  03-Dec-2001 14:43  247,744  Ntldr
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Ntldr file that is included with this hotfix supports booting a computer
	without a video adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbSAK200 kbAudDeveloper kbSAKSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
