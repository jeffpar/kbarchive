---
layout: page
title: "Q267560: Changing the URL May Expose Contents of a File"
permalink: kb/267/Q267560/
---

## Q267560: Changing the URL May Expose Contents of a File

	Article: Q267560
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Fragments of a .asp, Global.asa, or other files may be retrieved from a Web
	server when the URL is changed in a specific manner.
	
	CAUSE
	=====
	
	This issue is a variant of the vulnerability that was originally discussed in
	the following security bulletin and Microsoft Knowledge Base article:
	
	  Microsoft Security Bulletin (MS00-031)
	  (http://www.microsoft.com/technet/security/bulletin/ms00-031.asp)
	
	  Q260069 Malformed HTR Request Returns Source Code for ASP Scripting Files
	
	This new issue is simply an additional way to exploit the same vulnerability.
	
	Because of this vulnerability, a malicious user may be able to request files from
	the server, which are then processed as though they were .htr files. This can
	result in parts of the .asp or other file's source code being sent to the
	malicious user.
	
	NOTE: In theory, this vulnerability can expose sensitive data contained in the
	.asp files. However, in practice, it's unlikely that this would occur. The HTR
	processing tends to remove the very content that would be of interest to the
	malicious user.
	
	
	Disable HTR Functionality:
	
	If you do not have business-critical .htr scripts, perform the following steps to
	disable the .htr functionality:
	
	1. Open the Internet Services Manager.
	
	2. Right-click the Web server, click Properties, click Master Properties, and
	  then click WWW Service.
	
	3. Click Edit, click Home Directory, and then click Configuration.
	
	4. Remove the .htr entry.
	
	Apply the Patch:
	
	For customers with business-critical HTR scripts who need to retain .htr
	functionality and therefore can't disable .htr functionality, the following
	patch is available that corrects these issues.
	
	For Windows 2000
	----------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q267559_w2k_sp2_x86_en.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22708)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version         Size    File name
	  -----------------------------------------------------
	  07/07/2000  03:17p  5.00.2195.2100  46,352  Ism.dll
	
	
	For Windows NT 4.0
	------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	x86:
	
	  DownloadDownload Htrdos4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	x86 symbols:
	
	  DownloadDownload Htrdos4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	Alpha:
	
	  DownloadDownload Htrdos4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	Alpha symbols:
	
	  DownloadDownload Htrdos4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=22709)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version    Size    File name  Platform
	  ----------------------------------------------------------
	  06/28/2000  09:34p  4.2.748.1  54,544  Ism.dll    x86
	  06/28/2000  09:30p  4.02.0748  84,752  Ism.dll    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0 and Internet Information Server 4.0. This problem was first corrected in
	Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	What does the patch do?:
	
	This patch eliminates the vulnerability by causing the malformed URL to be
	rejected.
	
	For additional information about what this patch fixes, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q267599 GET on HTR File Can Cause a "Denial of Service" or Enable Directory
	  Browsing
	
	  Q260838 IIS Stops Servicing HTR Requests
	
	  Q260069 Malformed HTR Request Returns Source Code for ASP Scripting Files
	
	What does this vulnerability allow a malicious user to do? :
	
	Microsoft Security Bulletin MS00-031 provides the best description of the
	vulnerability and the risk it poses. However, in a nutshell, the vulnerability
	can allow a malicious user to request files from the server, which would then be
	processed as though they were .htr files. The result of this can be that parts
	of the ASP source code are sent to the malicious user.
	
	Which parts of the .asp source code are likely to be sent?:
	
	The ISAPI filter attempts to interpret the requested file as a .htr file, which
	has the effect of removing virtually everything but the text from a selected
	file. That is, it strips out the very information that is most likely to contain
	sensitive information in .asp and other server-side files. For example, if this
	vulnerability is used to try to read a file with the following contents:
	
	  <b>Some HTML text</b> 
	  <% 
	  /*Some <file://Some/> ASP/HTR code*/ 
	  var objConn = new ActiveXObject("Foo.bar"); 
	  %> 
	  <I>other html code</I> 
	  other code.
	
	The information that is returned to the malicious user is:
	
	  <b>Some HTML text</b> 
	  <I>other html code</I> 
	  other code.
	
	Related Security Bulletin:
	
	For more information, please see the Microsoft Security Bulletin at
	http://www.microsoft.com/technet/security/bulletin/ms00-044.asp
	
	What is HTR?:
	
	HTR is a first-generation advanced scripting technology that is included in IIS
	3.0, and still supported by later versions of IIS for backwards compatibility.
	However, HTR was never widely adopted, and was superceded by Active Server Pages
	(ASP) technology introduced in IIS 4.0.
	
	
	Additional query words: nt winnt Windows 2000 win2k DoS attack vulnerability security hack hacker folder argument risk akz
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
