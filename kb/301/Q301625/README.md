---
layout: page
title: "Q301625: MS01-044: Patch for SSI Privilege Elevation Vulnerability"
permalink: /kb/301/Q301625/
---

## Q301625: MS01-044: Patch for SSI Privilege Elevation Vulnerability

{% raw %}

	Article: Q301625
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix KbSECVulnerability KbSECBulle
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: If you download and install the fix included in this article onto a computer running IIS 3.0, the IIS 3.0 Web, FTP, and Proxy services will fail. This fix should only be applied to computers running IIS 4.0 or later. To verify your version of IIS, follow these steps:
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Double-click Administrative Tools, and then click the Services icon.
	
	3. In the Services list, locate the IIS Admin Service.
	
	If the IIS Admin Service is listed, download and apply the fix included in this article.  
	
	If the IIS Admin Service is not listed, your version of IIS is not vulnerable to the problem that is corrected by these fixes. Therefore, no action is needed. IIS 3.0 is not vulnerable and does not need this fix.
	
	If you accidentally install this fix on IIS 3.0 it can be successfully removed via Add/Remove Programs in Control Panel to return the web site to its correct functioning.
	
	SYMPTOMS
	========
	
	In Internet Information Services (IIS) 5.0 and Internet Information Server (IIS)
	4.0, a buffer overrun vulnerability exists that an attacker could exploit to
	gain complete control over an affected server and take any type of action on it.
	This vulnerability can only be exploited by code that is running on the server.
	As a result, the attacker would need to already have the ability to install
	software on the server in order to exploit the vulnerability. Best practices
	strongly recommend that you never allow an untrusted user to install software on
	a Web server.
	
	CAUSE
	=====
	
	This vulnerability occurs because the code that processes server-side include
	files contains an unchecked buffer. If a server-side file that contains a
	malformed server-side include directive is installed on an affected server, an
	attacker could cause the buffer to overflow the next time the file is requested
	by a user.
	
	RESOLUTION
	==========
	
	Internet Information Services 5.0
	---------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	To resolve this problem, either obtain the hotfix referenced in this section or
	Windows 2000 Security Rollup Package 1 (SRP1). For additional information about
	SRP1, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q301625_W2K_SP3_x86_en.exe now
	  (http://www.microsoft.com/windows2000/downloads/critical/q301625/default.asp)
	
	NOTE: This patch can be installed on systems running Windows 2000 Service Pack 1
	or Windows 2000 Service Pack 2.
	
	Release Date: August 15, 2001
	
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
	
	  Date         Time   Version        Size    File name
	  ------------------------------------------------------
	  06-Aug-2001  17:10  5.0.2195.4051  245,520  ADSIIS.DLL
	  06-Aug-2001  17:10  5.0.2195.4051  333,072  ASP.DLL
	  29-May-2001  19:37  4.0.2.4701     593,976  FP4AUTL.DLL
	  06-Aug-2001  17:10  5.0.2195.3649  299,792  FSCFG.DLL
	  06-Aug-2001  17:10  5.0.2195.4051    8,464  FTPCTRS2.DLL
	  06-Aug-2001  17:10  5.0.2195.4051    6,416  FTPMIB.DLL
	  06-Aug-2001  17:10  5.0.2195.4051  246,032  HTTPEXT.DLL
	  06-Aug-2001  17:10  5.0.2195.4051    9,488  HTTPMIB.DLL
	  06-Aug-2001  17:10  5.0.2195.4051   56,592  HTTPODBC.DLL
	  06-Aug-2001  17:10  5.0.2195.3649  121,104  IDQ.DLL
	  06-Aug-2001  17:10  5.0.2195.4063  122,640  IISRTL.DLL
	  06-Aug-2001  17:10  5.0.2195.4051   13,584  INFOADMN.DLL
	  06-Aug-2001  17:10  5.0.2195.4051  245,520  INFOCOMM.DLL
	  06-Aug-2001  17:10  5.0.2195.4051   62,736  ISATQ.DLL
	  06-Aug-2001  17:10  5.0.2195.3649   46,352  ISM.DLL
	  06-Aug-2001  17:10  5.0.2195.3649   76,560  MSW3PRT.DLL
	  30-May-2001  18:40  5.0.2195.3651    6,928  SCHMUPD.EXE
	  14-Jun-2001  22:44  5.0.2195.3747   41,232  SSINC.DLL
	  06-Aug-2001  17:10  5.0.2195.4051    7,440  W3CTRS.DLL
	  06-Aug-2001  17:10  5.0.2195.4051  353,552  W3SVC.DLL
	
	
	Internet Information Server 4.0
	-------------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that you determine are at risk of attack. Evaluate your computer's
	physical accessibility, network and Internet connectivity, and other factors to
	determine the degree of risk to your computer. See the associated Microsoft
	Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/ms01-044.asp) to help
	determine the degree of risk. This fix may receive additional testing. If your
	computer is sufficiently at risk, Microsoft recommends that you apply this fix
	now.
	
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
	
	  DownloadDownload Q301625i.exe now
	  (http://www.microsoft.com/ntserver/nts/downloads/critical/q301625/default.asp)
	
	  NOTE: Q301625is.exe contains the Symbols files.
	
	Compaq Array Controller Users: If you have installed the Compaq Array Controller
	Driver (Cpqarray.sys) from the Compaq Web Site, Compaq FTP Site, or Compaq
	SmartStart, please see the following article in the Microsoft Knowledge Base for
	information on how to resolve this problem:
	
	  Q305228 "STOP 0xA" Occurs After Applying Windows NT 4.0 Security Rollup
	  Package
	
	NOTE: This patch can be installed on systems running Windows NT 4.0 Service Pack
	5 or Windows NT 4.0 Service Pack 6a.
	
	Release Date: August 15, 2001
	
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
	
	  Date         Time   Version        Size     File name
	  --------------------------------------------------------
	  10-Aug-2001  12:46  4.2.769.1      214,544  ADSIIS.DLL
	  10-Aug-2001  12:47  4.2.769.1      330,672  ASP.DLL
	  02-Apr-2001  16:55  4.0.2.4701     593,976  FP4AUTL.DLL
	  10-Aug-2001  12:46  4.2.769.1       81,888  FTPSVC2.DLL
	  10-Aug-2001  12:46  4.2.769.1       55,392  HTTPODBC.DLL
	  13-Jul-2001  16:14  5.0.1782.4     193,296  IDQ.DLL
	  10-Aug-2001  12:46  4.2.769.1       98,912  IISCHEMA.DLL
	  10-Aug-2001  12:45  4.2.769.1       63,472  IISLOG.DLL
	  10-Aug-2001  12:45  4.2.769.1      185,792  INFOCOMM.DLL
	  10-Aug-2001  12:45  4.2.769.1       29,520  ISCOMLOG.DLL
	  10-Aug-2001  12:48  4.2.769.1       54,560  ISM.DLL
	  02-Apr-2001  16:55  4.0.1381.7086  375,056  KERNEL32.DLL
	  10-Aug-2001  12:49  4.2.769.1        9,680  SCHMUPD.EXE
	  10-Aug-2001  12:46  4.2.769.1       38,256  SSINC.DLL
	  10-Aug-2001  12:46  4.2.769.1       25,360  SSPIFILT.DLL
	  10-Aug-2001  12:46  4.2.769.1      229,536  W3SVC.DLL
	  10-Aug-2001  12:45  4.2.769.1       88,032  WAM.DLL
	
	
	
	If you apply this security patch to a server that is running Exchange 5.5 with
	Outlook Web Access (OWA), all OWA clients receive a message that states that the
	client password will expire in 0 days.
	
	To resolve this, follow these steps after you apply the patch:
	
	1. Locate C:\Exchsrvr\Webdata\USA.
	
	2. Create a copy of the Root.asp file (for backup purposes only).
	
	3. Edit Root.asp.
	
	4. Locate the following line:
	
	  if cint(days) < 0 then days = 10000
	
	5. Change the line to the following:
	
	  if cint(days) < 1 then days = 10000
	
	6. Save the file.
	
	7. Stop the browser (that is, the OWA client).
	
	8. Log on to OWA again.
	
	STATUS
	======
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Internet Information Services 5.0 and Internet Information
	Server 4.0. This problem was first corrected in Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This patch also contains fixes for the problems described in the following
	Microsoft Knowledge Base article:
	
	  Q297860 IIS 5.0 Security and Post-Windows NT 4.0 SP5 IIS 4.0 Patch Rollup
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-044.asp
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	Additional query words: kbIISCom security_patch kbWin2000srp1 nimda "code red"
	
	======================================================================
	Keywords          : kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix KbSECVulnerability KbSECBulletin KbSECHack kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
