---
layout: page
title: "Q260205: HTTP Request with Large Number of Dots/Slashes Causes High CPU"
permalink: /kb/260/Q260205/
---

## Q260205: HTTP Request with Large Number of Dots/Slashes Causes High CPU

{% raw %}

	Article: Q260205
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An HTTP GET request with a large number of dots (..) or dot-slashes (././) in
	the URL can cause high CPU utilization for the Inetinfo process.
	
	CAUSE
	=====
	
	IIS determines how to process a URL based on its extension. When there are a
	large number of dots or dot-slashes, the Inetinfo process consumes all the CPU
	power for the time that it takes to determine the right extension.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q260205_w2k_sp1_x86_en.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20904)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 that contains this fix.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	US English:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20906)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20906)
	
	Chinese (Simplified):
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/CN/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/CN/Myrdot4a.exe)
	
	Chinese (Traditional):
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/TW/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/TW/Myrdot4a.exe)
	
	Dutch:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/NL/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/NL/Myrdot4a.exe)
	
	French:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/FR/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/FR/Myrdot4a.exe)
	
	German:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/DE/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/DE/Myrdot4a.exe)
	
	Japanese:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/JA/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/JA/Myrdot4a.exe)
	
	Korean:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/KO/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/KO/Myrdot4a.exe)
	
	Portuguese (Brazil):
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/PT-BR/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/PT-BR/Myrdot4a.exe)
	
	Spanish:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/ES/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/ES/Myrdot4a.exe)
	
	Swedish:
	
	  x86: DownloadDownload Myrdot4i.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/SV/Myrdot4i.exe)
	
	  Alpha: DownloadDownload Myrdot4a.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/SV/Myrdot4a.exe)
	
	NOTE: Debug symbol files are required by an administrator to do both kernel and
	user mode debugging, providing a method to resolve global variables and function
	names in the loaded executable file. Click the file names below to download the
	symbol files:
	
	US English:
	
	  x86: DownloadDownload Myrdot4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20906)
	
	  Alpha: DownloadDownload Myrdot4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=20906)
	
	Chinese (Simplified):
	
	  x86: DownloadDownload Myrdot4is.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/CN/Myrdot4is.exe)
	
	  Alpha: DownloadDownload Myrdot4as.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/CN/Myrdot4as.exe)
	
	Chinese (Traditional):
	
	  x86: DownloadDownload Myrdot4is.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/TW/Myrdot4is.exe)
	
	  Alpha: DownloadDownload Myrdot4as.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/TW/Myrdot4as.exe)
	
	German:
	
	  x86: DownloadDownload Myrdot4is.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/DE/Myrdot4is.exe)
	
	  Alpha: DownloadDownload Myrdot4as.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/DE/Myrdot4as.exe)
	
	Japanese:
	
	  x86: DownloadDownload Myrdot4is.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/JA/Myrdot4is.exe)
	
	  Alpha: DownloadDownload Myrdot4as.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/JA/Myrdot4as.exe)
	
	Korean:
	
	  x86: DownloadDownload Myrdot4is.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/KO/Myrdot4is.exe)
	
	  Alpha: DownloadDownload Myrdot4as.exe now
	  (http://download.microsoft.com/download/iis40/Patch/Q260205/NT4ALPHA/KO/Myrdot4as.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date     Time     Version    Size     File name     Platform
	  ------------------------------------------------------------
	  4/24/00  12:11PM  4.2.743.1  228,496  W3svc.dll     x86
	  4/24/00  12:11PM  4.2.743.1   25,360  Sspifilt.dll  x86
	  4/24/00  12:11PM  4.2.743.1   38,256  Ssinc.dll     x86
	  4/24/00  12:10PM  4.2.743.1  185,760  Infocomm.dll  x86
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	With this fix installed, the number of dots in the URL are counted. If this
	number exceeds the default value of 100, an error message occurs. This can also
	be configured through the registry. To do this, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\w3svc\Parameters\
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: MAXDEPTHDOTS
	  Data Type: REG_DWORD
	  Value: 100
	
	4. Quit Registry Editor.
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-030.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/default.asp
	
	For additional information about how to install Windows 2000 and Windows 2000
	fixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: security_patch
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
