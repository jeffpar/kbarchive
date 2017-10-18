---
layout: page
title: "Q252693: Chunked Encoding Request with No Data Causes IIS Memory Leak"
permalink: kb/252/Q252693/
---

## Q252693: Chunked Encoding Request with No Data Causes IIS Memory Leak

	Article: Q252693
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A repetitive attack using a specially malformed request may cause Internet
	Information Server (IIS) to use a large amount of memory, and eventually cause
	the service to fail. This problem can occur when the client uses the
	Transfer-Encoding: chunked header in its request.
	
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	
	  US English:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19761)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19762)
	
	  Chinese (Simplified):
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19879)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19879)
	
	  Chinese (Traditional):
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19880)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19880)
	
	  Dutch:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27728)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27728)
	
	  French:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27730)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27730)
	
	  German:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19881)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19881)
	
	  Japanese:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19882)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19882)
	
	  Korean:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19883)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19883)
	
	  Portuguese (Brazil):
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27729)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27729)
	
	  Spanish:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27731)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27731)
	
	  Swedish:
	
	  x86: DownloadDownload Chkenc4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27732)
	
	  Alpha: DownloadDownload Chkenc4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=27732)
	
	  NOTE: Debug symbol files are required by an administrator to do both kernel
	  and user mode debugging, providing a method to resolve global variables and
	  function names in the loaded executable file. Click the file names below to
	  download the symbol files:
	
	  US English:
	
	  x86: DownloadDownload Chkenc4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19761)
	
	  Alpha: DownloadDownload Chkenc4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19762)
	
	  Chinese (Simplified):
	
	  x86: DownloadDownload Chkenc4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19879)
	
	  Alpha: DownloadDownload Chkenc4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19879)
	
	  Chinese (Traditional):
	
	  x86: DownloadDownload Chkenc4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19880)
	
	  Alpha: DownloadDownload Chkenc4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19880)
	
	  German:
	
	  x86: DownloadDownload Chkenc4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19881)
	
	  Alpha: DownloadDownload Chkenc4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19881)
	
	  Japanese:
	
	  x86: DownloadDownload Chkenc4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19882)
	
	  Alpha: DownloadDownload Chkenc4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19882)
	
	  Korean:
	
	  x86: DownloadDownload Chkenc4is.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19883)
	
	  Alpha: DownloadDownload Chkenc4as.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=19883)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time        Version      Size       File name     Platform
	  ----------------------------------------------------------------------
	  1/28/2000   02:32:16p   4.2.739.1    185,760b   Infocomm.dll  x86
	  1/28/2000   02:33:10p   4.2.739.1    38,256b    Ssinc.dll     x86
	  1/28/2000   02:33:18p   4.2.739.1    25,360b    Sspifilt.dll  x86
	  1/28/2000   02:32:58p   4.2.739.1    228,480b   W3svc.dll     x86
	
	  1/28/2000   05:32:05p   4.2.739.1    304,400b   Infocomm.dll  Alpha
	  1/28/2000   05:53:00p   4.2.739.1    60,176b    Ssinc.dll     Alpha
	  1/28/2000   05:53:07p   4.2.739.1    39,696b    Sspifilt.dll  Alpha
	  1/28/2000   05:32:49p   4.2.739.1    383,760b   W3svc.dll     Alpha
	
	
	
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
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	Additional query words: security_patch tsesrp
	
	======================================================================
	Keywords          : kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
