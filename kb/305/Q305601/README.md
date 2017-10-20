---
layout: page
title: "Q305601: MS01-060: FIX: CRT String Format Functions May Underwrite Buffer"
permalink: /kb/305/Q305601/
---

## Q305601: MS01-060: FIX: CRT String Format Functions May Underwrite Buffer

{% raw %}

	Article: Q305601
	Product(s): Microsoft C Compiler
	Version(s): 2000,2000 SP1,2000 SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a,6.0
	Operating System(s): 
	Keyword(s): kbOSWin2000fix kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	- Microsoft Visual C++, 32-bit Editions, version 6.0 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Professional 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some CRT string format functions may cause an access violation, stack overflow,
	or stack corruption due to buffer underwrites.
	
	
	CAUSE
	=====
	
	When a printf-style function performs integer or floating-point conversion, it
	uses an internal buffer to convert the number into a string. If the
	user-supplied Precision property is greater than the internal buffer size, the
	conversion writes outside the boundaries of that buffer because the values on
	the stack are always the same regardless of the underrun values, and these
	values cannot be changed.
	
	RESOLUTION
	==========
	
	NOTE: All of the hotfixes listed below require you to restart the computer after
	installation.
	
	Visual C++
	----------
	
	The Visual C++ 6.0 version of this fix is available at the following Microsoft
	Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/cruntimefix.asp
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	  +----------------------------------------------------------------------------------+
	  | Date        | Time  | Version     | Size      | Name       | Platform | Language | 
	  +----------------------------------------------------------------------------------+
	  | 01-Oct-2001 | 13:27 | 6.00.9370.0 | 278,581   | Msvcrt.dll | x86      | ENU      | 
	  +----------------------------------------------------------------------------------+
	  | 01-Oct-2001 | 13:27 | none        | 2,515,968 | Msvcrt.pdb | x86      | ENU      | 
	  +----------------------------------------------------------------------------------+
	
	Windows XP
	----------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that you determine are at risk of attack. Evaluate your computer's
	physical accessibility, network and Internet connectivity, and other factors to
	determine the degree of risk to your computer. See the associated Microsoft
	Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/ms01-060.asp) to help
	determine the degree of risk. This fix may receive additional testing. If your
	computer is sufficiently at risk, Microsoft recommends that you apply this fix
	now. Otherwise, wait for the next Windows XP service pack that contains this
	fix.
	
	To resolve this problem immediately, download the fix by following the
	instructions later in this article or contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  English (US): DownloadDownload Q305601_WXP_SP1_x86_EN.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35164)
	
	  English (US) (64-bit): DownloadDownload Q305601_WXP_SP1_x86_EN.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35215)
	
	  Chinese (Simplified): DownloadDownload Q305601_WXP_SP1_x86_CN.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35206)
	
	  Chinese (Traditional): DownloadDownload Q305601_WXP_SP1_x86_TW.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35209)
	
	  Czech: DownloadDownload Q305601_WXP_SP1_x86_CS.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35138)
	
	  Danish: DownloadDownload Q305601_WXP_SP1_x86_DA.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35139)
	
	  Dutch: DownloadDownload Q305601_WXP_SP1_x86_NL.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35145)
	
	  Finnish: DownloadDownload Q305601_WXP_SP1_x86_FI.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35141)
	
	  French: DownloadDownload Q305601_WXP_SP1_x86_FR.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35142)
	
	  French (64-bit): DownloadDownload Q305601_WXP_SP1_x86_FR.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35218)
	
	  German: DownloadDownload Q305601_WXP_SP1_x86_DE.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35165)
	
	  German (64-bit): DownloadDownload Q305601_WXP_SP1_x86_DE.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35216)
	
	  Greek: DownloadDownload Q305601_WXP_SP1_x86_EL.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35160)
	
	  Hungarian: DownloadDownload Q305601_WXP_SP1_x86_HU.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35143)
	
	  Italian: DownloadDownload Q305601_WXP_SP1_x86_IT.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35144)
	
	  Japanese: DownloadDownload Q305601_WXP_SP1_x86_JA.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35207)
	
	  Japanese (64-bit): DownloadDownload Q305601_WXP_SP1_x86_JA.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35217)
	
	  Korean: DownloadDownload Q305601_WXP_SP1_x86_KO.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35208)
	
	  Norwegian: DownloadDownload Q305601_WXP_SP1_x86_NO.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35146)
	
	  Polish: DownloadDownload Q305601_WXP_SP1_x86_PL.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35147)
	
	  Portuguese: DownloadDownload Q305601_WXP_SP1_x86_PT.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35161)
	
	  Portuguese (Brazil): DownloadDownload Q305601_WXP_SP1_x86_BR.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35127)
	
	  Russian: DownloadDownload Q305601_WXP_SP1_x86_RU.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35148)
	
	  Spanish: DownloadDownload Q305601_WXP_SP1_x86_ES.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35140)
	
	  Swedish: DownloadDownload Q305601_WXP_SP1_x86_SV.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35149)
	
	  Turkish: DownloadDownload Q305601_WXP_SP1_x86_TR.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=35162)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	  +----------------------------------------------------------------------------------------------+
	  | Date        | Time  | Version                              | Size    | Name       | Platform | 
	  +----------------------------------------------------------------------------------------------+
	  | 05-Oct-2001 | 07:54 | 7.0.2600.15 (xpclnt_qfe.010827-1803) | 322,560 | Msvcrt.dll | x86      | 
	  +----------------------------------------------------------------------------------------------+
	  | 05-Oct-2001 | 07:54 | none                                 | 353,280 | Msvcrt.pdb | x86      | 
	  +----------------------------------------------------------------------------------------------+
	
	
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  English (US): DownloadDownload Q305601_W2K_SP3_x86_EN.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33500)
	
	  Chinese (Simplified): DownloadDownload Q305601_W2K_SP3_x86_CN.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33669)
	
	  Chinese (Traditional): DownloadDownload Q305601_W2K_SP3_x86_TW.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33671)
	
	  French: DownloadDownload Q305601_W2K_SP3_x86_FR.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33676)
	
	  German: DownloadDownload Q305601_W2K_SP3_x86_DE.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33501)
	
	  Italian: DownloadDownload Q305601_W2K_SP3_x86_IT.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33679)
	
	  Japanese: DownloadDownload Q305601_W2K_SP3_x86_JA.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33668)
	
	  Korean: DownloadDownload Q305601_W2K_SP3_x86_KO.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33682)
	
	  Spanish: DownloadDownload Q305601_W2K_SP3_x86_ES.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33674)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  
	  +--------------------------------------------------------------------------------+
	  | Date        | Time  | Version     | Size    | Name       | Platform | Language | 
	  +--------------------------------------------------------------------------------+
	  | 08-Oct-2001 | 11:07 | 6.10.9359.0 | 290,869 | Msvcrt.dll | x86      | ENU      | 
	  +--------------------------------------------------------------------------------+
	  | 08-Oct-2001 | 11:08 | none        | 451,584 | Msvcrt.pdb | x86      | ENU      | 
	  +--------------------------------------------------------------------------------+
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that you determine are at risk of attack. Evaluate your computer's
	physical accessibility, network and Internet connectivity, and other factors to
	determine the degree of risk to your computer. See the associated Microsoft
	Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/ms01-060.asp) to help
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
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  English (US): DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33500)
	
	  Chinese (Simplified): DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33669)
	
	  Chinese (Traditional): DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33671)
	
	  French: DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33676)
	
	  German: DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33501)
	
	  Italian: DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33679)
	
	  Japanese: DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33668)
	
	  Korean: DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33682)
	
	  Spanish: DownloadDownload Q305601nt4.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=33674)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	
	STATUS
	======
	
	Windows XP
	----------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Windows XP.
	
	Windows 2000
	------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Windows 2000. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Windows NT 4.0.
	
	Visual C++
	----------
	
	Microsoft has confirmed that this problem may cause a degree of security
	vulnerability in Microsoft Visual C++.
	
	
	MORE INFORMATION
	================
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-060.asp
	
	Additional query words: kbBaseOS security_patch _snprintf, _snwprintf, _vsnprintf, _vsnwprintf, buffer overflow
	
	======================================================================
	Keywords          : kbOSWin2000fix kbSecurity kbWinNT400PreSP7Fix kbWin2000PreSP3Fix kbWinXPpreSP1fix kbWin2000sp3fix 
	Technology        : kbVCsearch kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinXPHome kbWinXPPro kbAudDeveloper kbWinAdvServSearch kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbWin2000ProSP2 kbWin2000ProSP1 kbwin2000ServSP1 kbwin2000ServSP2 kbWinNTSEnt400SP6a kbWinNTW400SP6a kbVC600 kbVC32bitSearch kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :2000,2000 SP1,2000 SP2,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6a,6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
