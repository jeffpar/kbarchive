---
layout: page
title: "Q323332: ASP Generates a New ASP SessionID Cookie for Every User Access"
permalink: /kb/323/Q323332/
---

## Q323332: ASP Generates a New ASP SessionID Cookie for Every User Access

{% raw %}

	Article: Q323332
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000preSP4Fix
	Last Modified: 29-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set AspKeepSessionIDSecure to TRUE, Active Server Pages (ASP)
	generates a new ASP SessionID cookie for every user access when you use HTTPS
	applications.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q274149 Cookies Are Not Marked as Secure in IIS
	
	RESOLUTION
	==========
	
	IIS 5.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
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
	  -------------------------------------------------------
	  28-Jun-2002  13:07  5.0.2195.5917  333,072  Asp.dll
	  28-Jun-2002  13:07  5.0.2195.3649  299,792  Fscfg.dll
	  28-Jun-2002  13:07  5.0.2195.5255    8,464  Ftpctrs2.dll
	  28-Jun-2002  13:07  5.0.2195.5255    6,416  Ftpmib.dll
	  28-Jun-2002  13:07  5.0.2195.5255    9,488  Httpmib.dll
	  28-Jun-2002  13:07  5.0.2195.5255   13,584  Infoadmn.dll
	  28-Jun-2002  13:07  5.0.2195.5255  246,032  Infocomm.dll
	  28-Jun-2002  13:07  5.0.2195.5810   62,736  Isatq.dll
	  28-Jun-2002  13:07  5.0.2195.5255    7,440  W3ctrs.dll
	
	
	
	IIS 4.0:
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version    Size     File name    
	  ---------------------------------------------------
	  19-Jul-2002  12:45  4.2.779.1  214,544  Adsiis.dll
	  19-Jul-2002  12:45  4.2.779.1  330,672  Asp.dll
	  19-Jul-2002  12:46  4.2.779.1   34,384  Clusiis4.dll
	  19-Jul-2002  12:44  4.2.779.1   55,392  Httpodbc.dll
	  19-Jul-2002  12:45  4.2.779.1   98,912  Iischema.dll
	  19-Jul-2002  12:43  4.2.779.1   63,984  Iislog.dll
	  19-Jul-2002  12:43  4.2.779.1  185,792  Infocomm.dll
	  19-Jul-2002  12:43  4.2.779.1   29,520  Iscomlog.dll
	  19-Jul-2002  12:44  4.2.779.1   38,256  Ssinc.dll
	  19-Jul-2002  12:44  4.2.779.1   25,360  Sspifilt.dll
	  19-Jul-2002  12:44  4.2.779.1  231,104  W3svc.dll
	  19-Jul-2002  12:44  4.2.779.1   88,032  Wam.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information on how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000preSP4Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
