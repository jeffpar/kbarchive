---
layout: page
title: "Q323756: Redirection Response Contains Garbage Characters with Long URL"
permalink: kb/323/Q323756/
---

## Q323756: Redirection Response Contains Garbage Characters with Long URL

	Article: Q323756
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Redirection responses may contain meaningless (or garbage) characters after you
	apply the Internet Information Services (IIS) Security Rollup Patch (SRP). For
	additional information about the IIS Security Rollup Patch, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	CAUSE
	=====
	
	This problem occurs because the string that is used for the redirect is
	non-terminating.
	
	
	RESOLUTION
	==========
	
	IIS 4.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
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
	
	  Date         Time   Version     Size     File name
	  -----------------------------------------------------
	  03-Jun-2002  21:47  4.2.777.1   214,544  Adsiis.dll       
	  03-Jun-2002  21:47  4.2.777.1   330,672  Asp.dll          
	  03-Jun-2002  21:47  4.2.777.1    34,384  Clusiis4.dll     
	  03-Jun-2002  21:46  4.2.777.1    55,392  Httpodbc.dll     
	  03-Jun-2002  21:47  4.2.777.1    98,912  Iischema.dll     
	  03-Jun-2002  21:45  4.2.777.1    63,984  Iislog.dll       
	  03-Jun-2002  21:45  4.2.777.1   185,792  Infocomm.dll     
	  03-Jun-2002  21:45  4.2.777.1    29,520  Iscomlog.dll     
	  03-Jun-2002  21:46  4.2.777.1    38,256  Ssinc.dll        
	  03-Jun-2002  21:46  4.2.777.1    25,360  Sspifilt.dll     
	  03-Jun-2002  21:46  4.2.777.1   231,104  W3svc.dll        
	  03-Jun-2002  21:46  4.2.777.1    88,032  Wam.dll
	
	
	
	IIS 5.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Microsoft Windows 2000 service
	pack that contains this fix.
	
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
	
	The fix, Q323756_w2k_sp4_x86_en.exe, contains the following files:
	
	  Date         Time   Version           Size     File name
	  --------------------------------------------------------
	  06-Jun-2002  14:13  5.0.2195.5592     333,072  Asp.dll
	  06-Jun-2002  14:13  5.0.2195.3649     299,792  Fscfg.dll
	  06-Jun-2002  14:13  5.0.2195.5255       8,464  Ftpctrs2.dll
	  06-Jun-2002  14:13  5.0.2195.5255       6,416  Ftpmib.dll
	  06-Jun-2002  14:13  5.0.2195.5255       9,488  Httpmib.dll
	  06-Jun-2002  14:13  5.0.2195.5255      13,584  Infoadmn.dll
	  06-Jun-2002  14:13  5.0.2195.5255     246,032  Infocomm.dll
	  06-Jun-2002  14:13  5.0.2195.5810      62,736  Isatq.dll
	  19-Apr-2002  20:45  5.2.2.2             3,584  Spmsg.dll
	  19-Apr-2002  20:46  5.2.2.2            44,032  Spuninst.exe
	  13-Jun-2001  01:05  5.0.2195.3727       3,856  Svcpack1.dll
	  06-Jun-2002  14:13  5.0.2195.5255       7,440  W3ctrs.dll
	  06-Jun-2002  14:13  5.0.2195.5871     348,944  W3svc.dll
	  01-Apr-2002  21:46                      4,092  Eula.txt
	  19-Apr-2002  20:46  5.2.2.2            10,240  Spcustom.dll
	  19-Apr-2002  20:46  5.2.2.2           270,336  Update.exe
	  06-Jun-2002  14:17                     37,400  Update.inf
	  06-Jun-2002  14:17                        699  Update.ver 
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
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
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
