---
layout: page
title: "Q325571: Buffer Overrun in IIS When No Script Maps Exist"
permalink: /kb/325/Q325571/
---

## Q325571: Buffer Overrun in IIS When No Script Maps Exist

	Article: Q325571
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000preSP4Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If no script maps exist for the Web site, a specially formatted URL can cause a
	buffer overrun, causing IIS to crash.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows 2000 service pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version            Size    File name
	  --------------------------------------------------------------
	  01-Jul-2002  12:04  5.0.2195.5917     333,072  Asp.dll          
	  01-Jul-2002  12:04  5.0.2195.3649     299,792  Fscfg.dll        
	  01-Jul-2002  12:04  5.0.2195.5255       8,464  Ftpctrs2.dll     
	  01-Jul-2002  12:04  5.0.2195.5255       6,416  Ftpmib.dll       
	  01-Jul-2002  12:04  5.0.2195.5255       9,488  Httpmib.dll      
	  01-Jul-2002  12:04  5.0.2195.5255      13,584  Infoadmn.dll     
	  01-Jul-2002  12:04  5.0.2195.5255     246,032  Infocomm.dll     
	  01-Jul-2002  12:04  5.0.2195.5810      62,736  Isatq.dll        
	  01-Jul-2002  12:04  5.0.2195.5255       7,440  W3ctrs.dll       
	  01-Jul-2002  12:04  5.0.2195.5919     349,456  W3svc.dll        
	
	
	
	WORKAROUND
	==========
	
	Add a script mapping for the Web site.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Internet Information
	Services 5.0.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000preSP4Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
