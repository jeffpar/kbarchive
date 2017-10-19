---
layout: page
title: "Q287913: URL Parameter Contains &quot;%3A&quot; When Redirected to Change Password"
permalink: /kb/287/Q287913/
---

## Q287913: URL Parameter Contains &quot;%3A&quot; When Redirected to Change Password

	Article: Q287913
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbDSupport kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Internet Information Server (IIS) automatically redirects you to change
	your password, the URL for the originally requested page may contain the
	characters "HTTP%3A" or "HTTPS%3A", instead of "HTTP:" and "HTTPS:"
	respectively.
	
	RESOLUTION
	==========
	
	Internet Information Server 4.0
	-------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Windows NT service pack that
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
	
	The English version of this IIS 4.0 fix should have the following file attributes
	or later:
	
	  Date          Time    Version     Size    File name     Platform
	  -------------------------------------------------------------
	  03/31/2001   10:35    4.2.761.1   36,864  Ism.dll       NT4
	
	
	
	Internet Information Server 5.0
	-------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this IIS 5.0 fix should have the following file attributes
	or later:
	
	  Date        Time     Version          Size    File name     
	  -------------------------------------------------------------
	  7/10/2001   04:05p   5.0.2195.3649   46,352   Ism.dll     
	
	
	NOTE: The Ism.dll file is included in MS01-044.
	
	STATUS
	======
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Internet Information Server 5.0
	-------------------------------
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSecurity kbDSupport kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
