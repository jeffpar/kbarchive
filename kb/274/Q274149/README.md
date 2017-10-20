---
layout: page
title: "Q274149: Cookies Are Not Marked as Secure in IIS"
permalink: /kb/274/Q274149/
---

## Q274149: Cookies Are Not Marked as Secure in IIS

{% raw %}

	Article: Q274149
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Active Server Pages (ASP) in Internet Information Server (IIS) 4.0
	or Internet Information Services (IIS) 5.0, a session cookie is sent to a user's
	browser. This cookie identifies the user for the time that they are on the site.
	These cookies are sometimes called memory cookies, because they are never stored
	on the user's hard drive like a regular cookie. In reality, this is an
	additional header that is sent to the browser. Anytime a Web site sends
	additional information such as this, the browser is required to send it back
	with each request (provided the server name does not change). The following is
	an example of an ASP Session Cookie:
	
	  Set-Cookie: ASPSESSIONIDGQQGGLIC=HKEDPNNBNBBKMOCFFBEIJENM; path=/
	
	HTTP is a stateless protocol, which means that every time a user connects to a
	Web site it is just like the first time they connected to the Web server. This
	is a problem in an environment where you store server-side information for
	users. The session cookie is a means of performing such tasks.
	
	A problem can occur if developers decide to store confidential or sensitive
	information in the session. For example, if a developer writes a piece of ASP
	code that requests a user's credit card number, the developer can store this
	information in a session variable (session variables are linked to the session
	cookie) on the server. The user can then browse to a page that lists the
	information they entered (for example, an authorization page or an order
	confirmation page). The credit card (when the list is generated) may be pulled
	from a session variable. If so, this information may be at risk.
	
	If a malicious user performs a network trace or something similar, they could
	possibly obtain the session cookie from the user's browser when it is sent back
	to the server. If the malicious user makes a request to the server and presents
	that cookie (or actually replays the request), they could effectively see that
	users information stored in the session variables. The malicious user only needs
	to know the page that generated the output (for example, the order confirmation
	page).
	
	Microsoft recommends that developers use SSL to encrypt sensitive information in
	order to hide the session cookie. In most cases, this will work fine; however,
	if the user goes from an HTTPS (secured) connection, and then back to HTTP
	(non-secured), the cookie is readable. This presents a problem, because the
	session cookie issued by a secured and non-secured request is the same.
	
	CAUSE
	=====
	
	Microsoft has determined this to be a problem in IIS 4.0 and 5.0. The cookie
	specification in RFC 2109 states that a cookie may be marked as Secure. IIS does
	not differentiate between secure and non-secure cookies.
	
	RESOLUTION
	==========
	
	For IIS 5.0 (Windows 2000):
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q274149_W2K_SP2_x86_en.exe now
	  (http://www.microsoft.com/Windows2000/downloads/critical/q274149/default.asp)
	
	NOTE: After you apply the patch, run the following commands to enable secure
	cookies (this example enables them for site 1):
	
	  "cd %windir%\system32\inetsrv\adminsamples" (without the quotation marks)
	  "adsutil set w3svc/1/AspKeepSessionIDSecure 1" (without the quotation marks)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date          Time    Version         Size     File name
	  -----------------------------------------------------------------
	  5/31/2001    03:31p  5.0.2195.3649   245,520   Adsiis.dll
	  5/31/2001    03:31p  5.0.2195.3649   332,560   Asp.dll
	  5/31/2001    03:31p  5.0.2195.3649    13,584   Infoadmn.dll
	  5/31/2001    03:31p  5.0.2195.3649   245,520   Infocomm.dll
	  5/31/2001    03:31p  5.0.2195.3649    62,736   Isatq.dll
	  5/30/2001    03:40p  5.0.2195.3651     6,928   Schmupd.exe
	  5/31/2001    03:32p  5.0.2195.3649     7,440   W3ctrs.dll
	
	
	For IIS 4.0 (Windows NT Server 4.0):
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that you determine are at risk of attack. Evaluate your computer's
	physical accessibility, network and Internet connectivity, and other factors to
	determine the degree of risk to your computer. See the associated Microsoft
	Security Bulletin () to help determine the degree of risk. This fix may receive
	additional testing. If your computer is sufficiently at risk, Microsoft
	recommends that you apply this fix now.
	
	To resolve this problem immediately, download the fix by clicking the download
	link later in this article or contact Microsoft Product Support Services to
	obtain the fix. For a complete list of Microsoft Product Support Services phone
	numbers and information about support costs, please visit the following
	Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Secsesi.exe now
	  (http://www.microsoft.com/ntserver/nts/downloads/critical/q274149/default.asp)
	
	NOTE: After applying the patch, run the following commands to enable secure
	cookies (this example enables them for site 1):
	
	  cd %windir%\system32\inetsrv\adminsamples
	  adsutil set w3svc/1/AspKeepSessionIDSecure 1
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name
	  -----------------------------------------
	  11/08/2000  03:29p  214,544  Adsiis.dll
	  11/09/2000  05:32p  330,672  Asp.dll
	  11/08/2000  02:39p   11,396  Httpext.h
	  11/09/2000  05:38p   55,904  Httpodbc.dll
	  11/08/2000  03:29p   98,912  Iischema.dll
	  11/08/2000  02:39p   28,851  Iiscnfg.h
	  11/08/2000  03:27p  185,792  Infocomm.dll
	  11/08/2000  03:32p    9,680  Schmupd.exe
	  11/09/2000  05:38p   38,256  Ssinc.dll
	  11/08/2000  03:28p   25,360  Sspifilt.dll
	  11/09/2000  05:37p  229,008  W3svc.dll
	
	
	
	Windows NT Server version 4.0, Terminal Server Edition
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in IIS 5.0 and IIS 4.0. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For more information about ASP and session state, see the following MSDN
	article:
	
	  http://msdn.microsoft.com/workshop/server/asp/active.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
