---
layout: page
title: "Q295534: Superfluous Decoding Operation Can Allow Command Execution"
permalink: kb/295/Q295534/
---

## Q295534: Superfluous Decoding Operation Can Allow Command Execution

	Article: Q295534
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbgraphxlinkcritical KbSECVul
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A vulnerability exists in Microsoft Internet Information Services (IIS) 5.0 and
	Microsoft Internet Information Server (IIS) 4.0 that can enable a malicious user
	to run (execute) operating system commands on an affected Web server. This gives
	the malicious user the ability to modify Web pages, add, change, or delete
	files, reformat the hard disk, or take other actions (such as uploading any code
	to the server and running it).
	
	Best practices, if followed, can make it difficult or impossible for an attacker
	to exploit the vulnerability. Even if an attacker successfully exploits it, the
	vulnerability does not grant the attacker administrative control over the
	server. Instead, the vulnerability grants the attacker privileges that are
	normally reserved for a user who can log on to the server interactively.
	Nevertheless, even these privileges can enable a malicious user to cause
	widespread damage and allow a point from which the malicious user can launch
	additional attacks in the hope of gaining additional privileges.
	
	Mitigating Factors:
	
	- This vulnerability does not provide a way for the attacker to learn the
	  folder structure on the server. As a result, if the operating system is
	  installed on a separate drive from the Web root or in non-standard folders,
	  it can prevent an attacker from locating programs of interest.
	
	- This vulnerability does not provide administrative access to the server. If
	  you followed the recommendations in the IIS 4.0 and IIS 5.0 security
	  checklists, sensitive programs are moved to folders that only the
	  administrator can access, and non-administrative access to server resources
	  is severely restricted.
	
	CAUSE
	=====
	
	This vulnerability occurs because of an error in the functionality that
	processes requests to run programs that are housed on the server. A superfluous
	decoding operation could give an attacker the opportunity to bypass security
	checks and escape the server's virtual folder structure, thereby enabling the
	attacker to run operating system commands on the server.
	
	RESOLUTION
	==========
	
	For additional information on what is fixed by the following patches, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q297860 IIS 5.0 Security and Post-Windows NT 4.0 SP5 IIS 4.0 Patch Rollup
	
	Internet Information Services 5.0
	---------------------------------
	
	To resolve this problem, either obtain the hotfix referenced in this section or
	Windows 2000 Security Rollup Package 1 (SRP1). For additional information about
	SRP1, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q293826_W2K_SP3_x86_en.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=29764)
	
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
	
	  Date        Time    Version        Size     File name
	  --------------------------------------------------------
	  05/04/2001  11:48a  5.0.2195.3407  245,520  Adsiis.dll
	  05/04/2001  11:48a  5.0.2195.3407  332,560  Asp.dll
	  08/26/2000  06:30p                   6,512  Fixerr.js
	  11/10/2000  11:21p  5.0.2195.3407  593,976  Fp4autl.dll
	  03/27/2001  10:10p  5.0.2195.3407  445,712  Httpext.dll
	  05/04/2001  11:48a  5.0.2195.3407   56,592  Httpodbc.dll
	  05/04/2001  11:48a  5.0.2195.3407  122,640  Iisrtl.dll
	  05/04/2001  11:48a  5.0.2195.3407   13,584  Infoadmn.dll
	  05/04/2001  11:48a  5.0.2195.3407  245,520  Infocomm.dll
	  05/04/2001  11:48a  5.0.2195.3407   62,736  Isatq.dll
	  05/04/2001  11:48a  5.0.2195.3407   46,352  Ism.dll
	  05/04/2001  11:48a  5.0.2195.3407   76,560  Msw3prt.dll
	  10/17/2000  01:38p  5.0.2195.3407    6,928  Schmupd.exe
	  05/04/2001  11:48a  5.0.2195.3407   41,232  Ssinc.dll
	  05/04/2001  11:48a  5.0.2195.3407    7,440  W3ctrs.dll
	  05/04/2001  11:48a  5.0.2195.3407  357,648  W3svc.dll
	
	NOTE: You can install this patch on systems that are running Microsoft Windows
	2000 Gold, Windows 2000 Service Pack 1, or Windows 2000 Service Pack 2.
	
	
	Internet Information Server 4.0
	-------------------------------
	
	To resolve this problem, obtain the Windows NT 4.0 Security Rollup Package. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that you determine are at risk of attack. Evaluate your computer's
	physical accessibility, network and Internet connectivity, and other factors to
	determine the degree of risk to your computer. See the associated Microsoft
	Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/ms01-026.asp) to help
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
	
	  DownloadDownload Q295534i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=29787)
	  NOTE: Q295534is.exe are the Symbols files.
	
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
	
	  Date        Time    Version        Size     File name     Platform
	  ------------------------------------------------------------------
	  04/11/2001  01:32p  4.2.764.1      214,544  Adsiis.dll    x86
	  04/11/2001  01:33p  4.2.764.1      330,672  Asp.dll       x86
	  04/02/2001  04:55p  4.0.2.4701     593,976  Fp4autl.dll   x86
	  04/11/2001  01:32p  4.2.764.1       81,888  Ftpsvc2.dll   x86
	  04/11/2001  01:32p  4.2.764.1       55,392  Httpodbc.dll  x86
	  04/11/2001  01:32p  4.2.764.1       98,912  Iischema.dll  x86
	  04/11/2001  01:31p  4.2.764.1       63,472  Iislog.dll    x86
	  04/11/2001  01:31p  4.2.764.1      185,792  Infocomm.dll  x86
	  04/11/2001  01:31p  4.2.764.1       29,520  Iscomlog.dll  x86
	  04/11/2001  01:35p  4.2.764.1       54,560  Ism.dll       x86
	  04/02/2001  04:55p  4.0.1381.7086  375,056  Kernel32.dll  x86
	  04/11/2001  01:36p  4.2.764.1        9,680  Schmupd.exe   x86
	  04/11/2001  01:32p  4.2.764.1       38,256  Ssinc.dll     x86
	  04/11/2001  01:32p  4.2.764.1       25,360  Sspifilt.dll  x86
	  04/11/2001  01:32p  4.2.764.1      229,024  W3svc.dll     x86
	  04/11/2001  01:31p  4.2.764.1       88,032  Wam.dll       x86
	
	  08/20/1999  12:26a  4.0.1381.321   171,280  W3svc.dll     Alpha
	
	NOTE: You can install this patch on systems that are running Microsoft Windows NT
	4.0 Service Pack 5 or Windows NT 4.0 Service Pack 6a.
	
	
	
	Windows NT Server version 4.0, Terminal Server Edition:
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Internet Information Services 5.0
	---------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Internet Information Services 5.0. This problem was first
	corrected in Windows 2000 Service Pack 3.
	
	Internet Information Server 4.0
	-------------------------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-026.asp
	
	Additional query words: kbIISCom security_patch kbWin2000srp1
	
	======================================================================
	Keywords          : kbSecurity kbCOMIS kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbgraphxlinkcritical KbSECVulnerability KbSECHack kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
